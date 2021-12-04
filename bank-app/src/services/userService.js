import * as userRepo from "../repositories/userRepository";

export function logIn(user) {
  const users = userRepo.getUsers();

  const userInDb = users.find(
    (_user) =>
      _user.username === user.username && _user.password === user.password
  );

  return userInDb;
}

export function logOut() {
  userRepo.deleteLoggedInUser();
}
