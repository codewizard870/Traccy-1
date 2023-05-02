import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Steps } from 'antd';
import { SvgIcon } from '../../components/common';
import FormInformationStep from './FormInformationStep';
import ReviewConfirmStep from './ReviewConfirmStep';
import SentStep from './SentStep';
import './index.scss';

import { useTranslation } from 'react-i18next';


const BecomePart = () => {
    const { t } = useTranslation();

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
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
        <div className='becomepart-wrapper'>
            <div className="polygon-effect">
                <img src="/invest-form/left-hexa.png" alt="polygon-left" />
                <img src="/invest-form/right-hexa.png" alt="polygon-right" />
            </div>
            <div className='leftbar'>
                <div className='social-icon-list'>
                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                    <SvgIcon name='telegram' viewbox='0 0 34.875 34.664' />
                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
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
                            <a href='https://drive.google.com/file/d/1O2SMCDtlAMBvQZe9YbFcA16lXX7J9_Nl/view?usp=share_link' target='_blank' rel="noreferrer">
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
                                    <Link to='/'>FAQ</Link>
                                    <Button type="primary" onClick={() => next()}>
                                        Continue
                                    </Button>
                                </>
                            )}
                            {current === 1 && (
                                <>
                                    <Link to='/'>FAQ</Link>
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
    );
};

export default BecomePart