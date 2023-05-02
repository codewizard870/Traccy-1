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
        autoplaySpeed: 8000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // vertical: true,
        // verticalSwiping: true,
        // swipeToSlide: true,
        fade: true,
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
                            <h1>
                                Sustainable<br/>
                                <span style={{ fontWeight: 'bold' }}>Impact</span> through<br/>
                                our first <span style={{ fontWeight: 'bold' }}> STO
                                </span>
                            </h1>
                            <p>
                                With the TRCYC Security Token, you become a participant in the profits of Traccy Connect, the impact platform through which our sustainable projects, as well as exclusive services are handled
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
                            <p className='main-heading-text'>Our business model is supported by the following four pillars</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='3' md='6' sm='12'>
                            <div className='why-card'>
                                <div className='icon-circle'>
                                    {/* <SvgIcon name='community-access-icon' viewbox='0 0 76.732 48.846' /> */}
                                    <img className="icon" src="/traccy-token/lab.svg" alt="lab" />
                                </div>
                                <h4>IMPACT</h4>
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
                                <h4>COMMUNITY</h4>
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
                                <h4>STO</h4>
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
                                <h4>FINALCIAL SERVICES</h4>
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
                                                    <p> You  will get full access to the platform and became part of our community</p>
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
                                                    <h3>Direct Participation</h3>
                                                    <p>You will get access to all the new projects STO</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='right-col'>
                                            <img className='center-image' src="/traccy-token/direct-participant.gif" alt='line' />
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
                                                    <p>Through Traccy Connect you will be able to vote and decide on Projects</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='right-col'>
                                            <img className='center-image' src="/traccy-token/voting-power.gif" alt='line' />
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
                                <svg className="roadmap-path" width="1334" height="243" viewBox="0 0 1334 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M310.124 71.5438C207.324 182.996 91.4447 135.874 29.9561 87.0395V112.044C91.4447 160.879 215.474 207.277 315.968 93.8864C458.792 -67.2655 594.675 125.374 648.371 157.069C702.067 188.765 820.417 268.761 997.577 135.992C1139.3 29.7761 1259.24 114.392 1304.41 168.392V143.387C1259.24 89.3878 1133.46 7.94133 991.732 114.157C814.572 246.926 699.371 163.134 648.371 127.539C600.154 93.8871 452.582 -82.9056 310.124 71.5438Z" fill="url(#paint0_linear_913_1982)" />
                                    <g className="roadmap-point" onMouseEnter={(e) => hoverRoadmap(e, 0)}>
                                        <path d="M431.761 36.6261C441.848 36.6261 450.025 28.4271 450.025 18.313C450.025 8.19903 441.848 0 431.761 0C421.674 0 413.497 8.19903 413.497 18.313C413.497 28.4271 421.674 36.6261 431.761 36.6261Z" fill="#D9D9D9" fill-opacity="0.01" />
                                        <path d="M431.761 34.161C441.242 34.161 448.929 26.7503 448.929 17.6088C448.929 8.4673 441.242 1.05664 431.761 1.05664C422.279 1.05664 414.593 8.4673 414.593 17.6088C414.593 26.7503 422.279 34.161 431.761 34.161Z" stroke="#FEFCFC" stroke-opacity="0.2" stroke-width="2.11542" />
                                        <path d="M431.761 23.2445C434.989 23.2445 437.606 20.7217 437.606 17.6096C437.606 14.4975 434.989 11.9746 431.761 11.9746C428.534 11.9746 425.917 14.4975 425.917 17.6096C425.917 20.7217 428.534 23.2445 431.761 23.2445Z" fill="#FFFBFB" fill-opacity="0.2" />
                                    </g>
                                    <g className="roadmap-point" onMouseEnter={(e) => hoverRoadmap(e, 1)}>
                                        <path d="M801.422 218.349C811.509 218.349 819.686 210.15 819.686 200.036C819.686 189.922 811.509 181.723 801.422 181.723C791.335 181.723 783.158 189.922 783.158 200.036C783.158 210.15 791.335 218.349 801.422 218.349Z" fill="#D9D9D9" fill-opacity="0.01" />
                                        <path d="M801.422 215.884C810.904 215.884 818.59 208.473 818.59 199.331C818.59 190.19 810.904 182.779 801.422 182.779C791.94 182.779 784.254 190.19 784.254 199.331C784.254 208.473 791.94 215.884 801.422 215.884Z" stroke="#FEFCFC" stroke-opacity="0.2" stroke-width="2.11542" />
                                        <path d="M801.423 204.967C804.65 204.967 807.267 202.444 807.267 199.332C807.267 196.22 804.65 193.697 801.423 193.697C798.195 193.697 795.578 196.22 795.578 199.332C795.578 202.444 798.195 204.967 801.423 204.967Z" fill="#FFFBFB" fill-opacity="0.2" />
                                    </g>
                                    <g className="roadmap-point" onMouseEnter={(e) => hoverRoadmap(e, 2)}>
                                        <path d="M1136.75 92.9737C1146.83 92.9737 1155.01 84.7747 1155.01 74.6607C1155.01 64.5467 1146.83 56.3477 1136.75 56.3477C1126.66 56.3477 1118.48 64.5467 1118.48 74.6607C1118.48 84.7747 1126.66 92.9737 1136.75 92.9737Z" fill="#D9D9D9" fill-opacity="0.01" />
                                        <path d="M1136.75 90.5086C1146.23 90.5086 1153.92 83.098 1153.92 73.9565C1153.92 64.815 1146.23 57.4043 1136.75 57.4043C1127.27 57.4043 1119.58 64.815 1119.58 73.9565C1119.58 83.098 1127.27 90.5086 1136.75 90.5086Z" stroke="#FEFCFC" stroke-opacity="0.2" stroke-width="2.11542" />
                                        <path d="M1136.75 79.5922C1139.97 79.5922 1142.59 77.0693 1142.59 73.9572C1142.59 70.8451 1139.97 68.3223 1136.75 68.3223C1133.52 68.3223 1130.9 70.8451 1130.9 73.9572C1130.9 77.0693 1133.52 79.5922 1136.75 79.5922Z" fill="#FFFBFB" fill-opacity="0.2" />
                                    </g>
                                    <path d="M402.897 54.7233V52.8468C403.175 52.5425 403.555 52.1312 404.022 51.6128C404.753 50.8239 405.301 50.2266 405.651 49.8209C406.433 48.9193 406.923 48.3051 407.12 47.9782C407.324 47.6401 407.419 47.2682 407.419 46.8625C407.419 46.5244 407.295 46.2427 407.032 46.0173C406.776 45.7919 406.448 45.6792 406.053 45.6792C405.366 45.6792 404.607 45.9497 403.774 46.4906L402.81 45.1382C403.978 44.2479 405.198 43.8027 406.477 43.8027C407.492 43.8027 408.303 44.0676 408.91 44.5973C409.509 45.1157 409.808 45.8313 409.808 46.7442C409.808 47.4204 409.574 48.1304 409.107 48.8742C408.647 49.6067 407.755 50.6999 406.418 52.1537C406.097 52.5144 405.856 52.7792 405.703 52.9483H409.684V54.7233H402.897ZM415.273 43.8196C416.624 43.8196 417.713 44.4451 418.531 45.6961C419.225 46.7329 419.568 47.967 419.568 49.3982C419.568 51.1225 419.13 52.5031 418.253 53.5399C417.479 54.4641 416.485 54.9261 415.273 54.9261C413.877 54.9261 412.796 54.3288 412.007 53.1342C411.357 52.1425 411.028 50.8971 411.028 49.3982C411.028 47.7303 411.459 46.361 412.329 45.2904C413.11 44.3099 414.089 43.8196 415.273 43.8196ZM415.309 45.713C414.045 45.713 413.41 46.9076 413.41 49.2968C413.41 50.5027 413.593 51.4494 413.958 52.1368C414.287 52.7567 414.718 53.0666 415.251 53.0666C415.85 53.0666 416.317 52.7341 416.654 52.0692C417.004 51.393 417.179 50.4689 417.179 49.2968C417.179 46.9076 416.559 45.713 415.309 45.713ZM420.942 54.7233V52.8468C421.227 52.5425 421.599 52.1312 422.067 51.6128C422.805 50.8239 423.345 50.2266 423.696 49.8209C424.478 48.9193 424.967 48.3051 425.172 47.9782C425.369 47.6401 425.464 47.2682 425.464 46.8625C425.464 46.5244 425.34 46.2427 425.084 46.0173C424.821 45.7919 424.5 45.6792 424.098 45.6792C423.411 45.6792 422.651 45.9497 421.819 46.4906L420.854 45.1382C422.023 44.2479 423.243 43.8027 424.522 43.8027C425.537 43.8027 426.348 44.0676 426.954 44.5973C427.553 45.1157 427.853 45.8313 427.853 46.7442C427.853 47.4204 427.619 48.1304 427.152 48.8742C426.691 49.6067 425.8 50.6999 424.47 52.1537C424.142 52.5144 423.901 52.7792 423.747 52.9483H427.729V54.7233H420.942ZM432.39 49.9392H430.724V48.1473H432.39C432.857 48.1473 433.179 48.0853 433.354 47.9613C433.624 47.7697 433.756 47.426 433.756 46.9301C433.756 46.547 433.639 46.2427 433.405 46.0173C433.171 45.7806 432.857 45.6623 432.463 45.6623C431.747 45.6623 431.002 45.9778 430.234 46.6089L429.394 45.1889C430.359 44.2761 431.462 43.8196 432.689 43.8196C433.719 43.8196 434.559 44.0958 435.21 44.648C435.845 45.1889 436.159 45.8877 436.159 46.7442C436.159 47.8035 435.706 48.5136 434.793 48.8742C435.969 49.3137 436.561 50.159 436.561 51.4099C436.561 52.7285 436.094 53.6864 435.158 54.2838C434.508 54.7007 433.69 54.9092 432.704 54.9092C432.17 54.9092 431.557 54.774 430.863 54.5035C430.183 54.2218 429.628 53.8837 429.197 53.4892L430.125 52.1537C430.761 52.706 431.564 52.9821 432.55 52.9821C433.047 52.9821 433.449 52.8468 433.741 52.5764C434.033 52.2946 434.179 51.9171 434.179 51.4437C434.179 50.4407 433.58 49.9392 432.39 49.9392ZM448.082 54.8585C447.76 54.9036 447.454 54.9261 447.176 54.9261C445.452 54.9261 444.137 54.3288 443.231 53.1342C442.5 52.1763 442.143 50.9873 442.143 49.5673C442.143 47.7979 442.632 46.3779 443.611 45.3073C444.517 44.3155 445.7 43.8196 447.176 43.8196C448.878 43.8196 450.193 44.4846 451.121 45.8144C451.844 46.8512 452.202 48.1022 452.202 49.5673C452.202 51.6635 451.486 53.2018 450.047 54.1823C450.726 54.9149 451.472 55.6981 452.275 56.5321H449.594L448.082 54.8585ZM447.176 53.0666C448.929 53.0666 449.806 51.9002 449.806 49.5673C449.806 48.3051 449.55 47.3302 449.046 46.6428C448.579 46.0229 447.958 45.713 447.176 45.713C446.329 45.713 445.678 46.0511 445.211 46.7273C444.751 47.4035 444.524 48.3501 444.524 49.5673C444.524 51.9002 445.408 53.0666 447.176 53.0666ZM453.612 54.7233V52.8468C453.897 52.5425 454.27 52.1312 454.737 51.6128C455.475 50.8239 456.016 50.2266 456.366 49.8209C457.148 48.9193 457.638 48.3051 457.842 47.9782C458.039 47.6401 458.134 47.2682 458.134 46.8625C458.134 46.5244 458.01 46.2427 457.754 46.0173C457.491 45.7919 457.17 45.6792 456.768 45.6792C456.082 45.6792 455.322 45.9497 454.489 46.4906L453.525 45.1382C454.693 44.2479 455.913 43.8027 457.192 43.8027C458.207 43.8027 459.018 44.0676 459.625 44.5973C460.224 45.1157 460.523 45.8313 460.523 46.7442C460.523 47.4204 460.289 48.1304 459.822 48.8742C459.362 49.6067 458.47 50.6999 457.141 52.1537C456.812 52.5144 456.571 52.7792 456.418 52.9483H460.399V54.7233H453.612Z" fill="white" fill-opacity="0.2" />
                                    <path d="M772.763 240.522V238.646C773.048 238.341 773.421 237.93 773.889 237.412C774.626 236.623 775.167 236.025 775.518 235.62C776.299 234.718 776.796 234.104 776.993 233.777C777.191 233.439 777.293 233.067 777.293 232.661C777.293 232.323 777.161 232.041 776.906 231.816C776.65 231.591 776.321 231.478 775.919 231.478C775.233 231.478 774.473 231.748 773.64 232.289L772.676 230.937C773.845 230.047 775.072 229.602 776.343 229.602C777.359 229.602 778.17 229.866 778.783 230.396C779.375 230.915 779.675 231.63 779.675 232.543C779.675 233.219 779.441 233.929 778.973 234.673C778.52 235.406 777.622 236.499 776.292 237.953C775.963 238.313 775.722 238.578 775.569 238.747H779.55V240.522H772.763ZM785.139 229.618C786.498 229.618 787.586 230.244 788.405 231.495C789.091 232.532 789.435 233.766 789.435 235.197C789.435 236.921 788.996 238.302 788.12 239.339C787.353 240.263 786.359 240.725 785.139 240.725C783.751 240.725 782.662 240.128 781.881 238.933C781.223 237.941 780.902 236.696 780.902 235.197C780.902 233.529 781.333 232.16 782.195 231.089C782.977 230.109 783.963 229.618 785.139 229.618ZM785.176 231.512C783.912 231.512 783.283 232.706 783.283 235.096C783.283 236.302 783.466 237.248 783.824 237.936C784.153 238.556 784.584 238.865 785.124 238.865C785.723 238.865 786.191 238.533 786.527 237.868C786.878 237.192 787.053 236.268 787.053 235.096C787.053 232.706 786.425 231.512 785.176 231.512ZM790.815 240.522V238.646C791.093 238.341 791.466 237.93 791.933 237.412C792.671 236.623 793.219 236.025 793.57 235.62C794.351 234.718 794.841 234.104 795.038 233.777C795.235 233.439 795.338 233.067 795.338 232.661C795.338 232.323 795.206 232.041 794.95 231.816C794.695 231.591 794.366 231.478 793.971 231.478C793.277 231.478 792.518 231.748 791.692 232.289L790.728 230.937C791.897 230.047 793.117 229.602 794.388 229.602C795.411 229.602 796.222 229.866 796.828 230.396C797.427 230.915 797.719 231.63 797.719 232.543C797.719 233.219 797.485 233.929 797.018 234.673C796.565 235.406 795.674 236.499 794.337 237.953C794.008 238.313 793.774 238.578 793.621 238.747H797.602V240.522H790.815ZM802.256 235.738H800.59V233.946H802.256C802.723 233.946 803.045 233.884 803.22 233.76C803.491 233.569 803.629 233.225 803.629 232.729C803.629 232.346 803.512 232.041 803.279 231.816C803.045 231.579 802.723 231.461 802.329 231.461C801.613 231.461 800.875 231.777 800.101 232.408L799.261 230.988C800.232 230.075 801.328 229.618 802.555 229.618C803.585 229.618 804.426 229.895 805.083 230.447C805.711 230.988 806.026 231.686 806.026 232.543C806.026 233.602 805.573 234.312 804.659 234.673C805.843 235.113 806.435 235.958 806.435 237.209C806.435 238.527 805.967 239.485 805.032 240.083C804.375 240.5 803.556 240.708 802.577 240.708C802.037 240.708 801.423 240.573 800.736 240.302C800.057 240.021 799.502 239.682 799.071 239.288L799.998 237.953C800.627 238.505 801.438 238.781 802.417 238.781C802.921 238.781 803.315 238.646 803.607 238.375C803.9 238.093 804.046 237.716 804.046 237.243C804.046 236.24 803.454 235.738 802.256 235.738ZM817.955 240.657C817.627 240.702 817.32 240.725 817.042 240.725C815.325 240.725 814.011 240.128 813.097 238.933C812.374 237.975 812.009 236.786 812.009 235.366C812.009 233.597 812.498 232.177 813.484 231.106C814.383 230.114 815.567 229.618 817.042 229.618C818.752 229.618 820.067 230.283 820.987 231.613C821.711 232.65 822.076 233.901 822.076 235.366C822.076 237.462 821.353 239.001 819.921 239.981C820.593 240.714 821.338 241.497 822.142 242.331H819.46L817.955 240.657ZM817.042 238.865C818.796 238.865 819.672 237.699 819.672 235.366C819.672 234.104 819.424 233.129 818.92 232.442C818.452 231.822 817.824 231.512 817.042 231.512C816.202 231.512 815.545 231.85 815.077 232.526C814.624 233.202 814.398 234.149 814.398 235.366C814.398 237.699 815.274 238.865 817.042 238.865ZM826.759 235.738H825.093V233.946H826.759C827.226 233.946 827.548 233.884 827.723 233.76C827.993 233.569 828.132 233.225 828.132 232.729C828.132 232.346 828.015 232.041 827.781 231.816C827.548 231.579 827.226 231.461 826.832 231.461C826.116 231.461 825.378 231.777 824.604 232.408L823.763 230.988C824.735 230.075 825.831 229.618 827.058 229.618C828.088 229.618 828.928 229.895 829.586 230.447C830.214 230.988 830.528 231.686 830.528 232.543C830.528 233.602 830.075 234.312 829.162 234.673C830.346 235.113 830.937 235.958 830.937 237.209C830.937 238.527 830.47 239.485 829.535 240.083C828.877 240.5 828.059 240.708 827.08 240.708C826.54 240.708 825.926 240.573 825.239 240.302C824.56 240.021 824.004 239.682 823.573 239.288L824.501 237.953C825.13 238.505 825.94 238.781 826.919 238.781C827.423 238.781 827.818 238.646 828.11 238.375C828.402 238.093 828.548 237.716 828.548 237.243C828.548 236.24 827.957 235.738 826.759 235.738Z" fill="white" fill-opacity="0.5" />
                                    <path d="M1106.37 107.667V105.79C1106.65 105.486 1107.02 105.075 1107.49 104.556C1108.22 103.767 1108.77 103.17 1109.12 102.764C1109.9 101.863 1110.39 101.248 1110.59 100.922C1110.79 100.583 1110.89 100.212 1110.89 99.8059C1110.89 99.4678 1110.76 99.186 1110.5 98.9606C1110.25 98.7352 1109.92 98.6225 1109.52 98.6225C1108.83 98.6225 1108.07 98.893 1107.25 99.434L1106.28 98.0816C1107.45 97.1913 1108.67 96.7461 1109.94 96.7461C1110.96 96.7461 1111.77 97.0109 1112.38 97.5406C1112.98 98.059 1113.27 98.7747 1113.27 99.6875C1113.27 100.364 1113.04 101.074 1112.57 101.818C1112.12 102.55 1111.23 103.643 1109.89 105.097C1109.56 105.458 1109.33 105.723 1109.17 105.892H1113.16V107.667H1106.37ZM1118.74 96.763C1120.1 96.763 1121.18 97.3885 1122 98.6394C1122.7 99.6763 1123.04 100.91 1123.04 102.342C1123.04 104.066 1122.6 105.446 1121.73 106.483C1120.95 107.407 1119.96 107.869 1118.74 107.869C1117.35 107.869 1116.27 107.272 1115.48 106.078C1114.83 105.086 1114.5 103.841 1114.5 102.342C1114.5 100.674 1114.93 99.3044 1115.8 98.2337C1116.58 97.2532 1117.56 96.763 1118.74 96.763ZM1118.78 98.6563C1117.52 98.6563 1116.88 99.851 1116.88 102.24C1116.88 103.446 1117.06 104.393 1117.43 105.08C1117.76 105.7 1118.19 106.01 1118.72 106.01C1119.32 106.01 1119.79 105.677 1120.13 105.013C1120.48 104.336 1120.65 103.412 1120.65 102.24C1120.65 99.851 1120.03 98.6563 1118.78 98.6563ZM1124.41 107.667V105.79C1124.69 105.486 1125.07 105.075 1125.54 104.556C1126.27 103.767 1126.82 103.17 1127.17 102.764C1127.95 101.863 1128.44 101.248 1128.64 100.922C1128.84 100.583 1128.94 100.212 1128.94 99.8059C1128.94 99.4678 1128.81 99.186 1128.55 98.9606C1128.29 98.7352 1127.96 98.6225 1127.57 98.6225C1126.88 98.6225 1126.12 98.893 1125.29 99.434L1124.33 98.0816C1125.49 97.1913 1126.71 96.7461 1127.99 96.7461C1129.01 96.7461 1129.82 97.0109 1130.43 97.5406C1131.03 98.059 1131.32 98.7747 1131.32 99.6875C1131.32 100.364 1131.09 101.074 1130.62 101.818C1130.16 102.55 1129.27 103.643 1127.93 105.097C1127.61 105.458 1127.37 105.723 1127.22 105.892H1131.2V107.667H1124.41ZM1135.86 102.883H1134.2V101.091H1135.86C1136.33 101.091 1136.65 101.029 1136.83 100.905C1137.1 100.713 1137.23 100.369 1137.23 99.8735C1137.23 99.4903 1137.11 99.186 1136.88 98.9606C1136.64 98.724 1136.33 98.6056 1135.93 98.6056C1135.22 98.6056 1134.47 98.9212 1133.71 99.5523L1132.86 98.1323C1133.83 97.2194 1134.93 96.763 1136.16 96.763C1137.18 96.763 1138.03 97.0391 1138.68 97.5913C1139.32 98.1323 1139.63 98.831 1139.63 99.6875C1139.63 100.747 1139.17 101.457 1138.26 101.818C1139.44 102.257 1140.03 103.102 1140.03 104.353C1140.03 105.672 1139.57 106.63 1138.63 107.227C1137.97 107.644 1137.15 107.853 1136.18 107.853C1135.63 107.853 1135.02 107.717 1134.33 107.447C1133.66 107.165 1133.1 106.827 1132.67 106.433L1133.6 105.097C1134.23 105.649 1135.04 105.925 1136.01 105.925C1136.52 105.925 1136.92 105.79 1137.21 105.52C1137.51 105.238 1137.65 104.86 1137.65 104.387C1137.65 103.384 1137.05 102.883 1135.86 102.883ZM1151.55 107.802C1151.22 107.847 1150.93 107.869 1150.64 107.869C1148.92 107.869 1147.61 107.272 1146.7 106.078C1145.97 105.12 1145.61 103.931 1145.61 102.511C1145.61 100.741 1146.1 99.3213 1147.08 98.2506C1147.98 97.2589 1149.17 96.763 1150.64 96.763C1152.35 96.763 1153.66 97.4279 1154.59 98.7578C1155.32 99.7946 1155.67 101.046 1155.67 102.511C1155.67 104.607 1154.96 106.145 1153.52 107.126C1154.2 107.858 1154.94 108.641 1155.75 109.475H1153.07L1151.55 107.802ZM1150.64 106.01C1152.39 106.01 1153.27 104.844 1153.27 102.511C1153.27 101.248 1153.02 100.274 1152.52 99.5861C1152.05 98.9663 1151.43 98.6563 1150.64 98.6563C1149.8 98.6563 1149.15 98.9944 1148.68 99.6706C1148.22 100.347 1148 101.293 1148 102.511C1148 104.844 1148.88 106.01 1150.64 106.01ZM1156.95 103.812C1158.52 101.491 1160.08 99.2086 1161.61 96.9659H1163.87V103.812H1165.69V105.587H1163.87V107.667H1161.59V105.587H1156.95V103.812ZM1158.92 103.812H1161.59V99.8059L1158.92 103.812Z" fill="white" fill-opacity="0.5" />
                                    <defs>
                                        <linearGradient id="paint0_linear_913_1982" x1="23.3811" y1="214.33" x2="1304.77" y2="207.889" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#110416" />
                                            <stop offset="0.260417" stop-color="#372142" />
                                            <stop offset="0.510417" stop-color="#D95F9B" />
                                            <stop offset="0.833333" stop-color="#3A1D47" />
                                            <stop offset="1" stop-color="#15041C" />
                                        </linearGradient>
                                    </defs>
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
                            <h1 className='main-heading text-center'>
                                <span> A glimpse of the Traccy Connect Platform </span>
                            </h1>
                            {/* <p className='main-heading-text'>{t("token:platform")}</p> */}
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