import React, { useState } from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Drawer } from 'antd';
import './index.scss';

import { useHistory, useParams } from 'react-router-dom';
import Slider from 'react-slick';

import MapImg from '../../assets/images/map.png';
import Footer from '../../components/layout/Footer/Footer';
import { useEffect } from 'react';

const ImpactThroughTraccy = () => {
   const router = useHistory();
   const { step } = useParams();

   const slider = React.useRef(null);
   useEffect(() => {
      let iStep = parseInt(step);

      if (iStep >= 0 && iStep < 5) {
         const thumbs = document.getElementsByClassName("thumb-col");
         thumbs[iStep].click();
      }
   }, [step])

   const settings2 = {
      dots: true,
      infinite: false,
      speed: 900,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      appendDots: dots => (
         <div className='thumb-col-main'>
            <ul style={{ margin: "0px" }}> {dots} </ul>
         </div>
      ),
      customPaging: i => (
         <div className='thumb-col-main impact-dots'>
            {i === 0 &&
               <div className='thumb-col first-thumb' onClick={() => handleChangeStage(0)}>
               </div>
            }
            {i === 1 &&
               <div className='thumb-col' onClick={() => handleChangeStage(1)}>
                  <span>Phase 1</span>Selection
               </div>
            }
            {i === 2 &&
               <div className='thumb-col' onClick={() => handleChangeStage(2)}>
                  <span>Phase 2</span>Incubation
               </div>
            }
            {i === 3 &&
               <div className='thumb-col' onClick={() => handleChangeStage(3)}>
                  <span>Phase 3</span>Launch
               </div>
            }
            {i === 4 &&
               <div className='thumb-col' onClick={() => handleChangeStage(4)}>
                  <span>Phase 4</span>Monitoring
               </div>
            }
         </div>
      ),
      afterChange: index => {
         setStageIndex(index);
      }
   };
   const handleChangeStage = index => {
      console.log(index)
      const dots = document.getElementsByClassName("slick-dots");
      if (index > 0) {
         dots[0].classList.remove("intro")
      } else {
         dots[0].classList.add("intro")
      }
   }
   const [openModal, setOpen] = useState(false);
   const [index, setStageIndex] = useState(0);
   const onConnect = (index) => {
      setOpen(true);
   }

   const onClose = () => {
      if (openModal)
         setOpen(false)
   }

   const goDetail = (project, index) => {
      if (project.route)
         router.push(`/impact-through-traccy-details/${project.route}`)
      else
         router.push(`/impact-through-traccy-details/${index}/${index}`)
   }

   useEffect(() => {
      const intro = document.getElementById("intro-wrapper");
      const handleScroll = () => {
         let c = Math.floor(intro.scrollTop / intro.clientHeight);
         const dots = document.getElementsByClassName("intro-dot");
         for (let i = 0; i < dots.length; i++) {
            if (c === i)
               dots[i].className = "intro-dot selected"
            else
               dots[i].className = "intro-dot"
         }

         const impactDots = document.getElementsByClassName("impact-dots");
         for (let i = 0; i < impactDots.length; i++) {
            if (c === 0)
               impactDots[i].style.display = "block";
            else
               impactDots[i].style.display = "none"
         }
      }
      handleScroll();

      intro.addEventListener("scroll", handleScroll);
      return () => intro.removeEventListener("scroll", handleScroll);
   }, [])

   const handleDot = (index) => {
      const intro = document.getElementById("intro-wrapper");
      intro.scrollTo({
         top: intro.clientHeight * index,
         left: 0,
         behavior: "smooth",
      });
   }
   return (
      <>
         <div className='itt-wrapper' onClick={onClose}>
            <div className='about-banner' style={{ backgroundImage: `url("/impact/stage-banner.png")` }}></div>
            <section className='banner-section'>
               <Slider {...settings2} ref={slider}>
                  <div>
                     <div className="intro-wrapper" id="intro-wrapper"
                        style={{ backgroundImage: `url("/impact/intro/background.png")` }}
                     >
                        <div
                           className="page-wrapper page-1"
                        >
                           <div className="page-1-left">
                              <h1>Impact Through Traccy</h1>
                              <p>
                                 At Traccy, it is all about creating impact. We have built an ecosystem that enables changemakers to invest quickly and securely in sustainable innovations, while also providing qualified project owners with the financing they need. In doing so, we're bridging the gap between funds seeking projects and projects ready to be funded on a global scale.
                              </p>
                           </div>
                           <div className="page-1-right">
                              <img src="/impact/intro/page-1-logo.png" alt="logo" />
                           </div>
                        </div>
                        <div
                           className="page-wrapper page-2"
                        >
                           <div className="page-2-left">
                              <img src="/impact/intro/page-2-logo.png" alt="logo" />
                           </div>
                           <div className="page-2-right">
                              <h1>Trigger</h1>
                              <p>
                                 Based on market research and considering various criteria such as economic freedom, growth and equity risk in a project country, Traccy Lab selects, and incubates projects that create innovative solutions to social and environmental challenges. Traccy Lab provides resources and mentors to help these projects succeed and strives to foster a culture of impact and sustainability from idea to implementation.
                              </p>
                           </div>
                           <div className="page-number">
                              <h1>01</h1>
                              <div className="page-more">
                                 <span>see more</span>
                                 <div
                                    className="page-button"
                                    onClick={() => router.push("/impact-through-traccy-details/traccy-lab")}
                                 >
                                    <img src="/impact/right-arrow.svg" alt="backarrow" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div
                           className="page-wrapper page-3"
                        // style={{ backgroundImage: `url("/impact/intro-3-background.png")` }}
                        >
                           <div className="page-3-left">
                              <h1>Engage</h1>
                              <p>
                                 Engage on Traccy Connect by purchasing your tokens and making a commitment to invest in high-impact projects that address social and environmental challenges. As a community member, you will have access to project participation during the launch phase, enabling you to make a positive impact on the world.
                              </p>
                           </div>
                           <div className="page-3-right">
                              <img src="/impact/intro/page-3-logo.png" alt="logo" />
                           </div>
                           <div className="page-number">
                              <h1>02</h1>
                              <div className="page-more">
                                 <span>see more</span>
                                 <div
                                    className="page-button"
                                    onClick={() => router.push("/impact-through-traccy-details/traccy-connect")}
                                 >
                                    <img src="/impact/right-arrow.svg" alt="backarrow" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div
                           className="page-wrapper page-4"
                        // style={{ backgroundImage: `url("/impact/intro-4-background.png")` }}
                        >
                           <div className="page-4-left">
                              <img src="/impact/intro/page-4-logo.png" alt="logo" />
                           </div>
                           <div className="page-4-right">
                              <h1>Connect</h1>
                              <p>
                                 Stay connected to sustainable impact by monitoring projects and investments during their execution phase. Collaborate with like-minded community members and support project owners in their mission to make a positive change on society and the environment.
                              </p>
                           </div>
                           <div className="page-number">
                              <h1>03</h1>
                              <div className="page-more">
                                 <span>SUBSCRIBE</span>
                                 <div
                                    className="page-button"
                                    onClick={() => router.push("/become-part")}
                                 >
                                    <img src="/impact/right-arrow.svg" alt="backarrow" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="intro-dots">
                           <div className="intro-dot" onClick={() => handleDot(0)}></div>
                           <div className="intro-dot" onClick={() => handleDot(1)}></div>
                           <div className="intro-dot" onClick={() => handleDot(2)}></div>
                           <div className="intro-dot" onClick={() => handleDot(3)}></div>
                        </div>
                        <div className='social-icon-list'>
                           <a href="https://twitter.com/traccyag">
                              <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                           </a>
                           <a href="https://web.telegram.org/z/#-1837824968">
                              <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                           </a>
                           <a href="https://www.instagram.com/traccy_official/">
                              <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                           </a>
                           <a href="https://www.linkedin.com/company/traccy-ag/?viewAsMember=true">
                              <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                           </a>
                        </div>
                     </div>
                  </div>
                  {Sliders.map((data, index) => (
                     <div key={index}>
                        {/* <div className='about-banner' style={{ backgroundImage: `url(${data.banner})` }}></div> */}
                        <Container>
                           <div className="stage-wrapper">
                              <div className="stage-main">
                                 <div className="stage-left">
                                    <h1>
                                       {data.stage} Stage
                                    </h1>
                                    <span className="desc">{data.desc}</span>
                                    <span className="application">{data.application}</span>
                                    <div className="selection">
                                       <span className="number">{data.application_number}</span>
                                       <span className="selection-desc">
                                          {data.application_number > 1 ? "selections" : "selection"}
                                       </span>
                                       <div className="indicator" />
                                    </div>
                                    <div className="project-list-button" onClick={() => onConnect(index)}>
                                       <span>Project List</span>
                                       <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="8.56312" height="1.19726" rx="0.59863" transform="matrix(0.704076 -0.710124 -0.383266 -0.923638 0.519531 12.2773)" fill="white" />
                                          <rect width="8.40448" height="1.21272" rx="0.60636" transform="matrix(0.735698 0.67731 0.35421 -0.935166 0 1.13477)" fill="white" />
                                       </svg>
                                    </div>
                                 </div>
                                 <div className="stage-right">
                                    <div className="processing"><span>Processing Time</span></div>
                                    <div className="processing-desc">
                                       <span>{data.month}</span>
                                       <span>{data.month > 1 ? "Months" : "Month"}</span>
                                    </div>
                                    <div className="world"><span>World Location</span></div>
                                    <div className="world-desc">
                                       <span>{data.world}</span>
                                       <span>{data.world > 1 ? "Countries" : " Country"}</span>
                                    </div>
                                 </div>
                              </div>
                              <Col sm='12' className='arrow-action'>
                                 <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                 <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                              </Col>
                           </div>
                        </Container>
                        <section className='map-section'>
                           <div className='map-wrapper'>
                              <div className='project-center'>
                                 {index === 0 &&
                                    <>
                                       <div className='points point-1' onClick={() => router.push("/impact-through-traccy-details/lynx")}>
                                          <span></span>
                                          <div>01</div>
                                       </div>
                                       <div className='points point-2' onClick={() => router.push("/impact-through-traccy-details/green-protocol")}>
                                          <span></span>
                                          <div>02</div>
                                       </div>
                                       <div className='points point-3' onClick={() => router.push("/impact-through-traccy-details/traccy-solar")}>
                                          <span></span>
                                          <div>03</div>
                                       </div>
                                       <div className='points point-4' onClick={() => router.push("/impact-through-traccy-details/traccy-lab")}>
                                          <span></span>
                                          <div>04</div>
                                       </div>
                                       <div className='points point-5' onClick={() => router.push("/impact-through-traccy-details/traccy-farm")}>
                                          <span></span>
                                          <div>05</div>
                                       </div>
                                    </>
                                 }
                                 {index === 1 &&
                                    <>
                                       <div className='points point-6' onClick={() => router.push("/impact-through-traccy-details/flyout")}>
                                          <span></span>
                                          <div>01</div>
                                       </div>
                                    </>
                                 }
                                 {index === 2 &&
                                    <>
                                       <div className='points point-7' onClick={() => router.push("/impact-through-traccy-details/traccy-connect")}>
                                          <span></span>
                                          <div>01</div>
                                       </div>
                                    </>
                                 }
                              </div>
                              <img src="/impact/map.png" alt='Map' />
                           </div>

                           <div className='right-numbers'>
                              <ul>
                                 {index === 0 &&
                                    <>
                                       <li className="right-1" onClick={() => router.push("/impact-through-traccy-details/lynx")}>01</li>
                                       <li className="right-2" onClick={() => router.push("/impact-through-traccy-details/green-protocol")}>02</li>
                                       <li className="right-3" onClick={() => router.push("/impact-through-traccy-details/traccy-solar")} >03</li>
                                       <li className="right-4" onClick={() => router.push("/impact-through-traccy-details/traccy-lab")}>04</li>
                                       <li className="right-5" onClick={() => router.push("/impact-through-traccy-details/traccy-farm")}>05</li>
                                    </>
                                 }
                                 {index === 1 &&
                                    <li className="right-6" onClick={() => router.push("/impact-through-traccy-details/flyout")} >01</li>
                                 }
                                 {index === 2 &&
                                    <li className="right-7" onClick={() => router.push("/impact-through-traccy-details/traccy-connect")}>01</li>
                                 }
                              </ul>
                           </div>
                        </section>
                     </div>
                  ))}
               </Slider>
               <Drawer
                  title={false}
                  placement='right'
                  width={"100%"}
                  onClose={onClose}
                  closeIcon={false}
                  open={openModal}
                  rootClassName='project-sidebar'
               >
                  <div className="project-list">
                     <div className="title">
                        <span>Project List</span>
                     </div>
                     {index > 0 && Sliders[index - 1].projects.map((project, index) => (
                        <div className="item" onClick={() => goDetail(project, index)}>
                           <img src={project.image} alt="avatar" />
                           <div className="splitter" />
                           <span>{project.number}</span>
                           <div className="splitter outer" />
                        </div>
                     ))}
                  </div>
               </Drawer>
            </section>

         </div>
         {index !== 0 &&
            <Footer />
         }
      </>
   )
};
export const Sliders = [
   {
      stage: "Selection",
      desc: "We are selecting new Projects",
      application: "Application",
      application_number: 5,
      month: 1,
      world: 3,
      banner: "/impact/stage-banner.png",
      projects: [
         {
            number: "Lynx Vr",
            desc: "LynxVr is a cognitive therapist using Blockchain for increase privacy and clients confidential aboutmedical and therapist section",
            image: "/impact/side-menu/lynx.png",
            route: "lynx"
         },
         {
            number: "Green Protocol",
            desc: "NFT tokenisation of green assets like renewable energy, agriculture, recycling and more. Crowdfunding modelling and co-ownership of real world asset for change the climatic changes.",
            image: "/impact/side-menu/green-protocol.png",
            route: "green-protocol"
         },
         {
            number: "Traccy Lab",
            desc: "Creating a automated ecosystem in real world whereall the population is 100% independent to external sources, likeWater purification, Food and plant production, oil creation, energy production and green mobilitation",
            image: "/impact/side-menu/traccy-lab.png",
            route: "traccy-lab"
         },
         {
            number: "Traccy Solar",
            desc: "",
            image: "/impact/side-menu/traccy-solar.png",
            route: "traccy-solar"
         },
         {
            number: "Traccy Farm",
            desc: "",
            image: "/impact/side-menu/traccy-agro.png",
            route: "traccy-farm"
         },
      ],
   },
   {
      stage: "Incubation",
      desc: "We are incubating new Project",
      application: "Incubation",
      application_number: 1,
      month: 3,
      world: 1,
      banner: "/impact/stage-banner.png",
      projects: [
         {
            number: "FlyOut",
            desc: "A mosquito solution system based on organicproduct reducing the mosquito population",
            image: "/impact/side-menu/flyout.png",
            route: "flyout"
         }
      ]
   },
   {
      stage: "Launching",
      desc: "We are launching new Projects",
      application: "Launching",
      application_number: 1,
      month: 1,
      world: 1,
      banner: "/impact/stage-banner.png",
      projects: [
         {
            number: "Traccy Connect",
            desc: "Traccy Connect is the platform will provideSTOEducationImpact Score and Impact Credits",
            image: "/impact/side-menu/traccy-impact.png",
            route: "traccy-connect"
         }
      ]
   },
   {
      stage: "Monitoring",
      desc: "We are monitoring new Projects",
      application: "Monitoring",
      application_number: 0,
      month: 6,
      world: 0,
      banner: "/impact/stage-banner.png",
      projects: []
   }
]
export default ImpactThroughTraccy