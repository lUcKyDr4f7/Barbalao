import FormCriar from "../Components/FormCriarP/FormCriar"
import { useState } from "react"
import { API_URL } from "../envVariables";

export default function CriarProduto() {
    const [produtos, setProdutos] = useState([])
    
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

    return(
        <>
            <FormCriar produtos={produtos}/>
        </>
    )
}