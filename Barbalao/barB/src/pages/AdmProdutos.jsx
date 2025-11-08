import styles from '../Components/Css/styles.AdmProduto.module.css'
import AdmProdutoCard from "../Components/Adm/AdmProdutoCard";

export default function AdmProdutos({produtos}){

    console.log(produtos);
    let currentTheme = localStorage.getItem("theme");
    document.body.classList = currentTheme;

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
                {produtos.map((produto) => <AdmProdutoCard key={produto.id_prod} produto={produto}/>)}
            </div>
        </div>

    )
}