import React, { createContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Steps } from 'antd';
import { SvgIcon } from '../../components/common';
import FormInformationStep from './FormInformationStep';
import ReviewConfirmStep from './ReviewConfirmStep';
import SentStep from './SentStep';
import './index.scss';

import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export const UserContext = createContext({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    gender: '',
    setGender: () => { },
    interest: '',
    setInterest: () => { },
    message: '',
    setMessage: () => { }
});


const BecomePart = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [interest, setInterest] = useState("Employee");
    const [message, setMessage] = useState("");
    const value = useMemo(
        () => ({ name, setName, email, setEmail, gender, setGender, interest, setInterest, message, setMessage }),
        [name, email, gender, interest, message]
    );
    const templateParams = { name, email, gender, interest, message };

    const next = () => {
        setCurrent(current + 1);

        if (current == 1) {
            console.log(current)

            emailjs.send('service_a3qu5la', 'template_s3507wx', templateParams, '2Q4kzA1Odjqa9ncqL')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success("Email successfully sent");
                }, (err) => {
                    console.log('FAILED...', err);
                    toast.error("Email sending is failed");
                });
        }
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
            title: t("become:form"),
            content: <FormInformationStep />,
        },
        {
            title: t("become:review"),
            content: <ReviewConfirmStep />,
        },
        {
            title: t("become:send"),
            content: <SentStep />,
        },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <UserContext.Provider value={value}>
            <div className='becomepart-wrapper'>
                <div className="polygon-effect">
                    <img src="/invest-form/left-hexa.png" alt="polygon-left" />
                    <img src="/invest-form/right-hexa.png" alt="polygon-right" />
                </div>
                <div className='leftbar'>
                    <div className='social-icon-list'>
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
                </div>
                <div className='right-section'>
                    {/* <div className='header-bar'>
                    <Navbar />
                </div> */}
                    <div className='rightbar-inner'>
                        <div className='address-bar'>
                            {/* <div className='logo-section'>
                            <img src={LogoLight} alt='Logo' />
                        </div> */}
                            <div className='address-col'>
                                <h3>{t("become:location")}</h3>
                                <p>
                                    TRACCY AG <br />
                                    Chaltenbodenstrasse 6a, <br />
                                    8834 Schindellegi  <br />
                                    info@traccy.ch <br />
                                    +41 44 045 45 45
                                </p>
                            </div>
                            <div className='bottom-link'>
                                <a href='/termofuse.html' target='_blank' rel="noreferrer">
                                    {t("become:terms")}
                                </a>  I
                                <a href='/Policy.html' target='_blank' rel="noreferrer">
                                    {t("become:privacy")}
                                </a>
                            </div>
                        </div>
                        <div className='dtl-section'>
                            <Steps current={current} items={items} />
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current === 0 && (
                                    <>
                                        {/* <Link to='/'>FAQ</Link> */}
                                        <Button type="primary" onClick={() => next()}>
                                            Continue
                                        </Button>
                                    </>
                                )}
                                {current === 1 && (
                                    <>
                                        {/* <Link to='/'>FAQ</Link> */}
                                        <div>
                                            <Button onClick={() => prev()}>
                                                Back
                                            </Button>
                                            <Button type="primary" onClick={() => next()}>
                                                Continue
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
};

export default BecomePart