import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/Modal";
import OrderSummary from "../../components/OrderSummary";

const ING_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = props => {
  const [price, setPrice] = useState(4);
  const [isPurchasable, setIsPurchasable] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  /**
   * Updates the state depending if the burger is purchasable or not,
   * a burger should have at least 1 ingredient to be purchasable.
   */
  useEffect(() => {
    const currentIngredients = { ...ingredients };

    const sum = Object.keys(currentIngredients)
      .map(igKey => currentIngredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    setIsPurchasable(sum > 0);
  }, [ingredients]);

  /**
   * Adds a new ingredient to the burger. Gets the count of the ingredients
   * and add one to the current one. Also udpates the total price of the burger
   * @param {string} type
   */
  const addIngredientHandler = type => {
    const oldCount = ingredients[type];

    setIngredients(prevState => ({ ...prevState, [type]: oldCount + 1 }));

    const ingPrice = ING_PRICES[type];

    setPrice(prevState => (prevState += ingPrice));
  };

  /**
   * Removes an ingredient from the burger. Gets the count of the ingredients
   * and removes one from the current count. Also udpates the total price of the burger
   * @param {string} type
   */
  const removeIngredientHandler = type => {
    const oldCount = ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    setIngredients(prevState => ({ ...prevState, [type]: oldCount - 1 }));

    const ingPrice = ING_PRICES[type];

    setPrice(prevState => (prevState -= ingPrice));
  };

  const purchaseHandler = () => {
    setShowPurchaseModal(true);
  };

  // Do this to map the ingredients to a disabled state for the less button
  const disabledBtns = {
    ...ingredients
  };

  for (let key in disabledBtns) {
    disabledBtns[key] = disabledBtns[key] <= 0;
  }

  return (
    <>
      <Burger ingredients={ingredients} />

      <BuildControls
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        disabled={disabledBtns}
        price={price}
        purchasable={isPurchasable}
        ordered={purchaseHandler}
      />

      <Modal show={showPurchaseModal}>
        <OrderSummary ingredients={ingredients} />
      </Modal>
    </>
  );
};

export default BurgerBuilder;
