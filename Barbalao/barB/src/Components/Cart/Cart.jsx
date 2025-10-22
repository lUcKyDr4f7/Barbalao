import { useState, useEffect } from 'react';
import styles from '../Css/styles.cart.module.css';

export default function Cart(props) {

   const [isClosing, setIsClosing] = useState(false)
   
   function closeCart() {
      setIsClosing(true)
      setTimeout(() => {
         props.setIsCartOpen(false);
         setIsClosing(false);
      }, 400)
   }

   if(props.isCartOpen){
      return(
         <>
            <div className={isClosing?styles.outsideClosingCart:styles.outsideCart} onClick={ () => closeCart() }></div>
            <div className={isClosing?styles.closingCart:styles.cart} onClick={ () => closeCart() }>
               <li>Carrinho</li>
               <div className={styles.cartList}>{
                  props.cartList.map( cartItem => {
                     <div className={styles.cartItem} ></div>
                  })
               }</div>
               <button>Ir para Whatsapp</button>
            </div>
         </>
      ) 
   }
}