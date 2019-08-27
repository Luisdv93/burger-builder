import React from "react";
import NavigationItem from "./NavigationItem";

import "./Navigation.css";

const Navigation = props => {
  return (
    <nav>
      <ul className="navigation">
        <NavigationItem link="/" active>
          Burger Builder
        </NavigationItem>

        <NavigationItem link="/checkout">Checkout</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
