import { useState, useEffect } from 'react';
import styles from '../Css/styles.cart.module.css';
import CartItem from '../CartItem/CartItem';

localStorage.setItem("theme", localStorage.getItem("theme")?localStorage.getItem("theme").replaceAll(' cartOpen', ''):localStorage.getItem("theme"));

export default function Cart(props) {

    const Products = JSON.parse(localStorage.getItem("products")) || {};

    const [isClosing, setIsClosing] = useState(false);
    function closeCart() {
        setIsClosing(true);
        setTimeout(() => {
            props.setIsCartOpen(false);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' cartOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));
    if(!cartItems) {
        setCartItems({});
        localStorage.setItem("cart", JSON.stringify({}));
    }
    if(!localStorage.getItem("oldCart")) {
        localStorage.setItem('oldCart', JSON.stringify({}));
    }
    const [isOldCart, setIsOldCart] = useState(false);
    const [isDelivery, setIsDelivery] = useState(false);

    const [totalValue, setTotalValue] = useState(0);
    function calcTotal() {
        let total = 0;
        Object.keys(cartItems).map( key => {
            if(Products[key]) {
                total += Products[key].preco * cartItems[key];
            }
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
            link = "https://wa.me/5519996829711?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%3A";
            let replacements = [[' ', '$', '+', ',', '/', ':'], ["%20", "%24", "%2B", "%2C", "%2F", "%3A"]];
            Object.keys(cartItems).map( key => {
                const item = Products[key];
                if (!item) return;
                link += "%0A" + item['nome'] + '%20x' + cartItems[key];
            })
            for(let i=0; i<6; i++) {
                if (link.includes(replacements[0][i])) link.replace(replacements[0][i], replacements[1][i]);
            }
        }
        setLinkWhatsapp(link);
    }

    useEffect(() => {
        localStorage.setItem(isOldCart?"oldCart":"cart", JSON.stringify(cartItems));
        createLinkWhatsApp();
        calcTotal();
    }, [cartItems]);
    
    useEffect(() => {
        if(isOldCart) {
            setIsOldCart(false);
        } else {
            setCartItems(JSON.parse(localStorage.getItem("cart")));
        }
    }, [props.isCartOpen]);
    
    useEffect(() => {
        if (isOldCart) {
            setCartItems(JSON.parse(localStorage.getItem('oldCart')));
        }
        else {
            setCartItems(JSON.parse(localStorage.getItem('cart')));
        }
    }, [isOldCart]);
    
    useEffect(() => {
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
                <div className={isClosing?styles.outsideClosingCart:styles.outsideCart} onClick={ () => closeCart() }></div>
                <div className={isClosing?styles.closingCart:styles.cart}>
                    <li><button className={styles.closeCartBtn} onClick={ () => closeCart() }>< i class="ri-close-fill"></i></button>Carrinho</li>
                    <div>{JSON.parse(localStorage.getItem('oldCart')) != {} && <div className={styles.cartTabs}>
                        <p className={isOldCart?styles.activeTab:styles.inactiveTab} onClick={() => setIsOldCart(true)}>Anterior</p>
                        <p className={isOldCart?styles.inactiveTab:styles.activeTab} onClick={() => setIsOldCart(false)}>Atual</p>
                    </div>}
                    <div className={styles.cartList}>{
                        Object.keys(cartItems).length != 0?
                        Object.keys(cartItems).map( key => {
                            return <CartItem key={key} cart={cartItems} setCart={setCartItems} item={key} amount={cartItems[key]} />;
                        }):<p>O carrinho está vazio</p>
                    }</div></div>
                    <li className={styles.totalValue}>Total: R${totalValue.toFixed(2).replace('.', ',')}</li>
                    <label className={styles.delivery}><input type="checkbox" name="delivery" checked={isDelivery} onChange={() => setIsDelivery(!isDelivery)}/> Delivery</label>
                    <button disabled={Object.keys(cartItems).length == 0} alt={`Fazer pedido em ${linkWhatsapp}`} onClick={() => order() } className={styles.whatsappBtn}>Fazer Pedido</button>
                </div>
            </>
        ) 
    }
}
