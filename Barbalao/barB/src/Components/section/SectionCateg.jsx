import BannerS from "../Banners/bannerS";
import SectionSubCateg from "../section/SectionSubCateg.jsx"
import styles from "../Css/styles.pcard_S.module.css"
import Footer from '../Footer/Footer.jsx';

export default function SectionCateg({produtos, categorias, subCateg, banners}) {
    const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
    const subCategsL = subCateg || JSON.parse(localStorage.getItem("Subcategories"))
    const categoriasL = categorias || JSON.parse(localStorage.getItem("categories"))
    const bannersL = banners || JSON.parse(localStorage.getItem("banners"))

    // Agrupa os banners para criar carroseis contendo 3 banners cada
    let grupoBanner = []
    const quantGrupos = Math.ceil(bannersL.length / 3) || []

    for (let i = 0; i < quantGrupos; i+= 3) {
        const temp = bannersL.slice(i, i+3) || []
        grupoBanner = [...grupoBanner, temp]
    }


    return(
        <div >
            {categoriasL.length != 0? 
                <>
                    {categoriasL.map((categoria, index) => (
                        <div key={index}>
                            <BannerS banners={grupoBanner} ordem={index} />
                            <div id={categoria.id_categoria}>
                                <SectionSubCateg 
                                    produtos={produtosL} 
                                    categoria={categoria} 
                                    subCateg={subCategsL}
                                />
                            </div>
                        </div>
                    ))}
                </>
                :
                null
            }
        </div>
    )
}
