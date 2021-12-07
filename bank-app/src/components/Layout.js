import React from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import Header from "./common/Header";

function Layout() {
  const { pathname } = useLocation();
  return (
    /* A "layout route" is a good place to put markup you want to
       share across all the pages on your site, like navigation. */

    <div>
      {pathname !== "/users/user-login" && <Header />}
      <Outlet />
    </div>
  );
}

export default Layout;
