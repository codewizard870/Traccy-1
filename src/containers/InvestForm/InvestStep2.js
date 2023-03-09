import { Button } from "antd";
import { useHistory } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep2.scss";
import ChainSelector from "../../components/InvestForm/InvestStep2/ChainSelector"
import TokenSelector from "../../components/InvestForm/InvestStep2/TokenSelector";

const InvestStep2 = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push("/invest-step3")
  }

  return (
    <InvestWrapper title="Step1" subTitle="Step1">
      <div className="invest-step">
        <div className="passed-step" />
        <div className="passed-gap" />
        <div className="current-step" />
        <div className="upcoming-gap" />
        <div className="upcoming-step" />
        <div className="upcoming-gap" />
        <div className="upcoming-step" />

        <div className="passed-label">Step1</div>
        <div />
        <div className="current-label">Step2</div>
        <div />
        <div className="upcoming-label">Step3</div>
        <div />
        <div className="upcoming-label">Confirm</div>
      </div>
      <div className="invest-step2-body">
        <span>Input your Investment Amount</span>
        <span>Please select the chain and tokens, enter amount and we will convert<br /> the TRCY amount for you</span>
        <div className="container">
          <ChainSelector />
          <TokenSelector />
        </div>
        <Button className="next-button" onClick={handleNext}>Next</Button>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep2;
