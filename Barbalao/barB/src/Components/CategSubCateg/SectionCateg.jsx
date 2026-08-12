import styles from "./styles.CategSubCateg.module.css";
import BannerCarousel from "../Banners/BannerCarousel.jsx";
import SectionSubCateg from "./SectionSubCateg.jsx";
import { ChevronRight } from 'lucide-react';
import { getSubCateg } from "../../assets/Data/AllCategories.js";

export default function SectionCateg({categoria}) {
    
    const subCategorias = getSubCateg(categoria.id_categoria);

    return(
        <details ref={categoria.ref} open className={styles.categ}>
            <summary className={styles.categTitle}>
                {categoria.nome}
                <ChevronRight className={styles.arrowIcon} />
            </summary>
            {subCategorias.map(subCateg => <SectionSubCateg key={`sc${subCateg.nome}`} subCateg={subCateg}/>)}
        </details>
    )
}
