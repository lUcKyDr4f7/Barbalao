import styles from './styles.productCard.module.css';
import { AddCartCtx } from '../../Contexts/CartProvider/CartProvider.jsx';
import { useContext } from 'react';
import AddCartFillIcon from '../ui/AddCartFillIcon.jsx';

export default function ProductCard({ produto, setSearchModal, setSelectedProduct }) {

  function handleViewDetails() {
    setSelectedProduct(produto);
    setSearchModal(false);
  }
  
  const {addCart} = useContext(AddCartCtx);

  /* function addCart(idProd) {
      let cart = JSON.parse(localStorage.getItem("cart"))
      if(!cart) {
          cart = {};
      }
      if(cart[idProd]) {
          cart[idProd] += 1;
      } else {
          cart[idProd] = 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      setSearchModal(false);
  } */

  return (
    <div className={styles.productCard}>
      <img src={produto.imagens[0]} alt={produto.nome}/>
      <div className={styles.productInfo}>
        <h2 className={styles.nomeProd}>{produto.nome}</h2>
        <h3 className={styles.precoProd}>R$ {String(produto.preco.toFixed(2)).replace('.', ',')}</h3>
        <div className={styles.productButtons}>
          <button onClick={handleViewDetails}>
            <i className="ri-information-line"></i>  
            Ver detalhes 
          </button>
          <button onClick={() => {addCart(produto); setSearchModal(false);}}>
            <AddCartFillIcon className={styles.addCartIcon} />
            Adicionar ao carrinho 
          </button>
        </div>
      </div>
    </div>
  )
}
