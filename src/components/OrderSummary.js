import React from "react";
import PropTypes from "prop-types";

import "./OrderSummary.css";

const OrderSummary = props => {
  const { ingredients } = props;

  const ingredientSummary = Object.keys(ingredients).map(igKey => (
    <li key={igKey}>
      <span className="ingredient-name">
        {igKey}: {ingredients[igKey]}
      </span>
    </li>
  ));

  return (
    <>
      <h3 className="summary-title">Your Order</h3>

      <p>A delicious burger with the following ingredients:</p>

      <ul>{ingredientSummary}</ul>

      <p>Continue to Checkout?</p>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default OrderSummary;
