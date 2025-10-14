import NavB from '../Components/NavBar/navB.jsx'
import CategP from '../Components/Categories/CategP.jsx'
import BannerS from '../Components/Banners/bannerS.jsx'
import PSection from '../Components/PSection/prodS.jsx'

export default function Home() {

  return (
    <>
      <NavB/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection/>
      </section>
    </>
  )
}
