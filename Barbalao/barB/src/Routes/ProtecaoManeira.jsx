import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children, isAuthenticated }) {
    const {authenticated} = useAuth() 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}