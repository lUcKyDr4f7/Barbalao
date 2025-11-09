import style from '../Css/styles.loading.module.css'
import loading from '../../assets/loading.gif'
import FormNav from '../Form/FormNav.jsx'

export default function Loading() {
    return(
        <>  
            <div className={style.cont}>
                <img className={style.img} src={loading} alt="Carregando" />
                <h3 className={style.text}>Carregando sessão</h3>
            </div>
        </>
    )
}