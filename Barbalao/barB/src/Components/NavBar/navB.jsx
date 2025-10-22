import styles from '../Css/styles.navB.module.css';
import logo from '../../assets/BarB.png';
import { useState } from 'react';
import Cart from '../Cart/Cart';

export default function NavB() {

    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)') ? "dark" : "light";
    }
    
    let currentIcon = currentTheme == "dark" ? "ri-sun-fill sun-icon" : "ri-moon-fill moon-icon";
    const [themeIcon, setThemeIcon] = useState(currentIcon);
    document.body.classList = currentTheme;

    function changeTheme() {
        currentTheme = currentTheme == "light" ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        currentIcon = currentTheme == "dark" ? "ri-sun-fill sun-icon" : "ri-moon-fill moon-icon";
        setThemeIcon(currentIcon);
        document.body.classList = currentTheme;
        setTimeout(() => {
            document.body.classList = currentTheme;
        })
    }
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartList, setCartList] = useState([]);

    function openCart() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <>
         {/*<!--========== Header ==========-->*/}
            <header>
                <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartList={cartList} />
                <div className={styles.inner}>
                    <div>
                        <a href="#home"><img className={styles.logo} src={logo}/></a>
                    </div>
                    <form>
                        <input type="text" />
                        <button type="submit"><i className="ri-search-line"></i></button>
                    </form>
                    <div className={styles.headerBtns}>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about-us">Sobre Nós</a></li>
                        <button onClick={() => changeTheme()}><i className={themeIcon}></i></button>
                        <button onClick={() => openCart()}><i className="ri-shopping-cart-2-fill"></i></button>
                    </div>
                </div>
                <div className="scroll-indicator-bar"></div>
            </header>
        </> 
    )

}