import { useRef, useState } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep4.scss";
import { useTrackedState, useDispatch } from "../../contexts/store";
import { toast } from "react-toastify";
import { ERROR_OPTION, REQUEST_ENDPOINT, SUCCESS_OPTION, TOKEN_LIST } from "../../config/constants";

const InvestStep4 = () => {
  const history = useHistory();
  const state = useTrackedState();
  const dispatch = useDispatch();

  const handleNext = async () => {
  }

  return (
    <InvestWrapper>
      <div className="invest-step">
        <div className="passed-step" />
        <div className="passed-gap" />
        <div className="passed-step" />
        <div className="passed-gap" />
        <div className="passed-step" />
        <div className="passed-gap" />
        <div className="passed-step" />

        <div className="passed-label">Step1</div>
        <div />
        <div className="passed-label">Step2</div>
        <div />
        <div className="passed-label">Step3</div>
        <div />
        <div className="passed-label">Confirm</div>
      </div>
      <div className="invest-step4-body">
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
          <div className="grid-data">DATE</div>
          <div className="grid-data">YOU INVESTED</div>
          <div className="grid-data">TRCY YOU WILL GET</div>
          <div className="grid-data">SAFT READY</div>
        </div>
        <Button className="next-button" onClick={handleNext}>Next</Button>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep4;
