import React, { FunctionComponent } from "react";

import { WALLET_LIST } from "../../../config/constants";
import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { useTrustWallet } from "../../../contexts/trustWallet";
import { useTronLink } from "../../../contexts/tronLink";
import { useStore } from "../../../contexts/store";

const WalletModal = ({ onClose, isOpen }) => {
  const { dispatch } = useStore();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const trust = useTrustWallet();
  const tronLink = useTronLink();

  async function connectTo(to) {
    let wallet;
    if (to == "metamask") wallet = metamask;
    else if (to == "keplr") wallet = keplr;
    else if (to == "trust") wallet = trust;
    else if (to == "tron") wallet = tronLink;
    onClose();

    await wallet.connect();
    dispatch({ type: "setWalletType", payload: to });
  }

  return (
    // <div>
    //   {WALLET_LIST.map((wallet: any, index: number) => (
    //     <Flex
    //       key={index}
    //       align="center"
    //       height="60px"
    //       cursor="pointer"
    //       p={1}
    //       _hover={{ background: "red.100" }}
    //       rounded={4}
    //       onClick={() => connectTo(wallet.link)}
    //     >
    //       <Image src={wallet.icon} width="50px" rounded="10px" />
    //       <Text ml="10px">{wallet.name}</Text>
    //     </Flex>
    //   ))}
    // </div>
  );
};

export default WalletModal;
