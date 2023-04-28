import { Button, Divider } from "antd";
import React from "react";
import { Container, Row, Col, SvgIcon } from "../../common";
import './Footer.scss';

import Logo from '../../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    const buttons = document.getElementsByClassName("connect-wallet-mobile")
    buttons[0].click();
  }
  return (
    <footer className="footer">
      <Container>
        {/* <Row>
          <Col>
            <Divider />
          </Col>
        </Row> */}
        <Row className="footer-upper">
          <Col lg='7'>
            <Row>
              <Col lg='4'>
                <h3>Website</h3>
                <ul>
                  <a href="/home"><li>Home</li></a>
                  <a href="/traccy-token"><li>Traccy Token</li></a>
                  <a href="/impact-through-traccy"><li>Traccy Impact</li></a>
                  <a href="/about"><li>About Us</li></a>
                  <a href="/become-part"><li>Bacome a Part</li></a>
                  <a href="/invest"><li>But Token</li></a>
                </ul>
              </Col>
              <Col lg='4'>
                <h3>Company</h3>
                <ul>
                  <a href="/become-part"><li>Contact Us</li></a>
                  <a href="/library"><li>Documents </li></a>
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
            <Button type="primary" onClick={handleClick} id="footer-wallet">Connect Wallet</Button>
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