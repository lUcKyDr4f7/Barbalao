import styles from '../Css/styles.categP.module.css';
import Swiper from '../Swiper/Swiper.jsx';
import Lanche from '../../assets/categorias/burger.png';
import Pastel from '../../assets/categorias/pastel.png';
import Salgado from '../../assets/categorias/coxinha.png';
import Porção from '../../assets/categorias/porcao.png';
import Bebida from '../../assets/categorias/drink.png';
import Doces from '../../assets/categorias/chocolate.png';

export default function CategP({ categorias }) {
  const categoriasL = categorias || JSON.parse(localStorage.getItem("categories"))

  const scrollToSection = (id) => {
    const alvo = document.getElementById(id);
    if (alvo) {
      const y = alvo.getBoundingClientRect().top + window.scrollY - 500;
      alvo.scrollIntoView({ top: y, behavior: "smooth"});
    }
  };

  return (
      <>
        <h2 className={styles.titleCateg}>Cardápio</h2>
        <Swiper className={styles.brandsSwiper} slidesPerView={2.426} slidesPerGroup={2.426} centerInsufficientSlides={'true'} allowTouchMove={false} navigation={true} modules={[Navigation]} swipeable={'true'} slidesOffsetBefore={15} slidesOffsetAfter={395} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
          {categoriasL.length !== 0?
            categoriasL.map((categ, i) => (
              <>
              <div className={`${styles.swiperCateg}`} onClick={() => scrollToSection(categ.id_categoria)}>
                <img src={categ.imagem}/>
                <h2>{(categ.nome).slice(0,1).toUpperCase() + (categ.nome).slice(1)}</h2>
              </div>
              </>
            ))
          :
          <>
            <div className={`${styles.swiperCateg}`}><img src={Lanche}/><h2>Lanches</h2></div>
            <div className={`${styles.swiperCateg}`}><img src={Pastel}/><h2>Pastéis</h2></div>
            <div className={`${styles.swiperCateg}`}><img src={Salgado}/><h2>Salgados</h2></div>
            <div className={`${styles.swiperCateg}`}><img src={Porção}/><h2>Porções</h2></div>
            <div className={`${styles.swiperCateg}`}><img src={Bebida}/><h2>Bebidas</h2></div>
            <div className={`${styles.swiperCateg}`}><img src={Doces}/><h2>Doces</h2></div>
          </>
          }
        </Swiper>
      </>
  );

}






