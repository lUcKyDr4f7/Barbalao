import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../Css/styles.pcard_S.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';

export default function prodS({produtos, onDelete}){
    const deletarProdutos = (id) =>
      {
        fetch(`http://localhost:3001/api/products/remove/${id}`, {
          method: 'POST'
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Erro não legal Deletar')
            }
            return res.json()
          })
          .then((json) => {
            alert(json.message)
            onDelete(id)
          })
          .catch((err) => {
            alert(err.message)
          })
      }
    
    return(
            <>
            <div style={{ width: "100%", margin: "0 auto" }}>
                <h2>Carrossel com Carousel.js</h2>
                <Swiper className={styles.brandsSwiper}slidesPerView={2.426} slidesPerGroup={2.426} centerInsufficientSlides={true} allowTouchMove={false} navigation={true} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={395} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>

                    {produtos.map((produto, i) =>{
                        return(
                            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable} ${i==0? styles.start: (i==(produtos.length - 1))? styles.end: ""}`} >
                                <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                                    <div className={styles.productCard}>
                                        <div className={styles.productImg}>
                                            <img src={produto.image} alt="" />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <h4 className={styles.info}>{produto.name}</h4>
                                            <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                            <div className={`${styles.productOptions} ${styles.info}`}>
                                                <div className={`${styles.option} ${styles.info}`}>
                                                    <p>Branco / Verde</p>
                                                </div>
                                                <div className={`${styles.option} ${styles.info}`}>
                                                    <p><span>9</span> Tamanhos</p>
                                                </div>
                                            </div>
                                            <h4 className={`${styles.priceWithDescount} ${styles.info}`}>{produto.price}</h4>
                                            <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                                            <button onClick={() => deletarProdutos(produto.idprod)}>X</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    
            </Swiper>




                
            </div>
            
            {selectedProduct && (
            <ProdC name={selectedProduct.name} price={selectedProduct.valueWithD} img={selectedProduct.image} setState = {setSelectedProduct} state = {selectedProduct}/>
            )}
            </>
    )
}