import React, { useContext } from 'react';
import { Divider } from 'antd';
import './index.scss';
import { UserContext } from '.';

const ReviewConfirmStep = () => {
    const { name, email, gender, interest, message }= useContext(UserContext);
    return (
        <>
            <div className='review-dlt'>
                <h3>Personal Details </h3>
                <p>
                    {name} <br /> 
                    {email} <br />  
                    {gender} <br />
                    {interest} <br />
                    {message}
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