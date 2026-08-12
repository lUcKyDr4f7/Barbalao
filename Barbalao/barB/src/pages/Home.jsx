import { useEffect, useState, useContext, useRef } from 'react';

import { MenuCtx } from '../Contexts/MenuProvider/MenuProvider.jsx';
import { getCateg } from '../assets/Data/AllCategories.js';
/* import { CategRefCtx } from '../Contexts/CategRefProvider/CategRefProvider.jsx'
import { AllBanners } from '../assets/Data/AllBanners.js'; */

import NavB from '../Components/NavBar/NavBar.jsx';
import Swiper from '../Components/Swiper/Swiper.jsx'
import CategSwiper from '../Components/Categories/CategSwiper.jsx';
import BannerCarousel from '../Components/Banners/BannerCarousel.jsx';
import SectionCateg from '../Components/CategSubCateg/SectionCateg.jsx';
import Form from '../Components/Form/FormLogin.jsx';
import SearchModal from '../Components/SearchModal/SearchModal.jsx';
import ModalProd from '../Components/ModalProd/ModalProd.jsx';
import Footer from '../Components/Footer/Footer.jsx';

import styles from '../Components/Css/styles.Home.module.css';

export default function Home() {

  const [searchModal, setSearchModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  /* const [banners, setBanners] = useState(AllBanners); */

  /* const {cardapio, setCardapio, selectedProduct, setSelectedProduct} = useContext(MenuCtx); */
  const {selectedProduct, setSelectedProduct} = useContext(MenuCtx);
  /* const categRefs = useContext(CategRefCtx); */

  useEffect(() => {
    document.body.style.overflow = searchModal?'hidden':'';
    /* return () => {document.body.style.overflow = ''}; */
  }, [searchModal]);

  const categorias = getCateg().map(c => { return {...c, 'ref': useRef(null)}});

  function scrollToSection(ref) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  
  return (
    <>
    
      <NavB setSearchModal={setSearchModal} searchText={searchText} setSearchText={setSearchText}/>

      <section className="main">
        <h2 className={styles.titleCateg}>Cardápio</h2>
        <Swiper>
          {categorias.length !== 0 && categorias.map((categ) => 
            <CategSwiper key={`cs${categ.nome}`} categ={categ} scrollFn={scrollToSection}/>)}
        </Swiper>
        <BannerCarousel banners={[]} />
        {categorias.map((categ, i) => {
          return <>
            <SectionCateg key={`categ${categ.nome}`} categoria={categ}/>
            {(i%2 == 0) && <BannerCarousel key={`sb${i/2}`} banners={[]} />}
          </>
        })}
        {categorias.length != 0 && <Footer />}
      </section>

      {searchModal &&
        <SearchModal setSearchModal={setSearchModal} searchText={searchText} produtos={produtos}/>}
      
      {selectedProduct && 
        <ModalProd setProd={setSelectedProduct} prod={selectedProduct} />}
    </>
  );
}
