import React, { useRef } from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { Drawer, Tabs } from 'antd';
import { useMediaQuery } from 'react-responsive'
import PageFlip from 'react-pageflip';
import './index.scss';

import { Link, useHistory } from 'react-router-dom';

import MapImg from '../../../assets/images/map.png';
import PopupImg1 from '../../../assets/images/popup-img1.jpg';
import PopupImg2 from '../../../assets/images/popup-img2.jpg';
import PopupImg3 from '../../../assets/images/popup-img3.jpg';
import { useState } from 'react';
import { Sliders } from '../../ImpactThroughTraccy';
import RightNumbers from '../../../components/Impact/right-numbers';
import Popup from '../../../components/Impact/pop-up';
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

const Lynx = () => {
  const router = useHistory();
  const [showContent, setShowContent] = useState(0);

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
    <div className='lynx-wrapper' onClick={onClose}>
      <Stage 
        bg="/impact/lynx/lynx.png"
        title="LynxVerse"
        content="LynxVerse is a metaverse game designed for mental health and wellbeing with implementation of cognitive therapy behaviour scenarios."
        application="1’000’000 $"
        processing="4"
        event="18"
        profit="12"
        sdg="5"
        primaryColor="#9BCFEC"
        secondaryColor="#5C99D1"
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
                        <h2>LynxVerse</h2>
                        <img src="/impact/lynx/lynx-logo.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/lynx/lynx-side.png" alt="mosquito" />
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
                          <h4>What is the benefit of LynxVerse?</h4>
                          <p>
                            <ul>
                              <li>
                                Anonymous game on the metaverse: Users can play the game scenarios without giving away any personal information
                              </li>
                              <li>
                                Scenario-based dynamic gameplay:
                                Scenarios are scientifically constructed to target specific mental health issues and can be targeted towards key groups.
                              </li>
                            </ul>
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
                        <img src="/impact/lynx/lynx21.png" alt="machine" />
                        <h1>Metaverse for Mental Health & Well-Being</h1>
                        <p>
                          Decentralize Metaverse  Technology to increase the privacy & security and give better confidence between clients and Therapist
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

export default Lynx