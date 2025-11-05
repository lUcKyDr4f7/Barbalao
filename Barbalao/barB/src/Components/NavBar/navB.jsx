import styles from '../Css/styles.navB.module.css';
import logo from '../../assets/BarB.png';
import { useState, useEffect } from 'react';

export default function NavB() {
    const [scroll, setScroll] = useState(false)
    
    return (
        <>
         {/*<!--========== Header ==========-->*/}
            <header className={styles.earthTenisHeader}>
                <div className="stylesearth-tenis-container">
                    <div className={styles.inner}>
                        <div className={styles.barBalaoLogo}>
                            <a className={styles.barb} href="#home"><img className={styles.logo} src={logo}/></a>
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
                    <div class="scroll-indicator-bar"></div>
                </div>
            </header>
        </> 
    )

}