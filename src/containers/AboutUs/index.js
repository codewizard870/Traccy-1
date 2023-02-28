import React, { useState } from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Divider, Button, Modal } from 'antd';
import Slider from 'react-slick';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import BannerImg from '../../assets/images/about-banner.png';
import videoimg from '../../assets/images/video-img.jpg';
import TraccyIcon from '../../assets/images/tracy-icon.png';
import RoadmapPath from '../../assets/images/raodmap-line.svg';
import Team1 from '../../assets/images/team1.png';
import TeamThumb1 from '../../assets/images/team-thumb-1.png';
import TeamThumb2 from '../../assets/images/team-thumb-2.png';
import TeamThumb3 from '../../assets/images/team-thumb-3.png';
import TeamThumb4 from '../../assets/images/team-thumb-4.png';
import Partner1 from '../../assets/images/partner-1.png';
import Partner2 from '../../assets/images/partner-2.png';
import Partner3 from '../../assets/images/partner-3.png';
import Partner4 from '../../assets/images/partner-4.png';
import LeftHexa from '../../assets/images/left-hexa-small.svg';
import RightHexa from '../../assets/images/right-hexa-small.svg';
import RightHexa3 from '../../assets/images/right-hexa3.svg'
import HeaderBg1 from '../../assets/images/title-bg1.svg';
import HeaderBg2 from '../../assets/images/title-bg2.svg';

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
            {i === 0 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb1} alt='Mick Misamu' /></div> <div className='thumb-bottom'>Mick Misamu</div>
            <div className='thumb-designation'><span></span> CTO</div></div>}
            {i === 1 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb2} alt='Mick Misamu' /></div> <div className='thumb-bottom'>Farrah Mettler</div>
            <div className='thumb-designation'><span></span> CMO</div></div>}
            {i === 2 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb3} alt='Mick Misamu' /></div> <div className='thumb-bottom'>Dedry  Misamu</div>
            <div className='thumb-designation'><span></span> CFO</div></div>}
            {i === 3 && <div className='thumb-col'><div className='image-circle'><img src={TeamThumb4} alt='Mick Misamu' /></div> <div className='thumb-bottom'>Joas Fischer</div>
            <div className='thumb-designation'><span></span> CEO</div></div>}
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
    return (
        <div className='aboutus-wrapper'>
            <section className='banner-section'>
                <img className='banner-img' src={BannerImg} alt="Banner" />
                <Container>
                    <Row>
                        <Col lg='6' className="banner-left">
                            <h1>Inspiration <span>about us</span> </h1>
                            <p>
                               Buy NFTS, access Defi dApps, and explore Web3 across multiple networks on Chrome and BravBuy NFTS, access Defi dApps, and explore Web3 across multiple networks on Chrome and Brave e 
                            </p>
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
                                <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                                <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                                <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
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
                                <h4>Traccy connects the world</h4>
                                <p>Secure, Manage, and Exchange cryptocurrency on desktop, mobile and hardware wallets.</p>
                            </div>  
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <h2 className='main-heading'>Our <span>Vision </span></h2>
                            <p className='vission-text'>
                                Buy NFTS, access Defi dApps, and explore Web3 
                                across multiple networks on Chrome and BravBuy NFTS, 
                                access Defi dApps, and explore Web3 
                                across multiple networks on Chrome and Brave e 
                            </p>
                        </Col>
                        <Col md="6">
                            <h2 className='main-heading'>Our <span>Mission </span></h2>
                            <p className='vission-text'>
                                Buy NFTS, access Defi dApps, and explore Web3 
                                across multiple networks on Chrome and BravBuy NFTS, 
                                access Defi dApps, and explore Web3 
                                across multiple networks on Chrome and Brave e 
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
            <section className='statics-section'>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <Container>
                    <Row className="statics-row">
                        <svg className='flat-icon' width="24.86" height="30" viewBox="0 0 24.86 30">
                            <g transform="translate(-228.75 -2694)">
                                <rect width="1" height="30" transform="translate(228.75 2694)" fill="#c9c9c9" opacity="0.71"/>
                                <path d="M8553.555,8485h22.86l-6.983,10.008h-15.877Z" transform="translate(-8322.805 -5791)" fill="#c9c9c9" opacity="0.743"/>
                                <path d="M22.862,0H0L6.983,10.008H22.862Z" transform="translate(253.552 2714.314) rotate(-180)" fill="#c9c9c9" opacity="0.383"/>
                            </g>
                        </svg>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>FOUNDED IN</h4>
                            <h1>2022</h1>
                            <p>
                                By JP Richardson and Daniel Castagnoli
                            </p>
                        </Col>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>PRODUCT UPDATES</h4>
                            <h1>200+</h1>
                            <p>
                                By JP Richardson and Daniel Castagnoli
                            </p>
                        </Col>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>NEW RELEASE EVERY</h4>
                            <h1>2 Weeks</h1>
                            <p>
                                By JP Richardson and Daniel Castagnoli
                            </p>
                        </Col>
                        <Col lg='3' md='6' className='stat-col'>
                            <h4>DIGITAL ASSETS</h4>
                            <h1>240+</h1>
                            <p>
                                By JP Richardson and Daniel Castagnoli
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='roadmap-section'>
                <img className='left-hexa' src={LeftHexa} alt='Hexa' />
                <img className='right-hexa' src={RightHexa} alt='Hexa' />
                <Container>
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
                                                19 November 
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                19 November 
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                19 November 
                                                <InfoModal />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='roadmap-card'>
                                            <SvgIcon className='circle-icon' name='roadmap-icon' viewbox='0 0 73.146 204.128' />
                                            <div className='action'>
                                                19 November 
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
            <section className='ourteam-section'>
                <img className='title-bg' src={HeaderBg2} alt='BG' />
                <img className='right-hexa' src={RightHexa3} alt='Hexa' />
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'>Our <span>Team</span></h1>
                            <p className='main-heading-text'>
                                Buy NFTS, access Defi dApps, and explore Web3 <br />
                                across multiple networks on Chrome and Brave 
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='ourteam-wrapper'>
                                <Slider {...settings2}>
                                    <div>
                                        <div className='slider-card'>
                                            <div className='slider-left'>
                                                <h3>Joas Fischer </h3>
                                                <div className='designation'><Divider /> CEO & Co-Founder</div>
                                                <p>Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting Lorem Ipsum is simply dummy text the printing and typesetting ndustry.</p>
                                                <div className='social-icons'>
                                                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                                                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
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
                                                <h3>Joas Fischer </h3>
                                                <div className='designation'><Divider /> CEO & Co-Founder</div>
                                                <p>Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting Lorem Ipsum is simply dummy text the printing and typesetting ndustry.</p>
                                                <div className='social-icons'>
                                                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                                                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
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
                                                <h3>Joas Fischer </h3>
                                                <div className='designation'><Divider /> CEO & Co-Founder</div>
                                                <p>Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting Lorem Ipsum is simply dummy text the printing and typesetting ndustry.</p>
                                                <div className='social-icons'>
                                                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                                                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
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
                                                <h3>Joas Fischer </h3>
                                                <div className='designation'><Divider /> CEO & Co-Founder</div>
                                                <p>Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting ndustry. Lorem Ipsum is simply dummy text the printing and typesetting Lorem Ipsum is simply dummy text the printing and typesetting ndustry.</p>
                                                <div className='social-icons'>
                                                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                                                    <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                                                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                                                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                                                </div>
                                            </div>
                                            <div className='slider-right'>
                                                <img src={Team1} alt='Joas Fischer' />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='partner-section'>
                <img className='title-bg' src={HeaderBg1} alt='BG' />
                <img className='left-hexa' src={LeftHexa} alt='Hexa' />
                <img className='right-hexa' src={RightHexa} alt='Hexa' />
                <div className='blur-circle1'></div>
                <div className='blur-circle2'></div>
                <div className='blur-circle3'></div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='main-heading text-center'><span>Partner</span></h1>
                            <p className='main-heading-text'>
                                Buy NFTS, access Defi dApps, and explore Web3 <br />
                                across multiple networks on Chrome and Brave 
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='partner-wrapper'>
                                <Slider {...settings3}>
                                    <div>
                                        <div className='partner-img'>
                                            <img src={Partner1} alt='Partner' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='partner-img'>
                                            <img src={Partner2} alt='Partner' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='partner-img'>
                                            <img src={Partner3} alt='Partner' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='partner-img'>
                                            <img src={Partner4} alt='Partner' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='partner-img'>
                                            <img src={Partner1} alt='Partner' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='partner-img'>
                                            <img src={Partner2} alt='Partner' />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default AboutUs