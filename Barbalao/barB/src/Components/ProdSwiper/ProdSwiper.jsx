import 'swiper/css';
import 'swiper/css/navigation';
import styles from './styles.ProdSwiper.module.css';
import Swiper from '../Swiper/Swiper.jsx';
/* import { AllAdicionais } from '../../assets/Data/AllAdicionais.js'; */
import { useState, useEffect, useContext } from 'react';
import { Navigation } from 'swiper/modules';
import { MenuCtx } from '../../Contexts/MenuProvider/MenuProvider.jsx';

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

  const {setSelectedProduct} = useContext(MenuCtx);

  function openModalProd(produto) {
    let currentTheme = localStorage.getItem("theme") + ' modalOpen';
    localStorage.setItem("theme", currentTheme);
    setSelectedProduct({...produto,
      'stdImg': subCateg.imagem,
      /* 'adicionais': AllAdicionais.filter(a => {
        
        let aCategs = Object.keys(a.categ_preco);
        return aCategs.includes(subCateg.id_categoria.toString()) || aCategs.includes(subCateg.sub_categoria_de.toString())
      }) */
    })
  }

  return (
    <>
      <div key={produto.id_prod} className={styles.productCard} onClick={() => openModalProd(produto)}>
        <img className={styles.productImg} src={produto.imagens[0] || subCateg.imagem}
              alt={produto.nome || 'Produto sem nome'} />
        <div className={styles.productInfo}>
          <h4>{produto.nome}</h4>
          <h4>R$ {produto.preco?parseFloat(produto.preco || 0).toFixed(2).replace('.', ','):'?,??'}</h4>
          <i className="ri-shopping-cart-2-fill"></i>
        </div>
      </div>
    </>
  );

}








