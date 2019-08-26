import React from "react";
import Layout from "./layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
};

export default App;
