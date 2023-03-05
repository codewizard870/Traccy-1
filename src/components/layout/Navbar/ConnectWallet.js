import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { useTrustWallet } from "../../../contexts/trustWallet";
import { useTronLink } from "../../../contexts/tronLink";


import { useStore } from "../../../contexts/store";

export default function ConnectWallet() {
  const { state, dispatch } = useStore();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const trust = useTrustWallet();
  const tronLink = useTronLink();


  const getWallet = (type) => {
    let wallet;
    if (type == "metamask") wallet = metamask;
    else if (type == "keplr") wallet = keplr;
    else if (type == "trust") wallet = trust;
    else if (type == "tron") wallet = tronLink;
    else wallet = metamask;
    return wallet;
  };

  const wallet = getWallet(state.walletType);

  useEffect(() => {
    dispatch({ type: "setWallet", payload: wallet });
  }, [wallet?.initialized]);

  const connected = wallet ? wallet.connected : false;
  const initialized = wallet ? wallet.initialized : false;

  const openModal = () => {
    state.openWalletModal && state.openWalletModal();
  };
  const connect = () => {
    metamask.connect();
  }
  return (
    <div>
      {!connected && <span onClick={connect}>Connect Wallet</span>}
      {connected && <span>connected</span>}
    </div>
  );
}
