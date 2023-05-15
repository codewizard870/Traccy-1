import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Select, Drawer, Button } from "antd";
import { SvgIcon } from '../../../components/common';
import { Link } from "react-router-dom";
import "./Navbar.scss";

import EnIcon from '../../../assets/images/en.png';
import GermanIcon from '../../../assets/images/german.png';
import FrenchIcon from '../../../assets/images/french.png';
import ConnectWallet from "./ConnectWallet";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Menus = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLanguage = (lang_code) => {
    localStorage.setItem("lang", lang_code);
    setDefaultLang(lang_code);
    i18n.changeLanguage(lang_code);
  }

  const lang = localStorage.getItem("lang") ?? "en";
  const [defaultLang, setDefaultLang] = useState(lang);
  useEffect(() => {
    if (lang)
      i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <>
      <Drawer
        title={false}
        placement='right'
        width={"100%"}
        onClose={onClose}
        closeIcon={false}
        open={open}
        rootClassName='menubar-right'
      >
        <Button className="menu-close" onClick={onClose}><SvgIcon name="close" viewbox="0 0 10.357 10.357" /></Button>
        <ul>
          <li>
            <a href="https://traccy-globe.vercel.app/">
              <div className='menu-icon'>
                <SvgIcon name='home-icon' viewbox='0 0 18 20' />
              </div>
              Home
            </a>
          </li>
          <li>
            <Link to='/traccy-token'>
              <div className='menu-icon'>
                <SvgIcon name='tccytoken-icon' viewbox='0 0 24.914 20.444' />
              </div>
              TRACCY Connect
            </Link>
          </li>
          <li>
            <Link to='/impact-through-traccy/0'>
              <div className='menu-icon'>
                <SvgIcon name='itc-icon' viewbox='0 0 22.018 17.733' />
              </div>
              Impact
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <div className='menu-icon'>
                <SvgIcon name='about2-icon' viewbox='0 0 29.445 17.857' />
              </div>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/become-part'>
              <div className='menu-icon'>
                <SvgIcon name='becomepart-icon' viewbox='0 0 25.281 24.686' />
              </div>
              Become a part
            </Link>
          </li>
          <li>
            <Link to='/invest'>
              <div className='menu-icon'>
                <img src="/invest-form/crypto-wallet-bitcoin-icon.svg" width="26px" height="26px" alt="bitcoin" />
              </div>
              Buy token
            </Link>
          </li>
        </ul>
      </Drawer>
      <ul className="web-menu">
        <li>
          <a href="https://traccy-globe.vercel.app/">Home</a>
        </li>
        <li>
          <NavLink to='/traccy-token'>TRCY CONNECT</NavLink>
        </li>
        <li className="impact-menu-wrapper">
          <NavLink to='/impact-through-traccy/0'>IMPACT</NavLink>
          <div className="impact-menu-all">
            <div className="mask" />
            <div className="impact-menu">
              <NavLink to='/impact-through-traccy/0'><span>Intro</span></NavLink>
              <NavLink to='/impact-through-traccy/1'><span>Selection</span></NavLink>
              <NavLink to='/impact-through-traccy/2'><span>Incubation</span></NavLink>
              <NavLink to='/impact-through-traccy/3'><span>Launch</span></NavLink>
              <NavLink to='/impact-through-traccy/4'><span>Monitoring</span></NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to='/about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='/become-part'>BECOME A PART</NavLink>
        </li>
        <li>
          <NavLink to='/invest'>BUY TOKEN</NavLink>
        </li>
      </ul>
      <ConnectWallet />
      {/* <Select
        defaultValue={defaultLang}
        value={defaultLang}
        className='lang-select'
        popupClassName='lang-select-drop'
        placement='bottomRight'
        onChange={(e) => handleLanguage(e)}
        options={[
          {
            value: 'en',
            label: <div className="lang-item"><div className="flag-icon"><img src={EnIcon} alt="en" /></div>EN </div>,
          },
          {
            value: 'de',
            label: <div className="lang-item"><div className="flag-icon"><img src={GermanIcon} alt="german" /></div>DE</div>,
          },
          {
            value: 'fr',
            label: <div className="lang-item"><div className="flag-icon"><img src={FrenchIcon} alt="french" /></div>FR </div>,
          },
        ]}
      /> */}
      <Button className="menu-icon" onClick={showDrawer}><SvgIcon name="menu" viewbox="0 0 28 28" /></Button>
    </>
  );
}

export default Menus;