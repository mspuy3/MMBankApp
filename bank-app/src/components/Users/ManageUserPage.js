import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import UserForm from "./UserForm";
import * as userRepo from "../../repositories/userRepository";
import * as accountRepo from "../../repositories/accountRepository";

const REGISTER_ACTION = "Register";
const UPDATE_ACTION = "Update";

function ManageUserPage() {
  const [action, setAction] = useState(REGISTER_ACTION);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    id: null,
    username: "",
    password: "",
    userType: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setUser(userRepo.getUserById(id));
      setAction(UPDATE_ACTION);
    }
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

    switch (action) {
      case REGISTER_ACTION:
        userRepo.saveUser(user);
        toast.success("Account created.");
        navigate("../users/user-login", { replace: true });
        break;
      case UPDATE_ACTION:
        const originalUser = userRepo.getUserById(id);

        if (JSON.stringify(originalUser) === JSON.stringify(user)) {
          toast.warning("No changes made");
          return;
        }

        userRepo.updateUser(user);
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

    if (!user.accountNumber) {
      _errors.accountNumber = "Account Number is required";
    } else {
      if (!accountRepo.getAccountByAccountNo(user.accountNumber)) {
        _errors.accountNumber = "Account Number does not exist";
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

    if (user.userType === "") {
      _errors.userType = "User Type is required";
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <div>
      <h1>{action} User</h1>
      <UserForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default ManageUserPage;
