import styles from '../Css/styles.navB.module.css';
import logo from '../../assets/Barbalão.png';

export default function NavB() {
    
    return (
        <>
         {/*<!--========== Header ==========-->*/}
            <header class="earth-tenis-header" className={styles.earthTenisHeader}>
                <div className="stylesearth-tenis-container">
                    <div class="inner" className={styles.inner}>
                        <div class="bar-balao-logo">
                            <a className={styles.barb} href="#home"><span>Bar Balão</span> <img className={styles.logo} src={logo}/></a>
                        </div>
                        <div class="header-btns" className={styles.headerBtns}>
                                <ul class="header-menu" className={styles.headerMenu}>
                                <li class="menu-item"><a className={styles.menu}href="#home">Início</a></li>
                                <li class="menu-item"><a className={styles.menu}href="#products">Produtos</a></li>
                                <li class="menu-item"><a className={styles.menu}href="#about-us">Sobre Nós</a></li>
                                
                            </ul>
                            <div class="theme-btn">
                                <i class="ri-sun-fill sun-icon"></i>
                                <i class="ri-moon-fill moon-icon"></i>
                            </div>
                            <div class="shop-btn">
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