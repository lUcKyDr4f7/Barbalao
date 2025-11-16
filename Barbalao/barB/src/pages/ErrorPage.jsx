import { useRouteError, Link } from "react-router-dom";
import FormNav from "../Components/Form/FormNav";
import style from '../Components/Css/styles.Error.module.css'
import hamburguer from '../assets/erro/Hamburguer.png'

export default function ErrorPage(){
    const error = useRouteError()

    return (
        <>
            <FormNav />
            <div className={style.cont}>
                <img className={style.img} src={hamburguer} alt="Hamburguer triste" />
                <h1>Página não encontrada</h1>
            </div>
        </>
    )
}