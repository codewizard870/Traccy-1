import React, { useRef } from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { useMediaQuery } from 'react-responsive'
import PageFlip from 'react-pageflip';
import './index.scss';

import MapImg from '../../../assets/images/map.png';
import { useState } from 'react';
import RightNumbers from '../../../components/Impact/right-numbers';
import Stage from '../../../components/ImpactDetail/Stage';

const TraccySolar = () => {
  const [showContent, setShowContent] = useState(2);

  const smallDeviceBook = useMediaQuery({ query: '(max-width: 991px)' })
  
  const bookRef = useRef();
  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  }
  const nextPage = () => {
    bookRef.current.pageFlip().flipNext()
  }

  return (
    <div className='traccy-solar-wrapper'>
      <Stage
        bg="/impact/traccy-solar/traccy-solar.png"
        title="Traccy Solar"
        content="Traccy Solar provides sustainable energy solutions in developing countries. Areas in need of clean energy are identified and solar solutions are designed and implemented."
        application="2’500’000 $"
        processing={2}
        event={24}
        profit={9}
        sdg={8}
        primaryColor="#FFB800"
        secondaryColor="#DBFF00"
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
                        <img src="/impact/traccy-solar/traccy-solar-logo.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/traccy-solar/traccy-solar-side.png" alt="mosquito" />
                      </div>
                      <div className='arrow-right-sm' onClick={nextPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' style={{fill: "white"}}/>
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
                          <h4>Iimpact using Traccy Solar</h4>
                          <p>
                            Traccy Solar have the vision and mission to provide Solary Energy for DRC Congo and others Africans countries.
                          </p>
                        </div>
                        <div className='left-bottom'>
                          <h1>10</h1>
                          <div className='small-head'>
                            <p>Construction period</p>
                            <h4>Months</h4>
                          </div>
                        </div>
                      </div>
                      <div className='right-col'>
                        <img src="/impact/traccy-solar/solar-energy.png" alt="machine" />
                        <h1>Solar Energy is the future</h1>
                        <p>
                          We do impact for our environment and future using solar energy
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
                <img src="/impact/traccy-solar/traccy-solar-map.png" alt='Map' />
              </div>
            </Col>
          </Row>
        </Container>
        <RightNumbers showContent={showContent} />
      </section>
    </div>
  )
};

export default TraccySolar