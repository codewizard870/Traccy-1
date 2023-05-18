import { Link } from "react-router-dom";

import "./index.scss";

const Stage = ({ bg, title, content, application, processing, event, profit, sdg, primaryColor, secondaryColor }) => {
  return (
    <section className='hero-section'>
      <div className='about-banner' style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="hero-wrapper">
        <div className="title">
          <Link to='/impact-through-traccy/2' className='backarrow'>
            <img src="/impact/backarrow.svg" alt="backarrow" />
          </Link>
          <h1>
            {title}
          </h1>
        </div>
        <span className="desc">
          {content}
        </span>
        <span className="application" style={{ color: primaryColor }}>
          Fundraising required
        </span>
        <span className="application-number" style={{ color: secondaryColor }}>
          {application}
        </span>

        <div className="information">
          <div className="information-label">
            <span style={{ color: primaryColor }}>Processing Time</span>
            <div className="information-value">
              <span>{processing}</span>
              <span>{processing === 1 ? "Month" : "Months"}</span>
            </div>
          </div>
          <div className="information-label">
            <span style={{ color: primaryColor }}>Break Event Point</span>
            <div className="information-value">
              <span>{event}</span>
              <span>{event === 1 ? "Month" : "Months"}</span>
            </div>
          </div>
          <div className="information-label">
            <span style={{ color: primaryColor }}>Profit Estimate in 5Y</span>
            <div className="information-value">
              <span>{profit}</span>
              <span>x</span>
            </div>
          </div>
          <div className="information-label">
            <span style={{ color: primaryColor }}>Numbers of SDGs</span>
            <div className="information-value">
              <span>{sdg}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stage;