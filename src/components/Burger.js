import React from "react";
import BurgerIngredient from "./BurgerIngredient";

import "./Burger.css";

const Burger = props => {
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="cheese"></BurgerIngredient>
      <BurgerIngredient type="meat"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default Burger;
