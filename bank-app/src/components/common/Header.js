import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to='/'>Dashboard </NavLink>
      {"|"}
      <NavLink to='/accounts'>Accounts</NavLink>
    </nav>
  );
}

export default Header;
