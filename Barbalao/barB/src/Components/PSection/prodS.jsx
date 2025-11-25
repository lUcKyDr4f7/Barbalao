import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../Css/styles.pcard_S.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
/* import { getImagePath } from '../utils/pathP.jsx'; */
import ProdC from '../PCard/prodC.jsx';
/* import Swiper from '../Swiper/Swiper.jsx'; */

export default function ProdS({ produtos, subCateg }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (selectedProduct != null) {
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add('lock-scroll');
    } else {
      const top = document.body.style.top;
      document.body.classList.remove('lock-scroll');
      document.body.style.top = '';
      const y = top ? parseInt(top) * -1 : 0;
      window.scrollTo(0, y);
    }
  }, [selectedProduct]);

  const prodAtuais = produtosL.filter(produtoL => produtoL.categoria === subCateg.id_categoria)

  return (
    <>
      <div key={subCateg.id_categoria}>
        {prodAtuais.length == 0 ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p className={styles.swiperTitle}>Sem produtos</p>
            </div>
          </div>
        ) : (
          <Swiper 
            className={styles.brandsSwiper} 
            slidesPerView={isMobile ? 1.5 : 5}
            spaceBetween={isMobile ? 15 : 22}
            allowTouchMove={true}
            navigation={produtosL.length > (isMobile ? 2 : 5)}
            modules={[Navigation]} 
            slidesOffsetBefore={isMobile ? 10 : 15}
            slidesOffsetAfter={isMobile ? 10 : 10}
          >
            {prodAtuais.map((produto) => (
              <SwiperSlide onClick={() => setSelectedProduct(produto)} key={produto.id_prod} className={`${styles.swiperSlide} ${styles.avaliable}`}>
                <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                  <div className={styles.productCard}>
                    <div className={styles.productImg}>
                      <img
                        src={produto.imagem || 'https://via.placeholder.com/150'}
                        alt={produto.nome || 'Produto sem nome'}
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <h4 className={styles.info}>{produto.nome}</h4>
                      <ul className={`${styles.productStars} ${styles.info}`}></ul>
                      <h4 className={`${styles.priceWithDescount} ${styles.info}`}>
                        R${' '}
                        {parseFloat(produto.preco || 0)
                          .toFixed(2)
                          .replace('.', ',')}
                      </h4>
                      <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {selectedProduct && (
        <ProdC
          name={selectedProduct.nome}
          price={parseFloat(selectedProduct.preco || 0).toFixed(2).replace('.', ',')}
          img={selectedProduct.imagem}
          descricao={selectedProduct.descricao}
          setState={setSelectedProduct}
          state={selectedProduct}
        />
      )}
    </>
  );

}

