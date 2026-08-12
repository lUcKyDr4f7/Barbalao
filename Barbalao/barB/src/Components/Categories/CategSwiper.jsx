import styles from './styles.CategSwiper.module.css';

export default function CategSwiper({categ, scrollFn}) {

  return (
    <>
      <div key={categ.id_categoria} className={`${styles.swiperCateg}`}
        onClick={() => scrollFn(categ.ref)}>
        <img src={categ.imagem}/>
        <h2>{(categ.nome).slice(0,1).toUpperCase() + (categ.nome).slice(1)}</h2>
      </div>
    </>
  )
  
  /* <>
    <div className={`${styles.swiperCateg}`}><img src={Lanche}/><h2>Lanches</h2></div>
    <div className={`${styles.swiperCateg}`}><img src={Pastel}/><h2>Pastéis</h2></div>
    <div className={`${styles.swiperCateg}`}><img src={Bebida}/><h2>Bebidas</h2></div>
    <div className={`${styles.swiperCateg}`}><img src={Porção}/><h2>Porções</h2></div>
    <div className={`${styles.swiperCateg}`}><img src={Salgado}/><h2>Salgados</h2></div>
    <div className={`${styles.swiperCateg}`}><img src={Doces}/><h2>Doces</h2></div>
  </> */

}









