import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

import "./Sidedrawer.css";

const Sidedrawer = props => {
  return (
    <div className="sidedrawer">
      <div className="logo-container">
        <Logo />
      </div>
      <Navigation />
    </div>
  );
};

export default Sidedrawer;
