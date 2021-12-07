import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import * as userSvc from "../../services/userService";

function Header() {
  const navigate = useNavigate();

  function logOut() {
    userSvc.logOut();
    navigate(`../users/user-login`, { replace: true });
  }

  return (
    <div>
      <nav>
        <NavLink to='/'>Dashboard </NavLink>
        {"|"}
        <NavLink to='/accounts'>Accounts</NavLink>
      </nav>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default Header;
