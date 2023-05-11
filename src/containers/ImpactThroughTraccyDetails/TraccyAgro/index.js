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

const TraccyAgro = () => {
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
        processing="2"
        event="2"
        profit="23"
        sdg="7"
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
                        <h2>Traccy Agro</h2>
                        <img src="/impact/traccy-agro/traccy-agro-logo.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/traccy-agro/traccy-agro-side.png" alt="mosquito" />
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
                          <h4>What is the benefit of TomatoLand?</h4>
                          <p>
                            Creating a natural ecosystem for growing tomato, giving people job opportunity and sale the tomato in forms of products
                          </p>
                        </div>
                        <div className='left-bottom'>
                          <h1>12</h1>
                          <div className='small-head'>
                            <p>Construction period</p>
                            <h4>Months</h4>
                          </div>
                        </div>
                      </div>
                      <div className='right-col'>
                        <img src="/impact/traccy-agro/tomato.png" alt="machine" />
                        <h1>Farming together</h1>
                        <p>
                          Empower people for farming and make good ant testy products based on tomato
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

export default TraccyAgro