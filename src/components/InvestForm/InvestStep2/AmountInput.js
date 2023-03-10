import { useMemo } from "react"
import "./AmountInput.scss"
import { useDispatch, useTrackedState } from "../../../contexts/store"

const TokenSelector = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();

  const balance = 0;
  const token = "TRCY";
  const price = 0.06;

  const changeValue = (e) => {
    dispatch({ type: "setInvestAmount", payload: e.target.value })
    dispatch({ type: "setInvestTrcyAmount", payload: parseFloat(state.investAmount) / price });
  }
  return (
    <div className="input-wrapper">
      <div className="input-card">
        <span>Token amount you want to invest</span>
        <div className="input-box">
          <input onChange={changeValue} placeholder={0} />
          <span className="suffix">
            {state.investToken}
          </span>
        </div>
        <span className="balance">balance : {balance}</span>
      </div>
      <div className="input-card">
        <span>TRCY tokens you will receive</span>
        <div className="input-box">
          <input value={state.investTrcyAmount} readOnly placeholder={0} />
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
