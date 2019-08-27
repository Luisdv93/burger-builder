import React from "react";
import Toolbar from "./Toolbar";
import Sidedrawer from "./Sidedrawer";

import "./Layout.css";

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Toolbar />

      <Sidedrawer />

      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
