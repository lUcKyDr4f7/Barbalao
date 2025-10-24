import { useState, useEffect } from 'react';
import styles from '../Css/styles.cartItem.module.css';

export default function CartItem(props) {

    let tempCart= [...props.cart]
    function addItem() {
        tempCart[props.item[2]][0] ++;
        props.setCart(tempCart)
    }
    function subtractItem() {
        if(props.item[0]>1) {
            tempCart[props.item[2]][0] --;
        } else {
            tempCart.splice(props.item[2], 1);
            for(let i=props.item[2]; i<tempCart.length; i++) { tempCart[i][2]--; }
        }
        props.setCart(tempCart);
    }

    return(
        <>
            <div className={styles.cartItem} >
                <img src="/src/assets/popular-imgs/hamburgao.png" alt={props.item[1]} />
                <h3>{props.item[1]}</h3>
                <div className={styles.itemAmount}>
                    <button onClick={() => subtractItem()}>-</button>
                    <h3>{props.item[0]}</h3>
                    <button onClick={() => addItem()}>+</button>
                </div>
            </div>
        </>
    )
}