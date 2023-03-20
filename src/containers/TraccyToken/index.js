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
                            <h1>We integrate Real economy Into the <span>Digital one</span> </h1>
                            <p>
                                Buy NFTS, access Defi dApps, and explore Web3 across multiple
                                networks on Chrome and BravBuy NFTS, access Defi dApps,
                                and explore Web3 across multiple networks on Chrome and Brave e
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
                                    Purchase TRCY token
                                    <svg className="icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="1.5" cy="7.5" r="1.5" fill="#FFFBFB" />
                                        <path d="M18.2851 7.60132L5.43483 14.3036L5.31311 1.13775L18.2851 7.60132Z" fill="white" />
                                        <path d="M11.2837 7.46846L5.33433 9.43879L5.31395 5.56078L11.2837 7.46846Z" fill="#541349" />
                                        <line x1="10" y1="7.5" x2="15" y2="7.5" stroke="black" />
                                    </svg>
                                </Button>
                                <div className='white-paper'>
                                    <div>
                                        <h4>White paper </h4>
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
            <section className='video-section'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'>Your smart <span>Token</span> </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='video-colum'>
                            <p>How it works</p>
                            <div className='video-inner'>
                                <div className='upper-action'>
                                    <div className='action-left'>
                                        Traccy + trésor hardware Wallet Advanced security made easy (Tracy wallet 1 Trevor model 1 )
                                    </div>
                                    <div className='action-right'>
                                        <Button type='link'>
                                            <SvgIcon name='refresh' viewbox='0 0 22 22' />
                                            Épater ans …
                                        </Button>
                                        <Button type='link'>
                                            <SvgIcon name='expand' viewbox='0 0 36 36' />
                                            Épater ans …
                                        </Button>
                                    </div>
                                </div>
                                <div className='play-icon'><SvgIcon name='play' viewbox='0 0 23 30.001' /></div>
                                <img src={videoimg} alt='video-img' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='whytraccy-section'>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'>Why <span>Traccy</span> ?  </h1>
                            <p className='main-heading-text'>Buy NFTS, access Defi dApps, and explore Web3 across multiple networks on Chrome and
                                BravBuy NFTS, access Defi dApps, and explore Web3 across multiple networks
                                on Chrome and Brave e </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='community-access-icon' viewbox='0 0 76.732 48.846' />
                                </div>
                                <h4>Community Access </h4>
                                <p>
                                    Buy NFTS, access Defi dApps, and explore Web3 across
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='staking-rewards-icon' viewbox='0 0 63.185 49.33' />
                                </div>
                                <h4>Staking rewards</h4>
                                <p>
                                    Buy NFTS, access Defi dApps, and explore Web3 across
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='voting-power-icon' viewbox='0 0 50.148 59.189' />
                                </div>
                                <h4>Voting Power</h4>
                                <p>
                                    Buy NFTS, access Defi dApps, and explore Web3 across
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    <SvgIcon name='platform-icon' viewbox='0 0 62.216 54.826' />
                                </div>
                                <h4>Platform</h4>
                                <p>
                                    Buy NFTS, access Defi dApps, and explore Web3 across
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
                                                    <h3>Community Access</h3>
                                                    <p>Buy NFTS, access Defi dApps, and explore Web3 across multiple networks</p>
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
                            <p className='main-heading-text'>Buy NFTS, access Defi dApps, and explore Web3 across multiple networks on Chrome and
                                BravBuy NFTS, access Defi dApps, and explore Web3 across multiple networks
                                on Chrome and Brave e </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='platform-img'>
                                <img src={PlatformImg} alt='Platform' />
                            </div>
                            <p className='bottom-text'>A few reasons why <span>Be Pay</span> <br /> Might the right fit</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default TraccyToken