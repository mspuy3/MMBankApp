import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AccountsPage from "./Accounts/AccountsPage";
import Layout from "./Layout";
import ManageAccountPage from "./Accounts/ManageAccountPage";
import AccountDashboardPage from "./Accounts/AccountDashboardPage";
import ManageUserPage from "./Users/ManageUserPage";

import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./Users/UserLogin";
import AdminDashboardPage from "./Admin/AdminDashboardPage";
import UserListPage from "./Users/UserListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Layout />}>
          <Route index element={<UserLogin />} />
          <Route path='/users' element={<UserListPage />} />
          <Route path='/users/user-login' element={<UserLogin />} />
          <Route
            path='/admin/admin-dashboard'
            element={<AdminDashboardPage />}
          />
          <Route path='/users/manage-user/:id' element={<ManageUserPage />} />
          <Route path='/users/manage-user' element={<ManageUserPage />} />
          <Route path='/accounts' element={<AccountsPage />} />
          <Route
            path='/accounts/manage-account/:id'
            element={<ManageAccountPage />}
          />
          <Route
            path='/accounts/manage-account'
            element={<ManageAccountPage />}
          />
          <Route
            path='/accounts/account-dashboard/:id'
            element={<AccountDashboardPage />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
