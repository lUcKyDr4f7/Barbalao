import './App.css'
import NavB from './Components/NavBar/navB.jsx'
import CategP from './Components/Categories/CategP.jsx'
import BannerS from './Components/Banners/bannerS.jsx'
import PSection from './Components/PSection/prodS.jsx'
function App() {

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

export default App
