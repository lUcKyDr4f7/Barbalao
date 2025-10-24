import { useState, useEffect } from 'react';
import styles from '../Css/styles.cart.module.css';
import CartItem from '../CartItem/CartItem';

export default function Cart(props) {

   const [isClosing, setIsClosing] = useState(false)
   
   function closeCart() {
      setIsClosing(true)
      setTimeout(() => {
         props.setIsCartOpen(false);
         setIsClosing(false);
      }, 400)
      localStorage.setItem("theme", localStorage.getItem("theme").replaceAll(' cartOpen', ''));
   }

   const [cartItems, setCartItems] = useState([[1, "Hambúrguer", 0], [2, "Coca-Cola", 1], [3, "Água1", 2], [3, "Água2", 3], [3, "Água3", 4], [3, "Água4", 5], [3, "Água5", 6], [3, "Água6", 7]]);
   const [linkWhatsapp, setLinkWhatsapp] = useState('');
   function createLinkWhatsApp() {
      /* Por enquanto o número é o do Oséias */
      let link = "https://wa.me/558182090299?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%3A";
      let replacements = [[' ', '$', '+', ',', '/', ':'], ["%20", "%24", "%2B", "%2C", "%2F", "%3A"]];
      for (let i=0; i<cartItems.length; i++) link += "%0A" + cartItems[i][0] + 'x%20' + cartItems[i][1];
      for(let i=0; i<30; i++) {
         if (link.includes(replacements[0][i])) link.replace(replacements[0][i], replacements[1][i]);
      }
      setLinkWhatsapp(link);
   }

   useEffect(() => {
      if(props.isCartOpen && cartItems) createLinkWhatsApp();
   }, [props.isCartOpen]);

   if(props.isCartOpen){
      return(
         <>
            <div className={isClosing?styles.outsideClosingCart:styles.outsideCart} onClick={ () => closeCart() }></div>
            <div className={isClosing?styles.closingCart:styles.cart} /* onClick={ () => closeCart() } */>
               <li>Carrinho</li>
               <div className={cartItems.length<8?styles.cartList:styles.cartListBig}>{
                  cartItems.map( cartItem => {
                     return <CartItem cart={cartItems} setCart={setCartItems} item={cartItem}/>;
                  })
               }</div>
               <a href={linkWhatsapp} target="_blank"><button className={styles.whatsappBtn}>Ir para Whatsapp</button></a>
            </div>
         </>
      ) 
   }
}