import { useEffect } from "react";
import { Button } from "antd";
import { Link, Router, useHistory } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep4.scss";
import { useTrackedState } from "../../contexts/store";
import { toast } from "react-toastify";
import { REQUEST_ENDPOINT, SUCCESS_OPTION } from "../../config/constants";

const InvestStep4 = ({ onNext, onPrev }) => {
  const history = useHistory();
  const state = useTrackedState();

  const download_pdf = () => {
    toast("Downloading", SUCCESS_OPTION);

    const xhr = new XMLHttpRequest();
    const a = document.createElement("a");

    xhr.open(
      "GET",
      REQUEST_ENDPOINT + "/download_pdf?filename=" + state.saftDocument,
      true
    );

    xhr.responseType = "blob";
    xhr.onload = function () {
      const file = new Blob([xhr.response], {
        type: "application/octet-stream",
      });
      window.URL = window.URL || window.webkitURL;
      a.href = window.URL.createObjectURL(file);
      a.download = "confirm.pdf";
      a.click();
    };
    xhr.send();

    toast.dismiss();
  };

  useEffect(() => {
    download_pdf();
  }, []);
  const handleNext = () => {
    history.push("/home");
  }
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
          <div className="grid-data download" onClick={download_pdf}>Download</div>
        </div>
        <span className="span-auto">Your download has been procced automatically.</span>
        <span className="span-download">Do you want to download again? Click on <span className="download">Download</span></span>
        <div className="steps-action">
          <Link to='/'>FAQ</Link>
          <div>
            <Button type="primary" onClick={() => handleNext()}>
              Back Home
            </Button>
          </div>
        </div>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep4;
