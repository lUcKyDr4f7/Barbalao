import Container from "../Components/Form/FormCont";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const alertedRef = useRef(false);

  useEffect(() => {
    if (location.state?.reason === "unauthorized" && !alertedRef.current) {
      alertedRef.current = true;
      alert("Você não tem autorização para acessar essa página!");
      navigate("/login", { replace: true, state: null });
    }
  }, [location.state, navigate]);

  return (
    <>
      <Container />
    </>
  );
}
