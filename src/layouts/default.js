import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { Navbar, Footer } from "../components/layout";

const { Content } = Layout;

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <Navbar />
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

DefaultLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultLayout;