import styles from './styles.productCard.module.css';
import { useContext, useState } from 'react';
import { AddCartCtx } from '../../Contexts/CartProvider/CartProvider.jsx';
import { CartOpenCtx } from '../../Contexts/ModalOpenProvider/ModalOpenProvider.jsx';
import { formatPrice } from '../../assets/Data/AllProducts.js';
import { MoveRight, ArrowRight, CircleArrowRight, PanelLeftOpen } from 'lucide-react'; //decidir icone e posição
import AddCartFillIcon from '../ui/AddCartFillIcon.jsx';

export default function ProductCard({ produto, closeModal, setSelectedProduct }) {

  /* function handleViewDetails() {
    setSelectedProduct(produto);
    setSearchModal(false);
  } */
  
  const {addCart} = useContext(AddCartCtx);

  const {setIsCartOpen} = useContext(CartOpenCtx);

  const [verCarrinho, setVerCarrinho] = useState(false);

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
      <img className={styles.productImg} src={produto.imagens[0]}
        alt={produto.nome || 'Produto sem nome'} />
      <div className={styles.productInfo}>
        <h2 className={styles.nomeProd}>{produto.nome}</h2>
        <h3 className={styles.precoProd}>{formatPrice(produto.preco)}</h3>
        <div className={styles.productButtons}>
          <button onClick={() => {setSelectedProduct(produto); closeModal();}}>
            <i className="ri-information-line"></i>  
            Ver detalhes 
          </button>
          {verCarrinho?
            <button onClick={() => {setIsCartOpen(true); closeModal();}}>Ver Carrinho</button>
          :
            <button onClick={() => {addCart(produto); setVerCarrinho(true)}}>
              <AddCartFillIcon className={styles.addCartIcon} />
              Adicionar ao carrinho 
            </button>
          }
        </div>
      </div>
    </div>
  )
}
