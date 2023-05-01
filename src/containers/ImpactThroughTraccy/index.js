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
      appendDots: dots => (
         <div className='thumb-col-main'>
            <ul style={{ margin: "0px" }}> {dots} </ul>
         </div>
      ),
      customPaging: i => (
         <div className='thumb-col-main impact-dots'>
            {i === 0 && <div className='thumb-col first-thumb'></div>}
            {i === 1 && <div className='thumb-col'><span>Phase 1</span>Selection</div>}
            {i === 2 && <div className='thumb-col'><span>Phase 2</span>Incubation</div>}
            {i === 3 && <div className='thumb-col'><span>Phase 3</span>Launch</div>}
            {i === 4 && <div className='thumb-col'><span>Phase 4</span>Monitoring</div>}
         </div>
      ),
      afterChange: index => {
         setStageIndex(index)
      }
   };

   const [openModal, setOpen] = useState(false);
   const [stageIndex, setStageIndex] = useState(0);
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
         router.push(`/impact-through-traccy-details/${stageIndex}/${index}`)
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
            <section className='banner-section'>
               <div className='about-banner' style={{ backgroundImage: `url("/impact/5309059.jpg")` }}></div>
               <Slider {...settings2} ref={slider}>
                  <div>
                     <div className="intro-wrapper" id="intro-wrapper">
                        <div
                           className="page-wrapper page-1"
                           style={{ backgroundImage: `url("/impact/intro-1-background.png")` }}
                        >
                           <div className="page-1-left">
                              <h1>Impact<br />Through<br />Traccy </h1>
                              <p>Traccy sells our tokens working in third Traccy<br />
                                 sells our tokens working in third sells<br />
                                 our tokens working in third<br />
                              </p>
                           </div>
                           <div className="page-1-right">
                              <img src="/impact/intro/page-1-logo.png" alt="logo" />
                           </div>
                        </div>
                        <div
                           className="page-wrapper page-2"
                           style={{ backgroundImage: `url("/impact/intro-2-background.png")` }}
                        >
                           <div className="page-2-left">
                              <img src="/impact/intro/page-2-logo.png" alt="logo" />
                           </div>
                           <div className="page-2-right">
                              <h1>Trigger</h1>
                              <p>
                                 Traccy Lab is a dynamic space where sustainable impact projects
                                 are developed and reviewed. Our team of experts collaborates with entrepreneurs, startups and organizations to create innovative
                                 solutions that tackle social and environmental challenges. Our
                                 mission is to incubate and accelerate projects that make a positive
                                 impact on the world, while providing resources  and mentorship to
                                 help them succeed. From ideation to execution, Traccy Lab is
                                 committed to fostering a culture of impact and sustainability.
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
                           style={{ backgroundImage: `url("/impact/intro-3-background.png")` }}
                        >
                           <div className="page-3-left">
                              <h1>Engage</h1>
                              <p>
                                 The Community of Impact Investors invest globally
                                 in proven high-demand business models in developing
                                 countries such as agriculture, real estate, education,
                                 energy supply and many more.
                                 Unlike traditional investors, the Traccy Community goes beyond the pursuit of financial returns and extends to generating value for our ecosystem.
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
                                    onClick={() => router.push("/traccy-token")}
                                 >
                                    <img src="/impact/right-arrow.svg" alt="backarrow" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div
                           className="page-wrapper page-4"
                           style={{ backgroundImage: `url("/impact/intro-4-background.png")` }}
                        >
                           <div className="page-4-left">
                              <img src="/impact/intro/page-4-logo.png" alt="logo" />
                           </div>
                           <div className="page-4-right">
                              <h1>Connect</h1>
                              <p>
                                 Our decentralized finance solution enables global investors to invest in impactful entrepreneurial projects in developing countries instantly through Asset-Backed Tokenization, receiving economic rewards while addressing development and investment issues. <br /><br /><br />
                                 We facilitates access to the international market for people in developing countries, allowing them to participate in projects and benefit from low-cost services, which have a positive impact on their daily lives.
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
                           <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                           <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                           <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                           <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                        </div>
                     </div>
                  </div>
                  {Sliders.map((data, index) => (
                     <div key={index}>
                        <div className='about-banner' style={{ backgroundImage: `url(${data.banner})` }}></div>
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
                                       <span className="selection-desc">selections</span>
                                       <div className="indicator" />
                                    </div>
                                    <div className="project-list-button" onClick={() => onConnect(index)}>
                                       <div className="list-indicator" />
                                       <span>Project List</span>
                                    </div>
                                 </div>
                                 <div className="stage-right">
                                    <div className="processing"><span>Processing Time</span></div>
                                    <div className="processing-desc">
                                       <span>{data.month}</span>
                                       <span>Months</span>
                                    </div>
                                    <div className="world"><span>World Location</span></div>
                                    <div className="world-desc">
                                       <span>{data.world}</span>
                                       <span>Countries</span>
                                    </div>
                                 </div>
                              </div>
                              <Col sm='12' className='arrow-action'>
                                 <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                 <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                              </Col>
                           </div>
                        </Container>
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
                     {stageIndex > 0 && Sliders[stageIndex - 1].projects.map((project, index) => (
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
            {stageIndex !== 0 &&
               <section className='map-section'>
                  <Container>
                     <Row>
                        <Col>
                           <div className='map-wrapper'>
                              <div className='project-center'>
                                 {stageIndex === 1 &&
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
                                       <div className='points point-5' onClick={() => router.push("/impact-through-traccy-details/traccy-agro")}>
                                          <span></span>
                                          <div>05</div>
                                       </div>
                                    </>
                                 }
                                 {stageIndex === 2 &&
                                    <>
                                       <div className='points point-6' onClick={() => router.push("/impact-through-traccy-details/flyout")}>
                                          <span></span>
                                          <div>01</div>
                                       </div>
                                    </>
                                 }
                                 {stageIndex === 3 &&
                                    <>
                                       <div className='points point-7' onClick={() => router.push("/impact-through-traccy-details/traccy-connect")}>
                                          <span></span>
                                          <div>01</div>
                                       </div>
                                    </>
                                 }
                              </div>
                              <img src={MapImg} alt='Map' />
                           </div>
                        </Col>
                     </Row>
                  </Container>
                  <div className='right-numbers'>
                     <ul>
                        {stageIndex === 1 &&
                           <>
                              <li className="right-1" onClick={() => router.push("/impact-through-traccy-details/lynx")}>01</li>
                              <li className="right-2" onClick={() => router.push("/impact-through-traccy-details/green-protocol")}>02</li>
                              <li className="right-3" onClick={() => router.push("/impact-through-traccy-details/traccy-solar")} >03</li>
                              <li className="right-4" onClick={() => router.push("/impact-through-traccy-details/traccy-lab")}>04</li>
                              <li className="right-5" onClick={() => router.push("/impact-through-traccy-details/traccy-agro")}>05</li>
                           </>
                        }
                        {stageIndex === 2 &&
                           <li className="right-6" onClick={() => router.push("/impact-through-traccy-details/flyout")} >01</li>
                        }
                        {stageIndex === 3 &&
                           <li className="right-7" onClick={() => router.push("/impact-through-traccy-details/traccy-connect")}>01</li>
                        }
                     </ul>
                  </div>
               </section>
            }
         </div>
         {stageIndex !== 0 &&
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
      application_number: 6,
      month: 1,
      world: 6,
      banner: "/impact/5309059.png",
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
            number: "Traccy Agro",
            desc: "",
            image: "/impact/side-menu/traccy-agro.png",
            route: "traccy-agro"
         },
      ],
   },
   {
      stage: "Incubation",
      desc: "We are incubating new Project!",
      application: "Incubation",
      application_number: 1,
      month: 3,
      world: 1,
      banner: "/impact/5335415.png",
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
      banner: "/impact/5072310.png",
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
      banner: "/impact/2328116.png",
      projects: []
   }
]
export default ImpactThroughTraccy