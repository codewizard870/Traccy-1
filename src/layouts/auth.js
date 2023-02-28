import React from "react";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => (
    <div className="authLayout">
        {children}
    </div>
);

AuthLayout.propTypes = {
    footer: PropTypes.bool
};
  
AuthLayout.defaultProps = {
    footer: false
};


export default AuthLayout;