import "./App.css";
import DashboardPage from "./components/Dashboard/DashboardPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path='/' exact component={DashboardPage} />
    </div>
  );
}

export default App;
