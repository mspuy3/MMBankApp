import DashboardPage from "./Dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
