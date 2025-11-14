import NavB from '../Components/NavBar/navB.jsx';
import CategP from '../Components/Categories/CategP.jsx';
import BannerS from '../Components/Banners/bannerS.jsx';
import PSection from '../Components/PSection/prodS.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { Components } from '../assets/Data/Components.js';


export default function Home() {
  return (
    <>
      <NavB/>
      <main className='main'>
        <CategP/>
        {Components.map((comp) => comp.type === 'banner' ? <BannerS key={comp.id} Banners={comp.data}/> : <PSection key={comp.id} Products={comp.data}/>)}
      </main>
      <Footer/>
    </>
  );
}
