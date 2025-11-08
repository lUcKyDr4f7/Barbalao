import './App.css'
import NavB from './Components/NavBar/navB.jsx'
import CategP from './Components/Categories/CategP.jsx'
import BannerS from './Components/Banners/bannerS.jsx'
import PSection from './Components/PSection/prodS.jsx'
import { Components } from './assets/Data/Components.js'
function App() {

  return (
    <>
      <NavB/>
      <section className='main'>
      <CategP/>
      {Components.map((comp) => comp.type === 'banner' ? <BannerS key={comp.id} Banners={comp.data}/> : <PSection key={comp.id} Products={comp.data}/>)}
      {/* <BannerS/>
      <PSection/> */}
      </section>
    </>
  )
}

export default App
