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
    setAgree(e.target.checked)
  }
  const handleNext = () => {
    if (agree)
      onNext();
  }

  useEffect(() => {
    function getSnapshot() {
      setWidth(window.innerWidth > 576 ? window.innerWidth *0.5 : window.innerWidth*0.7);
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
        <span>Please check and confirm the form and<br /> go next step</span>
        <div className="check-group">
          <input type="checkbox" id="check" className="checkbox" onChange={handleCheck} />
          <label for="check" className="checkbox-label">I agree with all conditions of this Project and Traccy</label>
        </div>
        <div className="steps-action">
          <Link to='/'>FAQ</Link>
          <Button type="primary" onClick={() => handleNext()}>
            Continue
          </Button>
        </div>
      </div>
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
    </InvestWrapper>
  )
}

export default InvestStep1;