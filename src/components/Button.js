import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = props => {
  const { children, clicked, type } = props;

  return (
    <button
      onClick={clicked}
      className={[classes.button, classes[type]].join(" ")}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  clicked: PropTypes.func,
  type: PropTypes.string
};

export default Button;
