import { Button, Divider } from "antd";
import React from "react";
import { Container, Row, Col, SvgIcon } from "../../common";
import './Footer.scss';

import Logo from '../../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <Divider />
          </Col>
        </Row>
        <Row className="footer-upper">
          <Col lg='7'>
            <Row>
              <Col lg='4'>
                <h3>Website</h3>
                <ul>
                  <li>Home</li>
                  <li>Traccy Token</li>
                  <li>Traccy Impact</li>
                  <li>About Us</li>
                  <li>Bacome a Part</li>
                  <li>But Token</li>
                </ul>
              </Col>
              <Col lg='4'>
                <h3>Company</h3>
                <ul>
                  <li>Contact Us</li>
                  <li>Documents </li>
                 
                </ul>
              </Col>
              <Col lg='4'>
                <h3>Social Media</h3>
                <ul>
                  <li>FaceBook</li>
                  <li>Telegram </li>
                  <li>Twitter  </li>
                  <li>Linkedin </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg='1'></Col>
          <Col lg='4' className="subscribe-col">
            <h3>Connect your Wallet </h3>
            <p>Connect you wallet for partecipate to STO  </p>
            <Link to='/subscription'><Button type="primary">Connect Wallet</Button></Link>
          </Col>
        </Row>
        <Row className='footer-bottom'>
          <Col lg='8'>
            <div className="left-inner">
              <img src={Logo} alt='Logo' />
              <p>Copyright ©  Traccy AG. <br /> Traccy was co-founded by Dedry Misamu, Mick Misamu and Joas Fischer.</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='social-icon-list'>
              <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
              <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
              <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
              <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;