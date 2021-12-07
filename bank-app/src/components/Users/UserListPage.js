import React, { useEffect, useState } from "react";
import UserList from "./UserList";

import * as userRepo from "../../repositories/userRepository";
import { getUsersForList } from "../../services/userService";

function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsersForList(userRepo.getUsers()));
  }, []);

  return (
    <>
      <h1>User List</h1>
      <UserList users={users} />
    </>
  );
}

export default UserListPage;
