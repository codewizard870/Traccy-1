import React, { useRef } from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { useMediaQuery } from 'react-responsive'
import PageFlip from 'react-pageflip';
import './index.scss';

import MapImg from '../../../assets/images/map.png';
import { useState } from 'react';
import RightNumbers from '../../../components/Impact/right-numbers';
import Popup from '../../../components/Impact/pop-up';
import Stage from '../../../components/ImpactDetail/Stage';

const TraccyFarm = () => {
  const [showContent, setShowContent] = useState(4);

  const smallDeviceBook = useMediaQuery({ query: '(max-width: 991px)' })

  const bookRef = useRef();
  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  }
  const nextPage = () => {
    bookRef.current.pageFlip().flipNext()
  }

  return (
    <div className='traccy-agro-wrapper'>
      <Stage
        bg="/impact/traccy-agro/traccy-farm.png"
        title="Traccy Farm"
        content="Our first farm is a tomato farm in the Democratic Republic of Congo, which we manage using modern and sustainable methods. The tomato farm in DR Congo serves as a model for future cultivation projects in countries with great potential and high import scores."
        application="5’000’000 $"
        processing={3}
        event={27}
        profit={8}
        sdg={7}
        primaryColor="#50E456"
        secondaryColor="#42FF00"
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
                        <img src="/impact/traccy-agro/traccy-farm-logo.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/traccy-agro/traccy-farm-side.png" alt="mosquito" />
                      </div>
                      <div className='arrow-right-sm' onClick={nextPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' style={{fill:"white"}} />
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
                          <h4>Benefits at a glance</h4>
                          <p>
                            We reduce food imports and improve regional supply. Our tomatoes are sold locally, helping to create jobs and strengthen the local economy.
                          </p>
                        </div>
                        <div className='left-bottom'>
                          <h1>12</h1>
                          <div className='small-head'>
                            <p>Construction period</p>
                            <h4>months</h4>
                          </div>
                        </div>
                      </div>
                      <div className='right-col'>
                        <img src="/impact/traccy-agro/tomato.png" alt="machine" />
                        <h1>Farming together</h1>
                        <p>
                          We work closely with the local community to achieve long-term positive impacts.
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

export default TraccyFarm