import ProdS from "../PSection/prodS";
import BannerCarousel from "../Banners/BannerCarousel";
import styles from "./styles.CategProdSection.module.css";
import { ChevronRight } from 'lucide-react';

export default function SectionCateg({subCateg}) {
    /* const produtosL = produtos || JSON.parse(localStorage.getItem("products"));
    const subCategsL = subCateg || JSON.parse(localStorage.getItem("Subcategories"));
    console.log(subCategsL)

    const subAtuais = subCategsL.filter(subCategL => subCategL.sub_categoria_de == categoria.id_categoria);
    const categNome = (categoria.nome).slice(0,1).toUpperCase() + (categoria.nome).slice(1).toLowerCase(); */

    return(
        <>
        <details open className={styles.subCateg}>
            <summary className={styles.subCategTitle}>
                {(subCateg.self.nome).slice(0,1).toUpperCase() + (subCateg.self.nome).slice(1).toLowerCase()}
                <ChevronRight className={styles.arrowIcon} />
            </summary>
            <ProdS produtos={subCateg.prod} subCateg={subCateg.self}/>
        </details>
        </>
    )
}
