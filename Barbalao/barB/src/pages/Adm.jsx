export default function Adm() {

    return(
        <div /* className={styles.AdmCont} */ >
            <h1 /* className={styles.AdmH1} */>Painel dde Adiministração</h1>
            <div /* className={styles.AdmButtDiv} */>
                <a href="adm/produtos" /* className={styles.AdmButt} */>Produtos</a>
                <a href="adm/categoias" /* className={styles.AdmButt} */>Categorias</a>
                <a href="adm/Banners" /* className={styles.AdmButt} */>Banners</a>
            </div>
        </div>
    )
}