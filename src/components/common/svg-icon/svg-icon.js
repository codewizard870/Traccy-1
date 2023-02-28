import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


const SvgIcon = ({ name, viewbox, width, height, fill, className, onClick, attrs, style }) => {
    const classes = classNames(
        className,
        "icon"
    );
    return (
        <React.Fragment>
            <svg viewBox={viewbox} className={classes} {...attrs} onClick={onClick} style={{ width:width, height:height, fill:fill, ...style }}>
                <use xlinkHref={"#"+name}></use>
            </svg>
        </React.Fragment>
    );
}

SvgIcon.propTypes = {
    /**
     * Icon Id name for svg sprite.
     */
    name: PropTypes.string.isRequired,
    /**
     * Svg icon viewBox value.
     */
    viewbox: PropTypes.string.isRequired,
    /**
     * Icon width.
     */
    width: PropTypes.string,
    /**
     * Icon height.
     */
    height: PropTypes.string,
    /**
     * Icon color.
     */
    fill: PropTypes.string,
    /**
     * Icon onClick handler.
     */
    onClick: PropTypes.func
};

export default SvgIcon;