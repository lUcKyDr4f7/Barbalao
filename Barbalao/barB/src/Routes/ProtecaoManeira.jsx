import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loading from "../Components/loadingPage/Loading";

export function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();

  if (authenticated === null) {
    return <Loading />; // mostra loading enquanto verifica
  }

  if (!authenticated) {
    return <Navigate to="/login" replace state={{ reason: "unauthorized" }}/>;
  }
  return children;
}