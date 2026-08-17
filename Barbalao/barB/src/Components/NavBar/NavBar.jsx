import styles from './styles.NavBar.module.css';
import logo from '../../assets/BarB.png';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/CartP.jsx'
import { useAuth } from '../../Routes/AuthContext.jsx';
import { CartCtx } from '../../Contexts/CartProvider/CartProvider.jsx';
import { CartOpenCtx } from '../../Contexts/ModalOpenProvider/ModalOpenProvider.jsx';

export default function NavB({setSearchModal, searchText, setSearchText}) {

  /* Exibe botão painel se autenticado */
  const {authenticated} = useAuth()
  const [admBtn, setadmBtn] = useState(null)
  useEffect(() => {
    if (authenticated) {
      setadmBtn(<li><a href="/adm">ADM</a></li>);
    } else {
      setadmBtn(null);
    }
  }, []);

  /* inicializa tema */
  let currentTheme = localStorage.getItem("theme");
  
  /* define o icone do tema */
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

  const {isCartOpen, setIsCartOpen} = useContext(CartOpenCtx);
  const [showTextBtns, setShowTextBtns] = useState(false);
  
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
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
  
  let [ cartItems ] = useContext(CartCtx);
      
  return (
    <>
    {/*<!--========== Header ==========-->*/}
      <header className={styles.header}>
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link to="/" onClick={() => Location.reload()}><img  src={logo}/></Link>
          </div>
          {<div className={styles.searchBar}>
            <input type="text" value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            name="searchBar" 
            id="searchBar" 
            placeholder='Pesquise algum produto...'/>
            <button onClick={() => {
              if (searchText) {
                setSearchModal(true)
              } else {
                alert("Pesquise algo primeiro");
              }
              }}>
                <i className="ri-search-line"></i> 
            </button>
          </div>}
            {<div className={`${styles.textBtns} ${showTextBtns?styles.open:''}`}>
              <Link to="/" onClick={() => Location.reload()}>Início</Link>
              <Link to="/about-us" onClick={() => Location.reload()}>Sobre Nós</Link>
              {admBtn}
            </div>}
          <div className={styles.headerBtns}>
            {/* <button>< i class="ri-search-line"></i></button> */}
            <button className={`${styles.menuBtn} ${showTextBtns?styles.open:''}`} onClick={() => setShowTextBtns(!showTextBtns)}>{showTextBtns?< i class="ri-close-line"></i>:< i class="ri-menu-line"></i>}</button>
            <button className={styles.themeButton} onClick={() => changeTheme()}><i className={themeIcon}></i></button>
            <button className={styles.cartBtn} onClick={() => setIsCartOpen(!isCartOpen)}>
              {(Object.keys(cartItems || {}).length > 0)&&<div className={styles.hasItem}></div>}
              <i className="ri-shopping-cart-2-fill"></i>
            </button>
          </div>
        </div>
        {/* <div className="scroll-indicator-bar"></div> */}
      </header>
    </> 
  )
}





