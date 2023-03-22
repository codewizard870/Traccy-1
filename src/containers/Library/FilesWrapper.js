import "./FilesWrapper.scss";

const FilesWrapper = () => {
  return (
    <div className="files-wrapper">
      {Files.map((file, index) => (
        <div className="file" key={index}>
          <div className="more">
            <img src="/library/more.svg" alt="more" />
          </div>
          <img src={file.preview} className="preview" alt="file-preivew" />
          <span className="filename">{file.fileName}</span>
          <div className="splitter" />
          <div className="filesize">
            <span>File Size:<br />{file.fileSize}</span>
          </div>
        </div>
      ))}
    </div>
  )
};

export default FilesWrapper;

const Files = new Array(8).fill({
  fileName: "Drone Virtual Tour.mp4",
  preview: "/library/file-preview.svg",
  fileSize: "18.98M"
})