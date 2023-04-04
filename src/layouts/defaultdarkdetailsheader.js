import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { Navbar, Footer } from "../components/layout";

const { Content } = Layout;

const DefaultDarkDetailsHeaderLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper dark-header">
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

DefaultDarkDetailsHeaderLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultDarkDetailsHeaderLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultDarkDetailsHeaderLayout;