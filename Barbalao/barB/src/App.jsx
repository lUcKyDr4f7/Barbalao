import './App.css'
import NavB from './Components/NavBar/navB.jsx'
import CategP from './Components/Categories/CategP.jsx'
import BannerS from './Components/Banners/bannerS.jsx'

function App() {

  return (
    <>
      <NavB/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      </section>
    </>
  )
}

export default App
