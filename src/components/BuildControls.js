import React from "react";
import PropTypes from "prop-types";
import BuildControl from "./BuildControl";

import "./BuildControls.css";

const controls = [
  { type: "salad" },
  { type: "bacon" },
  { type: "cheese" },
  { type: "meat" }
];

const BuildControls = props => {
  const { addIngredient } = props;

  return (
    <div className="build-controls">
      {controls.map(control => (
        <BuildControl
          key={control.type}
          type={control.type}
          addIngredient={addIngredient}
        />
      ))}
    </div>
  );
};

BuildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired
};

export default BuildControls;
