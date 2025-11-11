import './App.css';
import NavB from './Components/NavBar/navB.jsx';
import CategP from './Components/Categories/CategP.jsx';
import BannerS from './Components/Banners/bannerS.jsx';
import PSection from './Components/PSection/prodS.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Components } from './assets/Data/Components.js';
function App() {

  return (
    <>
      <NavB/>
      <section className='main'>
        <CategP/>
        {Components.map((comp) => comp.type === 'banner' ? <BannerS key={comp.id} Banners={comp.data}/> : <PSection key={comp.id} Products={comp.data}/>)}
      </section>
      <Footer/>
    </>
  )
}

export default App

// import './App.css'

// import { AuthProvider } from './Routes/AuthContext.jsx';
// import { useState, useEffect } from 'react'
// import { RouterProvider } from 'react-router-dom';
// // import FormCriar from './Components/FormCriarP/FormCriar.jsx'
// import Router from './Routes/Router.jsx'
// import axios from "axios";


// function useSession() {
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://back-end-barbalao-upgw.onrender.com/api/check-session/", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setAuthenticated(res.data.authenticated);
//       })
//       .catch(() => setAuthenticated(false));
//   }, []);

//   return authenticated;
// }

// function App() {
//   const [produtos, setProdutos] = useState([]);

//   const carregarProdutos = async () => {
//     try {
//       const res = await fetch('https://back-end-barbalao.onrender.com/api/products/');
//       if (!res.ok) {
//         throw new Error(`Erro ao buscar produtos: ${res.status}`);
//       }

//       const json = await res.json();
//       console.log('Resposta da API:', json);

//       if (json.products) {
//         const produtosMapeados = Object.fromEntries(
//           json.products.map(p => [p.id_prod, p])
//         );

//         setProdutos(json.products);
//         localStorage.setItem("products", JSON.stringify(produtosMapeados));

//       } else {
//         const produtosMapeados = Object.fromEntries(
//           json.map(p => [p.id_prod, p])
//         );
//         setProdutos(json);
//         localStorage.setItem("products", JSON.stringify(produtosMapeados));
//       }
//     } catch (err) {
//       console.error('Erro no fetch de produtos:', err);
//     }
//   }; 

//   const removerProduto = (id) => {
//     setProdutos(produtos.filter((p) => p.id_prod !== id));
//   };

//   useEffect(() => {
//     carregarProdutos();
//   }, []);


//   return (
//     <>
//       <AuthProvider>
//           <RouterProvider router={Router} />;
//       </AuthProvider>
//     </>
//   )
// }

// export default App
