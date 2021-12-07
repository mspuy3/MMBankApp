import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import * as userSvc from "../../services/userService";
import { getLoggedInUser } from "../../repositories/userRepository";
import { USER_TYPES } from "../constants";

function Header() {
  const [loggedInUser, setLoggedInUser] = useState(getLoggedInUser());
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
  }, []);

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
      {Object.keys(loggedInUser).length > 0 && (
        <button onClick={logOut}>LogOut</button>
      )}
    </div>
  );
}

export default Header;
