import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import { NavbarDark } from "../components/layout";

const { Content } = Layout;

const DefaultDarkHeaderLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-wrapper dark-header">
        <NavbarDark />
          <Content>
            <main>
              {children}
            </main>
          </Content>
      </div>
    </React.Fragment>
  )
};

DefaultDarkHeaderLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultDarkHeaderLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultDarkHeaderLayout;