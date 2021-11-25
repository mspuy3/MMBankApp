import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to='/' exact>
        Dashboard{" "}
      </NavLink>
      {"|"}
      <NavLink to='/accounts'>Accounts</NavLink>
    </nav>
  );
}

export default Header;
