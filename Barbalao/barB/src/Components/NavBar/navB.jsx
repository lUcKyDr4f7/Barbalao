import styles from '../Css/styles.navB.module.css';
import logo from '../../assets/BarB.png';
import { useState } from 'react';
import Cart from '../Cart/Cart';


export default function NavB() {

    
    let currentIcon = currentTheme == "dark" ? "ri-sun-fill sun-icon" : "ri-moon-fill moon-icon";
    const [themeIcon, setThemeIcon] = useState(currentIcon);
    document.body.classList = currentTheme;

    function changeTheme() {
        currentTheme = currentTheme == "light" ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        currentIcon = currentTheme == "dark" ? "ri-sun-fill sun-icon" : "ri-moon-fill moon-icon";
        setThemeIcon(currentIcon);
        document.body.classList = currentTheme;
    }
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartList, setCartList] = useState([]);

    function openCart() {
        currentTheme = currentTheme + ' cartOpen';
        localStorage.setItem("theme", currentTheme);
        setIsCartOpen(!isCartOpen);
    }

    return (
        <>
         {/*<!--========== Header ==========-->*/}
            <header className={styles.earthTenisHeader}>
                <div className="stylesearth-tenis-container">
                    <div className={styles.inner}>
                        <div className={styles.barBalaoLogo}>
                            <a className={styles.barb} href="/"><img className={styles.logo} src={logo}/></a>
                        </div>
                        <div className={styles.headerBtns}>
                            <ul class="header-menu" className={styles.headerMenu}>
                                <li class="menu-item"><a className={styles.menu}href="/">Início</a></li>
                                <li class="menu-item"><a className={styles.menu}href="about-us">Sobre Nós</a></li>
                                <li class="menu-item"><a className={styles.menu}href="form">Novo Produto</a></li>
                            </ul>
                            <div className={styles.themeBtn}>
                                <i class="ri-sun-fill sun-icon"></i>
                                <i class="ri-moon-fill moon-icon"></i>
                            </div>
                            <div className={styles.shopBtn}>
                                <i class="ri-shopping-cart-2-fill"><div class="alert"></div></i>
                            </div>     
                        </div>         
                    </div>
                </div>
                <div className="scroll-indicator-bar"></div>
            </header>
        </> 
    )

}