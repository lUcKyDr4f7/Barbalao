import styles from '../Css/styles.searchModal.module.css'
import CloseBtn from '../ui/CloseBtn'
import ProductCard from './ProductCard'

export default function SearchModal({setSearchModal, produtos, setSelectedProduct, searchText}) {

  console.log ("Produtos: ", produtos);
  console.log("Search text: ", searchText);

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

  const queryProducts = searchProducts(produtos, searchText);

  return (
    <div className={styles.modalBackdrop} onClick={() => setSearchModal(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <h1> Produtos encontrados </h1>
        <div className={styles.insideModal}>
          <div className={styles.productsDiv}>
            {queryProducts.map((produto) => <ProductCard produto={produto} setSearchModal={setSearchModal} setSelectedProduct={setSelectedProduct}/>)}
          </div>
        </div>
        <CloseBtn onClick={setSearchModal}/> 
      </div>
    </div>
  )
}