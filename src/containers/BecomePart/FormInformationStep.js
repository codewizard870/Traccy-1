import React, { useContext } from 'react';
import { Input, Form, Select } from 'antd';
import { SvgIcon, Row, Col } from '../../components/common';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { UserContext } from '.';

const { TextArea } = Input;

const FormInformationStep = () => {
    const { t } = useTranslation();
    const { name, setName, email, setEmail, gender, setGender, interest, setInterest, message, setMessage }
        = useContext(UserContext);

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
                        <Input defaultValue={name} value={name} onChange={e => setName(e.target.value)} />
                    </Form.Item>
                </Col>
                <Col lg='6'>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please Enter Email!' }]}
                    >
                        <Input defaultValue={email} value={email} onChange={e => setEmail(e.target.value)} />
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
                            defaultValue="Male"
                            suffixIcon={<SvgIcon name='select-arrow' viewbox='0 0 9.42 7.186' />}
                            popupClassName="select-drop"
                            options={[
                                {
                                    value: 'Male',
                                    label: 'Male',
                                },
                                {
                                    value: 'Female',
                                    label: 'Female',
                                }
                            ]}
                            value={gender}
                            onChange={e => setGender(e)}
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
                            defaultValue="Employee"
                            suffixIcon={<SvgIcon name='select-arrow' viewbox='0 0 9.42 7.186' />}
                            popupClassName="select-drop"
                            options={[
                                {
                                    value: 'Employee',
                                    label: 'Employee',
                                },
                                {
                                    value: 'Parther',
                                    label: 'Parther',
                                },
                                {
                                    value: 'Community Member',
                                    label: 'Community Member',
                                },
                                {
                                    value: 'General Questions',
                                    label: 'General Questions',
                                }
                            ]}
                            value={interest}
                            onChange={e => setInterest(e)}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Form.Item
                        name="message"
                    >
                        <TextArea placeholder={t("become:message")} rows={6} 
                        value={message} onChange={e => setMessage(e.target.value)}/>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
};

export default FormInformationStep