import React from "react";
import PropTypes from "prop-types";

import "./DrawerToggle.css";

const DrawerToggle = props => {
  const { toggle } = props;

  return (
    <div className="drawer-toggle" onClick={toggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default DrawerToggle;
