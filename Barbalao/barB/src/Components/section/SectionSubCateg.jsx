import ProdS from "../PSection/prodS";
import BannerS from "../Banners/bannerS";
import styles from "../Css/styles.pcard_S.module.css";

export default function SectionCateg({subCateg}) {
    /* const produtosL = produtos || JSON.parse(localStorage.getItem("products"));
    const subCategsL = subCateg || JSON.parse(localStorage.getItem("Subcategories"));
    console.log(subCategsL)

    const subAtuais = subCategsL.filter(subCategL => subCategL.sub_categoria_de == categoria.id_categoria);
    const categNome = (categoria.nome).slice(0,1).toUpperCase() + (categoria.nome).slice(1).toLowerCase(); */

    return(
        <>
        <div>
            <h2 className={styles.swiperTitle}>{(subCateg.self.nome).slice(0,1).toUpperCase() + (subCateg.self.nome).slice(1).toLowerCase()}</h2>
            <ProdS produtos={subCateg.prod} subCateg={subCateg}/>
        </div>
        </>
    )
}
