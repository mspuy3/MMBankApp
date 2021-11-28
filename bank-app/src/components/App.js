import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import DashboardPage from "./Dashboard/DashboardPage";
import AccountsPage from "./Accounts/AccountsPage";
import Layout from "./Layout";
import ManageAccountPage from "./Accounts/ManageAccountPage";

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
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
