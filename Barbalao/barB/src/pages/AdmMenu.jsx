import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from '../Components/Css/styles.AdmMenu.module.css'

export default function AdmMenu() {

    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)') ? "dark" : "light";
    }

    function changeTheme() {
        currentTheme = currentTheme == "light" ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        currentIcon = currentTheme == "dark" ? "ri-sun-fill sun-icon" : "ri-moon-fill moon-icon";
        setThemeIcon(currentIcon);
        document.body.classList = currentTheme;
    }
    
    let currentIcon = currentTheme == "dark" ? "ri-sun-fill sun-icon" : "ri-moon-fill moon-icon";
    const [themeIcon, setThemeIcon] = useState(currentIcon);
    document.body.classList = currentTheme;

    return(
        <div  className={styles.AdmCont}  >
            <h1  className={styles.AdmH1} >Menu de Adiministração</h1>
            <div  className={styles.AdmButtDiv} >
                <Link to="produtos"  className={styles.AdmButt} >Produtos</Link>
                <Link to="categorias"  className={styles.AdmButt} >Categorias</Link>
                <Link to="banners"  className={styles.AdmButt} >Banners</Link>
            </div>
            <Link to="/" className={styles.AdmVolt} >Voltar</Link>
        </div>
    )
}