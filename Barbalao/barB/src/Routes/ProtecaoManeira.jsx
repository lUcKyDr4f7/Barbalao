import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import ErrorPage from "../pages/ErrorPage";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
    const { authenticated } = useAuth()

  if (!authenticated) {
    alert('Você não tem autorização para acessar essa página!');
    return <Navigate to="/login" replace />;
  }

  return children;
}