import React from 'react';
import { Button, Divider } from 'antd';
import { SvgIcon } from '../../components/common';
import Slider from 'react-slick';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

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

const SentStep = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:  true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return (
        <div className='sent-wrapper'>
            <h2>Your request was successfully sent </h2>
            <p>All set! Your transaction is pending and a RichUncle <br /> Representative will be in touch</p>
            <Button type='primary'>Get our Newsletter </Button>
            <h2>Shared information </h2>
            <Slider {...settings}>
                <div>
                    <div className='download-col'>
                        <h4>Factheet</h4>
                        <div className='download-btn'><div className='arrow-icon'> <SvgIcon name='chevron-down' viewbox='0 0 23.616 13.503' /> </div> Download PDF</div>
                        <Divider />
                    </div>
                </div>
                <div>
                    <div className='download-col'>
                        <h4>Pitchdek </h4>
                        <div className='download-btn'><div className='arrow-icon'> <SvgIcon name='chevron-down' viewbox='0 0 23.616 13.503' /> </div> Download PDF</div>
                        <Divider />
                    </div>
                </div>
                <div>
                    <div className='download-col'>
                        <h4>Whitepaper</h4>
                        <div className='download-btn'><div className='arrow-icon'> <SvgIcon name='chevron-down' viewbox='0 0 23.616 13.503' /> </div> Download PDF</div>
                        <Divider />
                    </div>
                </div>
            </Slider>
        </div>
    )
};

export default SentStep