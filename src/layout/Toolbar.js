import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Navigation from "./Navigation";
import DrawerToggle from "./DrawerToggle";

import "./Toolbar.css";

const Toolbar = props => {
  const { toggleDrawer } = props;
  return (
    <header className="toolbar">
      <DrawerToggle toggle={toggleDrawer} />

      <Logo height="80%" />

      <div className="hide-on-desktop">
        <Navigation />
      </div>
    </header>
  );
};

Toolbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

export default Toolbar;
