import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";

import * as userSvc from "../../services/userService";
import { getLoggedInUser } from "../../repositories/userRepository";
import { USER_TYPES } from "../constants";

function Header() {
  const [loggedInUser, setLoggedInUser] = useState(getLoggedInUser());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
  }, [location.pathname]);

  function logOut() {
    userSvc.logOut();
    navigate(`../users/user-login`, { replace: true });
  }

  function renderNav() {
    switch (loggedInUser.userType) {
      case USER_TYPES.SUPER_ADMIN:
      case USER_TYPES.ADMIN:
        return (
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <NavLink className='navbar-brand' to='/'>
                <img
                  src={process.env.PUBLIC_URL + "../BPO-sm.png"}
                  alt='logo'
                  className='w-50'
                />
              </NavLink>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse  d-flex' id='navbarNav'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/users'>
                      Users
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/accounts'>
                      Accounts
                    </NavLink>
                  </li>
                </ul>
                {Object.keys(loggedInUser).length > 0 && (
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link className='nav-link' onClick={logOut} to=''>
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
        );
      case USER_TYPES.ACCOUNT_HOLDER:
        return (
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <NavLink className='navbar-brand' to='/'>
                <img src='../BPO-sm.png' alt='logo' className='w-50' />
              </NavLink>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse  d-flex' id='navbarNav'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
                {Object.keys(loggedInUser).length > 0 && (
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link className='nav-link' onClick={logOut} to=''>
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
        );
      default:
        return <></>;
    }
  }

  return renderNav();
}

export default Header;
