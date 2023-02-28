import React from 'react';
import { Divider } from 'antd';
import './index.scss';

const ReviewConfirmStep = () => {
    return (
        <>
            <div className='review-dlt'>
                <h3>Personal Details </h3>
                <p>
                    Mick Misamu <br /> 
                    1 Hessestrass <br />  
                    Zurich 8051 <br />
                    12/09/2022
                </p>
            </div>
            <div className='review-dlt bottom'>
                <h3>Review your information  </h3>
                <Divider />
                <p>
                    Please double check accuracy 
                </p>
            </div>
        </>
    )
};

export default ReviewConfirmStep