import { Button } from "antd";
import { Link } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep4.scss";
import { useTrackedState, useDispatch } from "../../contexts/store";
import { toast } from "react-toastify";
import { ERROR_OPTION, REQUEST_ENDPOINT, SUCCESS_OPTION, TOKEN_LIST } from "../../config/constants";

const InvestStep4 = ({onNext, onPrev}) => {
  const state = useTrackedState();
  const dispatch = useDispatch();


  return (
    <InvestWrapper>
      <div className="invest-step4-body0">
        <div className="congrat-wrapper">
          <img src="/invest-form/congrat.png" alt="congrat" />
          <span>Congratulations!!</span>
          <img src="/invest-form/congrat1.png" alt="congrat" />
        </div>
        <span>You have invested in TRACCY</span>
        <span>For more update, please get in touch with us</span>
        <span>Transaction History</span>
        <div className="grid-wrapper">
          <div className="grid-header">DATE</div>
          <div className="grid-header">YOU INVESTED</div>
          <div className="grid-header">TRCY YOU WILL GET</div>
          <div className="grid-header">SAFT READY</div>
          <div className="grid-data">{state.investDate}</div>
          <div className="grid-data">{state.investAmount}</div>
          <div className="grid-data">{state.investTrcyAmount}</div>
          <div className="grid-data download">Download</div>
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

export default InvestStep4;
