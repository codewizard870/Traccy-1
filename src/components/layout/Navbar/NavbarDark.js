import React from "react";
import { Container } from "../../common";
import Menus from "./Menus";
import "./Navbar.scss";
import "./ConnectWallet.scss";

import TraccyLogo from '../../../assets/images/logo.png';

const NavbarDark = () => {
  return (
    <header className="main-header">
      <Container className="container-with-connect-wallet">
        <div className="header-inner">
          <div className="logo">
            <img src={TraccyLogo} alt="logo" />
            <p>
              USING <br />
              BLOCKCHAIN <br />
              IMPACTFUL
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

export default NavbarDark;