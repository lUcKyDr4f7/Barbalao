import ProdS from "../PSection/prodS";
import BannerS from "../Banners/bannerS";
import SectionSubCateg from "../section/SectionSubCateg.jsx"

export default function SectionCateg({produtos, categorias, subCateg, banners, selectedProduct, setSelectedProduct}) {
    const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
    const subCategsL = subCateg || JSON.parse(localStorage.getItem("Subcategories"))
    const categoriasL = categorias || JSON.parse(localStorage.getItem("categories"))
    const bannersL = banners || JSON.parse(localStorage.getItem("banners"))
    let grupoBanner = []
    const quantGrupos = Math.ceil(bannersL.length / 3) || []

    for (let i = 0; i < quantGrupos; i+= 3) {
        const temp = bannersL.slice(i, i+3) || []
        grupoBanner = [...grupoBanner, temp]
    }


    return(
        <div >

            {categoriasL.length != 0? 
                    categoriasL.map((categoria, index )=> (
                        <div key={index}> 
                            <BannerS banners={grupoBanner} ordem = {index} />
                            <SectionSubCateg produtos={produtosL} categoria={categoria} subCateg={subCategsL} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
                        </div>
                    ))
                :
                    <>
                        <BannerS banners={grupoBanner} ordem={1} />
                        <h2>Sem Categorias</h2>
                    </>
            }
        </div>
    )
}