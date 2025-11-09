import styles from '../Components/Css/styles.AdmProduto.module.css'
import AdmProdutoCard from "../Components/Adm/AdmProdutoCard";
import { useEffect, useState } from 'react';
import AdmProdutoModal from '../Components/Adm/AdmProdutoModal';

export default function AdmProdutos({produtos}){

    useEffect(() => {
      let currentTheme = localStorage.getItem("theme");
      document.body.classList = currentTheme;
    }, [])

    console.log(produtos);


    const [viewProduct, setViewProduct] = useState(false);
    const [produto, setProduto] = useState(null);

    return(
        <div className={styles.background}>
            <h1> Produtos </h1>
            <div className={styles.createDiv}>
                <button> <i className="ri-add-line"></i> Criar novo produto  </button>
                <div className={styles.searchDiv}>
                    <input type="text" name="prodSearch" id="" placeholder="Pesquise algum produto..."/>
                    <i onClick={() => console.log("Deu certo")} class="ri-search-line"></i>
                </div>
            </div>
            <div className={styles.productsDiv}>
                {produtos.map((produto) => <AdmProdutoCard setViewProduct={setViewProduct} setProduto={setProduto} key={produto.id_prod} produto={produto}/>)}
            </div>
            {
              viewProduct && <AdmProdutoModal produto={produto}/>
            }
        </div>
        

    )
}