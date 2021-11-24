import React from "react";
import { Outlet } from "react-router";

function Layout() {
  return (
    /* A "layout route" is a good place to put markup you want to
       share across all the pages on your site, like navigation. */

    // Navigation component here

    <Outlet />
  );
}

export default Layout;
