import { useEffect } from "react";
import { Button } from "antd";
import { Link, Router, useHistory } from "react-router-dom"

import InvestWrapper from "./InvestWrapper";
import "./InvestStep4.scss";
import { useTrackedState } from "../../contexts/store";
import { toast } from "react-toastify";
import { REQUEST_ENDPOINT, SUCCESS_OPTION } from "../../config/constants";
import { useTranslation } from "react-i18next";

const InvestStep4 = ({ onNext, onPrev }) => {
  const {t} = useTranslation();
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
          <span>{t("buy:congrat")}</span>
          <img src="/invest-form/congrat1.png" alt="congrat" />
        </div>
        <span>{t("buy:invested")}</span>
        <span>{t("buy:more")}</span>
        <span>{t("buy:history")}</span>
        <div className="grid-wrapper">
          <div className="grid-header">{t("buy:date")}</div>
          <div className="grid-header">{t("buy:youinvest")}</div>
          <div className="grid-header">{t("buy:get")}</div>
          <div className="grid-header">{t("buy:saftready")}</div>
          <div className="grid-data">{state.investDate}</div>
          <div className="grid-data">{state.investAmount}</div>
          <div className="grid-data">{state.investTrcyAmount}</div>
          <div className="grid-data download" onClick={download_pdf}>Download</div>
        </div>
        <span className="span-auto">{t("buy:yourdownload")}</span>
        <span className="span-download">{t("buy:again")} <span className="download">{t("buy:download")}</span></span>
        <div className="steps-action">
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
