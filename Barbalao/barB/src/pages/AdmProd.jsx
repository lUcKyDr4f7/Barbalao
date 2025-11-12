import { useState } from 'react';
import styles from '../Components/Css/styles.AdmProd.module.css';
import AdmProdutoCard from '../Components/Adm/MenorComp/AdmProdutoCard';
import AdmProdutoModal from '../Components/Adm/MenorComp/AdmProdutoModal';
import AdmEditProductModal from '../Components/Adm/MenorComp/AdmEditProductModal';
import { useOutletContext } from 'react-router-dom';

export default function AdmProd({ produtos }) {
  const produtosL = produtos || JSON.parse(localStorage.getItem("produtcs"))

  const [editProduct, setEditProduct] = useState(false);

  const { setBackdrop, setViewProduct, setSelectedProduct } = useOutletContext();

  return (
    <div>
      <p> Mostrando {produtos.length} produtos</p>
      {produtosL.length > 0 ? 
        <div>
          <div className={styles.produtosGrid}>
            {produtos?.map((produto) => (
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
          <h3>SEM PRODUTOS</h3>
        </div>
      }
    </div>
  );
}
