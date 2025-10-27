import { RouteGuard } from "./components/RouteGuard";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RouteGuard authProtected={false} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<RouteGuard authProtected={true} />}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
