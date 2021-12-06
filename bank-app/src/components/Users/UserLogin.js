import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import LoginForm from "./LoginForm";
import * as userSvc from "../../services/userService";
import * as userRepo from "../../repositories/userRepository";

const USER_TYPES = {
  ADMIN: "admin",
  ACCOUNT_HOLDER: "accountHolder",
};

function UserLogin() {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
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
      case USER_TYPES.ADMIN:
        navigate(`../admin/admin-dashboard`, { replace: true });
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
    <div>
      <h1>Login</h1>
      <LoginForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default UserLogin;
