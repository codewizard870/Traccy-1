import "./InvestWrapper.scss";
const InvestWrapper = ({ children }) => {
  return (
    <div className="invest-wrapper">
      <div className="invest-title">
        <span>Invest</span>
        <span>&nbsp;of Traccy</span>
      </div>

      <div className="invest-body">
        {children}
      </div>
    </div>
  )
}

export default InvestWrapper;