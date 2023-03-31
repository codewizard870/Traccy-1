import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { NavbarAbout, Footer } from "../components/layout";

const { Content } = Layout;

const DefaultAboutLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper  dark-header">
        <NavbarAbout />
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

DefaultAboutLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultAboutLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultAboutLayout;