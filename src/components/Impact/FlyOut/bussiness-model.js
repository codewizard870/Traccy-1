import { useEffect, useState } from "react";
import "./bussiness-model.scss";

const BussinessModel = () => {
  const [index, setIndex] = useState(1)
  useEffect(() => {
    const arrange = () => {
      const wrapper = document.getElementById("bussiness-model-wrapper");
      const width = 150;
      const r = 60;
      const step = 60;

      const models = document.getElementsByClassName("bussiness-model");
      for (let i = 0; i < models.length; i++) {
        const angle = ((i-index) * step - 90) / 180 * Math.PI;
        models[i].style.left = `${r * Math.cos(angle) + width / 2}px`;
        models[i].style.top = `${r * Math.sin(angle) + width / 2}px`;

        if (index === i)
          models[i].style.content = `url("${MODELS[i].hover}")`
        else
          models[i].style.content = `url("${MODELS[i].src}")`
      }

      const desc = document.getElementById("bussiness-desc");
      desc.innerHTML = MODELS[index].label;

    }
    arrange();
  }, [index])
  const handleHover = (_index) => {
    console.log(index)
    setTimeout(() => setIndex(_index), 100);
  }
  return (
    <div className="bussiness-model-wrapper" id="bussiness-model-wrapper">
      {MODELS.map((model, index) => (
        <img
          className="bussiness-model"
          src={model.src}
          alt="clock"
          onMouseMove={() => handleHover(index)}
        />
      ))}
      <span className="bussiness-desc" id="bussiness-desc">100% organic</span>
    </div>
  )
}

export default BussinessModel;

const MODELS = [
  { src: "/impact/flyout/clock.png", hover: "/impact/flyout/clock_hover.png", label: "Timed" },
  { src: "/impact/flyout/gear.png", hover: "/impact/flyout/gear_hover.png", label: "Automatic" },
  { src: "/impact/flyout/growth.png", hover: "/impact/flyout/growth_hover.png", label: "100% organic" },
  { src: "/impact/flyout/renewable.png", hover: "/impact/flyout/renewable_hover.png", label: "Environment absorbed" },
  { src: "/impact/flyout/server.png", hover: "/impact/flyout/server_hover.png", label: "Server Communication" },
  { src: "/impact/flyout/technology.png", hover: "/impact/flyout/technology_hover.png", label: "Smart Technology" },
]