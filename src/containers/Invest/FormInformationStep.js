import React from 'react';
import { Input, Form, Select } from 'antd';
import { SvgIcon, Row, Col } from '../../components/common';
import './index.scss';

const { TextArea } = Input;

const FormInformationStep = () => {
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
                        label="Full Name"
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
                        name="username"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please Enter Full Name!' }]}
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
                        label="Interested as"
                        rules={[{ required: true, message: 'Please Enter Full Name!' }]}
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
                        <TextArea placeholder='Please leave a message ' rows={6} />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
};

export default FormInformationStep