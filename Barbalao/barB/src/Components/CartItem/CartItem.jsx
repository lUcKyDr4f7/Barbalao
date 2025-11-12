import { useState, useEffect } from 'react';
import styles from '../Css/styles.cartItem.module.css';
import { Products } from '../../assets/Data/Products';
import { getImagePath } from '../utils/pathP.jsx';
export default function CartItem(props) {
    let item = Products[props.item]
    let tempCart= {...props.cart}
    function addItem() {
        tempCart[props.item] ++;
        props.setCart(tempCart)
        localStorage.setItem("cart", JSON.stringify(tempCart));
        localStorage.setItem("totalValue", Number(localStorage.getItem("totalValue")) + item.valueWithD); 
    }
    function subtractItem() {
        if(tempCart[props.item]>1) {
            tempCart[props.item] --;
            props.setCart(tempCart);
            localStorage.setItem("cart", JSON.stringify(tempCart));
            localStorage.setItem("totalValue", Number(localStorage.getItem("totalValue")) - item.valueWithD); 
        } else {
            removeItem();
        }
    }
    function removeItem() {
        delete tempCart[props.item]
        props.setCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart));
        localStorage.setItem("totalValue", Number(localStorage.getItem("totalValue")) - item.valueWithD * tempCart[props.item]); 
    }

    return(
        <>
            <div key={props.item} className={styles.cartItem} >
                <img src={getImagePath(item)} alt={item['name']} />
                <div className={styles.itemText}>
                    <h3>{item['name']}</h3>
                    <p>R${item.value.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className={styles.itemAmount}>
                    <button onClick={() => subtractItem()}><i className="ri-subtract-fill"></i></button>
                        <h3>{props.amount.toString().padStart(2, '0')}</h3>
                    <button onClick={() => addItem()}><i className="ri-add-line"></i></button>
                    <button onClick={() => removeItem()}>< i className="ri-delete-bin-line"></i></button>
                </div>
            </div>
        </>
    )
}