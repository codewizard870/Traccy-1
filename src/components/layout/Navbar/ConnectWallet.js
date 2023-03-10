import React, { useEffect, useState } from "react";
import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { useTrustWallet } from "../../../contexts/trustWallet";
import { useTronLink } from "../../../contexts/tronLink";
import { useTrackedState, useDispatch } from "../../../contexts/store";

import { Button, Modal } from "antd";
import { WalletOutlined, CheckOutlined } from "@ant-design/icons";
import "./ConnectWallet.scss"
import { WALLET_LIST } from "../../../config/constants";

export default function ConnectWallet() {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const trust = useTrustWallet();
  const tronLink = useTronLink();
  const [openModal, setOpen] = useState(false)

  const getWallet = (type) => {
    let wallet;
    if (type === "metamask") wallet = metamask;
    else if (type === "keplr") wallet = keplr;
    else if (type === "trust") wallet = trust;
    else if (type === "tron") wallet = tronLink;
    else wallet = metamask;
    return wallet;
  };

  const onOk = () => {
    setOpen(false);
  }

  const onConnect = () => {
    setOpen(true)
  }

  async function connectTo(to) {
    let wallet = getWallet(to);
    onOk();
    await wallet.connect();
    dispatch({ type: "setWalletType", payload: to });
  }
  const wallet = getWallet(state.walletType);

  useEffect(() => {
    dispatch({ type: "setWallet", payload: wallet });
  }, [dispatch, wallet, wallet.initialized]);

  const connected = wallet ? wallet.connected : false;
  const initialized = wallet ? wallet.initialized : false;
  const address = wallet.account ? wallet.account.slice(0, 5) + "..." + wallet.account.slice(-5) : undefined;

  return (
    <>
      <Button type="ghost" className="connect-wallet" onClick={onConnect}>
        {!connected && <span>Connect Wallet</span>}
        {(connected && !initialized) && <span>Loading</span>}
        {(connected && initialized) && <><WalletOutlined /><CheckOutlined /><span>{address}</span></>}
      </Button>
      <Modal
        open={openModal}
        onOk={onOk}
        onCancel={onOk}
        okButtonProps={{ className: "modal-button" }}
        cancelButtonProps={{ className: "modal-button" }}
        width={400}
      >
        <div className="modal-content">
          {WALLET_LIST.map((wallet, index) => (
            <div className="modal-item" key={index} onClick={() => connectTo(wallet.link)}>
              <img src={wallet.icon} width="50px" rounded="10px" alt="wallet" className="item-image" />
              <span className="item-text">
                {wallet.name}
              </span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
