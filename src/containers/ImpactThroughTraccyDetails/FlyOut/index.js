import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { Drawer, Tabs } from 'antd';
import { useMediaQuery } from 'react-responsive'
import PageFlip from 'react-pageflip';
import './index.scss';

import { Link, useHistory } from 'react-router-dom';

import MapImg from '../../../assets/images/map.png';
import { Sliders } from '../../ImpactThroughTraccy';
import BussinessModel from '../../../components/Impact/FlyOut/bussiness-model';
import Stage from '../../../components/ImpactDetail/Stage';

const items = [
  {
    key: '1',
    label: `Bussiness`,
  },
  {
    key: '2',
    label: `Financial`,
  },
  {
    key: '3',
    label: `STO`,
  },
  {
    key: '4',
    label: `Roadmap`,
  },
];

const FlyOut = () => {
  const [showContent, setShowContent] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [contentExpand, setContentExpan] = useState(false);

  useEffect(() => {
    let imgs = document.getElementsByClassName("fly-content-image");
    for (let i = 0; i < imgs.length; i++) {
      if (i === contentIndex)
        imgs[i].classList.add("active");
      else
        imgs[i].classList.remove("active");
    }
  }, [contentIndex]);

  const smallDeviceBook = useMediaQuery({ query: '(max-width: 991px)' })
  const hideModal = () => {
    setShowContent(-1);
  }
  const showModal = (index) => {
    setShowContent(index);
  };

  const bookRef = useRef();
  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  }
  const nextPage = () => {
    bookRef.current.pageFlip().flipNext()
  }

  const [tab, setTab] = useState("1");
  return (
    <div className='flyout-wrapper'>
      <Stage 
        bg="/impact/flyout/flyout.png"
        title="FlyOut"
        content="The automatic misting system is a type of insect control system using a combination of water and organic insecticide to create a mist that kills mosquitos and other flying insects."
        application="1’200’000 $"
        processing="9"
        event="18"
        profit="12"
        sdg="5"
        primaryColor="#B9FCA8"
        secondaryColor="#78F176"
      />
      <section className='book-section'>
        <Container>
          <Row>
            <Col>
              <PageFlip width={300} height={smallDeviceBook ? 400 : 160} size={smallDeviceBook ? 'fixed' : 'stretch'} useMouseEvents={false} ref={bookRef}>
                <div className="demoPage">
                  <div className='bookpage-inner-left'>
                    <div className="row">
                      <div className="left-section">
                        <h2>FlyOut</h2>
                        <img src="/impact/flyout/mosquito-solution.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/flyout/mosquito7.png" alt="mosquito" />
                      </div>
                      <div className='arrow-right-sm' onClick={nextPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-right'>
                    <div className='arrow-left-sm' onClick={prevPage}>
                      <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                    </div>
                    <div className='left-col'>
                      <div className='left-upper'>
                        <h4>Mosquito System</h4>
                        <p>
                          Our automatic misting system for mosquito control is a type of insect control system that uses a combination of water and insecticide to create a mist that kills Mosquitoes and other flying insects. The misting system is installed in an outdoor area, such as a backyard or patio, and is typically controlled by a timer or a remote control.
                        </p>
                      </div>
                      <div className='left-bottom'>
                        <h1>18</h1>
                        <div className='small-head'>
                          <p>Construction period</p>
                          <h4>Months</h4>
                        </div>
                      </div>
                    </div>
                    <div className='right-col'>
                      <img src="/impact/flyout/mosqmachine3.png" alt="machine" />
                    </div>
                  </div>
                  <div className='arrow-right' onClick={nextPage}>
                    <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-left'>
                    <div className="row">
                      <div className='arrow-left' onClick={prevPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                      <div className="left-section notfirst">
                        <h2>FlyOut</h2>
                        <img src="/impact/flyout/mosquito-solution.png" alt="mosquito" />
                      </div>
                      <div className="right-section notfirst">
                        <span>
                          First organic<br />
                          solution for reduce<br />
                          mosquito population
                        </span>
                      </div>
                      <div className='arrow-right-sm' onClick={nextPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                    </div>
                    <div className="row">
                      <div className="tab-section notfirst">
                        <Tabs defaultActiveKey="1" items={items} onChange={(activeKey) => setTab(activeKey)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-right'>
                    <div className='arrow-left-sm' onClick={prevPage}>
                      <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                    </div>
                    {tab === "1" &&
                      <div className="second">
                        <h1>Business Model</h1>
                        <p>Reduce the Mosquito population with having in the same time reduction of diseases like Malaria or Dengue.</p>
                        <div className="second-row">
                          <BussinessModel />
                          <div className="second-col">
                            <h1>Estimation</h1>
                            <p>Disease reduction</p>
                            <h2>2.2 Million cases </h2>
                            <p>Hospitalisation saving costs</p>
                            <h2>$ 660 Million  </h2>
                          </div>
                        </div>
                      </div>
                    }
                    {tab === "2" &&
                      <div className="third">
                        <h1>Financial</h1>
                        <div className="third-row first">
                          <p>Initial Investment</p>
                          <p>Net Profit Estimate in 5 Years</p>
                        </div>
                        <div className="third-row">
                          <h2><span>$ 2</span> Milion</h2>
                          <h2><span>$ 225</span> Milion</h2>
                        </div>

                        <div className="third-row first">
                          <p>Estimated Profit in 5 Years</p>
                          <p>Break Event Point</p>
                        </div>
                        <div className="third-row">
                          <h2><span>107</span> X</h2>
                          <h2><span>14</span> Months</h2>
                        </div>
                      </div>
                    }
                    {tab === "3" &&
                      <div className="four">
                        <img src="/impact/flyout/mosqfund.png" alt="mosqfund" />
                      </div>
                    }
                    {tab === "4" &&
                      <div className="five">
                        <img src="/impact/flyout/roadmap.png" alt="roadmap" />
                      </div>
                    }
                  </div>
                </div>
              </PageFlip>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='map-section'>
        <div className='blur-circle1'></div>
        <div className='blur-circle2'></div>
        <div className='blur-circle3'></div>
        <Container>
          <Row>
            <Col>
              <h2 className='header-title'>OUR GLOBAL PROJECTS</h2>
              <div className='map-wrapper'>
                <div className='project-center'>
                  {/* <div className='points' onClick={() => showModal(0)}>
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
                  </div> */}
                  {showContent === 0 &&
                    <div className='popup'>
                      <div className='popup-inner'>
                        {/* <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} /> */}
                        <div className="content-wrapper">
                          <div className="content-control">
                            <div className="control-button" onClick={() => setContentIndex(0)}>
                              <img className="nth1" src="/impact/flyout/content-control/1.svg" alt='1' style={{ width: "30px" }} />
                              <span className="left">System</span>
                            </div>
                            <div className="control-button" onClick={() => setContentIndex(1)}>
                              <img className="nth2" src="/impact/flyout/content-control/2.svg" alt='2' style={{ width: "29px" }} />
                              <span className="right">Revenue</span>
                            </div>
                            <div className="control-button" onClick={() => setContentIndex(2)}>
                              <img className="nth3" src="/impact/flyout/content-control/3.svg" alt='3' style={{ width: "30px" }} />
                              <span className="left">Sickness<br/>Reduction</span>
                            </div>
                            <div className="control-button" onClick={() => setContentIndex(3)}>
                              <img className="nth4" src="/impact/flyout/content-control/4.svg" alt='4' style={{ width: "37px" }} />
                              <span className="right">Hospitalisation Saving</span>
                            </div>
                            <div className="control-button" onClick={() => setContentExpan(!contentExpand)}>
                              <img className="nth5" src="/impact/flyout/content-control/5.svg" alt='4' style={{ width: "25px" }} />
                              <span className="left">Job<br/>Creation</span>
                            </div>
                            <div className="control-button" onClick={() => setContentIndex(4)}>
                              <img className="nth6" src="/impact/flyout/content-control/6.svg" alt='4' style={{ width: "28px" }} />
                              <span className="right">More</span>
                            </div>
                            {contentExpand &&
                              <>
                                <div className="control-button" onClick={() => setContentIndex(5)}>
                                  <img className="nth7" src="/impact/flyout/content-control/7.png" alt='4' style={{ width: "25px" }} />
                                  <span className="left">Industry Innovation<br/>and Infrastructure</span>
                                </div>
                                <div className="control-button">
                                  <img className="nth8" src="/impact/flyout/content-control/8.png" alt='4' style={{ width: "28px" }} />
                                  <span className="right"> Responsible consumption<br/>and production</span>
                                </div>
                                <div className="control-button">
                                  <img className="nth9" src="/impact/flyout/content-control/9.png" alt='4' style={{ width: "25px" }} />
                                  <span className="left">Good health<br/> and well-being</span>
                                </div>
                                <div className="control-button">
                                  <img className="nth10" src="/impact/flyout/content-control/10.png" alt='4' style={{ width: "28px" }} />
                                  <span className="right">Climate Action</span>
                                </div>
                              </>
                            }
                          </div>
                          <div className="content">
                            <div className="fly-content-image">
                              <img src="/impact/flyout/content/1.svg" alt="1" />
                            </div>
                            <div className="fly-content-image">
                              <img src="/impact/flyout/content/2.svg" alt="1" />
                            </div>
                            <div className="fly-content-image">
                              <img src="/impact/flyout/content/3.svg" alt="1" />
                            </div>
                            <div className="fly-content-image">
                              <img src="/impact/flyout/content/4.svg" alt="1" />
                            </div>
                            <div className="fly-content-image">
                              <img src="/impact/flyout/content/5.svg" alt="1" />
                            </div>
                            <div className="fly-content-image">
                              <img src="/impact/flyout/content/6.svg" alt="1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <img src={MapImg} alt='Map' />
              </div>
            </Col>
          </Row>
        </Container>
        {showContent === 0 &&
          <div className='bottom-left-details details1'>
            <div className='numbers'>
              <div className='color-bar'></div>
              01.
            </div>
            <div className='right-content'>
              <h4>FlyOut</h4>
              <p>
                Automatic mosquito solution reducing the mosquito population in organic way
              </p>
            </div>
          </div>
        }
        <div className='right-numbers'>
          <ul>
            <li className={showContent === 0 ? 'selected' : ''} onClick={() => showModal(0)}>
              01 <span>FlyOut<br />Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
};

export default FlyOut