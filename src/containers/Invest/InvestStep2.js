import { Button } from "antd";
import { Link } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep2.scss";
import ChainSelector from "../../components/InvestForm/InvestStep2/ChainSelector"
import TokenSelector from "../../components/InvestForm/InvestStep2/AmountInput";

const InvestStep2 = ({onPrev, onNext}) => {
  return (
    <InvestWrapper>
      <div className="invest-step2-body0">
        <span>Input your Investment Amount</span>
        <span>Please select the chain and tokens, enter amount and we will convert<br /> the TRCY amount for you</span>
        <div className="selector-container">
          <ChainSelector />
          <TokenSelector />
        </div>
        <div className="steps-action">
          <Link to='/'>FAQ</Link>
          <div>
            <Button onClick={() => onPrev()}>
              Back
            </Button>
            <Button type="primary" onClick={() => onNext()}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep2;
