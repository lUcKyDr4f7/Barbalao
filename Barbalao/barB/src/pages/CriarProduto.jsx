import FormCriar from "../Components/FormCriaP/FormCriar"
import { useState } from "react"

export default function ProdForm() {
    const [produtos, setProdutos] = useState([])
    
      const carregarProdutos = async () => {
    try {
      const res = await fetch('https://back-end-barbalao-upgw.onrender.com/api/products/');
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

    return(
        <>
            <FormCriar produtos={produtos}/>
        </>
    )
}