import '../Css/styles.categP.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../Css/styles.pcard_S.module.css'
import Hamburgao from '../../assets/popular-imgs/Hamburgao.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
export default function prodS(){
    
    return(
        <>
            <div style={{ width: "100%", margin: "0 auto" }}>
                <h2>Carrossel com Carousel.js</h2>
                <Swiper className="brandsSwiper"slidesPerView={2.426} slidesPerGroup={2.426} centerInsufficientSlides={true} allowTouchMove={false} navigation={true} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={395} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>

                <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable} ${styles.start}`} >
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                        <div className={styles.productCard}>
                            <div className={styles.productImg}>
                                <img src={Hamburgao} alt="" />
                            </div>
                            <div className={styles.productInfo}>
                                <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                <div className={`${styles.productOptions} ${styles.info}`}>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p>Branco / Verde</p>
                                    </div>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p><span>9</span> Tamanhos</p>
                                    </div>
                                </div>
                                <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`} >
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                        <div className={styles.productCard}>
                            <div className={styles.productImg}>
                                <img src={Hamburgao} alt="" />
                            </div>
                            <div className={styles.productInfo}>
                                <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                <div className={`${styles.productOptions} ${styles.info}`}>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p>Branco / Verde</p>
                                    </div>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p><span>9</span> Tamanhos</p>
                                    </div>
                                </div>
                                <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`} >
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                        <div className={styles.productCard}>
                            <div className={styles.productImg}>
                                <img src={Hamburgao} alt="" />
                            </div>
                            <div className={styles.productInfo}>
                                <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                <div className={`${styles.productOptions} ${styles.info}`}>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p>Branco / Verde</p>
                                    </div>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p><span>9</span> Tamanhos</p>
                                    </div>
                                </div>
                                <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`} >
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                        <div className={styles.productCard}>
                            <div className={styles.productImg}>
                                <img src={Hamburgao} alt="" />
                            </div>
                            <div className={styles.productInfo}>
                                <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                <div className={`${styles.productOptions} ${styles.info}`}>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p>Branco / Verde</p>
                                    </div>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p><span>9</span> Tamanhos</p>
                                    </div>
                                </div>
                                <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`} >
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                        <div className={styles.productCard}>
                            <div className={styles.productImg}>
                                <img src={Hamburgao} alt="" />
                            </div>
                            <div className={styles.productInfo}>
                                <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                <div className={`${styles.productOptions} ${styles.info}`}>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p>Branco / Verde</p>
                                    </div>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p><span>9</span> Tamanhos</p>
                                    </div>
                                </div>
                                <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable} ${styles.end}`} >
                    <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                        <div className={styles.productCard}>
                            <div className={styles.productImg}>
                                <img src={Hamburgao} alt="" />
                            </div>
                            <div className={styles.productInfo}>
                                <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                                <div className={`${styles.productOptions} ${styles.info}`}>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p>Branco / Verde</p>
                                    </div>
                                    <div className={`${styles.option} ${styles.info}`}>
                                        <p><span>9</span> Tamanhos</p>
                                    </div>
                                </div>
                                <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>




                
            </div>
        </>
    )

}

