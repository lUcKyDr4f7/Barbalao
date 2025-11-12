import { useState } from 'react';
import styles from '../Components/Css/styles.AdmProd.module.css';
import AdmProdutoCard from '../Components/Adm/MenorComp/AdmProdutoCard';
import AdmProdutoModal from '../Components/Adm/MenorComp/AdmProdutoModal';

export default function AdmProd({ produtos }) {
  const produtosL = produtos || JSON.parse(localStorage.getItem("produtcs"))

  const [viewProduct, setViewProduct] = useState(false);
  const [produto, setProduto] = useState(null);

  return (
    <div>
      <p> Mostrando {produtos.length} produtos</p>
      {produtosL.length > 0 ? 
        <div>
          <div className={styles.produtosGrid}>
            {produtos?.map((produto) => (
              <AdmProdutoCard setViewProduct={setViewProduct} setProduto={setProduto} key={produto.id_prod} produto={produto}/>
            ))}
          </div>
          {
            viewProduct && <AdmProdutoModal produto={produto} setViewProduct={setViewProduct}/>
          }
        </div>
        :
        <div className={styles.SemProdCont}>
          <h3>SEM PRODUTOS</h3>
        </div>
      }
    </div>
  );
}
