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
  const [categorias, setCategorias] = useState([])
  const [subCateg, setSubCateg] = useState([])
  const [banners, setBanners] = useState([])

  const carregarProdutos = async () => {
    try {
      const res = await fetch('https://back-end-barbalao.onrender.com/api/products/');
      if (!res.ok) throw new Error(`Erro ao buscar produtos: ${res.status}`);

      const json = await res.json();
      console.log('Resposta da API produtos:', json);

      const lista = json.products || json;
      const produtosMapeados = Object.fromEntries(lista.map(p => [p.id_prod, p]));
      setProdutos(lista);
      localStorage.setItem("products", JSON.stringify(produtosMapeados));

    } catch (err) {
      console.error('Erro no fetch de produtos:', err);
    }
  };

  const carregarCateg = async () => {
    try {
      const res = await fetch('https://back-end-barbalao.onrender.com/api/categoria/principais/');
      if(!res.ok) throw new Error(`Erro ao buscar categorias: ${res.status}`);

      const json = await res.json();
      console.log(`Resposta da API categoria:`, json);

      const lista = json.categories || json;
      const categoriasMapeadas = Object.fromEntries(lista.map(c => [c.id_categoria, c]));
      setCategorias(lista);
      localStorage.setItem("categories", JSON.stringify(categoriasMapeadas))

    } catch(err) {
      console.error('Erro no fetch de categorias:', err);
    }
  }

  const carregarSub = async () => {
    try {
      const res = await fetch('https://back-end-barbalao.onrender.com/api/categoria/');
      if(!res.ok) throw new Error(`Erro ao buscar subcategorias: ${res.status}`);

      const json = await res.json();
      console.log(`Resposta da API categoria:`, json);

      const lista = json;
      const subCategoriasMapeadas = Object.fromEntries(lista.map(c => [c.id_categoria, c]));
      setSubCateg(lista);
      localStorage.setItem("subcategories", JSON.stringify(subCategoriasMapeadas))

    } catch(err) {
      console.error('Erro no fetch de subcategorias:', err);
    }
  }

  const carregarBan = async () => {
    try {
      const res = await fetch('https://back-end-barbalao.onrender.com/api/banner/');
      if(!res.ok) throw new Error(`Erro ao buscar banners: ${res.status}`);

      const json = await res.json();
      console.log(`Resposta da API banners: `, json);

      const lista = json.banners || json;
      const bannersMapeadoss = Object.fromEntries(lista.map(b => [b.id_banner, b]));
      setBanners(lista)
      localStorage.setItem('banners', JSON.stringify(bannersMapeadoss))

    } catch(err) {
      console.log('Erro no fetch de banners')
    }
  }

  useEffect(() => { 
    carregarProdutos();
    carregarCateg();
    carregarSub();
    carregarBan();
  }, []);

  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme)
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

  document.body.classList = currentTheme;

  return (
    <AuthProvider>
      
      <RouterProvider router={Router(produtos, categorias, subCateg, banners)} />

    </AuthProvider>
  );
}

export default App;