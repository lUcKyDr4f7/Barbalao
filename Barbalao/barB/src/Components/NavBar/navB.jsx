import styles from '../Css/styles.navB.module.css';
import logo from '../../assets/BarB.png';
import { useState, useEffect } from 'react';
import Cart from '../Cart/CartP'
import { useAuth } from '../../Routes/AuthContext';

export default function NavB() {
      const {authenticated, setAuthenticated} = useAuth()
      const [link, setLink] = useState(null)
      
      useEffect(() => {
        if (authenticated) {
          setLink(<li><a href="/adm">ADM</a></li>);
        } else {
          setLink("");
        }
      }, [authenticated]);

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
    }
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartList, setCartList] = useState([]);

    function openCart() {
        currentTheme = currentTheme + ' cartOpen';
        localStorage.setItem("theme", currentTheme);
        setIsCartOpen(!isCartOpen);
    }
    useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add(styles.shrink);
      } else {
        header.classList.remove(styles.shrink);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []); 
    return (
        <>
         {/*<!--========== Header ==========-->*/}
            <header className={styles.header}>
                <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartList={cartList} />
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <a href="#home"><img  src={logo}/></a>
                    </div>
                    {/* <form>
                        <input type="text" />
                        <button type="submit"><i className="ri-search-line"></i></button>
                    </form> */}
                    <div className={styles.headerBtns}>
                        <li><a href="/">Início</a></li>
                        <li><a href="/about-us">Sobre Nós</a></li>
                        {link}
                        <button onClick={() => changeTheme()}><i className={themeIcon}></i></button>
                        <button onClick={() => openCart()}><i className="ri-shopping-cart-2-fill"></i></button>
                    </div>
                </div>
                <div className="scroll-indicator-bar"></div>
            </header>
        </> 
    )


}