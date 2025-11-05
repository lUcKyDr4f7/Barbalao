import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../Css/styles.pcard_S.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import ProdC from '../PCard/prodC.jsx';

export default function ProdS({ produtos }) {
  {console.log(produtos.descricao)}
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
      <div style={!selectedProduct? {width: '100%', margin: '0 auto', height: '30vh' }:{ width: '100%', margin: '0 auto' }}>
        {!selectedProduct? 
          (
            <div>
              <h2 > Carrossel de Produtos</h2>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p>Sem produtos</p>
              </div>
            </div>
            
          )
          :
          (
             <div>
              <h2>Carrossel de Produtos</h2>
              <Swiper className={styles.brandsSwiper} slidesPerView={5} spaceBetween={22} allowTouchMove={false} navigation={produtos.length > 5} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={10} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                {produtos.map((produto) => (
                  
                  <SwiperSlide onClick={() => setSelectedProduct(produto)} key={produto.id_prod} className={`${styles.swiperSlide} ${styles.avaliable}`}>
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                      <div className={styles.productCard}>
                        <div className={styles.productImg}>
                          <img src={produto.image} alt={produto.name} />
                        </div>
                        <div className={styles.productInfo}>
                          <h4 className={styles.info}>{produto.name}</h4>
                          <ul className={`${styles.productStars} ${styles.info}`}></ul>
                          {/* <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ {produto.valueWithoutD || produto.price}</s></h5> */}
                          <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ {parseFloat(produto.price).toFixed(2).replace('.', ',')}</h4>
                          <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>  
             </div>
          )
      
      }
      </div>

      {selectedProduct && (
        <ProdC
          name={selectedProduct.name}
          price={parseFloat(selectedProduct.price).toFixed(2).replace('.', ',')}
          img={selectedProduct.image}
          setState={setSelectedProduct}
          descricao={selectedProduct.descricao}
          state={selectedProduct}
        />
      )}
    </>
  );
}
