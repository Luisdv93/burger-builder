import React, { useState } from "react";
import Toolbar from "./Toolbar";
import Sidedrawer from "./Sidedrawer";

import "./Layout.css";

const Layout = props => {
  const { children } = props;

  const [showDrawer, setShowDrawer] = useState(true);

  const toggleDrawerHandler = () => {
    setShowDrawer(prevState => !prevState);
  };

  return (
    <>
      <Toolbar toggleDrawer={toggleDrawerHandler} />

      <Sidedrawer closeDrawer={toggleDrawerHandler} showDrawer={showDrawer} />

      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
