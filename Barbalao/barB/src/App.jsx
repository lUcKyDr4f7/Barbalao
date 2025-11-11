import './App.css';
import { AuthProvider } from './Routes/AuthContext.jsx';
import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import axios from "axios";

function useSession() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("https://back-end-barbalao.onrender.com/api/check-session/", {
        withCredentials: true,
      })
      .then((res) => setAuthenticated(res.data.authenticated))
      .catch(() => setAuthenticated(false));
  }, []);

  return authenticated;
}

function App() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    try {
      const res = await fetch('https://back-end-barbalao.onrender.com/api/products/');
      if (!res.ok) throw new Error(`Erro ao buscar produtos: ${res.status}`);

      const json = await res.json();
      console.log('Resposta da API:', json);

      const lista = json.products || json;
      const produtosMapeados = Object.fromEntries(lista.map(p => [p.id_prod, p]));
      setProdutos(lista);
      localStorage.setItem("products", JSON.stringify(produtosMapeados));

    } catch (err) {
      console.error('Erro no fetch de produtos:', err);
    }
  };

  useEffect(() => { carregarProdutos(); }, []);

  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme)
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

  document.body.classList = currentTheme;

  return (
    <AuthProvider>
      
      <RouterProvider router={Router(produtos)} />
    </AuthProvider>
  );
}

export default App;
