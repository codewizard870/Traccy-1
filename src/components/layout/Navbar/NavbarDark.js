import React from "react";
import { Container } from "../../common";
import Menus from "./Menus";
import "./Navbar.scss";

import TraccyLogo from '../../../assets/images/icon.png'; 

const NavbarDark = () => {
  return (
    <header className="main-header">
      <Container>
        <div className="header-inner">
          <div className="logo">
            <img src={TraccyLogo} alt="logo" />            
          </div>
          <div className="right-header">
            <Menus />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default NavbarDark;