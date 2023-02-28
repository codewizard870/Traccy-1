import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { Navbar } from "../components/layout";

const { Content } = Layout;

const DefaultExFooterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <Navbar />
          <Content>
            <main>
              {children}
            </main>
          </Content>
      </div>
    </React.Fragment>
  )
};

DefaultExFooterLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultExFooterLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultExFooterLayout;