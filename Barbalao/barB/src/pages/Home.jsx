import NavB from '../Components/NavBar/navB.jsx';
import CategP from '../Components/Categories/CategP.jsx';
import BannerS from '../Components/Banners/bannerS.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import SectionCateg from '../Components/section/SectionCateg.jsx';
import Form from '../Components/Form/FormLogin.jsx';


export default function Home({produtos, categorias, subCateg, banners}) {
  const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
  const categoriasL = categorias || JSON.parse(localStorage.getItem("categories"))
  const subCategL = subCateg || JSON.parse(localStorage.getItem("subcategories"))
  const bannersL = banners || JSON.parse(localStorage.getItem("banners"))
  
  return (
    <>
      <NavB/>
      <section className="main">
        <CategP categorias={categoriasL}/>
        <SectionCateg 
          produtos={produtosL} 
          categorias={categoriasL} 
          subCateg={subCategL}
          banners={bannersL}
        />
        {/* <SectionCateg produtos={produtosL} categorias={categoriasL} subCateg={subCategL}/> */}
        {/* onDelete={removerProduto} */}
      </section>
    </>
  );
}
