import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function RouteGuard(prop) {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <div> Loading </div>;
  }
  if (prop.authProtected) {
    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
  } else {
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
  }
}
