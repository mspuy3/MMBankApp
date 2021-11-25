import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    fontWeight: "bold",
    color: "orangered",
  };

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
