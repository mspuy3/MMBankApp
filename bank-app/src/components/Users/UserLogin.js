import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import LoginForm from "./LoginForm";
import * as userSvc from "../../services/userService";
import * as userRepo from "../../repositories/userRepository";
import * as accountRepo from "../../repositories/accountRepository";
import { USER_TYPES } from "../constants";

function UserLogin() {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    accountNumber: "",
    username: "",
    password: "",
    userType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = userRepo.getLoggedInUser();
    if (loggedInUser.length > 0) {
      navigate(`../admin/admin-dashboard`, { replace: true });
    }
  });

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) {
      toast.error("Some fields are not valid");
      return;
    }

    const userInDb = userSvc.logIn(user);

    if (!userInDb) {
      toast.error("Invalid Username or Password");
      return;
    }
    switch (userInDb.userType) {
      case USER_TYPES.SUPER_ADMIN:
      case USER_TYPES.ADMIN:
        navigate(`../admin/admin-dashboard`, { replace: true });
        break;
      case USER_TYPES.ACCOUNT_HOLDER:
        const account = accountRepo.getAccountByAccountNo(
          userInDb.accountNumber
        );
        navigate(`../accounts/account-dashboard/${account.id}`, {
          replace: true,
        });
        break;
      default:
    }

    userRepo.saveLoggedInUser(userInDb);
  }

  /* 
    Summary: 
     - Validates the login form
     - Returns true if there are no errors, otherwise false if there is
    Params:
  */
  function formIsValid() {
    const _errors = {};

    if (!user.username) {
      _errors.username = "Username is required";
    }

    if (!user.password) {
      _errors.password = "password is required";
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <div className='container-fluid'>
      <div className='row abs-center'>
        <div className='col'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h1>Login</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <LoginForm
                user={user}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
