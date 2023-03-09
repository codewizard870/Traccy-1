import { useState } from "react"
import { Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"

import "./ChainSelector.scss"
import { CHAINS } from "../../../config/constants"
import { useDispatch, useTrackedState } from "../../../contexts/store"

const ChainSelector = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();

  const [key, setKey] = useState(0);
  const balance = 0;

  const items = CHAINS.map((chain, index) => {
    return {
      key: index,
      label: <div onClick={() => handleSelect(index)}>{chain}</div>
    }
  })

  const handleSelect = (key) => {
    setKey(key)
    dispatch({type: "setInvestChain", payload: CHAINS[key]});
  }

  const changeValue = (e) => {
    dispatch({type: "setInvestAmount", payload: e.target.value})
  }
  return (
    <div className="select-chain">
      <span>Select Chain</span>
      <Dropdown
        menu={{
          items: items,
        }}
        trigger={['click']}
        className="drop-down"
      >
        <div>
          {items[key].label}
          <DownOutlined />
        </div>
      </Dropdown>
      <div className="input-card">
        <span>Token amount you want to invest</span>
        <div className="input-box">
          <input onChange={changeValue} placeholder={0}/>
          <span className="suffix">
            {state.investToken}
          </span>
        </div>
        <span className="balance">balance : {balance}</span>
      </div>
    </div>
  )
}

export default ChainSelector;