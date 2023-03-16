import { useState} from "react";

import { Button } from "antd";
import { useHistory } from 'react-router-dom';
import InvestWrapper from "./InvestWrapper";
import "./InvestStep1.scss";

const InvestStep1 = ({ onNext }) => {
  const history = useHistory();
  const [agree, setAgree] = useState(false);
  const handleCheck = (e) => {
    setAgree(!agree)
  }
  const handleNext = () => {
    // if (agree)
      onNext();
  }
  const handleDecline = () => {
    history.push("/");
  }
  
  return (
    <InvestWrapper>
      <div className="invest-step1-body0">
        <span>SAFT FORM</span>
        <span>Please check and confirm the form and go next step</span>

        <div className="invest-document">
          <TERMS />
        </div>
        {/* <div className="check-group">
          <input type="checkbox" id="check" className="checkbox" value={agree} onChange={handleCheck} />
          <label htmlFor="check" className="checkbox-label">
            I agree to the terms and conditions and privacy policy inside<br/> the SAFT of Traccy AG
          </label>
        </div> */}
        <div className="steps-action">
          <Button type="primary" onClick={() => handleNext()}>
            Accept
          </Button>

          <Button onClick={() => handleDecline()} className="decline">
            Decline
          </Button>
        </div>
      </div>
    </InvestWrapper>
  )
}

export default InvestStep1;

const TERMS = () => {
  return <span>
    <center><b>WFD Token</b>, a product of AI.WFD<br />
      <b>Commercial Brokers<br />
      SAFT<br />
      (Simple Agreement for Future Tokens)</b><br /></center>
      <br/><br/>
      THIS CERTIFIES THAT in exchange for the payment by the undersigned purchaser (the
      “Purchaser”) of $[ ] (the “Purchase Amount”) on or about [ ], 2022,
      WeFund, an AI.WFD Commercial Brokers corporation (the “Company”), hereby issues to
      the Purchaser the right (the “Right”) to certain units of WFD Token (the “Token” or “WFD
      Token”), subject to the terms set forth below.<br /><br />
    1. Events<br />
    (a) Network Launch. If there is a Network Launch before the expiration or termination
    of this instrument, the Company will automatically issue to the Purchaser a number of units
    of the Token equal to the Purchase Amount divided by the Discount Price.
    In connection with and prior to the issuance of Tokens by the Company to the Purchaser
    pursuant to this Section 1(a):<br />
    (i) The Purchaser will execute and deliver to the Company any and all other
    transaction documents related to this SAFT, including verification of accredited investor
    status or non-U.S. person status under the applicable securities laws; and<br />
    (ii) The Purchaser will provide to the Company a network address for which to
    allocate Purchaser's Tokens upon the Network Launch.<br />
    (b) Dissolution Event. If there is a Dissolution Event before this instrument expires or
    terminates, the Company will pay an amount equal to the Purchase Amount multiplied by
    the Discount Rate (the “Discounted Purchase Amount”), due and payable to the
    Purchaser immediately prior to, or concurrent with, the consummation of the Dissolution
    Event[, subject to the rights and preferences of the holders of the Company’s preferred
    stock, as set forth in the Company’s Certificate of Incorporation, as it may be amended from
    time to time.][1] If immediately prior to the consummation of the Dissolution Event, the
    assets of the Company that remain legally available, for distribution to the Purchaser and all
    holders of all other SAFTs (the “Dissolving Purchasers”), as determined in good faith by
    the Company’s board of directors, are insufficient to permit the payment to the Dissolving
    Purchasers of their respective Discounted Purchase Amounts, then the remaining assets of
    the Company legally available for distribution, following all distributions to the holders of the
    Company’s preferred stock, will be distributed with equal priority and pro rata among the
    Dissolving Purchasers in proportion to the Discounted Purchase Amounts they would
    otherwise be entitled to receive pursuant to this Section 1(b). Any distributed amounts shall
    be in U.S. Dollars.<br />
  </span>
}