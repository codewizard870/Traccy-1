import { useRef, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom"
import SignatureCanvas from "react-signature-canvas";
import BigNumber from "bignumber.js";
import { toast } from "react-toastify";

import InvestWrapper from "./InvestWrapper";
import "./InvestStep3.scss";
import { useTrackedState, useDispatch, useWallet } from "../../contexts/store";
import { ERROR_OPTION, REQUEST_ENDPOINT, SUCCESS_OPTION, TOKEN_LIST } from "../../config/constants";

const InvestStep3 = ({ onNext, onPrev }) => {
  const state = useTrackedState();
  const dispatch = useDispatch();
  const wallet = useWallet();
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

    const formData = new FormData();
    formData.append("investName", state.investName);
    formData.append("investTitle", state.investTitle);
    formData.append("investEmail", state.investEmail);
    formData.append("investAmount", state.investAmount);
    formData.append("investDate", state.investDate);
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

  const handleNext = async () => {
    onNext();
    return;
    const currentDate = new Date();
    const date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);
    dispatch({type: "investDate", payload: date});
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

      onNext();
    } catch (e) {
      toast.dismiss();
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  }

  return (
    <InvestWrapper>
      <div className="invest-step3-body0">
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
            <Button type="primary" onClick={openUpload}>Open Signature</Button>
          </div>
        </div>
        <div className="steps-action">
          <Link to='/'>FAQ</Link>
          <div>
            <Button onClick={() => onPrev()}>
              Back
            </Button>
            <Button type="primary" onClick={() => handleNext()}>
              Continue
            </Button>
          </div>
        </div>
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

