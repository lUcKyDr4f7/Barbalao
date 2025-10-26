import NavB from '../Components/NavBar/navB.jsx'
import CategP from '../Components/Categories/CategP.jsx'
import BannerS from '../Components/Banners/bannerS.jsx'
import PSection from '../Components/PSection/prodS.jsx'
import Form from '../Components/Form/FormLogin.jsx'
import { useState, useEffect } from 'react'
import SearchModal from '../Components/SearchModal/SearchModal.jsx'

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [searchModal, setSearchModal] = useState(false);

  const carregarProdutos = () =>
  {
    fetch('http://localhost:3001/api/products')
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
    setProdutos(produtos.filter(p => p.idprod != id))
  }

  
  useEffect(() => {
    carregarProdutos()
  }, [])

  return (
    <>
      <NavB setSearchModal={setSearchModal}/>
      <section className='main'>
      <CategP/>
      <BannerS/>
      <PSection produtos={produtos} onDelete={removerProduto}/>
      </section>
      {searchModal && <SearchModal setSearchModal={setSearchModal} produtos={produtos}/>}
    </>
  )
}
