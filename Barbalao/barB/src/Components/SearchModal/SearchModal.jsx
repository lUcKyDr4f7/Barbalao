import styles from './styles.searchModal.module.css';
import { useState } from 'react';
import { CircleX } from 'lucide-react';
import ProductCard from './ProductCard.jsx';
import { searchProd } from '../../assets/Data/AllProducts.js';
import Backdrop from '../Backdrop/Backdrop.jsx';

export default function SearchModal({setSearchModal, setSelectedProduct, searchText}) {

  const [isClosing, setIsClosing] = useState(false);
  function closeModal() {
    setIsClosing(true);
    setTimeout(() => {
      setSearchModal(false);
      setIsClosing(false);
    }, 400);
  }

  /* console.log("Produtos: ", produtos);
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

  const queryProducts = searchProducts(produtos, searchText); */

  const queryProducts = searchProd(searchText);

  return (
    <Backdrop customClass={styles.backdrop} show={isClosing} close={() => closeModal()}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <h1> Produtos encontrados </h1>
        <div className={styles.insideModal}>
          {queryProducts.map((produto) => <ProductCard produto={produto} setSearchModal={setSearchModal} setSelectedProduct={setSelectedProduct}/>)}
        </div>
        {/* <CloseBtn onClick={setSearchModal}/>  */}
        <CircleX className={styles.closeBtn} onClick={() => closeModal()} />
      </div>
    </Backdrop>
  )
}
