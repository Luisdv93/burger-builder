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
  const {
    addIngredient,
    removeIngredient,
    disabled,
    price,
    purchasable,
    ordered
  } = props;

  return (
    <div className="build-controls">
      <p>
        Total Price: <strong>${price.toFixed(2)}</strong>
      </p>

      {controls.map(control => (
        <BuildControl
          key={control.type}
          type={control.type}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          disabled={disabled[control.type]}
        />
      ))}

      <button
        className="order-button"
        disabled={!purchasable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
};

export default BuildControls;
