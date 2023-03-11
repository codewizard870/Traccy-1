import { useState, useEffect } from "react";
import "./AmountInput.scss"
import { useDispatch, useTrackedState, useWallet } from "../../../contexts/store"
import { LookForTokenInfo } from "../../../config/utilitiy";

const TokenSelector = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();
  const wallet = useWallet();

  useEffect(() => {
    const getBalance = async() => {
      const tokenInfo = LookForTokenInfo(state.investChain, state.investToken);
      if(wallet && wallet.initialized && tokenInfo){
        const balance = await wallet.getTokenBalance(tokenInfo);
        dispatch({type: "setBalance", payload: balance});
      }
    }
    getBalance();
  }, [dispatch, state.investChain, state.investToken, wallet]);

  const token = "TRCY";
  const price = 0.06;

  const changeValue = (e) => {
    dispatch({ type: "setInvestAmount", payload: e.target.value });
    dispatch({ type: "setInvestTrcyAmount", payload: parseFloat(e.target.value) / price });
  }
  return (
    <div className="input-wrapper">
      <div className="input-card">
        <span>Token amount you want to invest</span>
        <div className="input-box">
          <input value={state.investAmount} onChange={changeValue} placeholder={0} />
          <span className="suffix">
            {state.investToken}
          </span>
        </div>
        <span className="balance">balance : {state.balance}</span>
      </div>
      <div className="input-card">
        <span>TRCY tokens you will receive</span>
        <div className="input-box">
          <input value={state.investTrcyAmount} readOnly placeholder={0} />
          <span className="suffix">
            {token}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TokenSelector;
