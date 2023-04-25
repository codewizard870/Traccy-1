import React, { useState } from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Drawer } from 'antd';
import './index.scss';

import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';

import MapImg from '../../assets/images/map.png';

const ImpactThroughTraccy = () => {
   const router = useHistory();
   const slider = React.useRef(null);
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
         <div className='thumb-col-main'>
            {i === 0 && <div className='thumb-col'><span>Phase 1</span>Selection</div>}
            {i === 1 && <div className='thumb-col'><span>Phase 2</span>Incubation</div>}
            {i === 2 && <div className='thumb-col'><span>Phase 3</span>Launch</div>}
            {i === 3 && <div className='thumb-col'><span>Phase 4</span>Monitoring</div>}
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
      setStageIndex(index)
   }

   const onClose = () => {
      if (openModal)
         setOpen(false)
   }

   const goDetail = (project, index) => {
      if(project.route)
         router.push(`/impact-through-traccy-details/${project.route}`)
      else
      router.push(`/impact-through-traccy-details/${stageIndex}/${index}`)
   }
   return (
      <div className='itt-wrapper' onClick={onClose}>
         <section className='banner-section'>
            <div className='about-banner' style={{ backgroundImage: `url("/impact/5309059.jpg")` }}></div>
            <Slider {...settings2} ref={slider}>
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
                                    <span className="selection-desc">selection</span>
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
                                    <span>month</span>
                                 </div>
                                 <div className="world"><span>World Location</span></div>
                                 <div className="world-desc">
                                    <span>{data.world}</span>
                                    <span>countries</span>
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
                  {Sliders[stageIndex].projects.map((project, index) => (
                     <div className="item" onClick={() => goDetail(project, index)}>
                        <img src={project.image} alt="avatar"/>
                        <div className="splitter" />
                        <span>{project.number}</span>
                        <div className="splitter outer" />
                     </div>
                  ))}
               </div>
            </Drawer>
         </section>
         <section className='map-section'>
            <Container>
               <Row>
                  <Col>
                     <h2 className='header-title'>OUR GLOBAL PROJECTS</h2>
                     <div className='map-wrapper'>
                        <div className='project-center'>
                           <div className='points'>
                              <span></span>
                              <div>01</div>
                           </div>
                           <div className='points'>
                              <span></span>02
                           </div>
                           <div className='points'>
                              03 <span></span>
                           </div>
                           <div className='points'>
                              <span></span>
                              <div>04</div>
                           </div>
                           <div className='points'>
                              05 <span></span>
                           </div>
                           <div className='points'>
                              <div>06</div> <span></span>
                           </div>
                           <div className='points'>
                              07 <span></span>
                           </div>
                        </div>
                        <img src={MapImg} alt='Map' />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </div>
   )
};
export const Sliders = [
   {
      stage: "Selection",
      desc: "We are selecting new Project",
      application: "Application",
      application_number: 7,
      month: 1,
      world: 6,
      banner: "/impact/5309059.jpg",
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
      application_number: 2,
      month: 3,
      world: 2,
      banner: "/impact/5335415.jpg",
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
      desc: "We are launching new Project!",
      application: "Launching",
      application_number: 2,
      month: 2,
      world: 2,
      banner: "/impact/5072310.jpg",
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
      desc: "We are monitoring new Project!",
      application: "Monitoring",
      application_number: 2,
      month: 6,
      world: 2,
      banner: "/impact/2328116.jpg",
      projects: []
   }
]
export default ImpactThroughTraccy