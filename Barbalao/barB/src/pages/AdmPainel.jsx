import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../Components/Css/styles.AdmPainel.module.css'
import filtro from '../assets/filtro.png'
import lupa from '../assets/lupa.png'

export default function AdmPainel() {
    const local = useLocation();
    const titulo = local.pathname.slice(12).toUpperCase();

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

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    
    return(
        <div className={styles.PainelCont}>
            
            <div className={`${styles.PainelContNav} ${scroll? styles.shrink: ""}`}>
                <div className={styles.PainelHeader}>
                    <Link to="/adm/Menu" className={styles.PainelLink}>
                        <button className={styles.PainelVolt}>←</button>
                    </Link>
                    <h1 className={styles.PainelH1}>{titulo}</h1>
                    <button className={styles.themeButton} onClick={() => changeTheme()}><i className={themeIcon}></i></button>
                </div>
                

                <div className={styles.PainelNav}>
                    <button className={styles.Lupa}>
                        <img src={lupa} alt="" />
                    </button>
                    <input type="text" className={styles.PainelPesq} placeholder="Hamburger..."/>

                    <div className={styles.PainelButtstNav}>
                        <button className={styles.PainelFilt}>
                            <img src={filtro} alt="" />
                        </ button>
                        <div>
                            <button className={styles.PainelNew}></ button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.PainelOutlet}>
                <Outlet />
            </div>
        </div>
    )
}
