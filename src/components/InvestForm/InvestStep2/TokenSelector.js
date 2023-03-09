import { useState, useMemo, useEffect } from "react"
import { Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"

import "./TokenSelector.scss"
import { useDispatch, useTrackedState } from "../../../contexts/store"
import { TOKEN_LIST } from "../../../config/constants"

const TokenSelector = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();

  const [key, setKey] = useState(0);
  const balance = 0;
  const token = "TRCY";

  const token_list = useMemo(() => TOKEN_LIST.filter(token => token.chain.toLowerCase() === state.investChain.toLowerCase()), [state.investChain]);

  const items = useMemo(() => token_list.map((token, index) => {
    return {
      key: index,
      label: <div onClick={() => handleSelect(index)}>{token.name}</div>
    }
  }), [token_list]);

  useEffect(() => handleSelect(0), [token_list]);

  const handleSelect = (key) => {
    setKey(key)
    dispatch({ type: "setInvestToken", payload: token_list[key].name });
  }

  const value = useMemo(() => parseFloat(state.investAmount) / 0.06, [state.investAmount]);

  return (
    <div className="select-token">
      <span>Select Token</span>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        className="drop-down"
      >
        <div>
          {items[key]?.label}
          <DownOutlined />
        </div>
      </Dropdown>
      <div className="input-card">
        <span>TRCY tokens you will receive</span>
        <div className="input-box">
          <input value={value} readOnly placeholder={0} />
          <span className="suffix">
            {token}
          </span>
        </div>
        <span className="balance">balance : {balance}</span>
      </div>
    </div>
  )
}

export default TokenSelector;
