import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

const ING_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = props => {
  const [price, setPrice] = useState(4);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  /**
   * Adds a new ingredient to the burger. Gets the count of the ingredients
   * and add one to the current one. Also udpated the total price of the burger
   * @param {string} type
   */
  const addIngredientHandler = type => {
    const oldCount = ingredients[type];

    setIngredients(prevState => ({ ...prevState, [type]: oldCount + 1 }));

    const ingPrice = ING_PRICES[type];

    setPrice(prevState => (prevState += ingPrice));
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls addIngredient={addIngredientHandler} />
    </>
  );
};

export default BurgerBuilder;
