import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "antd";
import { useHistory } from "react-router-dom"
import InvestWrapper from "./InvestWrapper";
import "./InvestStep1.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const InvestStep1 = () => {
  const [agree, setAgree] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const history = useHistory();

  const handleCheck = (e) => {
    setAgree(e.target.checked)
  }
  const handleNext = () => {
    if(agree)
      history.push("/invest-step2")
  }

  const src = "/PDFTemplate_presale.pdf";
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (
    <InvestWrapper title="Step1" subTitle="Step1">
      <div className="invest-step">
        <div className="current-step" />
        <div className="upcoming-gap" />
        <div className="upcoming-step" />
        <div className="upcoming-gap" />
        <div className="upcoming-step" />
        <div className="upcoming-gap" />
        <div className="upcoming-step" />
        <div className="current-label">Step1</div>
        <div />
        <div className="upcoming-label">Step2</div>
        <div />
        <div className="upcoming-label">Step3</div>
        <div />
        <div className="upcoming-label">Confirm</div>
      </div>
      <div className="invest-step1-body">
        <span>SAFT FORM</span>
        <span>Please check and confirm the form and<br /> go next step</span>
        <div className="check-group">
          <input type="checkbox" id="check" className="checkbox" onChange={handleCheck} />
          <label for="check" className="checkbox-label">I agree with all conditions of this Project and Traccy</label>
        </div>
        <Button className="next-button" onClick={handleNext}>Next</Button>
      </div>
      <div className="invest-document">
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
          {[...Array(numPages).keys()].map((page) => {
            return <Page
              pageNumber={page + 1}
              scale={1.3}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          })}
        </Document>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep1;