import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Divider, Button, Modal } from 'antd';
import Slider from 'react-slick';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import BannerImg from '../../assets/images/about-banner.png';
import videoimg from '../../assets/images/video-img.jpg';
import TraccyIcon from '../../assets/images/tracy-icon.png';
import Team1 from '../../assets/images/team1.png';
import TeamThumb1 from '../../assets/images/team-thumb-1.png';
import TeamThumb2 from '../../assets/images/team-thumb-2.png';
import TeamThumb3 from '../../assets/images/team-thumb-3.png';
import TeamThumb4 from '../../assets/images/team-thumb-4.png';
import TeamThumb5 from '../../assets/images/team-thumb-5.png';
import TeamThumb6 from '../../assets/images/team-thumb-6.png';
import LeftHexa from '../../assets/images/left-hexa-small.svg';
import HeaderBg1 from '../../assets/images/title-bg1.svg';
import HeaderBg2 from '../../assets/images/title-bg2.svg';
import { useTranslation } from 'react-i18next';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' />
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' />
        </div>
    );
}

const AboutUs = () => {
    const { t } = useTranslation();
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 1,
        speed: 500
    };
    const settings2 = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div className='thumb-col-main'>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='thumb-col-main'
            >
                {i === 0 &&
                    <div className='thumb-col'>
                        <div className='image-circle'>
                            <img src={TeamThumb4} alt='Mick Misamu' />
                        </div>
                        <div className='thumb-bottom'>Joas Fischer</div>
                        <div className='thumb-designation'>
                            <span></span> CEO
                        </div>
                    </div>}
                {i === 1 &&
                    <div className='thumb-col'>
                        <div className='image-circle'>
                            <img src={TeamThumb1} alt='Mick Misamu' />
                        </div>
                        <div className='thumb-bottom'>Mick Misamu</div>
                        <div className='thumb-designation'>
                            <span></span> CIO
                        </div>
                    </div>
                }
                {i === 2 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb2} alt='Mick Misamu' /></div> <div className='thumb-bottom'>Farrah Mettler</div>
                    <div className='thumb-designation'><span></span> CMO</div></div>}
                {i === 3 &&
                    <div className='thumb-col'>
                        <div className='image-circle'>
                            <img src={TeamThumb3} alt='Mick Misamu' />
                        </div>
                        <div className='thumb-bottom'>Dedry  Misamu</div>
                        <div className='thumb-designation'>
                            <span></span> CFO
                        </div>
                    </div>}
                {i === 4 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb5} alt='Andrea Bello' /></div> <div className='thumb-bottom'>Andrea Bello</div>
                    <div className='thumb-designation'><span></span> COO & CTO</div></div>}
                {i === 5 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb6} alt='IKA NUR AFFIFAH' /></div> <div className='thumb-bottom'>Ika Affifah</div>
                    <div className='thumb-designation'><span></span> CBDO</div></div>}
            </div>
        )
    };
    const settings3 = {
        infinite: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    const settings4 = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className='aboutus-wrapper'>
            <section className='banner-section'>
                <img className='banner-img' src={BannerImg} alt="Banner" />
                <Container>
                    <Row>
                        <Col lg='6' className="banner-left">
                            <h1> <span>{t("about_us:title")}</span> </h1>
                            <p>{t("about_us:label")}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='social-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='social-inner'>
                                Share
                                <Divider />
                                <a href="https://twitter.com/traccyag">
                                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                </a>
                                <a href="https://web.telegram.org/z/#-1837824968">
                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                </a>
                                <a href="https://www.instagram.com/traccy_official/">
                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                                </a>
                                <a href="https://www.linkedin.com/company/traccy-ag/?viewAsMember=true">
                                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='vission-section'>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <Container>
                    <Row>
                        <Col>
                            <div className='header-row'>
                                <img src={TraccyIcon} alt="Traccy" />
                                <h4>Traccy using Blockchain Impactful</h4>
                                <p>{t("about_us:impactful")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <h2 className='main-heading'>{t("about_us:our")}&nbsp;<span>{t("vision")}</span></h2>
                            <h2>{t("about_us:vision_sub")}</h2>
                            <p className='vission-text'>
                                {t("about_us:vision_cnt")}
                            </p>
                        </Col>
                        <Col md="6">
                            <h2 className='main-heading'>{t("about_us:our")}&nbsp;<span>{t("mission")} </span></h2>
                            <h2>{t("about_us:mission_sub")}</h2>
                            <p className='vission-text'>
                                {t("about_us:mission_cnt")}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='video-section'>
                <Container>
                    <Row>
                        <Col className='video-colum'>
                            <div className='video-inner'>
                                {/* <div className='upper-action'>
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
                                </div> */}
                                {/* <div className='play-icon'><SvgIcon name='play' viewbox='0 0 23 30.001' /></div> */}
                                {/* <img src={videoimg} alt='video-img' /> */}
                                {/* <iframe src="https://drive.google.com/file/d/1z3y1b27DQkoYbQ4fw4JtgHr8-2fTVMX4/preview" title="video"
                                width="100%" style={{height: "43vw"}}></iframe> */}
                                <video autoplay controls>
                                    <source src="https://youtu.be/aZx5E3QVL0M" type="video/mp4" />
                                </video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='statics-section'>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <Container>
                    <Row className="statics-row">
                        <svg className='flat-icon' width="24.86" height="30" viewBox="0 0 24.86 30">
                            <g transform="translate(-228.75 -2694)">
                                <rect width="1" height="30" transform="translate(228.75 2694)" fill="#c9c9c9" opacity="0.71" />
                                <path d="M8553.555,8485h22.86l-6.983,10.008h-15.877Z" transform="translate(-8322.805 -5791)" fill="#c9c9c9" opacity="0.743" />
                                <path d="M22.862,0H0L6.983,10.008H22.862Z" transform="translate(253.552 2714.314) rotate(-180)" fill="#c9c9c9" opacity="0.383" />
                            </g>
                        </svg>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>{t("about_us:foundin")}</h4>
                            <h1>2022</h1>
                            <p>{t("about_us:foundin_cnt")}</p>
                        </Col>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>{t("about_us:updates")}</h4>
                            <h1>6+</h1>
                            <p>{t("about_us:updates_cnt")}</p>
                        </Col>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>{t("about_us:release")}</h4>
                            <h1>4 {t("about_us:months")}</h1>
                            <p>{t("about_us:release_cnt")}</p>
                        </Col>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>{t("about_us:projects")}</h4>
                            <h1>3+</h1>
                            <p>{t("about_us:projects_cnt")}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='coreteam-section'>
                <img className='title-bg' src={HeaderBg2} alt='BG' />
                <img className='right-hexa' src="/about-us/core-right-hexa.svg" alt='Hexa' />
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'>Core-<span>Team</span></h1>
                            <p className='main-heading-text'>{t("about_us:management")} </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='coreteam-wrapper'>
                                <Slider {...settings2}>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Joas Fischer </h3>
                                                <div className='designation'><Divider /> CEO & Co-Founder</div>
                                                <p>{t("about_us:joas")}</p>
                                                <div className='social-icons'>
                                                    {/* <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                                    <a href="https://www.linkedin.com/in/joas-fischer-79419b164" target="_blank" rel="noreferrer">
                                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src={Team1} alt='Joas Fischer' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Mick Misamu </h3>
                                                <div className='designation'><Divider /> CIO & Co-Founder</div>
                                                <p>{t("about_us:mick")}</p>
                                                <div className='social-icons'>
                                                    {/* <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                                    <a href="https://www.linkedin.com/in/mick-misamu-6381b3193" target="_blank" rel="noreferrer">
                                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src="/about-us/mike.png" alt='mike' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Farrah Mettler </h3>
                                                <div className='designation'><Divider /> CMO</div>
                                                <p>{t("about_us:farrah")}</p>
                                                <div className='social-icons'>
                                                    {/* <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                                    <a href="https://www.linkedin.com/in/farrah-mettler-306922187" target="_blank" rel="noreferrer">
                                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src="/about-us/farrah.png" alt='farrah' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Dedry Misamu </h3>
                                                <div className='designation'><Divider /> CFO & Co-Founder</div>
                                                <p>{t("about_us:dedry")}</p>
                                                <div className='social-icons'>
                                                    {/* <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                                    <a href="https://www.linkedin.com/in/dedry-misamu-lusilavo-a3b811117" target="_blank" rel="noreferrer">
                                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src="/about-us/dedry.png" alt='dedry' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Andrea Bello </h3>
                                                <div className='designation'><Divider /> COO & CTO</div>
                                                <p>{t("about_us:andrea")}</p>
                                                <div className='social-icons'>
                                                    {/* <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                                    <a href="https://www.linkedin.com/in/bello-andrea-380572b4" target="_blank" rel="noreferrer">
                                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src="/about-us/andrea.png" alt='andrea' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Ika Affifah </h3>
                                                <div className='designation'><Divider /> CBDO </div>
                                                <p>{t("about_us:ika")}</p>
                                                <div className='social-icons'>
                                                    {/* <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                                    <a href="https://www.linkedin.com/in/ika-nur-afifah" target="_blank" rel="noreferrer">
                                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src="/about-us/ika.png" alt='ika' />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="ourteam-section">
                <img className='left-hexa' src={LeftHexa} alt='Hexa' />
                <div className='blur-circle1'></div>
                <div className='blur-circle2'></div>
                <div className='blur-circle3'></div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'>Our <span>Team</span></h1>
                        </Col>
                    </Row>
                    <div className="ourteam-wrapper">
                        {OURTEAM.map(team => (
                            <div className="card">
                                <div className="avatar-wrapper">
                                    <img src={team.image} alt="team" />
                                </div>
                                <span className="card-name">{team.name}</span>
                                {/* <span className="card-role">{team.role}</span> */}
                                <span className="card-description">{team.role}</span>

                                <div className="card-social">
                                    {/* <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                    <a href={team.linkedin}>
                                        <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ourteam-wrapper-mobile">
                        <Slider {...settings4}>
                            {OURTEAM.map(team => (
                                <div>
                                    <div className="card">
                                        <div className="avatar-wrapper">
                                            <img src={team.image} alt="team" />
                                        </div>
                                        <span className="card-name">{team.name}</span>
                                        {/* <span className="card-role">{team.role}</span> */}
                                        <span className="card-description">{team.role}</span>

                                        <div className="card-social">
                                            {/* <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                                            <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                            <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /> */}
                                            <a href={team.linkedin}>
                                                <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
        </div>
    )
};

export default AboutUs

const OURTEAM = [
    {
        image: "/about-us/marko.png",
        name: "Marko Vitez",
        role: "Full Stack Developer & Smart Contracts",
        linkedin: "https://www.linkedin.com/in/marko-vitez-6381b3193"
    },
    // {
    //     image: "/about-us/pirda.png",
    //     name: "Pirda Fajirati",
    //     role: "Graphic Designer & UI/UX",
    //     linkedin: "https://www.linkedin.com/in/mick-misamu-6381b3193"
    // },
    {
        image: "/about-us/fidelius.png",
        name: "Fidelius Schüpfer",
        role: "Financial Relations Specialist",
        linkedin: "https://www.linkedin.com/in/fidelius-sch%C3%BCpfer-28a7a7215"
    },
    {
        image: "/about-us/gianluca.png",
        name: "Gian-Luca Grüter",
        role: "Investor Relations Specialist",
        linkedin: "https://www.linkedin.com/in/gianluca-gr%C3%BCter2000"
    },
    // {
    //     image: "/about-us/julia.png",
    //     name: "Eric Lee",
    //     role: "Full Stack Developer",
    // },
    {
        image: "/about-us/yves.png",
        name: "Yves Gloggner",
        role: "Financial Relations Specialist",
        linkedin: "https://www.linkedin.com/in/yveslucgloggner"
    },
];
