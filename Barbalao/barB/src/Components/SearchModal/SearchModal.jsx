import styles from '../Css/styles.searchModal.module.css'
import ProductCard from './ProductCard'

export default function SearchModal({setSearchModal, produtos}) {

  console.log("Produtos disponiveis: ", produtos)

  return (
    <div className={styles.screenBlur}>
      <div className={styles.modalCard}>
        <div>
          <h1> Produtos encontrados </h1>
          <div className={styles.productsDiv}>
            {produtos.map((produto) => <ProductCard produto={produto}/>)}
          </div>
        </div>
        <button onClick={() => setSearchModal(false)}>
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  )
}