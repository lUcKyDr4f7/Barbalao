import NavB from '../Components/NavBar/navB.jsx'
import CategP from '../Components/Categories/CategP.jsx'
import BannerS from '../Components/Banners/bannerS.jsx'
import PSection from '../Components/PSection/prodS.jsx'
import Form from '../Components/Form/FormLogin.jsx'
import { useState, useEffect } from 'react'

export default function Home() {
  const [produtos, setProdutos] = useState([])

  const carregarProdutos = () =>
  {
    fetch('https://back-end-barbalao.onrender.com/api/products/')
      .then((res) => {
        if(!res.ok) {
          throw new Error('Erro não legal Criar')
        }
        return res.json() 
      })
      .then((json) =>
      {
        setProdutos(json)
      })
  }

  const removerProduto = (id) => {
    setProdutos(produtos.filter(p => p.id_prod != id))
  }

  
  useEffect(() => {
    carregarProdutos()
  }, [])

  return (
    <>
      <NavB/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection produtos={produtos} onDelete={removerProduto}/>
      </section>
    
    </>
  )
}
