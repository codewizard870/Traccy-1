import { useState, useMemo, useEffect } from "react"
import { Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"

import "./ChainSelector.scss"
import { CHAINS, TOKEN_LIST, CHAINS_CONFIG, ERROR_OPTION } from "../../../config/constants"
import { useDispatch, useTrackedState, useWallet } from "../../../contexts/store"
import { useKeplrWallet } from "../../../contexts/keplrWallet"
import { useMetamaskWallet } from "../../../contexts/metamask"
import { useTronLink } from "../../../contexts/tronLink"
import { toast } from "react-toastify"

const ChainSelector = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();
  const wallet = useWallet();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const tronLink = useTronLink();

  async function connectTo(to) {
    let wallet;
    switch (to.toLowerCase()) {
      case "metamask": wallet = metamask; break;
      case "keplr": wallet = keplr; break;
      case "tron": wallet = tronLink; break;
      default: wallet = metamask; break;
    }

    await wallet.connect();
    dispatch({ type: "setWalletType", payload: to });
  }

  const [chainKey, setChainKey] = useState(0);
  const chainItems = CHAINS.map((chain, index) => {
    return {
      key: index,
      label: <div onClick={() => handleChainSelect(index)}>{chain}</div>
    }
  })

  const handleChainSelect = async (key) => {
    setChainKey(key)
    dispatch({ type: "setInvestChain", payload: CHAINS[key] });

    const chain = CHAINS[key].toLowerCase();
    switch (chain) {
      case "juno":
        connectTo("keplr");
        break;
      case "bsc":
      case "bsc_testnet":
      case "polygon":
        const ethereum = window.ethereum;
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAINS_CONFIG[chain].chainId }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: CHAINS_CONFIG[chain].chainId,
                    chainName: CHAINS_CONFIG[chain].chainName,
                    rpcUrls: [CHAINS_CONFIG[chain].rpc] /* ... */,
                  },
                ],
              });
            } catch (addError) {
              toast("Can't switch to " + chain.toUpperCase(), ERROR_OPTION);
            }
          }
        }
        connectTo("metamask");
        break;
      case "tron":
        connectTo("tron");
        break;
      default: break;
    }
  }
  useEffect(() => {
    handleChainSelect(chainKey);
  }, []);

  const [tokenKey, setTokenKey] = useState(0);

  const token_list = useMemo(() => TOKEN_LIST.filter(token => token.chain.toLowerCase() === state.investChain.toLowerCase()), [state.investChain]);

  const tokenItems = useMemo(() => token_list.map((token, index) => {
    return {
      key: index,
      label: <div onClick={() => handleTokenSelect(index)}>{token.name}</div>
    }
  }), [token_list]);

  useEffect(() => handleTokenSelect(0), [token_list]);

  const handleTokenSelect = (key) => {
    setTokenKey(key)
    dispatch({ type: "setInvestToken", payload: token_list[key].name });
  }

  useEffect(() => {
    if (!wallet.initialized) return;
    const tokenInfo = LookForTokenInfo(state.investChain, state.investToken);
    const balance = wallet?.getTokenBalance(tokenInfo);
  }, [state.investToken, state.investChain, wallet]);

  return (
    <div className="selector-wrapper">
      <div className="selector">
        <span>Select Chain</span>
        <Dropdown
          menu={{
            items: chainItems,
          }}
          trigger={['click']}
          className="drop-down"
        >
          <div>
            {chainItems[chainKey].label}
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
      <div className="selector">
        <span>Select Token</span>
        <Dropdown
          menu={{
            items: tokenItems,
          }}
          trigger={['click']}
          className="drop-down"
        >
          <div>
            {tokenItems[tokenKey]?.label}
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default ChainSelector;

function LookForTokenInfo(chain, token) {
  const list = TOKEN_LIST.filter(
    (one) =>
      one.chain.toLowerCase() === chain.toLowerCase() &&
      one.name.toLowerCase() === token.toLowerCase()
  );
  if (list.length === 0) return null;
  return list[0];
}

