import React from "react";
import PropTypes from "prop-types";

import "./BuildControl.css";

const BuildControl = props => {
  const { type, addIngredient } = props;

  return (
    <div className="build-control">
      <div className="build-control-label">{type}</div>
      <button className="build-control-lessBtn">Less -</button>
      <button
        className="build-control-moreBtn"
        onClick={() => addIngredient(type)}
      >
        More +
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  type: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired
};

export default BuildControl;
