import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import * as userSvc from "../../services/userService";
import { USER_TYPES } from "../constants";

function Header({ loggedInUser }) {
  const navigate = useNavigate();

  function logOut() {
    userSvc.logOut();
    navigate(`../users/user-login`, { replace: true });
  }

  return (
    <div>
      {(loggedInUser.userType === USER_TYPES.SUPER_ADMIN ||
        loggedInUser.userType === USER_TYPES.ADMIN) && (
        <nav>
          (<NavLink to='/'>Dashboard |</NavLink>
          <NavLink to='/users'>Users |</NavLink>
          <NavLink to='/accounts'>Accounts</NavLink>)
        </nav>
      )}
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default Header;
