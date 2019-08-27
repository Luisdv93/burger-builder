import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

import "./Toolbar.css";

const Toolbar = props => {
  return (
    <header className="toolbar">
      <div>Menu</div>
      <Logo height="80%" />

      <div className="hide-on-desktop">
        <Navigation />
      </div>
    </header>
  );
};

export default Toolbar;
