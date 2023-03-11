import React, { useEffect } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Decimal } from "@cosmjs/math";
import { getJunoConfig, keplrConfig } from "../config";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import BigNumber from "bignumber.js";
import { NETWORK } from "../config/constants";
import { WEFUND_JUNO_ADDRESS } from "../config/constants";

const defaultStates = {
  connected: false,
  ready: false,
  accountNumber: 0,
  account: "",
  balance: [],
  client: undefined,
  config: getJunoConfig(NETWORK),
  initialized: false,
  initializing: true,
  name: "",
  network: NETWORK,
  signer: undefined,
};

export const useKeplrWalletStore = create(
  subscribeWithSelector((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async (walletChange = false) => {
      try {
        if (walletChange !== "focus") set({ initializing: true });
        const { config, init } = get();
        const signer = await loadKeplrWallet(config);
        set({ connected: true });
        init(signer);
        if (walletChange) set({ initializing: false });
      } catch (err) {
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: () => {
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getClient: () => get().client,
    getSigner: () => get().signer,
    init: (signer) => set({ signer }),
    refreshBalance: async (
      address = get().account,
      balance = get().balance
    ) => {
      const { client, config } = get();
      if (!client) return;
      balance.length = 0;
      for (const denom in config.coinMap) {
        // eslint-disable-next-line no-await-in-loop
        const coin = await client.getBalance(address, denom);
        if (coin) balance.push(coin);
      }

      set({ balance });
    },
    setNetwork: (network) => set({ network }),
    updateSigner: (signer) => set({ signer }),
    getBalance: () => {
      return new BigNumber(get().balance[0].amount);
    },
    getBalanceString: () => {
      if (get().balance.length > 0) {
        const balance = get()
          .getBalance()
          .dividedBy(10 ** 6);
        return balance.toFixed() + " JUNO";
      }
      return "0 JUNO";
    },
    sendTokens: async (
      _amount,
      tokenInfo
    ) => {
      const client = get().client;
      const account = get().account;
      if (!client) return;

      let amount = new BigNumber(parseFloat(_amount));
      amount = amount
        .multipliedBy(
          new BigNumber(10).pow(tokenInfo?.decimals ? tokenInfo?.decimals : 0)
        )
        .decimalPlaces(0, 1);

      await client.sendTokens(
        account,
        WEFUND_JUNO_ADDRESS,
        [{ amount: amount.toFixed(), denom: tokenInfo.denom }],
        "auto"
      );
    },
    getTokenBalance: async (tokenInfo) => {
      const { client, account } = get();
      if (!client) return;
      const coin = await client.getBalance(account, tokenInfo.denom);
      let amount = new BigNumber(coin.amount);
      amount = amount
        .dividedBy(
          new BigNumber(10).pow(tokenInfo?.decimals ? tokenInfo?.decimals : 0)
        )
        .decimalPlaces(0, 1);
      return amount.toFixed();
    }
  }))
);

export const useKeplrWallet =
  createTrackedSelector(useKeplrWalletStore);

export const KeplrWalletProvider = ({ children }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useKeplrWalletStore.subscribe(
      (x) => x.signer,
      async (signer) => {
        if (!signer) return;
        try {
          useKeplrWalletStore.setState({
            client: await createClient({ signer }),
          });
        } catch (error) {
          console.log(error);
        }
      }
    );
  }, []);

  useEffect(() => {
    return useKeplrWalletStore.subscribe(
      (x) => x.client,
      async (client) => {
        const { config, refreshBalance, signer } =
          useKeplrWalletStore.getState();
        if (!signer || !client) return;
        if (!window.keplr) {
          throw new Error("window.keplr not found");
        }
        const balance = [];
        const address = (await signer.getAccounts())[0].address;
        const account = await client.getAccount(address);
        const key = await window.keplr.getKey(config.chainId);
        await refreshBalance(address, balance);
        window.localStorage.setItem("wallet_address", address);

        useKeplrWalletStore.setState({
          accountNumber: account?.accountNumber || 0,
          account: address,
          balance,
          initialized: true,
          initializing: false,
          name: key.name || "",
        });
      }
    );
  }, []);

  return null;
};

const createClient = ({ signer }) => {
  const { config } = useKeplrWalletStore.getState();
  return SigningCosmWasmClient.connectWithSigner(config.rpcUrl, signer, {
    gasPrice: {
      amount: Decimal.fromUserInput("0.0025", 100),
      denom: config.feeToken,
    },
  });
};

const loadKeplrWallet = async (config) => {
  if (
    !window.getOfflineSigner ||
    !window.keplr ||
    !window.getOfflineSignerAuto
  ) {
    throw new Error("Keplr extension is not available");
  }

  await window.keplr.experimentalSuggestChain(keplrConfig(config));
  await window.keplr.enable(config.chainId);

  const signer = await window.getOfflineSignerAuto(config.chainId);
  Object.assign(signer, {
    signAmino: signer.signAmino ?? signer.sign,
  });

  return signer;
};
