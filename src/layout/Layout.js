import React from "react";

import "./Layout.css";

const Layout = props => {
  const { children } = props;

  return (
    <>
      <div>Toolbar, Sidedrawer, Backdrop</div>

      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
