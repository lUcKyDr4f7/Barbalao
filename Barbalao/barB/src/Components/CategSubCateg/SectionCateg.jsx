import styles from "./styles.CategSubCateg.module.css";
import BannerCarousel from "../Banners/BannerCarousel.jsx";
import SectionSubCateg from "./SectionSubCateg.jsx";
import { ChevronRight } from 'lucide-react';
import { getSubCateg } from "../../assets/Data/AllCategories.js"
//import Footer from '../Footer/Footer.jsx';

export default function SectionCateg({categoria}) {

    /* // Agrupa os banners para criar carroseis contendo 3 banners cada
    let grupoBanner = []
    const quantGrupos = Math.ceil(bannersL.length / 3) || []

    for (let i = 0; i < quantGrupos; i+= 3) {
        const temp = bannersL.slice(i, i+3) || []
        grupoBanner = [...grupoBanner, temp]
    } */
    
    const subCategorias = getSubCateg(categoria.id_categoria);

    return(
        <details ref={categoria.ref} open className={styles.categ}>
            <summary className={styles.categTitle}>
                {/* categoria.self.nome */}
                {categoria.nome}
                <ChevronRight className={styles.arrowIcon} />
            </summary>
            {/* Object.keys(categoria).map(key => (key != 'self') && <SectionSubCateg key={key} subCateg={categoria[key]}/>) */}
            {subCategorias.map(subCateg => <SectionSubCateg key={`sc${subCateg.nome}`} subCateg={subCateg}/>)}
            {/* {categoriasL.length != 0? 
                <>
                    {categoriasL.map((categoria, index) => (
                        <div key={index}>
                            <BannerCarousel banners={grupoBanner} ordem={index} />
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
        </details>
    )
}
