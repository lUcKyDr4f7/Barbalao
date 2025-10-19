import NavB from '../Components/NavBar/navB.jsx'
import CategP from '../Components/Categories/CategP.jsx'
import BannerS from '../Components/Banners/bannerS.jsx'
import PSection from '../Components/PSection/prodS.jsx'
import Form from '../Components/Form/FormLogin.jsx'
import { useState, useEffect } from 'react'

export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() =>
  {
    fetch('http://localhost:3001/api/products')
      .then((res) => {
        if(!res.ok) {
          throw new Error('Erro não legal')
        }
        return res.json() 
      })
      .then((json) =>
      {
        setProdutos(json)
      })
  }, [])

  return (
    <>
      <NavB/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection produtos={produtos}/>
      </section>
    
    </>
  )
}
