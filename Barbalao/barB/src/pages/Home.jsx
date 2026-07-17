import { useEffect, useState, useContext } from 'react';

import { MenuCtx } from '../Contexts/MenuProvider/MenuProvider.jsx';
import { AllBanners } from '../assets/Data/AllBanners.js';

import NavB from '../Components/NavBar/navB.jsx';
import CategSwiper from '../Components/Categories/CategSwiper.jsx';
import BannerCarousel from '../Components/Banners/BannerCarousel.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import SectionCateg from '../Components/section/SectionCateg.jsx';
import Form from '../Components/Form/FormLogin.jsx';
import SearchModal from '../Components/SearchModal/SearchModal.jsx';
import ModalProd from '../Components/ModalProd/ModalProd.jsx';
import Footer from '../Components/Footer/Footer.jsx';

import styles from '../Components/Css/styles.Home.module.css';

export default function Home() {

  const [searchModal, setSearchModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [banners, setBanners] = useState(AllBanners);

  const {cardapio, setCardapio, selectedProduct, setSelectedProduct} = useContext(MenuCtx)

  useEffect(() => {
    document.body.style.overflow = searchModal?'hidden':'';
    /* return () => {document.body.style.overflow = ''}; */
  }, [searchModal]);

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
    
      <NavB setSearchModal={setSearchModal} searchText={searchText} setSearchText={setSearchText}/>

      <section className="main">
        <h2 className={styles.titleCateg}>Cardápio</h2>
        <CategSwiper/>
        {/* <SectionCateg produtos={produtos} categorias={categorias} subCateg={subCateg} banners={banners} /> */}
        <BannerCarousel banners={banners} />
        {Object.keys(cardapio).map((key, i) => {
          return <>
            <SectionCateg key={key} categoria={cardapio[key]}/>
            {(i%2 == 0) && <BannerCarousel key={`sb${i/2}`} banners={banners} />}
          </>
        })}
        {Object.keys(cardapio).length != 0 && <Footer />}
      </section>

      {searchModal &&
      <SearchModal setSearchModal={setSearchModal} searchText={searchText} produtos={produtos}/>}
      
      {selectedProduct && 
      <ModalProd
        /* name={selectedProduct.nome}
        price={parseFloat(selectedProduct.preco || 0).toFixed(2).replace('.', ',')}
        img={selectedProduct.imagem}
        descricao={selectedProduct.descricao} */
        setProd={setSelectedProduct}
        prod={selectedProduct}
      />}
    </>
  );
}
