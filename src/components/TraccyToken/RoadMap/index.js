import { useState } from "react";
import "./index.scss"
const RoadMap = ({ datas }) => {
  const [startPos, setStartPos] = useState(0);
  const [relativeX, setRelativeX] = useState(0);
  const touchStart = (e) => {
    if (e.touches.length > 0) {
      const overlay = document.getElementById("roadmap-overlay");
      setStartPos(parseInt(overlay.style.left) || 0);
      setRelativeX(e.touches[0].clientX);
    }
  }
  const touchMove = (e) => {
    if (e.touches.length > 0) {
      const overlay = document.getElementById("roadmap-overlay");
      const offsetX = relativeX - e.touches[0].clientX;

      let xPos = startPos - offsetX;
      if(xPos > 0) xPos = 0;
      if(xPos < -window.innerWidth * 1.8) xPos = -window.innerWidth * 1.8;
      overlay.style.left = `${xPos}px`;
    }
  }
  const touchEnd = (e) => {
  }
  return (
    <div className="roadmap-mobile-wrapper">
      <div
        className="roadmap-overlay"
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onTouchMove={touchMove}
        id="roadmap-overlay"
      >
        {datas.map((data, index) => (
          <div className="roadmap-card">
            <span className="roadmap-title">
              {data.title}
            </span>
            <div 
              className="timeline"
              style={{background: TimeLineColors[index]}}
            />
            <div className="roadmap-content">
              <ul>
                {data.content.map((cnt, index) => (
                  <li>{cnt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const TimeLineColors = [
  "#e04cab", "#8b3aa7", "#9e54fd"
]
export default RoadMap;
