import React from "react";
import { Container, SvgIcon } from "../../common";
import { Button } from "antd";
import Menus from "./Menus";
import "./Navbar.scss";

import TraccyLogo from '../../../assets/images/icon.png'; 

const NavbarDarkDetails = () => {
  return (
    <header className="main-header">
      <Container>
        <div className="header-inner">
          <div className="logo">
            <img src={TraccyLogo} alt="logo" />            
          </div>
          <div className="right-header">
            <Menus />
            <Button type="primary" className="brochure-btn">Brochure <SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default NavbarDarkDetails;