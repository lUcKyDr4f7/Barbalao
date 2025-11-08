import './App.css'
import NavB from './Components/NavBar/navB.jsx'
import CategP from './Components/Categories/CategP.jsx'
import BannerS from './Components/Banners/bannerS.jsx'
import PSection from './Components/PSection/prodS.jsx'
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';
// import FormCriar from './Components/FormCriarP/FormCriar.jsx'
import AdmMenu from './pages/AdmMenu.jsx'
import AdmPainel from './pages/AdmPainel.jsx'
import AdmProdutos from './pages/AdmProdutos.jsx'
import CriarProduto from './pages/CriarProduto.jsx'
import { API_URL } from './envVariables.js'

function App() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    try {
      const res = await fetch(`${API_URL}/api/products/`);
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
      {/* <NavB/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection/>
      </section> */}
      <Routes>
        <Route path="/" element={<Home produtos={produtos}/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<AdmMenu />}/>
        <Route path='/adm/produtos' element={<AdmProdutos produtos={produtos}/>}/>
        <Route path='/adm/categoias' element={<AdmPainel tipo={1} /*categorias={categorias}*//>}/>
        <Route path='/adm/Banners' element={<AdmPainel tipo={-1} /*banners={banners}*//>}/>
        <Route path="/form" element={<CriarProduto />} />
      </Routes>
    </>
  )
}

export default App
