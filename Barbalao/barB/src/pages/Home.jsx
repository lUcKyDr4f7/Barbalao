import NavB from '../Components/NavBar/navB.jsx';
import CategP from '../Components/Categories/CategP.jsx';
import BannerS from '../Components/Banners/bannerS.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import SectionCateg from '../Components/section/SectionCateg.jsx';
import Form from '../Components/Form/FormLogin.jsx';
import SearchModal from '../Components/SearchModal/SearchModal.jsx';
import { useEffect, useState, useRef } from 'react';
import Footer from '../Components/Footer/Footer.jsx';

export default function Home({produtos, categorias, subCateg, banners}) {

  const [searchModal, setSearchModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
      if (searchModal) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }
      return () => {document.body.style.overflow = ''};
  }, [searchModal]);
  
  useEffect(() => {
    const header = useRef(0);
    /* const section = document.getElementsByClassName("main"); */
    const section = useRef(0);
    const handleScroll = () => {
      if (section.current.scrollY > 50) {
        header.current.classList.add(styles.shrink);
      } else {
        header.current.classList.remove(styles.shrink);
      }
    };
    section.current.addEventListener("scroll", handleScroll);
    return () => {
      section.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
  const categoriasL = categorias || JSON.parse(localStorage.getItem("categories"))
  const subCategL = subCateg || JSON.parse(localStorage.getItem("subcategories"))
  const bannersL = banners || JSON.parse(localStorage.getItem("banners"))
  
  return (
    <>
      <NavB setSearchModal={setSearchModal} searchText={searchText} setSearchText={setSearchText}/>
      <section className="main">
        <CategP categorias={categoriasL}/>
        <SectionCateg 
          produtos={produtosL} 
          categorias={categoriasL} 
          subCateg={subCategL}
          banners={bannersL}
        />
        {produtos.length != 0 && <Footer />}
      </section>
      {searchModal && <SearchModal setSearchModal={setSearchModal} searchText={searchText} produtos={produtos}/>}
    </>
  );
}
