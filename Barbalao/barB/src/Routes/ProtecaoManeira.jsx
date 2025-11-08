import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children }) {
    const {authenticated} = useAuth() 

  if (!authenticated) {
    alert("fica esperto")
    return <Navigate to="/login" replace />;

    
  }

  return children;
}