import { useRef, useState, useEffect } from "react";
import { Button } from "antd";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";

import InvestWrapper from "./InvestWrapper";
import "./InvestStep3.scss";
import { useTrackedState, useDispatch, useWallet } from "../../contexts/store";
import { ERROR_OPTION, REQUEST_ENDPOINT, SUCCESS_OPTION } from "../../config/constants";
import { LookForTokenInfo } from "../../config/utilitiy";
import { useTranslation } from "react-i18next";

const InvestStep3 = ({ onNext, onPrev }) => {
  const { t } = useTranslation();
  const state = useTrackedState();
  const dispatch = useDispatch();
  const wallet = useWallet();
  const canvasRef = useRef({});
  const [_, setSignature] = useState("");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function getSnapshot() {
      setWidth(window.innerWidth > 576 ? 576 : window.innerWidth * 0.7);
    }
    getSnapshot();
    window.addEventListener('resize', getSnapshot);
    return () => window.removeEventListener('resize', getSnapshot);
  }, [])

  const handleName = (e) => {
    dispatch({ type: "setInvestName", payload: e.target.value });
  }
  const handleTitle = (e) => {
    dispatch({ type: "setInvestTitle", payload: e.target.value });
  }
  const handleEmail = (e) => {
    dispatch({ type: "setInvestEmail", payload: e.target.value });
  }

  function openUpload() {
    if (typeof document !== "undefined") {
      const fileSelector = document.getElementById("fileSelector");
      fileSelector?.click();
    }
  }

  function onChangeSignature(e) {
    if (typeof document !== "undefined") {
      const fileName = e.target.value;
      setSignature(
        fileName.substr(fileName.lastIndexOf("\\") + 1, fileName.length - 1)
      );

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        canvasRef.current.fromDataURL(reader.result);
      };
    }
  }
  const handleClear = () => {
    if (canvasRef.current) canvasRef.current.clear();
  }

  function checkValication() {
    const investChain = state.investChain;
    const investAmount = state.investAmount;

    if (state.walletType === undefined || wallet == null) {
      toast("Please connect to wallet", SUCCESS_OPTION);
      return false;
    }

    let proper = false;
    if (investChain.toLowerCase() === "juno" && state.walletType == "keplr") {
      proper = true;
    }

    if (
      (investChain.toLowerCase() === "bsc" ||
        investChain.toLowerCase() === "polygon" ||
        investChain.toLowerCase() === "oneledger" ||
        investChain.toLowerCase() === "fantom" ||
        investChain.toLowerCase() === "avalanche") &&
      (state.walletType === "metamask" || state.walletType === "trust")
    ) {
      proper = true;
    }
    if (investChain.toLowerCase() === "tron" && state.walletType === "tron") {
      proper = true;
    }

    if (!proper) {
      toast("Please use the proper wallet", ERROR_OPTION);
      return false;
    }

    if (parseFloat(investAmount) <= 0) {
      toast("Please input amount", ERROR_OPTION);
      return false;
    }

    return true;
  }

  async function createSAFTPdf() {
    const currentDate = new Date();
    const investDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);
    dispatch({ type: "setInvestDate", payload: investDate });

    const formData = new FormData();
    formData.append("investName", state.investName);
    formData.append("investTitle", state.investTitle);
    formData.append("investEmail", state.investEmail);
    formData.append("investAmount", state.investAmount);
    formData.append("investDate", investDate);
    formData.append("investSignature", canvasRef.current.toDataURL());
    formData.append("presale", "presale");

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    toast("Uploading", SUCCESS_OPTION);

    const res = await fetch(REQUEST_ENDPOINT + "/pdfmake", requestOptions)
    const data = await res.json();
    dispatch({ type: "setSaftDocument", payload: data.data })
  }

  const handleNext = async () => {
    try {
      if (checkValication() === false)
        return;

      await createSAFTPdf();
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });

      const tokenInfo = LookForTokenInfo(state.investChain, state.investToken);
      await wallet.buyTokens(
        state.investAmount,
        tokenInfo
      );

      toast.dismiss();
      toast("Success", SUCCESS_OPTION);

      onNext();
    } catch (e) {
      toast.dismiss();
      console.log(e)
      toast(e.message ?? "Error", ERROR_OPTION);
    }
  }

  return (
    <InvestWrapper>
      <div className="invest-step3-body0">
        <div className="input-parts">
          <div className="input-contents">
            <div className="input-name">
              <span>{t("become:name")}<span style={{ color: "red" }}>*</span></span>
              <input onChange={handleName} placeholder="Max Muster" />
            </div>
            <div className="input-title">
              <span>{t("buy:title")} <span style={{ color: "red" }}>*</span></span>
              <input onChange={handleTitle} placeholder="Investment Title" />
            </div>
            <div className="input-email">
              <span>Email <span style={{ color: "red" }}>*</span></span>
              <input onChange={handleEmail} placeholder="example@gmail.com" />
            </div>
          </div>
          <div className="splitter" />
          <div className="input-signature">
            <span>{t("buy:signature")}</span>
            <div className="signature-wrapper">
              <SignatureCanvas
                ref={canvasRef}
                penColor="black"
                canvasProps={{ width: width, height: 150 }}
              />
            </div>
            <input
              type="file"
              id="fileSelector"
              name="userFile"
              style={{ display: "none" }}
              onChange={(e) => onChangeSignature(e)}
            />
            <div className="button-wrapper">
              <Button type="primary" onClick={handleClear}>{t("buy:clear")}</Button>
              <Button type="primary" onClick={openUpload}>{t("buy:open")}</Button>
            </div>
          </div>
        </div>
        <div className="steps-action">
          <div>
            <Button type="primary" onClick={() => handleNext()}>
              {t("buy:invest")}
            </Button>
          </div>
        </div>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep3;
