// JS file containing services that interact with data within the local storage

/* 
  Summary: 
   - Retrieves all users saved in local storage
*/
export function getUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

/* 
  Summary: 
   1. retrieves users array in local storage
   2. returns a user which has the same user id as the passed id 
  Params:
    id - user id of the account that will be retrieved
*/
export function getUserById(id) {
  let users = JSON.parse(localStorage.getItem("users"));
  return users.find((user) => user.id === parseInt(id, 10));
}

/* 
  Summary: 
   1. retrieves users array in local storage
   2. returns an user which has the same account number as the passed id 
  Params:
    username - username of the account that will be retrieved
*/
export function getUserByUsername(username) {
  let users = JSON.parse(localStorage.getItem("users"));
  return users.find((user) => user.accountNumber === username);
}

/* 
  Summary: 
    1. retrieves users array in local storage
    2. sets user id by incrementing current accounts array length by one
    2. pushes passed user into the the accounts array
    3. saves new users array into the local storage overriding the previous value
  Params:
    account - user object that will be added/created
*/
export function saveUser(user) {
  let users = JSON.parse(localStorage.getItem("users"));

  const id = users.length + 1;
  user.id = id;

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  return user.id;
}

/* 
  Summary: 
   1. retrieves users array in local storage
   2. iterates to users array finding the same user by id then modifying it based on the passed user object
   3. saves new users array into the local storage overriding the previous value
  Params:
    user - user object that will be updated
*/
export function updateUser(user) {
  let users = JSON.parse(localStorage.getItem("users"));

  const _users = users.map((_user) => (_user.id === user.id ? user : _user));

  localStorage.setItem("users", JSON.stringify(_users));
}

/* 
  Summary: 
   1. returns the logged saved in user details in local storage
  Params:
    user - user object that will be saved
*/
export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

/* 
  Summary: 
   1. Sets the logged in user details in local storage
  Params:
    user - user object that will be saved
*/
export function saveLoggedInUser(user) {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
}

/* 
  Summary: 
   1. Delete's the logged in user
  Params:
    user - user object that will be saved
*/
export function deleteLoggedInUser() {
  localStorage.setItem("loggedInUser", JSON.stringify({}));
}
