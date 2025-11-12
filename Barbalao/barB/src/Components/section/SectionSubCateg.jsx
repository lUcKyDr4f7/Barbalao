import ProdS from "../PSection/prodS";
import BannerS from "../Banners/bannerS";
import styles from "../Css/styles.pcard_S.module.css"

export default function SectionCateg({produtos, categoria, subCateg}) {
    const produtosL = produtos || JSON.parse(localStorage.getItem("products"))
    const subCategsL = subCateg || JSON.parse(localStorage.getItem("Subcategories"))
    console.log(subCategsL)

    const subAtuais = subCategsL.filter(subCategL => subCategL.sub_categoria_de == categoria.id_categoria)

    return(
        <div key={categoria.id_categoria}>

            <h1>{(categoria.nome).slice(0,1).toUpperCase() + (categoria.nome).slice(1)}</h1>
            {subAtuais.length != 0?
                subAtuais.map((sub) => (
                    <div>
                        <h2 className={styles.swiperTitle}>{(sub.nome).slice(0,1).toUpperCase() + (sub.nome).slice(1)}</h2>
                        <ProdS produtos={produtosL} subCateg={sub}/>
                    </div>
                ))
                :
                <h2>Sem Subcategorias</h2>
            }
        </div>
    )
}