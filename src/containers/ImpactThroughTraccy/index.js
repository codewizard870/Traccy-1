import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import BannerImg from '../../assets/images/itt-slide.jpg';

const ImpactThroughTraccy = () => {
    const history = useHistory();
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
        )
    };
    return (
        <div className='itt-wrapper'>
            <section className='banner-section'>
                <div className='social-media'>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='twitter' viewbox='0 0 36 29.239' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='facebook' viewbox='0 0 34.875 34.664' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' /></Button>
                </div>
                <Slider {...settings2} ref={slider}>
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <div className="stage-wrapper">
                                <div className="stage-main">
                                    <div className="stage-left">
                                        <h1>
                                            Selection Stage
                                        </h1>
                                        <div className="first-section">
                                            <span>Projects under Selection</span>
                                            <span>&nbsp;7&nbsp;</span>
                                        </div>
                                        <div className="first-section">
                                            <span>Numbers of Countries</span>
                                            <span>&nbsp;6&nbsp;</span>
                                        </div>
                                    </div>
                                    <div className="stage-right">
                                        <div className="project-list">
                                            <span>Project List</span>
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
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <div className="stage-wrapper">
                                <div className="stage-main">
                                    <div className="stage-left">
                                        <h1>
                                            Incubation Stage
                                        </h1>
                                        <div className="first-section">
                                            <span>Projects under Incubation</span>
                                            <span>&nbsp;3&nbsp;</span>
                                        </div>
                                        <div className="first-section">
                                            <span>Numbers of Countries</span>
                                            <span>&nbsp;2&nbsp;</span>
                                        </div>
                                    </div>
                                    <div className="stage-right">

                                    </div>
                                </div>
                                <Col sm='12' className='arrow-action'>
                                    <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                    <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                                </Col>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <Row>
                                <Col lg='6' className="banner-left">
                                    <p>
                                        NEXT EVENT
                                    </p>
                                    <h1>Epicurrence Summer Revival</h1>
                                    <p>
                                        Yosemite national park -- 4 day trip
                                    </p>
                                    <Button type='primary' onClick={() => history.push('/impact-through-traccy-details')}>Read More<SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
                                </Col>
                                <Col sm='12' className='arrow-action'>
                                    <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                    <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <Row>
                                <Col lg='6' className="banner-left">
                                    <p>
                                        NEXT EVENT
                                    </p>
                                    <h1>Epicurrence Summer Revival</h1>
                                    <p>
                                        Yosemite national park -- 4 day trip
                                    </p>
                                    <Button type='primary' onClick={() => history.push('/impact-through-traccy-details')}>Read More<SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
                                </Col>
                                <Col sm='12' className='arrow-action'>
                                    <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                    <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Slider>
            </section>
        </div>
    )
};

export default ImpactThroughTraccy