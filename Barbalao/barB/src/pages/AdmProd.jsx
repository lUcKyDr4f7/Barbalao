import { useOutletContext } from 'react-router-dom';
import AdmProdutoCard from '../Components/Adm/MenorComp/AdmProdutoCard';
import styles from '../Components/Css/styles.AdmProd.module.css';

export default function AdmProd({ produtos }) {
  const produtosL = produtos || JSON.parse(localStorage.getItem("produtcs"))

  const { setBackdrop, setViewProduct, setSelectedProduct, admSearchText } = useOutletContext();

  console.log ("Produtos: ", produtosL);
  console.log("Search text: ", admSearchText);

  function normalize(str) {
    return str
      .normalize("NFD")                
      .replace(/[\u0300-\u036f]/g, "") 
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/\-/g, "")
  }

  function searchProducts(products, query) {
    const q = normalize(query);

    return products.filter(p => {
      const name = normalize(p.nome);
      const description = normalize(p.descricao);

      return (
        name.includes(q) ||
        description.includes(q)
      );
    });
  }

  const queryProducts = searchProducts(produtosL, admSearchText);

  return (
    <div>
      {queryProducts.length > 0 ? 
        <div className={styles.productPanel}>
          <h2> {queryProducts.length} produtos encontrados. </h2>
          <div className={styles.produtosGrid}>
            {queryProducts.map((produto) => (
              <AdmProdutoCard 
                setViewProduct={setViewProduct} 
                setBackdrop={setBackdrop} 
                setSelectedProduct={setSelectedProduct} 
                key={produto.id_prod} 
                produto={produto}/>
            ))}
          </div>
        </div>
        :
        <div className={styles.SemProdCont}>
          <i class="ri-error-warning-line"></i>
          {admSearchText? 
            <h3>Nenhum produto foi encontrado com a pesquisa "{admSearchText}"</h3>
            :
            <h3>Sem Produtos</h3>
          }
        </div>
      }
    </div>
  );
}
