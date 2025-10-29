import { useState, useEffect } from 'react';
import styles from '../Css/styles.cartItem.module.css';
import { Products } from '../../assets/Data/Products';

export default function CartItem(props) {
    let item = Products[1]
    /* let tempCart= [...props.cart]
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
    } */

    return(
        <>
            <div className={styles.cartItem} >
                <img src={item['image']} alt={item['name']} />
                <div className={styles.itemText}>
                    <h3>{item['name']}</h3>
                    <p>R${item['valueWithoutD'].toFixed(2).replace('.', ',')}</p>
                </div>
                <div className={styles.itemAmount}>
                    <button /* onClick={() => subtractItem()} */><i class="ri-subtract-fill"></i></button>
                        <h3>{props.amount.toString().padStart(2, '0')}</h3>
                    <button /* onClick={() => addItem()} */><i class="ri-add-line"></i></button>
                    <button /* onClick={() => removeItem()} */>< i class="ri-delete-bin-line"></i></button>
                </div>
            </div>
        </>
    )
}