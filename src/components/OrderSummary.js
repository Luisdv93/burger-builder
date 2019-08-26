import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import "./OrderSummary.css";

const OrderSummary = props => {
  const { ingredients, purchaseCanceled, purchaseContinued } = props;

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

      <Button type="danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>

      <Button type="success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;
