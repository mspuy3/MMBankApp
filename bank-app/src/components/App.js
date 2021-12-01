import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import DashboardPage from "./Dashboard/DashboardPage";
import AccountsPage from "./Accounts/AccountsPage";
import Layout from "./Layout";
import ManageAccountPage from "./Accounts/ManageAccountPage";
import AccountDashboardPage from "./Accounts/AccountDashboardPage";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Layout />}>
          <Route index element={<DashboardPage />} />
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
