import './App.css'
import NavB from './Components/NavBar/navB.jsx'
import CategP from './Components/Categories/CategP.jsx'
import BannerS from './Components/Banners/bannerS.jsx'
import PSection from './Components/PSection/prodS.jsx'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';
import FormCriar from './Components/FormCriarP/FormCriar.jsx'

function App() {

  return (
    <>
      {/* <NavB/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection/>
      </section> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormCriar />} />
      </Routes>
    </>
  )
}

export default App
