import NavB from '../Components/NavBar/navB.jsx';
import CategP from '../Components/Categories/CategP.jsx';
import BannerS from '../Components/Banners/bannerS.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import Form from '../Components/Form/FormLogin.jsx';
import { useState, useEffect } from 'react';

export default function Home() {
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
      <NavB />
      <section className="main">
        <CategP />
        <BannerS />
        <PSection produtos={produtos} />
        {/* onDelete={removerProduto} */}
      </section>
    </>
  );
}
