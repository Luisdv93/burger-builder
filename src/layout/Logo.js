import React from "react";
import PropTypes from "prop-types";

import burgerLogo from "../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = props => {
  const { height } = props;

  return (
    <div className="logo" style={{ height }}>
      <img src={burgerLogo} alt="Burger Builder Logo" />
    </div>
  );
};

Logo.propTypes = {
  height: PropTypes.string
};

export default Logo;
