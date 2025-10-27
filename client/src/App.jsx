import { RouteGuard } from "./components/RouteGuard";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RouteGuard authProtected={false} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<RouteGuard authProtected={true} />}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
