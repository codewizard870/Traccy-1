import React, { useRef } from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { Drawer, Tabs } from 'antd';
import { useMediaQuery } from 'react-responsive'
import PageFlip from 'react-pageflip';
import './index.scss';

import { Link, useHistory } from 'react-router-dom';

import MapImg from '../../../assets/images/map.png';
import { useState } from 'react';
import { Sliders } from '../../ImpactThroughTraccy';

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

const TraccyConnect = () => {
  const router = useHistory();
  const [showContent, setShowContent] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [contentExpand, setContentExpan] = useState(false);

  const smallDeviceBook = useMediaQuery({ query: '(max-width: 991px)' })
  const hideModal = () => {
    setShowContent(-1);
  }
  const showModal = (index) => {
    setShowContent(index);
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
    if (project.route)
      router.push(`/impact-through-traccy-details/${project.route}`)
    else
      router.push(`/impact-through-traccy-details/${stageIndex}/${index}`)
  }

  const bookRef = useRef();
  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  }
  const nextPage = () => {
    bookRef.current.pageFlip().flipNext()
  }

  const [tab, setTab] = useState("1");
  return (
    <div className='traccyconnect-wrapper' onClick={onClose}>
      <section className='banner-section'>
        <div className='about-banner' style={{ backgroundImage: "url(/impact/traccy-connect.png)" }}></div>
        <Link to='/impact-through-traccy' className='backarrow'>
          <img src="/impact/backarrow.svg" alt="backarrow" />
        </Link>
        <div>
          <Container>
            <div className="stage-wrapper">
              <div className="stage-main">
                <div className="stage-left">
                  <h1>
                    Traccy Connect
                  </h1>
                  <span className="desc">
                    Impactful Projects through Asset- <br />Backed Tokenization Platform
                  </span>
                  <span className="application">Fundraising required</span>
                  <div className="selection">
                    <span className="number">7’500’000 $</span>
                  </div>
                  {/* <div className="project-list-button" onClick={() => onConnect(0)}>
                    <div className="list-indicator" />
                    <span>Project List</span>
                  </div> */}
                </div>
                <div className="stage-right">
                  <div className="processing"><span>Processing Time</span></div>
                  <div className="processing-desc">
                    <span>4</span>
                    <span>months</span>
                  </div>
                  <div className="world"><span>Break Event Point</span></div>
                  <div className="world-desc">
                    <span>18</span>
                    <span>months</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
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
                <img src={project.image} alt="avatar" />
                <div className="splitter" />
                <span>{project.number}</span>
                <div className="splitter outer" />
              </div>
            ))}
          </div>
        </Drawer>
      </section>
      <section className='book-section'>
        <Container>
          <Row>
            <Col>
              <PageFlip width={300} height={smallDeviceBook ? 400 : 160} size={smallDeviceBook ? 'fixed' : 'stretch'} useMouseEvents={false} ref={bookRef}>
                <div className="demoPage">
                  <div className='bookpage-inner-left'>
                    <div className="row">
                      <div className="left-section">
                        <h2>Traccy Connect</h2>
                        <img src="/impact/traccy-connect-logo.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/traccy-connect-side.png" alt="mosquito" />
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
                    <div className="first">
                      <div className='left-col'>
                        <div className='left-upper'>
                          <h4>Invest with Impact with Traccy Connect!</h4>
                          <p>
                            Our decentralized finance solution enables global investors to invest in impactful entrepreneurial projects in developing countries instantly through Asset-Backed Tokenization, receiving economic rewards while addressing development and investment issues.
                          </p>
                        </div>
                        <div className='left-bottom'>
                          <h1>4</h1>
                          <div className='small-head'>
                            <p>Construction period</p>
                            <h4>Months</h4>
                          </div>
                        </div>
                      </div>
                      <div className='right-col'>
                        <img src="/impact/traccy-connect/coin.png" alt="machine" />
                        <h1>Traccy Connect</h1>
                        <h2>Invest in Impact, make changes!</h2>
                        <p>
                          We facilitate access to the international market for people in developing countries, allowing them to participate in projects and benefit from low-cost services, which have a positive impact on their daily lives.
                        </p>
                      </div>
                    </div>
                    <div className='arrow-right' onClick={nextPage}>
                      <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                    </div>
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-left'>
                    <div className="row">
                      <div className='arrow-left' onClick={prevPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                      <div className="left-section notfirst">
                        <h2>Traccy Connect</h2>
                        <img src="/impact/traccy-connect-logo.png" alt="logo" />
                        <Tabs defaultActiveKey="1" items={items} onChange={(activeKey) => setTab(activeKey)} />
                      </div>
                      <div className="right-section">
                        <img src="/impact/traccy-connect-side.png" alt="mosquito" />
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
                    {tab === "1" &&
                      <div className="second">
                        <h1>Business Model</h1>
                        <p>Traccy Connect is a innovative platform which is base in following pillars:</p>
                        <div className="second-row">
                          <div className="panel">
                            <div className="second-col">
                              <img src="/impact/traccy-connect/36231.png" alt="setting" />
                              <span>Features</span>
                            </div>
                            <span>
                              Impact<br />
                              Education<br />
                              Investment<br />
                              Charity<br />
                              Community<br />
                              Carbon<br />
                              offsetting
                            </span>
                          </div>
                          <div className="panel">
                            <div className="second-col">
                              <img src="/impact/traccy-connect/circular.png" alt="setting" />
                              <span>Sectors</span>
                            </div>
                            <span>
                              Renewable Energy<br />
                              Regenerative Agriculture<br />
                              RecyclingWater supply<br />
                              Affordable living space<br />
                              Infrastructure<br />
                              Access to education<br />
                              Healtcare
                            </span>
                          </div>
                          <div className="panel">
                            <div className="second-col">
                              <img src="/impact/traccy-connect/pie.png" alt="setting" />
                              <span>Blockchain</span>
                            </div>
                            <span>
                              Decentralisation<br />
                              Scalability<br />
                              Transparency<br />
                              Security<br />
                              Accessibility<br />
                              Time Reduction<br />
                              eduction
                            </span>
                          </div>
                        </div>
                        <div className="second-row second-p">
                          <div className="second-bussiness-avatar">
                            <img src="/impact/traccy-connect/archery-note.png" alt="archery" />
                            <span>3 Years<br />Targets</span>
                          </div>
                          <div className="second-bussiness-col">
                            <div className="second-bussiness-row">
                              <span>Impact Projects</span>
                              <span>Hospitality saving</span>
                              <span>Community</span>
                            </div>
                            <div className="second-bussiness-row">
                              <h1>30+</h1>
                              <h1>660M </h1>
                              <h1>100k+ </h1>
                            </div>
                            <div className="second-bussiness-row">
                              <span>Employees</span>
                              <span>Countries</span>
                              <span>Investments</span>
                            </div>
                            <div className="second-bussiness-row">
                              <h1>2000+</h1>
                              <h1>15+</h1>
                              <h1>200M</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {tab === "2" &&
                      <div className="third">
                        <h1>Financial</h1>
                        <div className="third-row margin">
                          <p>First Round</p>
                          <p>Estimate Profit</p>
                        </div>
                        <div className="third-row">
                          <h2><span>$ 250’000</span></h2>
                          <h2><span>$ 32.5M</span></h2>
                        </div>

                        <div className="third-row margin">
                          <p>Est. ROI from 1st Round in 5Y</p>
                          <p>Break Even Point</p>
                        </div>
                        <div className="third-row">
                          <h2><span>130</span> X</h2>
                          <h2><span>18</span> Months</h2>
                        </div>
                      </div>
                    }
                    {tab === "3" &&
                      <div className="four">
                        <img src="/impact/traccy-connect/tokenomics.png" alt="tokenomics" />
                      </div>
                    }
                    {tab === "4" &&
                      <div className="five">
                        <img src="/impact/traccy-connect/roadmap.svg" alt="roadmap" />
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
                              <img className="nth1" src="/impact/traccy-connect/content-control/1.svg" alt='1' style={{ width: "30px" }} />
                            </div>
                            <div className="control-button" onClick={() => setContentIndex(1)}>
                              <img className="nth2" src="/impact/traccy-connect/content-control/2.svg" alt='2' style={{ width: "29px" }} />
                            </div>
                            <div className="control-button" onClick={() => setContentExpan(!contentExpand)}>
                              <img className="nth3" src="/impact/traccy-connect/content-control/3.svg" alt='3' style={{ width: "30px" }} />
                            </div>
                            <div className="control-button" onClick={() => setContentIndex(3)}>
                              <img className="nth4" src="/impact/traccy-connect/content-control/4.svg" alt='4' style={{ width: "37px" }} />
                            </div>
                            {contentExpand &&
                              <>
                                <div className="control-button">
                                  <img className="nth5" src="/impact/traccy-connect/content-control/5.svg" alt='4' style={{ width: "25px" }} />
                                </div>
                                <div className="control-button" onClick={() => setContentIndex(4)}>
                                  <img className="nth6" src="/impact/traccy-connect/content-control/6.svg" alt='4' style={{ width: "28px" }} />
                                </div>
                                <div className="control-button" onClick={() => setContentIndex(5)}>
                                  <img className="nth7" src="/impact/traccy-connect/content-control/7.svg" alt='4' style={{ width: "25px" }} />
                                </div>
                                <div className="control-button" onClick={() => setContentIndex(6)}>
                                  <img className="nth8" src="/impact/traccy-connect/content-control/8.png" alt='4' style={{ width: "28px" }} />
                                </div>
                                <div className="control-button" onClick={() => setContentIndex(7)}>
                                  <img className="nth9" src="/impact/traccy-connect/content-control/9.svg" alt='4' style={{ width: "25px" }} />
                                </div>
                                <div className="control-button" onClick={() => setContentIndex(8)}>
                                  <img className="nth10" src="/impact/traccy-connect/content-control/10.png" alt='4' style={{ width: "28px" }} />
                                </div>
                              </>
                            }
                          </div>
                          <div className="content">
                            {contentIndex === 0 &&
                              <img src="/impact/traccy-connect/content/1.svg" alt="1" />
                            }
                            {contentIndex === 1 &&
                              <img src="/impact/traccy-connect/content/2.svg" alt="1" />
                            }
                            {contentIndex === 2 &&
                              <img src="/impact/traccy-connect/content/3.svg" alt="1" />
                            }
                            {contentIndex === 3 &&
                              <img src="/impact/traccy-connect/content/4.png" alt="1" />
                            }
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
          <div className='bottom-left-details details3'>
            <div className='numbers'>
              <div className='color-bar'></div>
              01.
            </div>
            <div className='right-content'>
              <h4>Traccy Connect</h4>
              <p>
                Building a community of Impact Investors that’s try to solve real world problems
              </p>
            </div>
          </div>
        }
        <div className='right-numbers'>
          <ul>
            <li className={showContent === 0 ? 'selected' : ''} onClick={() => showModal(0)}>
              01 <span>TRACCY CONNECT</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
};

export default TraccyConnect