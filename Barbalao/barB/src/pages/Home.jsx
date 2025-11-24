import NavB from '../Components/NavBar/navB.jsx';
import CategP from '../Components/Categories/CategP.jsx';
import BannerS from '../Components/Banners/bannerS.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import SectionCateg from '../Components/section/SectionCateg.jsx';
import Form from '../Components/Form/FormLogin.jsx';
import SearchModal from '../Components/SearchModal/SearchModal.jsx';
import { useEffect, useState } from 'react';

export default function Home({produtos, categorias, subCateg, banners}) {

  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
      if (searchModal) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }
      return () => {document.body.style.overflow = ''};
  }, [searchModal]);

  const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
  const categoriasL = categorias || JSON.parse(localStorage.getItem("categories"))
  const subCategL = subCateg || JSON.parse(localStorage.getItem("subcategories"))
  const bannersL = banners || JSON.parse(localStorage.getItem("banners"))
  
  return (
    <>
      <NavB setSearchModal={setSearchModal}/>
      <section className="main">
        <CategP categorias={categoriasL}/>
        <SectionCateg 
          produtos={produtosL} 
          categorias={categoriasL} 
          subCateg={subCategL}
          banners={bannersL}
        />
      </section>
      {searchModal && <SearchModal setSearchModal={setSearchModal} produtos={produtos}/>}
    </>
  );
}