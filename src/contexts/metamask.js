import React, { useEffect } from "react";

import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { BigNumber as EtherBigNumber, ethers } from "ethers";

import {
  WEFUND_BSC_ADDRESS,
  ERC20_ABI,
  ERROR_OPTION,
} from "../config/constants";
import { formatUnits } from "ethers/lib/utils";
import BigNumber from "bignumber.js";

const defaultStates = {
  connected: false,
  account: "",
  balance: EtherBigNumber.from("0"),
  initialized: false,
  initializing: true,
  signer: undefined,
  chainId: 0,
};

export const useMetamaskStore = create(
  subscribeWithSelector((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];

        const res = await provider.getNetwork();
        set({
          connected: true,
          account: account,
          signer: signer,
          chainId: res.chainId,
        });
        // const { chainId } = await provider.getNetwork();
      } catch (err) {
        // toast.error(err?.message);
        toast.error("Metamask not available", ERROR_OPTION);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
      });
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance,
    getBalanceString: () => {
      const balance = get()
        .balance.div(10 ** 9)
        .div(10 ** 9);

      const chainId = get().chainId;
      let chain = "";
      switch (chainId) {
        case 0x38:
          chain = "BNB";
          break;
        case 0x89:
          chain = "Matic";
          break;
        case 0x1294f7c2:
          chain = "ONE";
          break;
        case 0xfa:
          chain = "FTM";
          break;
        default:
          chain = "Undefined";
      }
      return balance.toString() + " " + chain;
    },
    sendTokens: async (_amount, tokenInfo) => {
      const signer = get().signer;
      if (!signer) return false;

      let amount = new BigNumber(parseFloat(_amount));
      amount = amount
        .multipliedBy(
          new BigNumber(10).pow(tokenInfo?.decimals ? tokenInfo?.decimals : 0)
        )
        .decimalPlaces(0, 1);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const sender = get().account;
      const nonce = provider.getTransactionCount(sender, "latest");

      if (tokenInfo.native) {
        const tx = {
          from: sender,
          to: WEFUND_BSC_ADDRESS,
          value: amount,
          nonce: nonce,
          // gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          // gasPrice: gas_price,
        };

        await signer.sendTransaction(tx);
      } else {
        const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, signer);
        const gasPrice = await provider.getGasPrice();
        const res = await contract.transfer(WEFUND_BSC_ADDRESS, amount, {
          gasPrice,
        });
        await res.wait();
      }
    },
    getTokenBalance: async (tokenInfo) => {
      const account = get().account;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, provider);
      const balance = await contract.balanceOf(account);

      console.log(formatUnits(balance, tokenInfo.decimals))
      return(formatUnits(balance, tokenInfo.decimals));
    }
  }))
);
export const useMetamaskWallet =
  createTrackedSelector(useMetamaskStore);

export const MetamaskProvider = ({ children }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useMetamaskStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(
          useMetamaskStore.getState().account
        );
        useMetamaskStore.setState({ balance: balance });
        useMetamaskStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};
