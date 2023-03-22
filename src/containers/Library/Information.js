import "./Information.scss";

const Information = () => {
  return (
    <div className="information-wrapper">
      <div className="function-title">
        <img src="/library/recent1.svg" alt="recent1" />
        <span>Recent Files</span>
      </div>
      <div className="splitter" />
      <img src="/library/file-preview.svg" className="preview" alt="preview" />
      <div className="splitter" />
      <div className="file-info">
        <span className="filename">Licence agreement on waterfall.world</span>
        <span className="filesize">18.98 MB, H1 B4, 45s</span>
      </div>
      <div className="splitter" />
      <div className="share-icon-wrapper">
        <img src="/library/share.svg" className="share-icon" alt="share" />
      </div>
      <span className="share">Share</span>
    </div>
  )
}

export default Information;