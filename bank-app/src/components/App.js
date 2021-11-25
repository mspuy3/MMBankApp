import DashboardPage from "./Dashboard/DashboardPage";
import AccountsPage from "./Accounts/AccountsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path='/accounts' element={<AccountsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
