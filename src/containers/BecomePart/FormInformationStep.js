import React from 'react';
import { Input, Form, Select } from 'antd';
import { SvgIcon, Row, Col } from '../../components/common';
import './index.scss';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;

const FormInformationStep = () => {
    const {t} = useTranslation();
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            layout='vertical'
        >
            <Row>
                <Col lg='6'>
                    <Form.Item
                        name="name"
                        label={t("become:name")}
                        rules={[{ required: true, message: 'Please Enter Full Name!' }]}
                    >
                        <Input defaultValue='Mick Misamu' />
                    </Form.Item>
                </Col>
                <Col lg='6'>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please Enter Email!' }]}
                    >
                        <Input defaultValue='Mick Misamu' />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col lg='6'>
                    <Form.Item
                        name="gender"
                        label={t("become:gender")}
                        rules={[{ required: true, message: 'Please Enter gender' }]}
                    >
                        <Select
                            defaultValue="m"
                            suffixIcon={<SvgIcon name='select-arrow' viewbox='0 0 9.42 7.186' />}
                            popupClassName="select-drop"
                            options={[
                                {
                                    value: 'm',
                                    label: 'Male',
                                },
                                {
                                    value: 'f',
                                    label: 'Female',
                                }
                            ]}
                            />
                    </Form.Item>
                </Col>
                <Col lg='6'>
                    <Form.Item
                        name="interestedas"
                        label={t("Interest")}
                        rules={[{ required: true, message: 'Please Enter intertests!' }]}
                    >
                        <Select
                            defaultValue="v1"
                            suffixIcon={<SvgIcon name='select-arrow' viewbox='0 0 9.42 7.186' />}
                            popupClassName="select-drop"
                            options={[
                                {
                                    value: 'v1',
                                    label: 'Employee',
                                },
                                {
                                    value: 'v2',
                                    label: 'Parther',
                                },
                                {
                                    value: 'v3',
                                    label: 'Community Member',
                                },
                                {
                                    value: 'v4',
                                    label: 'General Questions',
                                }
                            ]}
                            />
                    </Form.Item>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Form.Item
                        name="message"
                    >
                        <TextArea placeholder={t("become:message")} rows={6} />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
};

export default FormInformationStep