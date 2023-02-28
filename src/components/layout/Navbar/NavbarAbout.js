import React from "react";
import { Container, SvgIcon } from "../../common";
import Menus from "./Menus";
import "./Navbar.scss";

import TraccyLogo from '../../../assets/images/logo.png'; 

const NavbarAbout = () => {
  return (
    <header className="main-header">
      <Container>
        <div className="header-inner">
          <div className="logo">
            <img src={TraccyLogo} alt="logo" />
            <p>
              Impact <br />
              Through <br />
              Crypto
            </p>
          </div>
          <div className="right-header">
            <Menus />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default NavbarAbout;