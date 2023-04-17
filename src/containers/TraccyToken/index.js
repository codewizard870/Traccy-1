import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button, Modal } from 'antd';
import Slider from "react-slick";
import Countdown from "react-countdown";
import { PieChart } from 'react-minimal-pie-chart';
import './index.scss';
import { useHistory } from "react-router-dom";

import BannerImg from '../../assets/images/banner-img.png';
import CommunityImg from '../../assets/images/community-access.svg';
import Stakingimg from '../../assets/images/staking-img.svg';
import PlatformImg from '../../assets/images/platform-img.png';
import leftHexa from '../../assets/images/left-hexa.svg';
import righttHexa from '../../assets/images/right-hexa.svg';
import righttHexa2 from '../../assets/images/right-hexa2.svg';
import HeaderBg1 from '../../assets/images/title-bg1.svg';
import HeaderBg2 from '../../assets/images/title-bg2.svg';
import VotingPower from '../../assets/images/voting-power.svg';
import { useTranslation } from 'react-i18next';
import RoadmapPath from '../../assets/images/raodmap-line.svg';


const InfoModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <SvgIcon className='modal-arrow-icon' onClick={showModal} name='logout-icon' viewbox='0 0 35.549 35.648' />
            <Modal title="19 November" centered footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='pt-3'>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
            </Modal>
        </>
    );
};
const TraccyToken = () => {
    const { t } = useTranslation();
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
                    {i === 0 && t("token:csp1_title")}
                    {i === 1 && t("token:csp2_title")}
                    {i === 2 && t("token:csp3_title")}
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

    const roadmapWrapperRef = useRef();
    const hoverRoadmap = (e, index) => {
        const descs = document.getElementsByClassName("roadmap-desc");
        for (let i = 0; i < descs.length; i++) {
            if (i === index) {
                descs[i].style.visibility = "visible";
                descs[i].style.maxHeight = "100%";
            }
            else {
                descs[i].style.visibility = "hidden";
                descs[i].style.maxHeight = "0px";
            }
        }
    }
    useEffect(() => {
        const parentRect = roadmapWrapperRef.current.getBoundingClientRect();
        const points = document.getElementsByClassName("roadmap-point");
        const descs = document.getElementsByClassName("roadmap-desc");
        for (let i = 0; i < points.length; i++) {
            const childRect = points[i].getBoundingClientRect();
            const left = childRect.left - parentRect.left - descs[i].clientWidth / 2;
            const top = childRect.top - parentRect.top - descs[i].clientHeight / 2;
            descs[i].style.left = `${left > 0 ? left : 0}px`;
            descs[i].style.top = `${top}px`;
        }
    }, [])

    return (
        <div className='tracytoken-wrapper'>
            <section className='banner-section'>
                <img className='left-hexx-img' src={leftHexa} alt='Traccy' />
                <img className='right-hexx-img' src={righttHexa} alt='Traccy' />
                <Container>
                    <Row>
                        <Col lg='6' className="banner-left">
                            <h1>The <span style={{ fontWeight: 'bold' }}>Ecosystem</span> that optimally combines <span style={{ fontWeight: 'bold' }}>digital</span> and <span style={{ fontWeight: 'bold' }}>real Assets</span></h1>
                            <p>
                                Buy our TRCY Token and profit from unlimited access to our exclusive services, explore our sustainable projects and use your voting power to create an impact through our platform.
                            </p>
                            <ul>
                                <li>
                                    <SvgIcon name='safe-icon' viewbox='0 0 40 44.246' />
                                    {t("token:safe")}
                                </li>
                                <li>
                                    <SvgIcon name='traceable-icon' viewbox='0 0 54.012 53.247' />
                                    {t("token:traceable")}
                                </li>
                                <li>
                                    <SvgIcon name='reliable-icon' viewbox='0 0 42.786 50.886' />
                                    {t("token:reliable")}
                                </li>
                            </ul>
                            <div className='learn-more-row'>
                                <Button onClick={() => history.push("/invest")}>
                                    BUY TOKEN
                                    <SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' />
                                </Button>
                                <div className='white-paper' onClick={onDownload}>
                                    <h4>White paper </h4>
                                    <div>
                                        <p>Download {percent}%</p>
                                        <div className="icon-wrapper">
                                            <SvgIcon name='arrow-down' viewbox='0 0 25.87 25.87' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' className='banner-right'>
                            <img className='big-img' src={BannerImg} alt='BannerImg' />
                            <div className='contdown-row'>
                                <div className='upper-row'>
                                    <small>COUNTDOWN</small>
                                    <h2>{t("token:sale")}</h2>
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
                            <h1 className='main-heading text-center'>Why <span>Traccy</span> Connect?</h1>
                            <p className='main-heading-text'>Our business model is supported by the following 4 pillars</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    {/* <SvgIcon name='community-access-icon' viewbox='0 0 76.732 48.846' /> */}
                                    <img className="icon" src="/traccy-token/lab.svg" alt="lab" />
                                </div>
                                <h4>TRCY LAB</h4>
                                <p>
                                    {t("token:trcylab")}
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    {/* <SvgIcon name='community' viewbox='0 0 63.185 49.33' /> */}
                                    <img className="icon" src="/traccy-token/community.svg" alt="community" />
                                </div>
                                <h4>TRCommunitY</h4>
                                <p>
                                    {t("token:community")}
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    {/* <SvgIcon name='token' viewbox='0 0 50.148 59.189' /> */}
                                    <img className="icon" src="/traccy-token/token.svg" alt="token" />
                                </div>
                                <h4>TRCY</h4>
                                <p>
                                    {t("token:token")}
                                </p>
                            </div>
                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    {/* <SvgIcon name='connect' viewbox='0 0 62.216 54.826' /> */}
                                    <img className="icon" src="/traccy-token/connect.svg" alt="lab" />
                                </div>
                                <h4>IMPACT</h4>
                                <p>
                                    {t("token:connect")}
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
                <img className='left-hexx-img' src="/traccy-token/csp-left-hexa.svg" alt='Traccy' />
                <img className='right-hexx-img' src="/traccy-token/csp-right-hexa.svg" alt='Traccy' />
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
                                                    <p> We will give you full access to the platform and became part of our community</p>
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
                                                    <h3>Direct Partecipation</h3>
                                                    <p> We give you access to all the new projects STO</p>
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
                                                    <p>You will be able to vote and decide on Tracct Connect</p>
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
            <section className='roadmap-section'>
                <img className='left-hexa' src="/traccy-token/roadmap-left-hexa.svg" alt='Hexa' />
                <img className='right-hexa' src="/traccy-token/roadmap-right-hexa.svg" alt='Hexa' />
                <Container className="desktop">
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'><span>Roadmap</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='roadmap-wrapper' ref={roadmapWrapperRef} >
                                <svg className="roadmap-path" width="1288" height="244" viewBox="0 0 1288 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_913_1981)">
                                        <path d="M299.539 71.7702C200.315 183.345 88.4668 136.171 29.1172 87.2828V112.314C88.4668 161.203 208.181 207.652 305.18 94.1373C443.035 -67.1909 574.191 125.659 626.019 157.389C677.847 189.119 792.08 269.203 963.077 136.288C1099.87 29.9569 1215.64 114.665 1259.24 168.725V143.692C1215.64 89.6337 1094.23 8.09821 957.436 114.43C786.439 247.345 675.245 163.461 626.019 127.827C579.48 94.138 437.041 -82.848 299.539 71.7702Z" fill="url(#paint0_linear_913_1981)" stroke="black" stroke-width="0.705139" />

                                        <g className="roadmap-point" onMouseEnter={(e) => hoverRoadmap(e, 0)}>
                                            <path d="M416.945 36.8146C426.681 36.8146 434.573 28.6066 434.573 18.4815C434.573 8.35643 426.681 0.148438 416.945 0.148438C407.209 0.148438 399.316 8.35643 399.316 18.4815C399.316 28.6066 407.209 36.8146 416.945 36.8146Z" fill="#D9D9D9" fill-opacity="0.01" />
                                            <path d="M416.945 34.3476C426.097 34.3476 433.516 26.9288 433.516 17.7773C433.516 8.62579 426.097 1.20703 416.945 1.20703C407.793 1.20703 400.374 8.62579 400.374 17.7773C400.374 26.9288 407.793 34.3476 416.945 34.3476Z" stroke="#FEFCFC" stroke-opacity="0.2" stroke-width="2.11542" />
                                            <path d="M416.945 23.417C420.06 23.417 422.586 20.8914 422.586 17.7759C422.586 14.6604 420.06 12.1348 416.945 12.1348C413.829 12.1348 411.304 14.6604 411.304 17.7759C411.304 20.8914 413.829 23.417 416.945 23.417Z" fill="#FFFBFB" fill-opacity="0.2" />
                                        </g>
                                        <g className="roadmap-point" onMouseEnter={(e) => hoverRoadmap(e, 1)}>
                                            <path d="M773.746 218.734C783.482 218.734 791.374 210.526 791.374 200.401C791.374 190.276 783.482 182.068 773.746 182.068C764.01 182.068 756.117 190.276 756.117 200.401C756.117 210.526 764.01 218.734 773.746 218.734Z" fill="#D9D9D9" fill-opacity="0.01" />
                                            <path d="M773.746 216.267C782.897 216.267 790.316 208.849 790.316 199.697C790.316 190.546 782.897 183.127 773.746 183.127C764.594 183.127 757.175 190.546 757.175 199.697C757.175 208.849 764.594 216.267 773.746 216.267Z" stroke="#FEFCFC" stroke-opacity="0.2" stroke-width="2.11542" />
                                            <path d="M773.746 205.337C776.861 205.337 779.387 202.811 779.387 199.696C779.387 196.58 776.861 194.055 773.746 194.055C770.63 194.055 768.104 196.58 768.104 199.696C768.104 202.811 770.63 205.337 773.746 205.337Z" fill="#FFFBFB" fill-opacity="0.2" />
                                        </g>
                                        <g className="roadmap-point" onMouseEnter={(e) => hoverRoadmap(e, 2)}>
                                            <path d="M1097.41 93.2247C1107.14 93.2247 1115.03 85.0167 1115.03 74.8917C1115.03 64.7666 1107.14 56.5586 1097.41 56.5586C1087.67 56.5586 1079.78 64.7666 1079.78 74.8917C1079.78 85.0167 1087.67 93.2247 1097.41 93.2247Z" fill="#D9D9D9" fill-opacity="0.01" />
                                            <path d="M1097.41 90.7577C1106.56 90.7577 1113.98 83.339 1113.98 74.1875C1113.98 65.0359 1106.56 57.6172 1097.41 57.6172C1088.25 57.6172 1080.83 65.0359 1080.83 74.1875C1080.83 83.339 1088.25 90.7577 1097.41 90.7577Z" stroke="#FEFCFC" stroke-opacity="0.2" stroke-width="2.11542" />
                                            <path d="M1097.41 79.8271C1100.52 79.8271 1103.05 77.3015 1103.05 74.186C1103.05 71.0705 1100.52 68.5449 1097.41 68.5449C1094.29 68.5449 1091.76 71.0705 1091.76 74.186C1091.76 77.3015 1094.29 79.8271 1097.41 79.8271Z" fill="#FFFBFB" fill-opacity="0.2" />
                                        </g>

                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_913_1981" x1="22.7709" y1="214.712" x2="1259.59" y2="208.718" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1D0D2A" />
                                            <stop offset="0.125" stop-color="#381C45" />
                                            <stop offset="0.510417" stop-color="#D95F9B" />
                                            <stop offset="0.833333" stop-color="#3A1D47" />
                                            <stop offset="1" stop-color="#160720" />
                                        </linearGradient>
                                        <clipPath id="clip0_913_1981">
                                            <rect width="1287.59" height="243.266" fill="white" transform="translate(0.203125 0.148438)" />
                                        </clipPath>
                                    </defs>

                                    <path d="M389.085 54.9325V53.054C389.353 52.7494 389.719 52.3376 390.17 51.8186C390.876 51.0288 391.405 50.4309 391.743 50.0247C392.498 49.1221 392.97 48.5073 393.16 48.1801C393.358 47.8416 393.449 47.4693 393.449 47.0631C393.449 46.7247 393.329 46.4426 393.076 46.217C392.829 45.9913 392.512 45.8785 392.131 45.8785C391.468 45.8785 390.735 46.1493 389.931 46.6908L389 45.3369C390.128 44.4456 391.306 44 392.54 44C393.52 44 394.303 44.2651 394.888 44.7954C395.466 45.3144 395.755 46.0308 395.755 46.9447C395.755 47.6216 395.53 48.3324 395.078 49.077C394.634 49.8104 393.774 50.9047 392.483 52.3601C392.173 52.7212 391.94 52.9863 391.792 53.1555H395.635V54.9325H389.085ZM401.03 44.0169C402.334 44.0169 403.385 44.6431 404.175 45.8954C404.844 46.9334 405.176 48.1688 405.176 49.6016C405.176 51.3278 404.753 52.7099 403.907 53.7478C403.159 54.673 402.2 55.1356 401.03 55.1356C399.683 55.1356 398.639 54.5376 397.878 53.3417C397.25 52.3488 396.933 51.1022 396.933 49.6016C396.933 47.9319 397.349 46.5611 398.188 45.4893C398.942 44.5077 399.887 44.0169 401.03 44.0169ZM401.065 45.9123C399.845 45.9123 399.232 47.1082 399.232 49.5001C399.232 50.7073 399.408 51.655 399.76 52.3432C400.078 52.9637 400.494 53.274 401.008 53.274C401.587 53.274 402.038 52.9412 402.362 52.2755C402.701 51.5986 402.87 50.6734 402.87 49.5001C402.87 47.1082 402.271 45.9123 401.065 45.9123ZM406.502 54.9325V53.054C406.777 52.7494 407.136 52.3376 407.587 51.8186C408.3 51.0288 408.821 50.4309 409.16 50.0247C409.914 49.1221 410.387 48.5073 410.584 48.1801C410.775 47.8416 410.866 47.4693 410.866 47.0631C410.866 46.7247 410.746 46.4426 410.5 46.217C410.246 45.9913 409.936 45.8785 409.548 45.8785C408.885 45.8785 408.152 46.1493 407.348 46.6908L406.417 45.3369C407.545 44.4456 408.723 44 409.957 44C410.937 44 411.72 44.2651 412.305 44.7954C412.883 45.3144 413.172 46.0308 413.172 46.9447C413.172 47.6216 412.946 48.3324 412.495 49.077C412.051 49.8104 411.191 50.9047 409.907 52.3601C409.59 52.7212 409.357 52.9863 409.209 53.1555H413.052V54.9325H406.502ZM417.551 50.1432H415.943V48.3493H417.551C418.002 48.3493 418.313 48.2872 418.482 48.1631C418.743 47.9713 418.87 47.6272 418.87 47.1308C418.87 46.7472 418.757 46.4426 418.531 46.217C418.306 45.98 418.002 45.8616 417.622 45.8616C416.931 45.8616 416.211 46.1775 415.471 46.8093L414.66 45.3877C415.591 44.4738 416.655 44.0169 417.84 44.0169C418.834 44.0169 419.645 44.2933 420.273 44.8462C420.886 45.3877 421.19 46.0872 421.19 46.9447C421.19 48.0052 420.752 48.716 419.871 49.077C421.006 49.517 421.577 50.3632 421.577 51.6155C421.577 52.9355 421.126 53.8945 420.223 54.4925C419.596 54.9099 418.806 55.1186 417.854 55.1186C417.339 55.1186 416.747 54.9832 416.077 54.7125C415.421 54.4304 414.886 54.0919 414.47 53.6971L415.365 52.3601C415.979 52.9129 416.754 53.1894 417.706 53.1894C418.186 53.1894 418.574 53.054 418.856 52.7832C419.138 52.5012 419.279 52.1232 419.279 51.6493C419.279 50.6452 418.7 50.1432 417.551 50.1432ZM432.697 55.0679C432.387 55.113 432.091 55.1356 431.823 55.1356C430.159 55.1356 428.89 54.5376 428.015 53.3417C427.31 52.3827 426.965 51.1924 426.965 49.7709C426.965 47.9995 427.437 46.578 428.382 45.5062C429.256 44.5133 430.399 44.0169 431.823 44.0169C433.466 44.0169 434.735 44.6826 435.631 46.0139C436.329 47.0518 436.674 48.3042 436.674 49.7709C436.674 51.8693 435.983 53.4094 434.594 54.3909C435.25 55.1243 435.969 55.9084 436.745 56.7433H434.157L432.697 55.0679ZM431.823 53.274C433.515 53.274 434.362 52.1063 434.362 49.7709C434.362 48.5072 434.115 47.5313 433.628 46.8431C433.177 46.2226 432.578 45.9123 431.823 45.9123C431.005 45.9123 430.378 46.2508 429.926 46.9277C429.482 47.6047 429.263 48.5524 429.263 49.7709C429.263 52.1063 430.117 53.274 431.823 53.274ZM438.035 54.9325V53.054C438.31 52.7494 438.67 52.3376 439.121 51.8186C439.833 51.0288 440.355 50.4309 440.694 50.0247C441.448 49.1221 441.921 48.5073 442.118 48.1801C442.308 47.8416 442.4 47.4693 442.4 47.0631C442.4 46.7247 442.28 46.4426 442.033 46.217C441.78 45.9913 441.469 45.8785 441.082 45.8785C440.419 45.8785 439.685 46.1493 438.882 46.6908L437.951 45.3369C439.079 44.4456 440.257 44 441.491 44C442.471 44 443.253 44.2651 443.839 44.7954C444.417 45.3144 444.706 46.0308 444.706 46.9447C444.706 47.6216 444.48 48.3324 444.029 49.077C443.585 49.8104 442.725 50.9047 441.441 52.3601C441.124 52.7212 440.891 52.9863 440.743 53.1555H444.586V54.9325H438.035Z" fill="white" fill-opacity="0.2" />
                                    <path d="M746.085 240.932V239.054C746.36 238.749 746.719 238.338 747.171 237.819C747.883 237.029 748.405 236.431 748.743 236.025C749.498 235.122 749.977 234.507 750.167 234.18C750.358 233.842 750.457 233.469 750.457 233.063C750.457 232.725 750.33 232.443 750.083 232.217C749.836 231.991 749.519 231.878 749.131 231.878C748.468 231.878 747.735 232.149 746.931 232.691L746 231.337C747.128 230.446 748.313 230 749.54 230C750.52 230 751.303 230.265 751.895 230.795C752.466 231.314 752.755 232.031 752.755 232.945C752.755 233.622 752.53 234.332 752.078 235.077C751.641 235.81 750.774 236.905 749.49 238.36C749.173 238.721 748.94 238.986 748.792 239.156H752.635V240.932H746.085ZM758.03 230.017C759.341 230.017 760.392 230.643 761.182 231.895C761.844 232.933 762.176 234.169 762.176 235.602C762.176 237.328 761.753 238.71 760.907 239.748C760.166 240.673 759.207 241.136 758.03 241.136C756.69 241.136 755.639 240.538 754.885 239.342C754.25 238.349 753.94 237.102 753.94 235.602C753.94 233.932 754.356 232.561 755.188 231.489C755.942 230.508 756.894 230.017 758.03 230.017ZM758.065 231.912C756.845 231.912 756.239 233.108 756.239 235.5C756.239 236.707 756.415 237.655 756.76 238.343C757.078 238.964 757.494 239.274 758.016 239.274C758.594 239.274 759.045 238.941 759.369 238.276C759.708 237.599 759.877 236.673 759.877 235.5C759.877 233.108 759.271 231.912 758.065 231.912ZM763.509 240.932V239.054C763.777 238.749 764.136 238.338 764.587 237.819C765.3 237.029 765.828 236.431 766.167 236.025C766.921 235.122 767.394 234.507 767.584 234.18C767.775 233.842 767.873 233.469 767.873 233.063C767.873 232.725 767.746 232.443 767.5 232.217C767.253 231.991 766.936 231.878 766.555 231.878C765.885 231.878 765.152 232.149 764.355 232.691L763.424 231.337C764.552 230.446 765.73 230 766.957 230C767.944 230 768.727 230.265 769.312 230.795C769.89 231.314 770.172 232.031 770.172 232.945C770.172 233.622 769.947 234.332 769.495 235.077C769.058 235.81 768.198 236.905 766.907 238.36C766.59 238.721 766.364 238.986 766.216 239.156H770.059V240.932H763.509ZM774.551 236.143H772.943V234.349H774.551C775.002 234.349 775.313 234.287 775.482 234.163C775.743 233.971 775.877 233.627 775.877 233.131C775.877 232.747 775.764 232.443 775.538 232.217C775.313 231.98 775.002 231.862 774.622 231.862C773.931 231.862 773.218 232.177 772.471 232.809L771.66 231.388C772.598 230.474 773.656 230.017 774.84 230.017C775.834 230.017 776.645 230.293 777.28 230.846C777.886 231.388 778.19 232.087 778.19 232.945C778.19 234.005 777.752 234.716 776.871 235.077C778.013 235.517 778.585 236.363 778.585 237.616C778.585 238.936 778.133 239.895 777.231 240.492C776.596 240.91 775.806 241.119 774.861 241.119C774.34 241.119 773.747 240.983 773.084 240.712C772.429 240.43 771.893 240.092 771.477 239.697L772.372 238.36C772.979 238.913 773.761 239.189 774.706 239.189C775.193 239.189 775.574 239.054 775.856 238.783C776.138 238.501 776.279 238.123 776.279 237.649C776.279 236.645 775.708 236.143 774.551 236.143ZM789.705 241.068C789.387 241.113 789.091 241.136 788.823 241.136C787.166 241.136 785.897 240.538 785.015 239.342C784.317 238.383 783.965 237.192 783.965 235.771C783.965 234 784.437 232.578 785.389 231.506C786.256 230.513 787.399 230.017 788.823 230.017C790.473 230.017 791.742 230.683 792.631 232.014C793.329 233.052 793.682 234.304 793.682 235.771C793.682 237.869 792.983 239.409 791.601 240.391C792.25 241.124 792.969 241.908 793.745 242.743H791.157L789.705 241.068ZM788.823 239.274C790.515 239.274 791.362 238.106 791.362 235.771C791.362 234.507 791.122 233.531 790.635 232.843C790.184 232.223 789.578 231.912 788.823 231.912C788.012 231.912 787.378 232.251 786.926 232.928C786.489 233.605 786.27 234.552 786.27 235.771C786.27 238.106 787.117 239.274 788.823 239.274ZM798.201 236.143H796.594V234.349H798.201C798.653 234.349 798.963 234.287 799.132 234.163C799.393 233.971 799.527 233.627 799.527 233.131C799.527 232.747 799.414 232.443 799.189 232.217C798.963 231.98 798.653 231.862 798.272 231.862C797.581 231.862 796.869 232.177 796.121 232.809L795.31 231.388C796.248 230.474 797.306 230.017 798.491 230.017C799.485 230.017 800.296 230.293 800.93 230.846C801.537 231.388 801.84 232.087 801.84 232.945C801.84 234.005 801.403 234.716 800.521 235.077C801.664 235.517 802.235 236.363 802.235 237.616C802.235 238.936 801.784 239.895 800.881 240.492C800.246 240.91 799.457 241.119 798.512 241.119C797.99 241.119 797.398 240.983 796.735 240.712C796.079 240.43 795.543 240.092 795.127 239.697L796.023 238.36C796.629 238.913 797.412 239.189 798.357 239.189C798.843 239.189 799.224 239.054 799.506 238.783C799.788 238.501 799.929 238.123 799.929 237.649C799.929 236.645 799.358 236.143 798.201 236.143Z" fill="white" fill-opacity="0.5" />
                                    <path d="M1068.08 107.932V106.054C1068.35 105.749 1068.71 105.338 1069.16 104.819C1069.88 104.029 1070.4 103.431 1070.74 103.025C1071.5 102.122 1071.97 101.507 1072.16 101.18C1072.35 100.842 1072.45 100.469 1072.45 100.063C1072.45 99.7247 1072.32 99.4426 1072.08 99.217C1071.83 98.9913 1071.51 98.8785 1071.13 98.8785C1070.46 98.8785 1069.73 99.1493 1068.93 99.6908L1068 98.3369C1069.13 97.4456 1070.31 97 1071.53 97C1072.52 97 1073.3 97.2651 1073.89 97.7954C1074.47 98.3144 1074.75 99.0308 1074.75 99.9447C1074.75 100.622 1074.52 101.332 1074.07 102.077C1073.63 102.81 1072.77 103.905 1071.48 105.36C1071.17 105.721 1070.94 105.986 1070.79 106.156H1074.64V107.932H1068.08ZM1080.03 97.0169C1081.33 97.0169 1082.38 97.6431 1083.17 98.8954C1083.84 99.9334 1084.18 101.169 1084.18 102.602C1084.18 104.328 1083.75 105.71 1082.91 106.748C1082.16 107.673 1081.2 108.136 1080.03 108.136C1078.68 108.136 1077.64 107.538 1076.88 106.342C1076.25 105.349 1075.93 104.102 1075.93 102.602C1075.93 100.932 1076.35 99.5611 1077.19 98.4893C1077.94 97.5077 1078.89 97.0169 1080.03 97.0169ZM1080.06 98.9123C1078.85 98.9123 1078.23 100.108 1078.23 102.5C1078.23 103.707 1078.41 104.655 1078.76 105.343C1079.08 105.964 1079.49 106.274 1080.01 106.274C1080.59 106.274 1081.04 105.941 1081.36 105.276C1081.7 104.599 1081.87 103.673 1081.87 102.5C1081.87 100.108 1081.27 98.9123 1080.06 98.9123ZM1085.5 107.932V106.054C1085.77 105.749 1086.14 105.338 1086.59 104.819C1087.29 104.029 1087.82 103.431 1088.16 103.025C1088.91 102.122 1089.39 101.507 1089.58 101.18C1089.77 100.842 1089.87 100.469 1089.87 100.063C1089.87 99.7247 1089.75 99.4426 1089.49 99.217C1089.25 98.9913 1088.93 98.8785 1088.55 98.8785C1087.88 98.8785 1087.15 99.1493 1086.35 99.6908L1085.42 98.3369C1086.55 97.4456 1087.72 97 1088.96 97C1089.94 97 1090.72 97.2651 1091.3 97.7954C1091.88 98.3144 1092.17 99.0308 1092.17 99.9447C1092.17 100.622 1091.95 101.332 1091.5 102.077C1091.05 102.81 1090.19 103.905 1088.9 105.36C1088.59 105.721 1088.36 105.986 1088.21 106.156H1092.05V107.932H1085.5ZM1096.55 103.143H1094.94V101.349H1096.55C1097 101.349 1097.31 101.287 1097.48 101.163C1097.74 100.971 1097.87 100.627 1097.87 100.131C1097.87 99.7472 1097.76 99.4426 1097.53 99.217C1097.31 98.98 1097 98.8616 1096.61 98.8616C1095.93 98.8616 1095.21 99.1775 1094.47 99.8093L1093.65 98.3877C1094.59 97.4739 1095.66 97.0169 1096.84 97.0169C1097.83 97.0169 1098.65 97.2933 1099.27 97.8462C1099.89 98.3877 1100.19 99.0872 1100.19 99.9447C1100.19 101.005 1099.75 101.716 1098.87 102.077C1100.01 102.517 1100.58 103.363 1100.58 104.616C1100.58 105.936 1100.13 106.895 1099.22 107.492C1098.59 107.91 1097.8 108.119 1096.85 108.119C1096.33 108.119 1095.74 107.983 1095.08 107.712C1094.42 107.43 1093.89 107.092 1093.47 106.697L1094.37 105.36C1094.98 105.913 1095.75 106.189 1096.7 106.189C1097.19 106.189 1097.57 106.054 1097.86 105.783C1098.14 105.501 1098.28 105.123 1098.28 104.649C1098.28 103.645 1097.7 103.143 1096.55 103.143ZM1111.7 108.068C1111.38 108.113 1111.09 108.136 1110.82 108.136C1109.16 108.136 1107.89 107.538 1107.01 106.342C1106.31 105.383 1105.96 104.192 1105.96 102.771C1105.96 101 1106.44 99.578 1107.38 98.5062C1108.25 97.5133 1109.4 97.0169 1110.82 97.0169C1112.47 97.0169 1113.74 97.6826 1114.62 99.0139C1115.33 100.052 1115.67 101.304 1115.67 102.771C1115.67 104.869 1114.98 106.409 1113.59 107.391C1114.25 108.124 1114.96 108.908 1115.74 109.743H1113.16L1111.7 108.068ZM1110.82 106.274C1112.51 106.274 1113.35 105.106 1113.35 102.771C1113.35 101.507 1113.11 100.531 1112.63 99.8431C1112.18 99.2226 1111.58 98.9123 1110.82 98.9123C1110.01 98.9123 1109.38 99.2508 1108.93 99.9277C1108.48 100.605 1108.26 101.552 1108.26 102.771C1108.26 105.106 1109.12 106.274 1110.82 106.274ZM1116.9 104.074C1118.42 101.75 1119.93 99.4652 1121.4 97.22H1123.59V104.074H1125.34V105.851H1123.59V107.932H1121.39V105.851H1116.9V104.074ZM1118.81 104.074H1121.39V100.063L1118.81 104.074Z" fill="white" fill-opacity="0.5" />
                                </svg>
                                {RoadmapDescs.map((roadmap) => (
                                    <div className="roadmap-desc" >
                                        <h3>
                                            {roadmap.title}
                                        </h3>
                                        <ul>
                                            {roadmap.content.map(str => (
                                                <li><p> {str} </p> </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mobile">
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'><span>Roadmap</span></h1>
                            <p className='main-heading-text'>
                                Buy NFTS, access Defi dApps, and explore Web3 <br />
                                across multiple networks on Chrome and Brave
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='roadmap-wrapper'>
                                <img className='roadmap-path' src={RoadmapPath} alt='Roadmap Path' />
                                <SvgIcon className='circle-icon-upper' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                <Slider {...settings}>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                2022 Q3
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                2022 Q4
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                2023 Q1
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                2023 Q2
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
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
                            <p className='main-heading-text'>{t("token:platform")}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='platform-img'>
                                <img src={PlatformImg} alt='Platform' />
                            </div>
                            <p className='bottom-text'>{t("token:why_1")}<span>{t("token:why_2")}</span> {t("token:why_3")} <br />{t("token:why_4")}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default TraccyToken;


const RoadmapDescs = [
    {
        title: "Q2 2023",
        content: ["STO", "Website", "Platform TestNet", "Company Set-Up", "First 1 to 2 projects STO launch", "Traccy Lab integration", "private clients onboarding"
        ]

    },
    {
        title: "Q3 2023",
        content: ["Platform MainNet", "Traccy Lab company formation", "Traccy Lab STO", "2-3 projects Incubation", "Corporate clients onboarding", "Education integration"
        ]
    },
    {
        title: "Q4 2023",
        content: ["2-3 project STO lanuching", "Traccy Lab full operational", "Impact Credits", "Impact Score", "Membership Categorisation", "NFT release for Impact and Certification"
        ]
    },

]