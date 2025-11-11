import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../Css/styles.pcard_S.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import ProdC from '../PCard/prodC.jsx';

export default function ProdS({ produtos }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  return (
    <>
      <div
        style={
          !produtos || produtos.length === 0
            ? { width: '100%', margin: '0 auto', height: '30vh' }
            : { width: '100%', margin: '0 auto' }
        }
      >
        {!produtos || produtos.length === 0 ? (
          <div>
            <h2 className={styles.swiperTitle}>Carrossel de Produtos</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p className={styles.swiperTitle}>Sem produtos</p>
            </div>
          </div>
        ) : (
          <div>

            <h2 className={styles.swiperTitle}>Carrossel de Produtos</h2>

            <Swiper className={styles.brandsSwiper} slidesPerView={5} spaceBetween={22} allowTouchMove={false} navigation={produtos.length > 5} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={10} onSlideChange={() => {console.log('slide change')}} onSwiper={(swiper) => {console.log(swiper)}}>
              
              {produtos.map((produto) => (
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
          </div>
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
