import React, { useEffect, useState } from "react";
import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { useTrustWallet } from "../../../contexts/trustWallet";
import { useTronLink } from "../../../contexts/tronLink";
import { useTrackedState, useDispatch } from "../../../contexts/store";

import { Button, Drawer, Modal, Spin } from "antd";
import { WalletOutlined, CheckOutlined } from "@ant-design/icons";
import "./ConnectWallet.scss"
import { WALLET_LIST } from "../../../config/constants";
import { SvgIcon } from '../../../components/common';
// import WalletIcon from "/wallet/wallet.svg";

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

  const onConnect = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  async function connectTo(to) {
    let wallet = getWallet(to);
    onClose();
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
      <div className="connect-wallet-mobile" onClick={onConnect}>
        <img src="/wallet/wallet.svg" alt="wallet" />
        <div className="connect-status">
          {(connected && !initialized) && <Spin spinning={true} color="#be1e73" />}
          {(connected && initialized) && <CheckOutlined color="red"/>}
        </div>
      </div>
      <Button type="ghost" className="connect-wallet" onClick={onConnect}>
        {!connected && <span>Connect Wallet</span>}
        {(connected && !initialized) && <span>Loading</span>}
        {(connected && initialized) && <><WalletOutlined /><CheckOutlined /><span>{address}</span></>}
      </Button>
      {/* <Modal
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
      </Modal> */}
      <Drawer
        title={false}
        placement='right'
        width={"100%"}
        onClose={onClose}
        closeIcon={false}
        open={openModal}
        rootClassName='wallet-sidebar'
      >
        <Button className="menu-close" onClick={onClose}>
          <SvgIcon name="close" viewbox="0 0 10.357 10.357" />
        </Button>
        <div className="wallet-content">
          {/* <span>{address}</span> */}
          {WALLET_LIST.map((wallet, index, all) => (
            <React.Fragment key={index}>
              <div className="wallet-item" onClick={() => connectTo(wallet.link)}>
                <img src={wallet.icon} width="25px" rounded="10px" alt="wallet" className="item-image" />
                <span className="item-text">
                  {wallet.name}
                </span>
              </div>
              {index < all.length - 1 &&
                <div className="wallet-item-splitter" />
              }
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </>
  );
}
