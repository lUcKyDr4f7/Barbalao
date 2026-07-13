import BannerS from "../Banners/bannerS";
import SectionSubCateg from "../section/SectionSubCateg.jsx"
import styles from "../Css/styles.pcard_S.module.css"
//import Footer from '../Footer/Footer.jsx';

export default function SectionCateg({categoria}) {

    /* // Agrupa os banners para criar carroseis contendo 3 banners cada
    let grupoBanner = []
    const quantGrupos = Math.ceil(bannersL.length / 3) || []

    for (let i = 0; i < quantGrupos; i+= 3) {
        const temp = bannersL.slice(i, i+3) || []
        grupoBanner = [...grupoBanner, temp]
    } */

    return(
        <div>
            <h1 className={styles.swiperTitle}>{categoria.self.nome}</h1>
            {Object.keys(categoria).map(key => (key != 'self') && <SectionSubCateg key={key} subCateg={categoria[key]}/>)}
            {/* {categoriasL.length != 0? 
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
            } */}
        </div>
    )
}
