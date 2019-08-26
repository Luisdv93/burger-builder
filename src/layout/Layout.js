import React from "react";

const Layout = props => {
  const { children } = props;

  return (
    <>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
