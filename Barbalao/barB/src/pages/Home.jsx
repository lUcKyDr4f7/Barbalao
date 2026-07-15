import { useEffect, useState } from 'react';
import { AllProducts } from '../assets/Data/AllProducts.js';
import { AllBanners } from '../assets/Data/AllBanners.js';
import { AllCategories } from '../assets/Data/AllCategories.js';

import NavB from '../Components/NavBar/navB.jsx';
import CategSwiper from '../Components/Categories/CategSwiper.jsx';
import BannerCarousel from '../Components/Banners/BannerCarousel.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import SectionCateg from '../Components/section/SectionCateg.jsx';
import Form from '../Components/Form/FormLogin.jsx';
import SearchModal from '../Components/SearchModal/SearchModal.jsx';
import Footer from '../Components/Footer/Footer.jsx';

import styles from '../Components/Css/styles.Home.module.css';

export default function Home() {

  const [searchModal, setSearchModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    document.body.style.overflow = searchModal?'hidden':'';
    /* return () => {document.body.style.overflow = ''}; */
  }, [searchModal]);

  const [produtos, setProdutos] = useState(AllProducts);
  const [categorias, setCategorias] = useState(AllCategories.filter((categ) => categ.sub_categoria_de == null));
  const [subCateg, setSubCateg] = useState(AllCategories.filter((categ) => categ.sub_categoria_de != null));
  const [banners, setBanners] = useState(AllBanners);

  const [cardapio, setCardapio] = useState(() => {
    let a = {};
    categorias.map(c => {
      a[c.nome] = {};
      a[c.nome].self = c;
      subCateg.filter(s => s.sub_categoria_de == c.id_categoria).map(s => {
        a[c.nome][s.nome] = {};
        a[c.nome][s.nome].self = s;
        a[c.nome][s.nome].prod = produtos.filter(p => p.categoria == s.id_categoria);
      });
    });
    return a;
  });
  
  return (
    <>
      <NavB setSearchModal={setSearchModal} searchText={searchText} setSearchText={setSearchText}/>
      <section className="main">
        <h2 className={styles.titleCateg}>Cardápio</h2>
        <CategSwiper categorias={categorias}/>
        {/* <SectionCateg produtos={produtos} categorias={categorias} subCateg={subCateg} banners={banners} /> */}
        <BannerCarousel banners={banners} />
        {Object.keys(cardapio).map((key, i) => {
          return <>
            <SectionCateg key={key} categoria={cardapio[key]}/>
            {(i%2 == 0) && <BannerCarousel key={`sb${i/2}`} banners={banners} />}
          </>
        })}
        {categorias.length != 0 && <Footer />}
      </section>
      {searchModal && <SearchModal setSearchModal={setSearchModal} searchText={searchText} produtos={produtos}/>}
    </>
  );
}
