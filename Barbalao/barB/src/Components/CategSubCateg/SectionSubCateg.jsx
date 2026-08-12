import ProdSwiper from "../ProdSwiper/ProdSwiper.jsx";
import Swiper from '../Swiper/Swiper.jsx';
import BannerCarousel from "../Banners/BannerCarousel";
import styles from "./styles.CategSubCateg.module.css";
import { ChevronRight } from 'lucide-react';
import { getProdFromCateg } from '../../assets/Data/AllProducts.js';

export default function SectionCateg({subCateg}) {
    /* const produtosL = produtos || JSON.parse(localStorage.getItem("products"));
    const subCategsL = subCateg || JSON.parse(localStorage.getItem("Subcategories"));
    console.log(subCategsL)

    const subAtuais = subCategsL.filter(subCategL => subCategL.sub_categoria_de == categoria.id_categoria);
    const categNome = (categoria.nome).slice(0,1).toUpperCase() + (categoria.nome).slice(1).toLowerCase(); */

    const produtos = getProdFromCateg(subCateg.id_categoria);

    return(
        <>
        <details open className={styles.subCateg}>
            <summary className={styles.subCategTitle}>
                {(subCateg.nome).slice(0,1).toUpperCase() + (subCateg.nome).slice(1).toLowerCase()}
                <ChevronRight className={styles.arrowIcon} />
            </summary>
            {/* <ProdSwiper produtos={subCateg.prod} subCateg={subCateg.self}/> */}
            {produtos.length == 0 ? (
                <div key={subCateg.id_categoria} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p className={styles.swiperTitle}>Sem produtos</p>
                </div>
            ) : (
                <Swiper className={styles.prodSwiper}>
                {produtos.map((produto) => <ProdSwiper produto={produto} subCateg={subCateg} />)}
                </Swiper>
            )}
        </details>
        </>
    )
}
