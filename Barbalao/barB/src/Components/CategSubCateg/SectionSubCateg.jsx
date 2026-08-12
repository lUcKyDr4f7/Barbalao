import ProdSwiper from "../ProdSwiper/ProdSwiper.jsx";
import Swiper from '../Swiper/Swiper.jsx';
import BannerCarousel from "../Banners/BannerCarousel";
import styles from "./styles.CategSubCateg.module.css";
import { ChevronRight } from 'lucide-react';
import { getProdFromCateg } from '../../assets/Data/AllProducts.js';

export default function SectionCateg({subCateg}) {

    const produtos = getProdFromCateg(subCateg.id_categoria);

    return(
        <>
        <details open className={styles.subCateg}>
            <summary className={styles.subCategTitle}>
                {(subCateg.nome).slice(0,1).toUpperCase() + (subCateg.nome).slice(1).toLowerCase()}
                <ChevronRight className={styles.arrowIcon} />
            </summary>
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
