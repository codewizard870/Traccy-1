import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Steps } from 'antd';
import { SvgIcon } from '../../components/common';
import InvestStep1 from './InvestStep1';
import InvestStep2 from './InvestStep2';
import InvestStep3 from './InvestStep3';
import InvestStep4 from './InvestStep4';
import './index.scss';

import { useTranslation } from 'react-i18next';

const Invest = () => {
    const {t} = useTranslation();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: t("buy:choose"),
            content: <InvestStep2 onNext={next} onPrev={prev} />,
        },
        {
            title: `${t("buy:saft")} ${t("buy:agreement")}`,
            content: <InvestStep1 onNext={next} />,
        },
        {
            title: t("buy:fill"),
            content: <InvestStep3 onNext={next} onPrev={prev} />,
        },
        {
            title: t("buy:confirmation"),
            content: <InvestStep4 onPrev={prev} />,
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <div className='investform-wrapper'>
            <div className="polygon-effect">
                <img src="/invest-form/left-hexa.png" alt="polygon-left"/>
                <img src="/invest-form/right-hexa.png" alt="polygon-right"/>
            </div>
            <div className='leftbar'>
                <div className='social-icon-list'>
                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                    <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                </div>
            </div>
            <div className='right-section'>
                <div className='rightbar-inner'>
                    <div className='dtl-section'>
                        <Steps current={current} items={items} />
                        <div className="steps-content">{steps[current].content}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Invest