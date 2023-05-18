/* eslint-disable react/jsx-no-duplicate-props */
import SvgSprite from "./utility/SvgSpriteLoader";
import { rotues } from "./routes";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from "./common/history";
import AOS from "aos";
import 'antd/dist/reset.css';
import 'aos/dist/aos.css';

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";
import "./i18nextConf";

function App() {
  useEffect(() => {
    AOS.init({});
    }, [])
  return (
    <>
      <SvgSprite url={svgFile} />
      <Router
        history={history}
        basename={process.env.REACT_APP_BASENAME || ""}
        // forceRefresh
      >
        {rotues.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              }}
            />
          );
        })}
      </Router>
    </>
  );
}

export default App;
