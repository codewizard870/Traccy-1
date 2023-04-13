import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { NavbarWhite, Footer } from "../components/layout";

const { Content } = Layout;

const DefaultWhiteLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <NavbarWhite />
        <Content>
          <main>
            {children}
          </main>
        </Content>
        <Footer />
      </div>
    </React.Fragment>
  )
};

DefaultWhiteLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultWhiteLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultWhiteLayout;