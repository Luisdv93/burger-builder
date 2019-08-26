import React from "react";
import PropTypes from "prop-types";
import BurgerIngredient from "./BurgerIngredient";

import "./Burger.css";

const Burger = props => {
  const { ingredients } = props;

  /* This is done because the ingredients is an object that where each key
    have a quantity. The reduce is used to create an unique array so we can
    check the length */
  const parsedIngredients = Object.keys(ingredients)
    .map(igKey =>
      [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      })
    )
    .reduce((array, element) => {
      return array.concat(element);
    }, []);

  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"></BurgerIngredient>

      {parsedIngredients.length === 0 ? (
        <p>Please start adding ingredients</p>
      ) : (
        parsedIngredients
      )}

      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
