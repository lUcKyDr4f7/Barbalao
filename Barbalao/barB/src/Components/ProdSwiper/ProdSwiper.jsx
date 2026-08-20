/* import 'swiper/css';
import 'swiper/css/navigation'; */
import styles from './styles.ProdSwiper.module.css';
import Swiper from '../Swiper/Swiper.jsx';
import AddCartFillIcon from '../ui/AddCartFillIcon.jsx';
/* import { AllAdicionais } from '../../assets/Data/AllAdicionais.js'; */
import { useState, useEffect, useContext } from 'react';
import { Navigation } from 'swiper/modules';
import { ModalProdOpenCtx, CartOpenCtx } from '../../Contexts/ModalOpenProvider/ModalOpenProvider.jsx';
import { AddCartCtx } from '../../Contexts/CartProvider/CartProvider.jsx';
import { formatPrice } from '../../assets/Data/AllProducts.js';

export default function ProdSwiper({ produto, subCateg }) {
  
  /* const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []); */

  const {setSelectedProduct} = useContext(ModalProdOpenCtx);

  /* function openModalProd(produto) {
    setSelectedProduct({...produto,
      'stdImg': subCateg.imagem,
      * 'adicionais': AllAdicionais.filter(a => {
        
        let aCategs = Object.keys(a.categ_preco);
        return aCategs.includes(subCateg.id_categoria.toString()) || aCategs.includes(subCateg.sub_categoria_de.toString())
      }) *
    })
  } */
 
  const {addCart} = useContext(AddCartCtx);
  
  const {setIsCartOpen} = useContext(CartOpenCtx);

  return (
    <>
      <div key={produto.id_prod} className={styles.productCard}
        onClick={() => setSelectedProduct({...produto})}>
        <img className={styles.productImg} src={produto.imagens[0]}
              alt={produto.nome || 'Produto sem nome'} />
        <div className={styles.productInfo}>
          <h4>{produto.nome}</h4>
          <h4>{formatPrice(produto.preco)}</h4>
          {/* <i className="ri-shopping-cart-2-fill"></i> */}
          {/* <i className="fa-solid fa-cart-plus fa-lg"></i> */}
          <button onClick={(e => {e.stopPropagation(); addCart(produto); setIsCartOpen(true);})} className={styles.cartBtn}>
            <AddCartFillIcon />
          </button>
        </div>
      </div>
    </>
  );

}








