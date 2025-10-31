import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../Css/styles.pcard_S.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Products } from '../../assets/Data/Products.js'
import ProdC from '../PCard/prodC.jsx';
export default function prodS(){
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
    return(
            <>
            <div style={{ width: "100%", margin: "0 auto" }}>
                <h2 className={styles.swiperTitle}>Carrossel com Carousel.js</h2>
                <Swiper className={styles.brandsSwiper} slidesPerView={5} spaceBetween={22} allowTouchMove={false} navigation={Products.length > 5} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={10} onSlideChange={() => {console.log('slide change')}} onSwiper={(swiper) => {console.log(swiper)}}>
                    {Products.map((product) => (    
                    <SwiperSlide onClick={() => setSelectedProduct(product)} key={product.id} className={`${styles.swiperSlide} ${styles.avaliable}`} >
                        <div className={`${styles.cardWithModal} ${styles.airJordan}`} >
                            <div className={styles.productCard}>
                                <div className={styles.productImg}>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className={styles.productInfo}>
                                    <h4 className={styles.info}>{product.name}</h4>
                                    <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                    {/* <div className={`${product.hasDiscount ? styles.productOptionsD: styles.productOptions} ${styles.info}`}>
                                        {product.numberOfOptions != null && product.numberOfOptions > 0 ? 
                                        Array(parseInt(product.numberOfOptions)).fill().map((_, i) => (
                                        <div className={`${styles[product.option[i].toLowerCase()]} ${styles.info}`} key={i}> 
                                            <p>{product.option[i]}</p>
                                        </div> 
                                        ))
                                        : 
                                        <div className={`${styles.option} ${styles.info}`}></div>
                                        }   
                                    </div> */}
                                    {/* product.hasDiscount ? <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ {product.valueWithoutD}</s></h5> : <h5 className={`${styles.normalPrice} ${styles.info}`}></h5> */}
                                    <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ {product.valueWithD}</h4>
                                    <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 
                    ))}
                </Swiper>
            </div>
            
            {selectedProduct && (
            <ProdC name={selectedProduct.name} price={selectedProduct.valueWithD} img={selectedProduct.image} setState = {setSelectedProduct} state = {selectedProduct}/>
            )}
            </>
    )

}
