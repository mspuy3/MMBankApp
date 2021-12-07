import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./common/Header";
import { getLoggedInUser } from "../repositories/userRepository";

function Layout() {
  const [loggedInUser, setLoggedInUser] = useState(getLoggedInUser());

  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
  }, [loggedInUser]);

  return (
    /* A "layout route" is a good place to put markup you want to
       share across all the pages on your site, like navigation. */

    <div>
      {Object.keys(loggedInUser).length > 0 && (
        <Header loggedInUser={loggedInUser} />
      )}
      <Outlet />
    </div>
  );
}

export default Layout;
