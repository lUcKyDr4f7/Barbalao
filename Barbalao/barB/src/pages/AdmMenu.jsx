import { Link } from 'react-router-dom';

export default function AdmMenu() {

    return(
        <div /* className={styles.AdmCont} */ >
            <h1 /* className={styles.AdmH1} */>Menu de Adiministração</h1>
            <div /* className={styles.AdmButtDiv} */>
                <Link to="produtos" /* className={styles.AdmButt} */>Produtos</Link>
                <Link to="categorias" /* className={styles.AdmButt} */>Categorias</Link>
                <Link to="banners" /* className={styles.AdmButt} */>Banners</Link>
            </div>
            <Link to="/" /* className={styles.AdmVolt} */>Voltar</Link>
        </div>
    )
}