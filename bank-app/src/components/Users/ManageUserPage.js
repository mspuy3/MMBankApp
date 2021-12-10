import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import UserForm from "./UserForm";
import * as userRepo from "../../repositories/userRepository";
import * as accountRepo from "../../repositories/accountRepository";
import { USER_TYPES } from "../constants";

const REGISTER_ACTION = "Register";
const UPDATE_ACTION = "Update";

function ManageUserPage() {
  const [action, setAction] = useState(REGISTER_ACTION);
  const [errors, setErrors] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(userRepo.getLoggedInUser());
  const [user, setUser] = useState({
    id: null,
    username: "",
    password: "",
    userType: "",
    accountNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setUser(userRepo.getUserById(id));
      setAction(UPDATE_ACTION);
    }
    setLoggedInUser(userRepo.getLoggedInUser());
  }, [id]);

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

    const _user = addUserType(user);

    switch (action) {
      case REGISTER_ACTION:
        userRepo.saveUser(_user);
        toast.success("Account created.");

        switch (loggedInUser.userType) {
          case USER_TYPES.ADMIN:
          case USER_TYPES.SUPER_ADMIN:
            navigate("../users", { replace: true });
            break;
          default:
            navigate("../users/user-login", { replace: true });
            break;
        }

        break;
      case UPDATE_ACTION:
        const originalUser = userRepo.getUserById(id);

        if (JSON.stringify(originalUser) === JSON.stringify(_user)) {
          toast.warning("No changes made");
          return;
        }

        userRepo.updateUser(_user);
        toast.success("Account Updated.");
        break;
      default:
    }
  }

  /* 
    Summary: 
     - Validates the user form
     - Returns true if there are no errors, otherwise false if there is
    Params:
  */
  function formIsValid() {
    const _errors = {};

    if (loggedInUser.userType === USER_TYPES.ACCOUNT_HOLDER) {
      if (!user.accountNumber) {
        _errors.accountNumber = "Account Number is required";
      } else {
        if (!accountRepo.getAccountByAccountNo(user.accountNumber)) {
          _errors.accountNumber = "Account Number does not exist";
        }
      }
    }

    if (!user.username) {
      _errors.username = "Username is required";
    } else {
      if (!id) {
        const _user = userRepo.getUserByUsername(user.username);
        if (_user) _errors.username = "user name already used";
      }
    }

    if (!user.password) {
      _errors.password = "password is required";
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function addUserType() {
    const updatedUser = {
      ...user,
      userType:
        loggedInUser.userType === USER_TYPES.ADMIN ||
        loggedInUser.userType === USER_TYPES.SUPER_ADMIN
          ? USER_TYPES.ADMIN
          : USER_TYPES.ACCOUNT_HOLDER,
    };
    return updatedUser;
  }

  return (
    <div className='container-fluid'>
      <Link to='../users/user-login'> &larr; Back to Login</Link>
      <div className='row abs-center'>
        <div className='col'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h1>{action} User</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <UserForm
                user={user}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
                loggedInUser={loggedInUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUserPage;
