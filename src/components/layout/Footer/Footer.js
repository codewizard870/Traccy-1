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
                  <a href="/traccy-token"><li>Traccy Connect</li></a>
                  <a href="/impact-through-traccy/0"><li>Impact</li></a>
                  <a href="/about"><li>About Us</li></a>
                  <a href="/become-part"><li>Bacome a Part</li></a>
                  <a href="/invest"><li>Buy Token</li></a>
                </ul>
              </Col>
              <Col lg='4'>
                <h3>Company</h3>
                <ul>
                  <a href="/become-part"><li>Contact Us</li></a>
                  {/* <a href="/library"><li>Documents </li></a> */}
                </ul>
              </Col>
              <Col lg='4'>
                <h3>Social Media</h3>
                <ul>
                  <a href="https://web.telegram.org/z/#-1837824968"><li>Telegram </li></a>
                  <a href="https://twitter.com/traccyag"><li>Twitter  </li></a>
                  <a href="https://www.instagram.com/traccy_official/"><li>Instagram</li></a>
                  <a href="https://www.linkedin.com/company/traccy-ag/?viewAsMember=true"><li>Linkedin </li></a>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg='1'></Col>
          <Col lg='4' className="subscribe-col">
            <h3>Connect your Wallet </h3>
            <p>Connect you wallet to partecipate in STO  </p>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;