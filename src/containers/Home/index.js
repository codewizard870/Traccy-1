import React from 'react';
import { SvgIcon } from '../../components/common';
import { Button, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import hoverVideo from '../../assets/images/hover-video.webm';
import AnimationOne from '../../assets/animation/traccy-token-icon.json';
import AnimationTwo from '../../assets/animation/impact-icon.json';
import AnimationThree from '../../assets/animation/about-icon.json';
import AnimationFour from '../../assets/animation/becomepart-icon.json';

function NextArrow(props) {
   const { className, onClick } = props;
   return (
      <div
         className={className}
         onClick={onClick}
      >
         <SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' />
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
         <SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' />
      </div>
   );
}

const Home = () => {
   const history = useHistory();
   const settings = {
      infinite: false,
      dots: false,
      slidesToShow: 3.99,
      slidesToScroll: 2,
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
   const trcytokenanimationLottie = {
      loop: true,
      autoplay: true,
      animationData: AnimationOne,
      renderer: 'svg'
   }
   const impactanimationLottie = {
      loop: true,
      autoplay: true,
      animationData: AnimationTwo,
      renderer: 'svg'
   }
   const aboutanimationLottie = {
      loop: true,
      autoplay: true,
      animationData: AnimationThree,
      renderer: 'svg'
   }
   const becomeanimationLottie = {
      loop: true,
      autoplay: true,
      animationData: AnimationFour,
      renderer: 'svg'
   }
   return (
      <>
         <div className='home2-wrapper'>
            <div className='home2-wrapper-inner'>
               <Link to='/' className='backarrow'>
                  <SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' />
                  Back
               </Link>
               <Slider {...settings}>
                  <div>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(-90deg)" }}>
                           <source src={hoverVideo} />
                        </video>
                        <div className='slide-number'>
                           <h4>01</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <Lottie
                              options={trcytokenanimationLottie}
                              height={55}
                              width={55}
                              className='animation-icon'
                           />
                        </div>
                        <div className='desc-text'>
                           <h2>TRCY Token</h2>
                           <div className="desc-content">
                              <h3>TRCY Token</h3>
                           </div>
                           <p>
                              Better then Ou tum Completely Merging of Computer Science
                           </p>

                           <ul>
                              <li>Orchid wer nehmen Personen of meine</li>
                              <li>Perdurent montes, necetur ridodus</li>
                              <li>Viennes sentis motesir</li>
                           </ul>
                        </div>
                        <div className="learn-more">
                           <div className="left-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path transform="scale(-1, 1)" transform-origin="center" stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <div className="right-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <svg className="redfill" width="100%" >
                              <rect x="0" width="100%" height="100%" fill="#E31E53" opacity="0.5"></rect>
                           </svg>
                           <div className="arrow">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z">
                                 </path>
                              </svg>
                           </div>
                           <div className="content">learn more</div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(-300deg)" }}>
                           <source src={hoverVideo} />
                        </video>
                        <div className='slide-number'>
                           <h4>02</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <Lottie
                              options={impactanimationLottie}
                              height={60}
                              width={60}
                              className='animation-icon'
                           />
                        </div>
                        <div className='desc-text'>
                           <h2>Traccy Impact</h2>
                           <div className="desc-content">
                              <h3>Traccy Impact</h3>
                           </div>
                           <p>
                              Better then Ou tum Completely Merging of Computer Science
                           </p>
                           <ul>
                              <li>Orchid wer nehmen Personen of meine</li>
                              <li>Perdurent montes, necetur ridodus</li>
                              <li>Viennes sentis motesir</li>
                           </ul>
                        </div>
                        <div className="learn-more">
                           <div className="left-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path transform="scale(-1, 1)" transform-origin="center" stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <div className="right-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <svg className="redfill" width="100%" >
                              <rect x="0" width="100%" height="100%" fill="#E31E53" opacity="0.5"></rect>
                           </svg>
                           <div className="arrow">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z">
                                 </path>
                              </svg>
                           </div>
                           <div className="content">learn more</div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(200deg)" }}>
                           <source src={hoverVideo} />
                        </video>
                        <div className='slide-number'>
                           <h4>03</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <Lottie
                              options={aboutanimationLottie}
                              height={66}
                              width={66}
                              className='animation-icon'
                           />
                        </div>
                        <div className='desc-text'>
                           <h2>About Us</h2>
                           <div className="desc-content">
                              <h3>About Us</h3>
                           </div>
                           <p>
                              Better then Ou tum Completely Merging of Computer Science
                           </p>
                           <ul>
                              <li>Orchid wer nehmen Personen of meine</li>
                              <li>Perdurent montes, necetur ridodus</li>
                              <li>Viennes sentis motesir</li>
                           </ul>
                        </div>
                        <div className="learn-more">
                           <div className="left-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path transform="scale(-1, 1)" transform-origin="center" stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <div className="right-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <svg className="redfill" width="100%" >
                              <rect x="0" width="100%" height="100%" fill="#E31E53" opacity="0.5"></rect>
                           </svg>
                           <div className="arrow">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z">
                                 </path>
                              </svg>
                           </div>
                           <div className="content">learn more</div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className='home2-slide-card'>
                        <div className="home2-slide-overlay" />
                        <video playsInline autoPlay muted loop className="fog-img" style={{ filter: "hue-rotate(20deg)" }} >
                           <source src={hoverVideo} />
                        </video>
                        <div className='slide-number'>
                           <h4>04</h4>
                           <Divider />
                        </div>
                        <div className='slide-icon'>
                           <svg viewBox="0 0 100 100" className='circle'>
                              <circle className="background" cx="50" cy="50" r="45" stroke="#803B9B" fill="transparent" stroke-width="1" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" />
                              <circle className="foreground" cx="50" cy="50" r="45" transform="rotate(110)" transform-origin="center" fill="transparent" stroke-width="2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-linecap="round" />
                           </svg>
                           <Lottie
                              options={becomeanimationLottie}
                              height={66}
                              width={66}
                              className='animation-icon'
                           />
                        </div>
                        <div className='desc-text'>
                           <h2>Become a part </h2>
                           <div className="desc-content">
                              <h3>Become a part </h3>
                           </div>
                           <p>
                              Better then Ou tum Completely Merging of Computer Science
                           </p>
                           <ul>
                              <li>Orchid wer nehmen Personen of meine</li>
                              <li>Perdurent montes, necetur ridodus</li>
                              <li>Viennes sentis motesir</li>
                           </ul>
                        </div>
                        <div className="learn-more">
                           <div className="left-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path transform="scale(-1, 1)" transform-origin="center" stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <div className="right-rect">
                              <svg height="100%" viewBox="0 0 300 50">
                                 <path stroke="#E31E53" fill="transparent" stroke-width="3" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0" d="M0 0 h300 v50 h-300"></path>
                              </svg>
                           </div>
                           <svg className="redfill" width="100%" >
                              <rect x="0" width="100%" height="100%" fill="#E31E53" opacity="0.5"></rect>
                           </svg>
                           <div className="arrow">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z">
                                 </path>
                              </svg>
                           </div>
                           <div className="content">learn more</div>
                        </div>
                     </div>
                  </div>
               </Slider>
            </div>
         </div>
      </>
   )
};

export default Home