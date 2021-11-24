/* JS file containing services that initializes value on keys saved in local storage */

// Service that initialize accounts array into empty array in local storage
export function accounts() {
  if (localStorage.getItem("accounts") === null) {
    localStorage.setItem("accounts", JSON.stringify([]));
  }
}
