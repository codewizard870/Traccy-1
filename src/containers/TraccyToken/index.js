import React, { useState } from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button } from 'antd';
import Slider from "react-slick";
import Countdown from "react-countdown";
import { PieChart } from 'react-minimal-pie-chart';
import './index.scss';
import { useHistory } from "react-router-dom";

import BannerImg from '../../assets/images/banner-img.png';
import videoimg from '../../assets/images/video-img.jpg';
import CommunityImg from '../../assets/images/community-access.svg';
import Stakingimg from '../../assets/images/staking-img.svg';
import PlatformImg from '../../assets/images/platform-img.png';
import leftHexa from '../../assets/images/left-hexa.svg';
import righttHexa from '../../assets/images/right-hexa.svg';
import righttHexa2 from '../../assets/images/right-hexa2.svg';
import HeaderBg1 from '../../assets/images/title-bg1.svg';
import HeaderBg2 from '../../assets/images/title-bg2.svg';
import VotingPower from '../../assets/images/voting-power.svg';

const TraccyToken = () => {
    const history = useHistory();
    const [countdownEndDate, setCountdownEndDate] = useState(
        new Date("March 2, 2023 00:00:00").getTime()
    );
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        customPaging: function (i) {
            return (
                <a>
                    {i === 0 && 'Community Access'}
                    {i === 1 && 'Staking Rewards'}
                    {i === 2 && 'Voting Power'}
                </a>
            );
        },
    };
    const [percent, setPercent] = useState(0);
    const onDownload = () => {
        const xhr = new XMLHttpRequest();
        const a = document.createElement("a");

        xhr.open(
            "GET",
            "/2022-09-23 09-34-14.mp4",
            true
        );

        xhr.responseType = "blob";
        xhr.onprogress = function (pr) {
            console.log(pr.loaded, pr.total, Math.floor(pr.loaded / pr.total * 1000) / 10);
            setPercent(Math.floor(pr.loaded / pr.total * 1000) / 10);
        };
        xhr.onload = function () {
            const file = new Blob([xhr.response], {
                type: "application/octet-stream",
            });
            window.URL = window.URL || window.webkitURL;
            a.href = window.URL.createObjectURL(file);
            a.download = "1.mp4";
            a.click();
        };
        xhr.send();

    }
    return (
        <div className='tracytoken-wrapper'>
            <section className='banner-section'>
                <img className='left-hexx-img' src={leftHexa} alt='Traccy' />
                <img className='right-hexx-img' src={righttHexa} alt='Traccy' />
                <Container>
                    <Row>
                        <Col lg='6' className="banner-left">
                            <h1>THE ECOSYSTEM THAT OPTIMALLY COMBINES DIGITAL AND REAL ASSETS</h1>
                            <p>
                            Buy our TRCY Token and profit from unlimited access to our exclusive services, explore our sustainable projects and use your voting power to create an impact through our platform.
                            </p>
                            <ul>
                                <li>
                                    <SvgIcon name='safe-icon' viewbox='0 0 40 44.246' />
                                    Safe
                                </li>
                                <li>
                                    <SvgIcon name='traceable-icon' viewbox='0 0 54.012 53.247' />
                                    Traceable
                                </li>
                                <li>
                                    <SvgIcon name='reliable-icon' viewbox='0 0 42.786 50.886' />
                                    Reliable
                                </li>
                            </ul>
                            <div className='learn-more-row'>
                                <Button onClick={() => history.push("/invest")}>
                                    WHITEPAPER
                                    <div className="icon">
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9819 5.99099L1.49951 0L3.71187 4.94669L12.9819 5.99099Z" fill="white" />
                                            <path d="M13.0003 6.00879L1.7373 11.9998L3.80339 6.99813L13.0003 6.00879Z" fill="white" />
                                            <path d="M0.987319 7.20036C1.53261 7.20036 1.97466 6.75741 1.97466 6.21102C1.97466 5.66462 1.53261 5.22168 0.987319 5.22168C0.442028 5.22168 0 5.66462 0 6.21102C0 6.75741 0.442028 7.20036 0.987319 7.20036Z" fill="white" />
                                        </svg>
                                    </div>
                                </Button>
                                <div className='white-paper'>
                                    <div>
                                        {/* <h4>White paper </h4> */}
                                        {percent > 0 && <p>Download {percent}%</p>}
                                    </div>
                                    <div className="download" onClick={onDownload}>
                                        <SvgIcon name='arrow-down' viewbox='0 0 25.87 25.87' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' className='banner-right'>
                            <img className='big-img' src={BannerImg} alt='BannerImg' />
                            <div className='contdown-row'>
                                <div className='upper-row'>
                                    <small>COUNTDOWN</small>
                                    <h2>To Token Sale End </h2>
                                </div>
                                <div className='contdown-inner'>
                                    <Countdown
                                        date={countdownEndDate}
                                        renderer={({ days, hours, minutes, seconds }) => {
                                            return (
                                                <>
                                                    <div className='contdown-col'>
                                                        <PieChart
                                                            animate
                                                            lineWidth='8'
                                                            animationDuration='900'
                                                            data={[
                                                                { title: '', value: 90, color: '#F22386' },
                                                                { title: '', value: 10, color: '#470C49' },
                                                            ]}
                                                        />
                                                        <div className='time'>
                                                            <h4>{days}</h4>
                                                            <small>DAYS</small>
                                                        </div>
                                                    </div>
                                                    <div className='contdown-col'>
                                                        <PieChart
                                                            animate
                                                            lineWidth='8'
                                                            animationDuration='1000'
                                                            data={[
                                                                { title: '', value: 90, color: '#F22386' },
                                                                { title: '', value: 10, color: '#470C49' },
                                                            ]}
                                                        />
                                                        <div className='time'>
                                                            <h4>{hours}</h4>
                                                            <small>HOURS</small>
                                                        </div>
                                                    </div>
                                                    <div className='contdown-col'>
                                                        <PieChart
                                                            animate
                                                            lineWidth='8'
                                                            animationDuration='1100'
                                                            data={[
                                                                { title: '', value: 90, color: '#F22386' },
                                                                { title: '', value: 10, color: '#470C49' },
                                                            ]}
                                                        />
                                                        <div className='time'>
                                                            <h4>{minutes}</h4>
                                                            <small>MIN</small>
                                                        </div>
                                                    </div>
                                                    <div className='contdown-col'>
                                                        <PieChart
                                                            animate
                                                            lineWidth='8'
                                                            animationDuration='1200'
                                                            data={[
                                                                { title: '', value: 90, color: '#F22386' },
                                                                { title: '', value: 10, color: '#470C49' },
                                                            ]}
                                                        />
                                                        <div className='time'>
                                                            <h4>{seconds}</h4>
                                                            <small>SEC</small>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                        <div className='scroll-action'>
                            <div className='mouse-btn'>
                                <SvgIcon name='mouse-icon' viewbox='0 0 24 35.001' />
                            </div>
                            <div className='arrow-bottom'>
                                <SvgIcon name='chevron-down' viewbox='0 0 23.616 13.503' />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='whytraccy-section'>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'>Why <span>Traccy</span> ?  </h1>
                            <p className='main-heading-text'>Traccy business model is supported by the following 4 pillars</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='lab' viewbox='0 0 76.732 48.846' />
                                </div>
                                <h4>TRCY LAB</h4>
                                <p>
                                    This is where impact is created, our projects are developed and third-party projects are reviewed
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='community' viewbox='0 0 63.185 49.33' />
                                </div>
                                <h4>TRCommunitY</h4>
                                <p>
                                    The community of impact investors invest globally in proven high-demand business models using the blockchain technology
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='token' viewbox='0 0 50.148 59.189' />
                                </div>
                                <h4>TRCY TOKEN</h4>
                                <p>
                                    The utility token allows the unrestricted use of the Traccy platform
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='connect' viewbox='0 0 62.216 54.826' />
                                </div>
                                <h4>TRCY CONNECT</h4>
                                <p>
                                    Our platform offers coaching, remittance services, project participations and much more
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='csp-section'>
                <div className='blur-circle-left'></div>
                <div className='blur-circle-right'></div>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <img className='left-hexx-img' src={leftHexa} alt='Traccy' />
                <img className='right-hexx-img' src={righttHexa2} alt='Traccy' />
                <Container>
                    <Row>
                        <Col>
                            <Slider {...settings}>
                                <div>
                                    <Row>
                                        <Col className='left-col'>
                                            <hr />
                                            <h4>01</h4>
                                            <div className='left-bottom'>
                                                <div>
                                                    <div className='icon-circle'>
                                                        <SvgIcon name='community-access-icon' viewbox='0 0 76.732 48.846' />
                                                    </div>
                                                    <h3>Direcrt Participation</h3>
                                                    <p>Get actively involved, influence project goals, decisions and outcomes of impact projects.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='right-col'>
                                            <img className='center-image' src={CommunityImg} alt='line' />
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col className='left-col'>
                                            <hr />
                                            <h4>02</h4>
                                            <div className='left-bottom'>
                                                <div>
                                                    <div className='icon-circle'>
                                                        <SvgIcon name='staking-rewards-icon' viewbox='0 0 63.185 49.33' />
                                                    </div>
                                                    <h3>Staking Rewards</h3>
                                                    <p>Buy NFTS, access Defi dApps, and explore Web3 across multiple networks</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='right-col'>
                                            <img className='center-image' src={Stakingimg} alt='line' />
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col className='left-col'>
                                            <hr />
                                            <h4>03</h4>
                                            <div className='left-bottom'>
                                                <div>
                                                    <div className='icon-circle'>
                                                        <SvgIcon name='voting-power-icon' viewbox='0 0 50.148 59.189' />
                                                    </div>
                                                    <h3>Voting Power</h3>
                                                    <p>Buy NFTS, access Defi dApps, and explore Web3 across multiple networks</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='right-col'>
                                            <img className='center-image' src={VotingPower} alt='line' />
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='platform-section'>
                <div className='blur-circle1'></div>
                <div className='blur-circle3'></div>
                <img className='title-bg' src={HeaderBg2} alt='BG' />
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'><span> Platform  </span> </h1>
                            <p className='main-heading-text'>After registration, imeediate access to services such as
                                Peer to Peer Payments, 
                                Remittance Services, 
                                Customisable credit cards 
                                Only possible with TRCY token</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='platform-img'>
                                <img src={PlatformImg} alt='Platform' />
                            </div>
                            <p className='bottom-text'>This is why <span>Traccy</span> is <br />the right fit</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default TraccyToken