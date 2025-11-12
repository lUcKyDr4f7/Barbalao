import './App.css'

import { AuthProvider } from './Routes/AuthContext.jsx';
import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';;
// import FormCriar from './Components/FormCriarP/FormCriar.jsx'
import Router from './Routes/Router.jsx'
import axios from "axios";


function useSession() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("https://back-end-barbalao-upgw.onrender.com/api/check-session/", {
        withCredentials: true,
      })
      .then((res) => {
        setAuthenticated(res.data.authenticated);
      })
      .catch(() => setAuthenticated(false));
  }, []);

  return authenticated;
}

function App() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    try {
      const res = await fetch('https://back-end-barbalao.onrender.com/api/products/');
      if (!res.ok) {
        throw new Error(`Erro ao buscar produtos: ${res.status}`);
      }

      const json = await res.json();
      console.log('Resposta da API:', json);

      if (json.products) {
        const produtosMapeados = Object.fromEntries(
          json.products.map(p => [p.id_prod, p])
        );

        setProdutos(json.products);
        localStorage.setItem("products", JSON.stringify(produtosMapeados));

      } else {
        const produtosMapeados = Object.fromEntries(
          json.map(p => [p.id_prod, p])
        );
        setProdutos(json);
        localStorage.setItem("products", JSON.stringify(produtosMapeados));
      }
    } catch (err) {
      console.error('Erro no fetch de produtos:', err);
    }
  }; 

  const removerProduto = (id) => {
    setProdutos(produtos.filter((p) => p.id_prod !== id));
  };

  useEffect(() => {
    carregarProdutos();
  }, []);


  return (
    <>
    <div className="app">
        <AuthProvider>
            <RouterProvider router={Router} />
        </AuthProvider>
      </div>
    </>
  )
}

export default App
