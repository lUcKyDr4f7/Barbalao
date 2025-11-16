import styles from '../Css/styles.searchModal.module.css'
import CloseBtn from '../ui/CloseBtn'
import ProductCard from './ProductCard'

export default function SearchModal({setSearchModal, produtos}) {

  console.log("Produtos disponiveis: ", produtos)

  return (
    <div className={styles.modalBackdrop} onClick={() => setSearchModal(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <h1> Produtos encontrados </h1>
        <div className={styles.insideModal}>
          <div className={styles.productsDiv}>
            {produtos.map((produto) => <ProductCard produto={produto}/>)}
          </div>
        </div>
        <CloseBtn onClick={setSearchModal}/> 
      </div>
    </div>
  )
}