import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get("https://back-end-barbalao-upgw.onrender.com/api/check_session/", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Resposta check_session:", res.data);
        setAuthenticated(res.data.authenticated);
      })
      .catch(() => setAuthenticated(false));
  }, []);
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}