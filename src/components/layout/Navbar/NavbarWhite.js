import React, { useState } from "react";
import { Container } from "../../common";
import Menus from "./Menus";
import "./Navbar.scss";
import "./ConnectWallet.scss";
import TraccyLogo from '../../../assets/images/logo-light.png';
import TraccyLogoSmall from '../../../assets/images/icon.png';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const history = useHistory();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScrollTop(winScroll);
    };

    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const intro = document.getElementById("intro-wrapper");

    const handleIntroScroll = () => {
      if (intro)
        setScrollTop(intro.scrollTop);
    }
    handleIntroScroll();
    if (intro)
      intro.addEventListener("scroll", handleIntroScroll);
    return () => intro && intro.removeEventListener("scroll", handleIntroScroll);
  }, [])

  return (
    <header className={`main-header`}>
      <Container className="container-with-connect-wallet">
        <div className={`${scrollTop > 10 ? "dark-header" : ""} header-inner `}>
          <div
            className="logo"
            onClick={() => window.location.assign("https://traccy.io/")}
          >
            <img src={TraccyLogo} alt="logo" />
            <img src={TraccyLogoSmall} alt="logo" />
            <p>
              using <br />
              blockchain <br />
              impactful
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