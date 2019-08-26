import React from "react";
import PropTypes from "prop-types";

import "./Backdrop.css";

const Backdrop = props => {
  const { show, clicked } = props;

  return show ? <div className="backdrop" onClick={clicked}></div> : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Backdrop;
