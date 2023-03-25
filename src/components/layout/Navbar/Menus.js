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

const Menus = () => {
  const history = useLocation();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
            <a href="https://traccy-1.vercel.app/">
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
              TRCY Token
            </Link>
          </li>
          <li>
            <Link to='/impact-through-traccy'>
              <div className='menu-icon'>
                <SvgIcon name='itc-icon' viewbox='0 0 22.018 17.733' />
              </div>
              Traccy Impact
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
          {/* <li>
            <Link to='/library'>
              <div className='menu-icon'>
                <SvgIcon name='docs-icon' viewbox='0 0 26 18' />
              </div>
              Library
            </Link>
          </li> */}
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
          <a href="https://traccy-1.vercel.app/">Home</a>
        </li>
        <li>
          <NavLink to='/traccy-token'>TRCY TOKEN</NavLink>
        </li>
        <li>
          <NavLink to='/impact-through-traccy' className={history.pathname === "/impact-through-traccy-details" ? "active" : ""}>TRACCY IMPACT</NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='/become-part'>BECOME A PART</NavLink>
        </li>
        {/* <li>
          <NavLink to='/library'>LIBRARY</NavLink>
        </li> */}
        <li>
          <NavLink to='/invest'>BUY TOKEN</NavLink>
        </li>
      </ul>
      <ConnectWallet />
      <Select
        defaultValue="en"
        className='lang-select'
        popupClassName='lang-select-drop'
        placement='bottomRight'
        options={[
          {
            value: 'en',
            label: <div className="lang-item"><div className="flag-icon"><img src={EnIcon} alt="en" /></div>EN </div>,
          },
          {
            value: 'german',
            label: <div className="lang-item"><div className="flag-icon"><img src={GermanIcon} alt="german" /></div>German </div>,
          },
          {
            value: 'french',
            label: <div className="lang-item"><div className="flag-icon"><img src={FrenchIcon} alt="french" /></div>French </div>,
          },
        ]}
      />
      <Button className="menu-icon" onClick={showDrawer}><SvgIcon name="menu" viewbox="0 0 28 28" /></Button>
    </>
  );
}

export default Menus;