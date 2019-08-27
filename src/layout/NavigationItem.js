import React from "react";
import PropTypes from "prop-types";

import "./NavigationItem.css";

const NavigationItem = props => {
  const { children, link, active } = props;

  return (
    <li className="navigation-item">
      <a href={link} className={active ? "active" : ""}>
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default NavigationItem;
