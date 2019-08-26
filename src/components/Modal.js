import React from "react";
import PropTypes from "prop-types";

import "./Modal.css";

const Modal = props => {
  const { children, show } = props;

  return (
    <div
      className="modal"
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? 1 : 0
      }}
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
