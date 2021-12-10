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
    <div>
      <h1 className="text-center">List of All Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default UserListPage;
