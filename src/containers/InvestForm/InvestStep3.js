import { useRef, useState } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom"
import SignatureCanvas from "react-signature-canvas";
import BigNumber from "bignumber.js";
import { toast } from "react-toastify";

import InvestWrapper from "./InvestWrapper";
import "./InvestStep3.scss";
import { useTrackedState, useDispatch, useWallet } from "../../contexts/store";
import { ERROR_OPTION, REQUEST_ENDPOINT, SUCCESS_OPTION, TOKEN_LIST } from "../../config/constants";

const InvestStep3 = () => {
  const history = useHistory();
  const state = useTrackedState();
  const dispatch = useDispatch();
  const wallet = useWallet();
console.log(wallet)
  const canvasRef = useRef({});
  const [_, setSignature] = useState("");

  const handleName = (e) => {
    dispatch({ type: "investName", payload: e.target.value });
  }
  const handleTitle = (e) => {
    dispatch({ type: "investTitle", payload: e.target.value });
  }
  const handleEmail = (e) => {
    dispatch({ type: "investEmail", payload: e.target.value });
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

  async function createSAFTPdf() {
    const currentDate = new Date();
    const date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);

    const formData = new FormData();
    formData.append("investName", state.investName);
    formData.append("investTitle", state.investTitle);
    formData.append("investEmail", state.investEmail);
    formData.append("investAmount", state.investAmount);
    formData.append("investDate", date);
    formData.append("investSignature", canvasRef.current.toDataURL());
    formData.append("presale", "presale");

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    toast("Uploading", SUCCESS_OPTION);

    await fetch(REQUEST_ENDPOINT + "/pdfmake", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss();

        window.localStorage.setItem("pdf_file", data.data);
        console.log(data);
      })
      .catch((e) => {
        console.log("Error:" + e);
      });
  }

  const handleNext = async() => {
    await createSAFTPdf();

    const tokenInfo = LookForTokenInfo(state.investChain, state.investToken);
    let amount = new BigNumber(parseFloat(state.investAmount));
    amount = amount
      .multipliedBy(
        new BigNumber(10).pow(tokenInfo?.decimals ? tokenInfo?.decimals : 0)
      )
      .decimalPlaces(0, 1);

    try {
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });

      await wallet.sendTokens(
        amount.toFixed(),
        tokenInfo?.denom,
        tokenInfo?.address,
        tokenInfo?.native
      );

      toast.dismiss();
      toast("Success", SUCCESS_OPTION);

      history.push("/invest-step4");
    } catch (e) {
      toast.dismiss();
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  }

  return (
    <InvestWrapper title="Step1" subTitle="Step1">
      <div className="invest-step">
        <div className="passed-step" />
        <div className="passed-gap" />
        <div className="passed-step" />
        <div className="passed-gap" />
        <div className="current-step" />
        <div className="upcoming-gap" />
        <div className="upcoming-step" />

        <div className="passed-label">Step1</div>
        <div />
        <div className="passed-label">Step2</div>
        <div />
        <div className="current-label">Step3</div>
        <div />
        <div className="upcoming-label">Confirm</div>
      </div>
      <div className="invest-step3-body">
        <div className="input-name">
          <span>Name</span>
          <input onChange={handleName} placeholder="input name" />
        </div>
        <div className="input-title">
          <span>Title</span>
          <input onChange={handleTitle} placeholder="input title" />
        </div>
        <div className="input-email">
          <span>Email</span>
          <input onChange={handleEmail} placeholder="input email" />
        </div>
        <div className="input-signature">
          <span>Signature</span>
          <div className="signature-wrapper">
            <SignatureCanvas
              ref={canvasRef}
              penColor="black"
              canvasProps={{ width: "600px", height: "300px" }}
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
            <Button onClick={handleClear}>Clear</Button>
            <Button onClick={openUpload}>Open Signature</Button>
          </div>
        </div>
        <Button className="next-button" onClick={handleNext}>Next</Button>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep3;


export function LookForTokenInfo(chain, token) {
  const list = TOKEN_LIST.filter(
    (one) =>
      one.chain.toLowerCase() === chain.toLowerCase() &&
      one.name.toLowerCase() === token.toLowerCase()
  );
  if (list.length === 0) return null;
  return list[0];
}

