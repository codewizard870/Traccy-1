import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { Footer, NavbarDark } from "../components/layout";

const { Content } = Layout;

const DefaultDarkHeaderFooterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper dark-header">
        <NavbarDark />
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

DefaultDarkHeaderFooterLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultDarkHeaderFooterLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultDarkHeaderFooterLayout;