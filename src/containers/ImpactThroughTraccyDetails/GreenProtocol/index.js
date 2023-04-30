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
import RightNumbers from '../../../components/Impact/right-numbers';
import Popup from '../../../components/Impact/pop-up';

const GreenProtocol = () => {
  const router = useHistory();
  const [showContent, setShowContent] = useState(1);

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

  return (
    <div className='green-protocol-wrapper' onClick={onClose}>
      <section className='banner-section'>
        <div className='about-banner' style={{ backgroundImage: "url(/impact/green-protocol/green-protocol.png)" }}></div>
        <Link to='/impact-through-traccy' className='backarrow'>
          <img src="/impact/backarrow.svg" alt="backarrow" />
        </Link>
        <div>
          <Container>
            <div className="stage-wrapper">
              <div className="stage-main">
                <div className="stage-left">
                  <h1>
                    Green Protocol
                  </h1>
                  <span className="desc">NFT fractionation for ownership<br/> of Green asset in the real world </span>
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
                        <h2>Green Protocol</h2>
                        <img src="/impact/green-protocol/green-protocol-logo.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/green-protocol/green-side.png" alt="mosquito" />
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
                          <h4>Tokenisation of Green Asset</h4>
                          <p>
                            Green protocol providing impact investment for those who want to support sustainability. By crowdfunding a real world green project combine with NFTs technology to generate sustainable profit sharing for a sustainable project
                          </p>
                        </div>
                        <div className='left-bottom'>
                          <h1>24</h1>
                          <div className='small-head'>
                            <p>Construction period</p>
                            <h4>Months</h4>
                          </div>
                        </div>
                      </div>
                      <div className='right-col'>
                        <img src="/impact/green-protocol/renewable_energy.png" alt="machine" />
                        <h1>NFTs as a real world asset</h1>
                        <p>
                          Decentralize NFT asset with less volatility with real asset and real world impact.
                        </p>
                      </div>
                    </div>
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
                  {/* <div className='points point-1'>
                    <span></span>
                    <div>01</div>
                  </div>
                  <div className='points point-2'>
                    <span></span>02
                  </div>
                  <div className='points point-3'>
                    03 <span></span>
                  </div>
                  <div className='points point-4'>
                    <span></span>
                    <div>04</div>
                  </div>
                  <div className='points point-5'>
                    05 <span></span>
                  </div>
                  <div className='points point-6'>
                    <div>06</div> <span></span>
                  </div>
                  <div className='points point-7'>
                    07 <span></span>
                  </div> */}
                  <Popup showContent={showContent} />
                </div>
                <img src={MapImg} alt='Map' />
              </div>
            </Col>
          </Row>
        </Container>
        <RightNumbers showContent={showContent} />
      </section>
    </div>
  )
};

export default GreenProtocol