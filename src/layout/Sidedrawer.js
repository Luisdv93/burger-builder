import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Backdrop from "../components/Backdrop";

import "./Sidedrawer.css";

const Sidedrawer = props => {
  const { closeDrawer, showDrawer } = props;

  return (
    <>
      <Backdrop show={showDrawer} clicked={closeDrawer} />

      <div className={`sidedrawer ${showDrawer ? "open" : "close"}`}>
        <div className="logo-container">
          <Logo />
        </div>
        <Navigation />
      </div>
    </>
  );
};

Sidedrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  showDrawer: PropTypes.bool.isRequired
};

export default Sidedrawer;
