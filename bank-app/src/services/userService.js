import * as userRepo from "../repositories/userRepository";
import * as accountRepo from "../repositories/accountRepository";

const USER_TYPE_ADMIN = "admin";
const USER_TYPE_ACCOUNT_HOLDER = "accountHolder";

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

export function getUsersForList(users) {
  const accounts = accountRepo.getAccounts();
  let _users = [];

  users.forEach((user) => {
    switch (user.userType) {
      case USER_TYPE_ADMIN:
        _users.push({
          ...user,
          fullName: `${user.lastName}, ${user.firstName} ${user.middleName
            .charAt(0)
            .toUpperCase()}.`,
        });
        break;
      case USER_TYPE_ACCOUNT_HOLDER:
        accounts.forEach((account) => {
          if (user.accountNumber === account.accountNumber) {
            _users.push({
              ...user,
              fullName: `${account.accountHolder.lastName}, ${
                account.accountHolder.firstName
              } ${account.accountHolder.middleName.charAt(0).toUpperCase()}.`,
            });
          }
        });
        break;
      default:
    }
  });
  return _users;
}
