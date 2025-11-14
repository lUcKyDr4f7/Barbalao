import styles from '../Css/styles.navB.module.css';
import logo from '../../assets/BarB.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/CartP'
import { useAuth } from '../../Routes/AuthContext';

export default function NavB({setSearchModal}) {
      const {authenticated} = useAuth()
      const [link, setLink] = useState(null)
      
      useEffect(() => {
        if (authenticated) {
          setLink(<li><a href="/adm">ADM</a></li>);
        } else {
          setLink(null);
        }
      }, []);

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
                        <Link to="/"><img  src={logo}/></Link>
                    </div>
                    <div className={styles.searchBar}>
                      <input type="text" name="searchBar" id="searchBar" placeholder='Pesquise algum produto...'/>
                      <button onClick={() => setSearchModal(true)}>
                          <i class="ri-search-line"></i> 
                      </button>
                    </div>
                    {/* <form>
                        <input type="text" />
                        <button type="submit"><i className="ri-search-line"></i></button>
                    </form> */}
                    <div className={styles.headerBtns}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/about-us">Sobre Nós</Link></li>
                        {link}
                        <button className={styles.themeButton} onClick={() => changeTheme()}><i className={themeIcon}></i></button>
                        <button onClick={() => openCart()}><i className="ri-shopping-cart-2-fill"></i></button>
                    </div>
                </div>
                <div className="scroll-indicator-bar"></div>
            </header>
        </> 
    )


}