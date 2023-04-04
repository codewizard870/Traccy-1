import React from "react";
import { Container } from "../../common";
import Menus from "./Menus";
import "./Navbar.scss";
import "./ConnectWallet.scss";
import TraccyLogo from '../../../assets/images/logo.png'; 
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <header className="main-header">
      <Container className="container-with-connect-wallet">
        <div className="header-inner">
          <div className="logo" onClick={() => history.push("/")}>
            <img src={TraccyLogo} alt="logo" />
            <p>
              Using <br />
              Blockchain <br />
              Impactful
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

export default Navbar;