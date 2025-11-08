import NavB from '../Components/NavBar/navB.jsx';
import CategP from '../Components/Categories/CategP.jsx';
import BannerS from '../Components/Banners/bannerS.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import Form from '../Components/Form/FormLogin.jsx';


export default function Home({produtos}) {

  return (
    <>
      <NavB/>
      <section className="main">
        <CategP />
        <BannerS />
        <PSection produtos={produtos} />
        {/* onDelete={removerProduto} */}
      </section>
    </>
  );
}
