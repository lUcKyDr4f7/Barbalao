import './App.css'
import NavB from './Components/NavBar/navB.jsx'
import CategP from './Components/Categories/CategP.jsx'
import BannerS from './Components/Banners/bannerS.jsx'
import PSection from './Components/PSection/prodS.jsx'
import FormCriar from './Components/FormCriaP/FormCriar.jsx'
import { useState } from 'react'
function App() {

  // Controle de "local"
  const [formulario, setFormulario] = useState(false)

  // Array de produtos, afim de passar para o prodS
  const [produtos, setProdutos] = useState(
    () => {
      const prods = localStorage.getItem("cards")
      if(!prods) return []
      try{
        return JSON.parse(prods)
      } catch {
        return []
      }
    }
  )

  const criarProd = (prod) =>{
    const novoProd = [...produtos, prod]
    setProdutos(novoProd)
    localStorage.setItem("cards", JSON.stringify(novoProd))
  }

  if(formulario){
    return(
      <>
        <FormCriar 
          onClic={() => setFormulario(false)}
          submit={criarProd}  
        />
      </>
    )
  }

  return (
    <>
      <NavB onClica={()=> setFormulario(true)}/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection produtos={produtos}/>
      </section>
    </>
  )
}

export default App
