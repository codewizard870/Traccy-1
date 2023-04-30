import { Button } from "antd";
import { Link } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep2.scss";
import ChainSelector from "../../components/InvestForm/InvestStep2/ChainSelector"
import AmountInput from "../../components/InvestForm/InvestStep2/AmountInput";
import { useTrackedState } from "../../contexts/store";
import { toast } from "react-toastify";
import { ERROR_OPTION } from "../../config/constants";

const InvestStep2 = ({onPrev, onNext}) => {
  const state = useTrackedState();

  const handleNext = () => {
    if (parseFloat(state.investAmount) > parseFloat(state.balance)) {
      toast("Insufficient balance", ERROR_OPTION);
      return false;
    }
    onNext();
  }

  return (
    <InvestWrapper>
      <div className="invest-step2-body0">
        <span>Enter your Investment Amount</span>
        <span>Please select the chain and tokens, enter the amount and we will convert the TRCY amount for you</span>
        <div className="selector-container">
          <ChainSelector />
          <AmountInput />
        </div>
        <div className="steps-action">
          <div>
            <Button type="primary" onClick={() => handleNext()}>
              Invest
            </Button>
          </div>
        </div>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep2;
