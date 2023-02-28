import React, { useEffect, useState } from 'react';

const SvgSprite = props => {
  const [svg, setSvg] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    let svgVersion = "0.1.8";
    console.log("SVG Sprite version : " + svgVersion);
    var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
        data
    if (isLocalStorage && (localStorage.getItem('inlineSVGrev') === svgVersion)) {
        data = localStorage.getItem('inlineSVGdata');
        setSvg(data)
        setIsLoaded(true)
    }else{
      fetch(props.url)
        .then((response) => {
            if(response.ok) {                       
              return response.text();
            }
            throw new Error('Network response was not ok.');
          })
        .then(function(data) { 
              if(data !== undefined){            
                if (isLocalStorage) {
                  localStorage.setItem('inlineSVGdata', data);
                  localStorage.setItem('inlineSVGrev', svgVersion);
                }
                setSvg(data)
              }
          })
        .catch(setIsErrored)
        .then(() => setIsLoaded(true))
    } 
  }, [props.url]);
  return (
      <div 
          className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isErrored ? 'svgInline--errored' : ''}`}
          dangerouslySetInnerHTML={{ __html: svg }}
      />
  );
}

export default SvgSprite;