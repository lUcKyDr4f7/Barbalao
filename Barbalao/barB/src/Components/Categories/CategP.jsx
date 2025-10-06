import styles from '../Css/styles.categP.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Lanche from '../../assets/categorias/burger.png'
import Pastel from '../../assets/categorias/pastel.png'
import Salgado from '../../assets/categorias/coxinha.png'
import Porção from '../../assets/categorias/porcao.png'
import Bebida from '../../assets/categorias/drink.png'
import BebidaA from '../../assets/categorias/drinkA.png'

export default function CategP() {
  return (
      <>
        <h2 className={styles.titleCateg}>Cardápio</h2>
        <Swiper className={styles.brandsSwiper} slidesPerView={2.426} slidesPerGroup={2.426} centerInsufficientSlides={true} allowTouchMove={false} navigation={true} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={395} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable} ${styles.start}`}><img src={Lanche}/><h2>Lanches</h2></SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`}><img src={Pastel}/><h2>Pastéis</h2></SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`}><img src={Salgado}/><h2>Salgados</h2></SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`}><img src={Porção}/><h2>Porções</h2></SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable}`}><img src={Bebida}/><h2>Bebidas</h2></SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.avaliable} ${styles.end}`}><img className='bebidaA' src={BebidaA}/><h2 className='bebidA'>Bebidas Alcólicas</h2></SwiperSlide>
        </Swiper>
      </>
  );
}
