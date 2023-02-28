import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SvgIcon } from '../../components/common';
import './index.scss';

import globeImg from '../../assets/images/globe.svg';

const HomeThree = () => {
    let history = useHistory();
    return (
        <div className='homethree-wrapper'>
            <div className='homethree-header'>
                <div className='header-inner'>
                    <div onClick={() => history.goBack()} className='back-link'><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /> Back</div>
                    <div className='menu-right' onClick={() => history.push('/home')}>
                        <SvgIcon name='menu' viewbox='0 0 28 28' />
                    </div>
                </div>
            </div>
            <section className='homethree-inner'>
                <img className='center-globe' src={globeImg} alt='Globe' />
                <div className='bottom-section'>
                    <h4>IMPACT. THROUGH. CRYPTO</h4>
                    <Input.Group className='input-group'>
                        <Input placeholder='Email' />
                        <Button type="primary">Subscription <SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
                    </Input.Group>
                </div>
            </section>
        </div>
    )
};

export default HomeThree