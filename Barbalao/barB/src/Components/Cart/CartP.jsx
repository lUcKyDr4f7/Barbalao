import { useState, useEffect, useContext } from 'react';
import styles from './styles.cart.module.css';
import CartItem from '../CartItem/CartItem';
import Backdrop from '../Backdrop/Backdrop';
import { CircleX } from 'lucide-react';
import { AllProducts } from '../../assets/Data/AllProducts.js';
import { CartCtx, OldCartCtx } from '../../Contexts/CartProvider/CartProvider.jsx';

localStorage.setItem("theme", localStorage.getItem("theme")?localStorage.getItem("theme").replaceAll(' modalOpen', ''):localStorage.getItem("theme"));

export default function Cart(props) {

    //const Products = JSON.parse(localStorage.getItem("products")) || {};

    const [isClosing, setIsClosing] = useState(false);
    function closeCart() {
        setIsClosing(true);
        setTimeout(() => {
            props.setIsCartOpen(false);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' modalOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    /* const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));
    if(!cartItems) {
        setCartItems({});
        localStorage.setItem("cart", JSON.stringify({}));
    }
    if(!localStorage.getItem("oldCart")) {
        localStorage.setItem('oldCart', JSON.stringify({}));
    } */
    const [cartItems, setCartItems, isOldCart, setIsOldCart] = [...useContext(CartCtx), ...useContext(OldCartCtx)];

    function changeQtdItem(item, change, e) {
        e.stopPropagation();
        let tempCart= {...cartItems};
        if(change) {
            tempCart[item].qtd += change;
            if(!tempCart[item].qtd) {
                delete tempCart[item];
            }
        } else {
            delete tempCart[item];
        }
        setCartItems(tempCart);
    }

    //const [isOldCart, setIsOldCart] = useState(false);
    const [isDelivery, setIsDelivery] = useState(false);
    const [deliveryWarning, setDeliveryWarning] = useState(false);

    const [totalValue, setTotalValue] = useState(0);
    function calcTotal() {
        let total = 0;
        Object.values(cartItems).map( item => {
            total += item.preco * item.qtd;
            if(item.adicionais) {
                
            }
            /* if(Products[key]) {
                total += Products[key].preco * cartItems[key];
            } */
        })
        if(isDelivery) {
            total+=2;
        }
        setTotalValue(total);
    }

    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    function createLinkWhatsApp() {
        let link;
        if(Object.keys(cartItems).length != 0) {
            link = `https://wa.me/5519996829711?text=Ol%C3%A1%2C%20gostaria%20de%20pedir${isDelivery?"para%20delivery":''}%3A`;
            let replacements = [[' ', '$', '+', ',', '/', ':'], ["%20", "%24", "%2B", "%2C", "%2F", "%3A"]];
            Object.keys(cartItems).map( key => {
                /* const item = Products[key];
                if (!item) return;
                link += "%0A" + item['nome'] + '%20x' + cartItems[key]; */
            })
            for(let i=0; i<6; i++) {
                if (link.includes(replacements[0][i])) link.replace(replacements[0][i], replacements[1][i]);
            }
        }
        setLinkWhatsapp(link);
    }

    useEffect(() => {
        //localStorage.setItem(isOldCart?"oldCart":"cart", JSON.stringify(cartItems));
        createLinkWhatsApp();
        calcTotal();
    }, [cartItems]);
    
    useEffect(() => {
        /* if(isOldCart) { */
            setIsOldCart(false);
        /* } else {
            setCartItems(JSON.parse(localStorage.getItem("cart")));
        } */
    }, [props.isCartOpen]);
    
    useEffect(() => {
        createLinkWhatsApp();
        calcTotal();
    }, [isDelivery]);

    function order() {
        /* let link = */ createLinkWhatsApp();
        if(!isOldCart) {
            localStorage.setItem('oldCart', JSON.stringify(cartItems));
            localStorage.setItem('cart', JSON.stringify({}));
        }
        closeCart();
        window.open(linkWhatsapp);
    }

    if(props.isCartOpen){
        return(
            <>
            <Backdrop customClass={deliveryWarning?styles.backdrop1550:styles.backdrop1500} show={isClosing}
                close={ () => deliveryWarning? setDeliveryWarning(false):closeCart() }>
                <div className={`${styles.cart} ${isClosing?styles.closingCart:''}`} onClick={e => e.stopPropagation()}>
                    <h1 className={styles.cartTitle}>
                        {/* <button> */}
                            <CircleX className={styles.closeCartBtn} onClick={ () => closeCart() }/>
                        {/* </button> */}
                        Carrinho
                    </h1>
                    <div className={styles.cartContainer}>
                        {localStorage.getItem('oldCart')?.length>2?
                            <div className={styles.cartTabs}>
                                <p className={isOldCart?styles.activeTab:styles.inactiveTab}
                                    onClick={() => setIsOldCart(true)}>Anterior</p>
                                <p className={isOldCart?styles.inactiveTab:styles.activeTab}
                                    onClick={() => setIsOldCart(false)}>Atual</p>
                            </div>
                        :''}
                        <div className={styles.cartList}>{
                            Object.keys(cartItems).length?
                            Object.keys(cartItems).map( i => 
                                <CartItem key={i} id={i} item={cartItems[i]} qtdBtn={changeQtdItem} />
                            ):<p>O carrinho está vazio</p>
                        }</div>
                    </div>
                    <li className={styles.totalValue}>Total: R${totalValue.toFixed(2).replace('.', ',')}</li>
                    <label className={styles.delivery}>
                        <input type="checkbox" name="delivery" checked={isDelivery}
                                onChange={() => isDelivery?setIsDelivery(false):setDeliveryWarning(true)}/> 
                        Delivery
                    </label>
                    <button disabled={Object.keys(cartItems).length == 0}
                            onClick={() => order() } className={styles.whatsappBtn}>Fazer Pedido</button>
                </div>
                {deliveryWarning && <div className={styles.deliveryWarning}>
                    <h1 className={styles.dwTitle}>Delivery</h1>
                    <p className={styles.dwInfo}>Entregamos somente para a cidade de Águas de Lindóia</p>
                    <p className={styles.dwInfo}>O valor da entrega é fixo de R$2,00</p>
                    <div className={styles.dwBtns}>
                        <button className={styles.dwConfirm} onClick={() => {setIsDelivery(true); setDeliveryWarning(false)}}>Confirmar</button>
                        <button className={styles.dwCancel} onClick={() => setDeliveryWarning(false)}>Cancelar</button>
                    </div>
                </div>}
            </Backdrop>
            </>
        ) 
    }
}
