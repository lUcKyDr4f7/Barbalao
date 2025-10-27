import { useState, useEffect } from 'react';
import styles from '../Css/styles.cartItem.module.css';

export default function CartItem(props) {

    let tempCart= [...props.cart]
    function addItem() {
        tempCart[props.item[3]][0] ++;
        props.setCart(tempCart)
    }
    function subtractItem() {
        if(props.item[0]>1) {
            tempCart[props.item[3]][0] --;
            props.setCart(tempCart);
        } else {
            removeItem();
        }
    }
    function removeItem() {
        tempCart.splice(props.item[3], 1);
        for(let i=props.item[3]; i<tempCart.length; i++) { tempCart[i][3]--; }
        props.setCart(tempCart);
    }

    return(
        <>
            <div className={styles.cartItem} >
                <img src="/src/assets/popular-imgs/hamburgao.png" alt={props.item[1]} />
                <div className={styles.itemText}>
                    <h3>{props.item[1]}</h3>
                    <p>R${props.item[2].toFixed(2)}</p>
                </div>
                <div className={styles.itemAmount}>
                    <button onClick={() => subtractItem()}><i class="ri-subtract-fill"></i></button>
                        <h3>{props.item[0].toString().padStart(2, '0')}</h3>
                    <button onClick={() => addItem()}><i class="ri-add-line"></i></button>
                    <button onClick={() => removeItem()}>< i class="ri-delete-bin-line"></i></button>
                </div>
            </div>
        </>
    )
}