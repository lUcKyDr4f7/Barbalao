import { useState, useEffect } from 'react';
import styles from '../Css/styles.cart.module.css';
import CartItem from '../CartItem/CartItem';

localStorage.setItem("theme", localStorage.getItem("theme")?localStorage.getItem("theme").replaceAll(' cartOpen', ''):localStorage.getItem("theme"));

export default function Cart(props) {

    const [isClosing, setIsClosing] = useState(false)
    const Products = JSON.parse(localStorage.getItem("products")) || {};
    
    function closeCart() {
        setIsClosing(true)
        setTimeout(() => {
            props.setIsCartOpen(false);
            setIsClosing(false);
        }, 400)
        let theme = localStorage.getItem("theme").replaceAll(' cartOpen', '')
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));
    const [totalValue, setTotalValue] = useState(0);
    let oldCart = {};

    if(!cartItems) {
        setCartItems({});
        localStorage.setItem("cart", JSON.stringify({}))
    }

    function calcTotal() {
        let total = 0;
        Object.keys(cartItems).map( key => {
            if(Products[key]) {
                total += Products[key].preco * cartItems[key];
            }
        })
        setTotalValue(total);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
        calcTotal();
    }, [cartItems]);

    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    function createLinkWhatsApp() {
        /* Por enquanto o número é o do Oséias */
        let link
        if(Object.keys(cartItems).length != 0) {
            link = "https://wa.me/558182090299?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%3A";
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
        return link;
    }

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cart")));
        if(props.isCartOpen) createLinkWhatsApp();
    }, [props.isCartOpen]);

    useEffect(() => {
        createLinkWhatsApp();
        calcTotal();
    }, [cartItems])

    function order() {
        let link = createLinkWhatsApp();
        localStorage.setItem('oldCart', cartItems)
        localStorage.setItem('cart', {})
        window.open(link)
    }

    if(props.isCartOpen){
        return(
            <>
                <div className={isClosing?styles.outsideClosingCart:styles.outsideCart} onClick={ () => closeCart() }></div>
                <div className={isClosing?styles.closingCart:styles.cart} /* onClick={ () => closeCart() } */>
                    <li>Carrinho</li>
                    <div className={styles.cartTabs}></div>
                    <div className={styles.cartList/* Object.keys(cartItems).length<8?styles.cartList:styles.cartListBig */}>{
                        Object.keys(cartItems).length != 0?
                        Object.keys(cartItems).map( key => {
                            return <CartItem key={key} cart={cartItems} setCart={setCartItems} item={key} amount={cartItems[key]} />;
                        }):<p>O carrinho está vazio</p>
                    }</div>
                    { Object.keys(cartItems).length != 0 && <h2 className={styles.totalValue}>Total: R${totalValue.toFixed(2).replace('.', ',')}</h2> }
                    {/* { Object.keys(cartItems).length != 0 && <a href={linkWhatsapp} target="_blank"><button className={styles.whatsappBtn}>Fazer Pedido</button></a>} */}
                    { Object.keys(cartItems).length != 0 && <button onClick={() => order() } className={styles.whatsappBtn}>Fazer Pedido</button>}
                </div>
            </>
        ) 
    }
}
