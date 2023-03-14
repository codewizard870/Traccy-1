import { useState, useSyncExternalStore, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "antd";
import { Link } from 'react-router-dom';
import InvestWrapper from "./InvestWrapper";
import "./InvestStep1.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const InvestStep1 = ({ onNext }) => {
  const [agree, setAgree] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(0);
  const handleCheck = (e) => {
    setAgree(!agree)
  }
  const handleNext = () => {
    if (agree)
      onNext();
  }

  useEffect(() => {
    function getSnapshot() {
      setWidth(window.innerWidth > 576 ? window.innerWidth * 0.5 : window.innerWidth * 0.7);
    }
    getSnapshot();
    window.addEventListener('resize', getSnapshot);
    return () => window.removeEventListener('resize', getSnapshot);
  }, [])

  const src = "/PDFTemplate_presale.pdf";
  const onDocumentLoadSuccess = ({ numPages, ...e }) => {
    setNumPages(numPages);
  }

  return (
    <InvestWrapper>
      <div className="invest-step1-body0">
        <span>SAFT FORM</span>
        <span>Please check and confirm the form and go next step</span>
        <div className="invest-document">
          <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
            {[...Array(numPages).keys()].map((page, index) => {
              return <Page
                pageNumber={page + 1}
                width={width}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                key={index}
              />
            })}
          </Document>
        </div>
        <div className="check-group">
          <input type="checkbox" id="check" className="checkbox" value={agree} onChange={handleCheck} />
          <label htmlFor="check" className="checkbox-label">
            I agree to the terms and conditions and privacy policy inside the SAFT of Traccy AG
          </label>
        </div>
        <div className="steps-action">
          <Button type="primary" onClick={() => handleNext()}>
            Invest
          </Button>
        </div>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep1;