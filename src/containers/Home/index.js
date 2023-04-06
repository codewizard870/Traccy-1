import React, { useEffect, useState } from 'react';
import { SvgIcon } from '../../components/common';
import { Button, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import hoverVideo from '../../assets/images/hover-video.gif';
import { useTranslation } from 'react-i18next';

function NextArrow(props) {
   const { className, onClick } = props;
   return (
      <div
         className={className}
         onClick={onClick}
      >
         <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.55542 1.52734L4.75181 4.72374L1.73367 7.74188" stroke="white" stroke-width="2" stroke-linecap="round" />
         </svg>
      </div>
   );
}

function PrevArrow(props) {
   const { className, onClick } = props;
   return (
      <div
         className={className}
         onClick={onClick}
      >
         <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.71191 8.07715L1.51552 4.88075L4.53366 1.86261" stroke="white" stroke-width="2" stroke-linecap="round" />
         </svg>
      </div>
   );
}

const Home = () => {
   const { t, i18n } = useTranslation();
   const history = useHistory();
   const [slider, setSlider] = useState();
   const settings = {
      infinite: false,
      dots: false,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      speed: 500,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
         {
            breakpoint: 1379,
            settings: {
               slidesToShow: 3.5,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 1255,
            settings: {
               slidesToShow: 3.15,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2.15,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   };

   const beforeChange = () => {

   }
   const slickGoTo = (slick) => {
      if (slider.state.breakpoint == null || slider.state.breakpoint >= 1255)
         slider.slickGoTo(slick)
   }

   const lang = localStorage.getItem("lang")??"en";
   useEffect(() => {
     if (lang) 
       i18n.changeLanguage(lang);
   }, [i18n, lang]);

   return (
      <>
         <div className='home2-wrapper'>
            <div className='home2-wrapper-inner'>
               <Link to='/' className='backarrow'>
                  <SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' />
                  Back
               </Link>
               <Slider
                  ref={e => setSlider(e)}
                  beforeChange={beforeChange}
                  {...settings}
               >
                  <div onMouseMove={() => slickGoTo(0)} >
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        {/* <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(-90deg)" }}>
                           <source src={hoverVideo} />
                        </video> */}
                        <img src={hoverVideo} className="fog-img" alt="hover" />
                        <div className='slide-number'>
                           <h4>01</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <img src="/main-menu/trcy-token.gif" className="animation-icon" alt="animation" />
                        </div>
                        <div className='desc-text'>
                           <h2>TRCY Token</h2>
                           <div className="desc-content">
                              <h3>TRCY Token</h3>
                           </div>
                           <p>
                              {t("main_menu:trcy")}
                           </p>

                           <ul>
                              <li>{t("main_menu:trcy_1")}</li>
                              <li>{t("main_menu:trcy_2")}</li>
                              <li>{t("main_menu:trcy_3")}</li>
                           </ul>
                        </div>
                        <LearnMore />
                     </div>
                  </div>
                  <div onMouseMove={() => slickGoTo(0)} >
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        {/* <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(-300deg)" }}>
                           <source src={hoverVideo} />
                        </video> */}
                        <img src={hoverVideo} className="fog-img" alt="hover" />
                        <div className='slide-number'>
                           <h4>02</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <img src="/main-menu/impact.gif" className="animation-icon" alt="animation" 
                           style={{width: "50px", height: "50px"}}/>
                        </div>
                        <div className='desc-text'>
                           <h2>Traccy Impact</h2>
                           <div className="desc-content">
                              <h3>Traccy Impact</h3>
                           </div>
                           <p>
                              {t("main_menu:impact")}
                           </p>
                           <ul>
                              <li>{t("main_menu:impact_1")}</li>
                              <li>{t("main_menu:impact_2")}</li>
                              <li>{t("main_menu:impact_3")}</li>
                           </ul>
                        </div>
                        <LearnMore />
                     </div>
                  </div>
                  <div>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        {/* <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(200deg)" }}>
                           <source src={hoverVideo} />
                        </video> */}
                        <img src={hoverVideo} className="fog-img" alt="hover" />
                        <div className='slide-number'>
                           <h4>03</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <img src="/main-menu/about.gif" className="animation-icon" alt="animation" />
                        </div>
                        <div className='desc-text'>
                           <h2>About Us</h2>
                           <div className="desc-content">
                              <h3>About Us</h3>
                           </div>
                           <p>
                              {t("main_menu:about")}
                           </p>
                           <ul>
                              <li>{t("main_menu:about_1")}</li>
                              <li>{t("main_menu:about_2")}</li>
                              <li>{t("main_menu:about_3")}</li>
                           </ul>
                        </div>
                        <LearnMore />
                     </div>
                  </div>
                  <div onMouseOver={() => slickGoTo(4)}>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        {/* <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(20deg)" }} >
                           <source src={hoverVideo} />
                        </video> */}
                        <img src={hoverVideo} className="fog-img" alt="hover" />
                        <div className='slide-number'>
                           <h4>04</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <img src="/main-menu/become.gif" className="animation-icon" alt="animation" style={{marginBottom: "10px"}}/>
                        </div>
                        <div className='desc-text'>
                           <h2>Become a part </h2>
                           <div className="desc-content">
                              <h3>Become a part </h3>
                           </div>
                           <p>
                              {t("main_menu:become")}
                           </p>
                           <ul>
                              <li>{t("main_menu:become_1")}</li>
                              <li>{t("main_menu:become_2")}</li>
                              <li>{t("main_menu:become_3")}</li>
                           </ul>
                        </div>
                        <LearnMore />
                     </div>
                  </div>
                  <div onMouseOver={() => slickGoTo(4)}>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        {/* <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(20deg)" }} >
                           <source src={hoverVideo} />
                        </video> */}
                        <img src={hoverVideo} className="fog-img" alt="hover" />
                        <div className='slide-number'>
                           <h4>05</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <img src="/main-menu/buy-token.gif" className="animation-icon" alt="animation" />
                        </div>
                        <div className='desc-text'>
                           <h2>Buy Token</h2>
                           <div className="desc-content">
                              <h3>PURCHASE TRCY </h3>
                           </div>
                           <p>
                              {t("main_menu:buy")}
                           </p>
                           <ul>
                              <li>{t("main_menu:buy_1")}</li>
                              <li>{t("main_menu:buy_2")}</li>
                              <li>{t("main_menu:buy_3")}</li>
                           </ul>
                        </div>
                        <LearnMore />
                     </div>
                  </div>
               </Slider>
            </div>
         </div>
      </>
   )
};

export default Home;

export const LearnMore = () => {
   return (
      <div className="learn-more">
         <svg className="redfill" width="100%" >
            <rect x="0" width="100%" height="100%" fill="#E31E53" opacity="0.5"></rect>
         </svg>
         <div className="left-rect">
            <svg height="100%" viewBox="0 0 150 50">
               <path transform="scale(-1, 1)" transform-origin="center" stroke="#BE1E73" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h150 v50 h-150"></path>
            </svg>
         </div>
         <div className="right-rect">
            <div style={{ width: "201px" }}>
               <svg height="100%" viewBox="0 0 150 50">
                  <path stroke="#BE1E73" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h150 v50 h-150"></path>
               </svg>
            </div>
         </div>

         <div className="arrow">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12.9819 5.99099L1.49951 0L3.71187 4.94669L12.9819 5.99099Z" fill="white" />
               <path d="M13.0003 6.00879L1.7373 11.9998L3.80339 6.99813L13.0003 6.00879Z" fill="white" />
               <path d="M0.987319 7.20036C1.53261 7.20036 1.97466 6.75741 1.97466 6.21102C1.97466 5.66462 1.53261 5.22168 0.987319 5.22168C0.442028 5.22168 0 5.66462 0 6.21102C0 6.75741 0.442028 7.20036 0.987319 7.20036Z" fill="white" />
            </svg>
         </div>
         <div className="content">learn more</div>
      </div>
   )
}