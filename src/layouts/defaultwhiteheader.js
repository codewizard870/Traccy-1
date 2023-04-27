import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { NavbarWhite, Footer } from "../components/layout";

const { Content } = Layout;

const DefaultWhiteHeaderLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <NavbarWhite />
        <Content>
          <main>
            {children}
          </main>
        </Content>
      </div>
    </React.Fragment>
  )
};

DefaultWhiteHeaderLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultWhiteHeaderLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultWhiteHeaderLayout;