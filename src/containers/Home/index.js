import React from 'react';
import { SvgIcon } from '../../components/common';
import { Button, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import hoverVideo from '../../assets/images/hover-video.webm';
import AnimationOne from '../../assets/animation/traccy-token-icon.json';
import AnimationTwo from '../../assets/animation/impact-icon.json';
import AnimationThree from '../../assets/animation/about-icon.json';
import AnimationFour from '../../assets/animation/becomepart-icon.json';

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

const Home = () => {
    const history = useHistory();
    const settings = {
        infinite: false,
        dots: false,
        slidesToShow: 3.15,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.15,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.15,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    const trcytokenanimationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        renderer: 'svg'
    }
    const impactanimationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationTwo,
        renderer: 'svg'
    }
    const aboutanimationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationThree,
        renderer: 'svg'
    }
    const becomeanimationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationFour,
        renderer: 'svg'
    }
    return (
        <>
            <div className='home2-wrapper'>
                <div className='home2-wrapper-inner'>
                    <Link to='/' className='backarrow'>
                        <SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' />
                        Back
                    </Link>
                    <Slider {...settings}>
                        <div>
                            <div className='home2-slide-card'>
                                <video playsInline autoPlay muted loop className="fog-img">
                                    <source src={hoverVideo} />
                                </video>
                                <div className='slide-number'>
                                    <h4>01</h4>
                                    <Divider />
                                </div>
                                <div className='slide-icon'>
                                    <svg className="circle">
                                        <g>
                                            <ellipse className="background" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="2" />
                                            <ellipse className="foreground" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="3" />
                                        </g>
                                    </svg>
                                    <Lottie
                                        options={trcytokenanimationLottie}
                                        height={55}
                                        width={55}
                                        className='animation-icon'
                                    />
                                </div>
                                <div className='desc-text'>
                                    <h2>TRCY Token</h2>
                                    <h3>TRCY Token</h3>
                                    <p>
                                        Better then Ou tum Completely Merging of Computer Science
                                    </p>
                                    <ul>
                                        <li>Orchid wer nehmen Personen of meine</li>
                                        <li>Perdurent montes, necetur ridodus</li>
                                        <li>Viennes sentis motesir</li>
                                    </ul>
                                </div>
                                <Button onClick={() => history.push('/traccy-token')}> <div className='btn-text'>Learn more</div> <div className='btn-icon'><SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></div></Button>
                            </div>
                        </div>
                        <div>
                            <div className='home2-slide-card'>
                                <video playsInline autoPlay muted loop className="fog-img">
                                    <source src={hoverVideo} />
                                </video>
                                <div className='slide-number'>
                                    <h4>02</h4>
                                    <Divider />
                                </div>
                                <div className='slide-icon'>
                                    <svg className="circle">
                                        <g>
                                            <ellipse className="background" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="2" />
                                            <ellipse className="foreground" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="3" />
                                        </g>
                                    </svg>
                                    <Lottie
                                        options={impactanimationLottie}
                                        height={60}
                                        width={60}
                                        className='animation-icon'
                                    />
                                </div>
                                <div className='desc-text'>
                                    <h2>Traccy Impact</h2>
                                    <h3>Traccy Impact</h3>
                                    <p>
                                        Better then Ou tum Completely Merging of Computer Science
                                    </p>
                                    <ul>
                                        <li>Orchid wer nehmen Personen of meine</li>
                                        <li>Perdurent montes, necetur ridodus</li>
                                        <li>Viennes sentis motesir</li>
                                    </ul>
                                </div>
                                <Button onClick={() => history.push('/impact-through-traccy')}> <div className='btn-text'>Learn more</div> <div className='btn-icon'><SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></div></Button>
                            </div>
                        </div>
                        <div>
                            <div className='home2-slide-card'>
                                <video playsInline autoPlay muted loop className="fog-img">
                                    <source src={hoverVideo} />
                                </video>
                                <div className='slide-number'>
                                    <h4>03</h4>
                                    <Divider />
                                </div>
                                <div className='slide-icon'>
                                    <svg className="circle">
                                        <g>
                                            <ellipse className="background" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="2" />
                                            <ellipse className="foreground" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="3" />
                                        </g>
                                    </svg>
                                    <Lottie
                                        options={aboutanimationLottie}
                                        height={66}
                                        width={66}
                                        className='animation-icon'
                                    />
                                </div>
                                <div className='desc-text'>
                                    <h2>About Us</h2>
                                    <h3>About Us</h3>
                                    <p>
                                        Better then Ou tum Completely Merging of Computer Science
                                    </p>
                                    <ul>
                                        <li>Orchid wer nehmen Personen of meine</li>
                                        <li>Perdurent montes, necetur ridodus</li>
                                        <li>Viennes sentis motesir</li>
                                    </ul>
                                </div>
                                <Button onClick={() => history.push('/about')}> <div className='btn-text'>Learn more</div> <div className='btn-icon'><SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></div></Button>
                            </div>
                        </div>
                        <div>
                            <div className='home2-slide-card'>
                                <video playsInline autoPlay muted loop className="fog-img">
                                    <source src={hoverVideo} />
                                </video>
                                <div className='slide-number'>
                                    <h4>04</h4>
                                    <Divider />
                                </div>
                                <div className='slide-icon'>
                                    <svg className="circle">
                                        <g>
                                            <ellipse className="background" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="2" />
                                            <ellipse className="foreground" ry="55" rx="55" cy="55.2" cx="55.2" strokeWidth="3" />
                                        </g>
                                    </svg>
                                    <Lottie
                                        options={becomeanimationLottie}
                                        height={66}
                                        width={66}
                                        className='animation-icon'
                                    />
                                </div>
                                <div className='desc-text'>
                                    <h2>Become a part </h2>
                                    <h3>Become a part </h3>
                                    <p>
                                        Better then Ou tum Completely Merging of Computer Science
                                    </p>
                                    <ul>
                                        <li>Orchid wer nehmen Personen of meine</li>
                                        <li>Perdurent montes, necetur ridodus</li>
                                        <li>Viennes sentis motesir</li>
                                    </ul>
                                </div>
                                <Button onClick={() => history.push('/become-part')}> <div className='btn-text'>Learn more</div> <div className='btn-icon'><SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></div></Button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
};

export default Home