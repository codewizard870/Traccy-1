import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button, Tabs } from 'antd';
import { useMediaQuery } from 'react-responsive'
import HTMLFlipBook from 'react-pageflip';
import './index.scss';

import BannerImg from '../../assets/images/itt-slide.jpg';
import MapImg from '../../assets/images/map.png';
import PopupImg1 from '../../assets/images/popup-img1.jpg';
import PopupImg2 from '../../assets/images/popup-img2.jpg';
import PopupImg3 from '../../assets/images/popup-img3.jpg';
import BookImg1 from '../../assets/images/bookimg1.png'

const items = [
    {
        key: '1',
        label: `Planing`,
    },
    {
        key: '2',
        label: `Engineering`,
    },
    {
        key: '3',
        label: `Architecture`,
    },
    {
        key: '4',
        label: `Locations`,
    },
];

const ImpactThroughTraccyDetails = () => {
    const [showContent1, setShowContent1] = React.useState(false);
    const [showContent2, setShowContent2] = React.useState(false);
    const [showContent3, setShowContent3] = React.useState(false);
    const smallDeviceBook = useMediaQuery({ query: '(max-width: 991px)' })
    const hideModal = () => {
        setShowContent1(false);
        setShowContent2(false);
        setShowContent3(false);
    }
    const showModal1 = () => {
        setShowContent1(true);
        setShowContent2(false);
        setShowContent3(false);
    };
    const showModal2 = () => {
        setShowContent2(true);
        setShowContent1(false);
        setShowContent3(false);
    };
    const showModal3 = () => {
        setShowContent3(true);
        setShowContent1(false);
        setShowContent2(false);
    };
    return (
        <div className='itt-dtl-wrapper'>
            <section className='banner-section'>
                <div className='social-media'>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='twitter' viewbox='0 0 36 29.239' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='facebook' viewbox='0 0 34.875 34.664' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' /></Button>
                </div>
                <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                <Container>
                    <Row>
                        <Col lg='6' className="banner-left">
                            <p>
                                This building
                            </p>
                            <h1>We are planning to Construction</h1>
                            <div className='left-bottom'>
                                <div>
                                    <p>Building area </p>
                                    <h2>2,986 <span>m<sup>2</sup></span></h2>
                                </div>
                                <SvgIcon name='line-circle' viewbox='0 0 488.004 10.996' />
                            </div>
                        </Col>
                        <Col lg='6' className="banner-right">
                            <div className='right-upper'>
                                <p>Building Value</p>
                                <h2>25 986 000<span>$</span></h2>
                            </div>
                            <div className='right-bottom'>
                                <p>Building Value </p>
                                <h2>7 <span>years</span></h2>
                            </div>
                            <div className='build-arrow'>
                                <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                <span>
                                    Building  Value
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='book-section'>
                <Container>
                    <Row>
                        <Col>
                            <HTMLFlipBook width={300} height={smallDeviceBook ? 400 : 160} size={smallDeviceBook ? 'fixed' : 'stretch'}>
                                <div className="demoPage">
                                    <div className='bookpage-inner-left'>
                                        <div className='uppaer-row'>
                                            <p>
                                                Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus
                                            </p>
                                        </div>
                                        <div className='bottom-row'>
                                            <h2>Aura</h2>
                                            <h4>Modern engineering</h4>
                                            <Tabs defaultActiveKey="1" items={items} />
                                        </div>
                                        <div className='arrow-right-sm'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                    </div>
                                </div>
                                <div className="demoPage">
                                    <div className='bookpage-inner-right'>
                                        <div className='arrow-left-sm'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                        <div className='left-col'>
                                            <div className='left-upper'>
                                                <h4>We are planning to Construction</h4>
                                                <p>
                                                    Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus
                                                </p>
                                            </div>
                                            <div className='left-bottom'>
                                                <h1>8</h1>
                                                <div className='small-head'>
                                                    <p>Construction period</p>
                                                    <h4>Month</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right-col'>
                                            <img src={BookImg1} alt={BookImg1} />
                                            <h4>We are planning</h4>
                                            <p>Orchid wer nehmen Personen of meine</p>
                                        </div>
                                        <div className='arrow-right'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                    </div>
                                </div>
                                <div className="demoPage">
                                    <div className='bookpage-inner-left'>
                                        <div className='arrow-left'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                        <div className='uppaer-row'>
                                            <p>
                                                Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus
                                            </p>
                                        </div>
                                        <div className='bottom-row'>
                                            <h2>Aura</h2>
                                            <h4>Modern engineering</h4>
                                            <Tabs defaultActiveKey="1" items={items} />
                                        </div>
                                        <div className='arrow-right-sm'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                    </div>
                                </div>
                                <div className="demoPage">
                                    <div className='bookpage-inner-right'>
                                        <div className='arrow-left-sm'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                        <div className='left-col'>
                                            <div className='left-upper'>
                                                <h4>We are planning to Construction</h4>
                                                <p>
                                                    Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus
                                                </p>
                                            </div>
                                            <div className='left-bottom'>
                                                <h1>8</h1>
                                                <div className='small-head'>
                                                    <p>Construction period</p>
                                                    <h4>Month</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right-col'>
                                            <img src={BookImg1} alt={BookImg1} />
                                            <h4>We are planning</h4>
                                            <p>Orchid wer nehmen Personen of meine</p>
                                        </div>
                                        <div className='arrow-right'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                    </div>
                                </div>
                                <div className="demoPage">
                                    <div className='bookpage-inner-left'>
                                        <div className='arrow-left'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                        <div className='uppaer-row'>
                                            <p>
                                                Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus
                                            </p>
                                        </div>
                                        <div className='bottom-row'>
                                            <h2>Aura</h2>
                                            <h4>Modern engineering</h4>
                                            <Tabs defaultActiveKey="1" items={items} />
                                        </div>
                                    </div>
                                    <div className='arrow-right-sm'>
                                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                    </div>
                                </div>
                                <div className="demoPage">
                                    <div className='bookpage-inner-right'>
                                        <div className='arrow-left-sm'>
                                            <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                                        </div>
                                        <div className='left-col'>
                                            <div className='left-upper'>
                                                <h4>We are planning to Construction</h4>
                                                <p>
                                                    Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus
                                                </p>
                                            </div>
                                            <div className='left-bottom'>
                                                <h1>8</h1>
                                                <div className='small-head'>
                                                    <p>Construction period</p>
                                                    <h4>Month</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right-col'>
                                            <img src={BookImg1} alt={BookImg1} />
                                            <h4>We are planning</h4>
                                            <p>Orchid wer nehmen Personen of meine</p>
                                        </div>
                                    </div>
                                </div>
                            </HTMLFlipBook>
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
                                    {showContent1 &&
                                        <div className='popup'>
                                            <div className='popup-inner'>
                                                <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} />
                                                <img src={PopupImg1} alt="Popup" />
                                            </div>
                                        </div>
                                    }
                                    {showContent2 &&
                                        <div className='popup'>
                                            <div className='popup-inner'>
                                                <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} />
                                                <img src={PopupImg2} alt="Popup" />
                                            </div>
                                        </div>
                                    }
                                    {showContent3 &&
                                        <div className='popup'>
                                            <div className='popup-inner'>
                                                <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} />
                                                <img src={PopupImg3} alt="Popup" />
                                            </div>
                                        </div>
                                    }
                                    <div className='points' onClick={showModal1}>
                                        <span></span>
                                        <div>01</div>
                                    </div>
                                    <div className='points' onClick={showModal2}>
                                        <span></span>02
                                    </div>
                                    <div className='points' onClick={showModal3}>
                                        03 <span></span>
                                    </div>
                                </div>
                                <img src={MapImg} alt='Map' />
                            </div>
                        </Col>
                    </Row>
                </Container>
                {showContent1 &&
                    <div className='bottom-left-details details1'>
                        <div className='numbers'>
                            <div className='color-bar'></div>
                            01.
                        </div>
                        <div className='right-content'>
                            <h4>OUR GLOBAL PROJECTS Colmarien, Sweden, Europe</h4>
                            <p>
                                Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodusViennes sentis motesir Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus Viennes sentis motesir Orchid wer nehmen Personen of meine
                            </p>
                        </div>
                    </div>
                }
                {showContent2 &&
                    <div className='bottom-left-details details2'>
                        <div className='numbers'>
                            <div className='color-bar'></div>
                            02.
                        </div>
                        <div className='right-content'>
                            <h4>OUR GLOBAL PROJECTS Colmarien, Sweden, Europe</h4>
                            <p>
                                Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodusViennes sentis motesir Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus Viennes sentis motesir Orchid wer nehmen Personen of meine
                            </p>
                        </div>
                    </div>
                }
                {showContent3 &&
                    <div className='bottom-left-details details3'>
                        <div className='numbers'>
                            <div className='color-bar'></div>
                            03.
                        </div>
                        <div className='right-content'>
                            <h4>OUR GLOBAL PROJECTS Colmarien, Sweden, Europe</h4>
                            <p>
                                Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodusViennes sentis motesir Orchid wer nehmen Personen of meine Perdurent montes, necetur ridodus Viennes sentis motesir Orchid wer nehmen Personen of meine
                            </p>
                        </div>
                    </div>
                }
                <div className='right-numbers'>
                    <ul>
                        <li className={showContent1 === true ? 'selected' : ''} onClick={showModal1}>01 <span>Realization</span></li>
                        <li className={showContent2 === true ? 'selected' : ''} onClick={showModal2}>02 <span>Realization</span></li>
                        <li className={showContent3 === true ? 'selected' : ''} onClick={showModal3}>03 <span>Realization</span></li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default ImpactThroughTraccyDetails