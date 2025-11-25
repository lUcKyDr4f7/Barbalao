import { useState, useEffect } from 'react';
import styles from '../Css/styles.cartItem.module.css';

export default function CartItem(props) {
    const Products = JSON.parse(localStorage.getItem("products")) || {};

    let item = Products[props.item]
    let tempCart= {...props.cart}

    if (!item) {
        console.warn(`Produto com ID ${props.item} não encontrado em Products`);
        return null; // não renderiza nada se o item não existe
    }

    /* function updateCart(newCart) {
        props.setCart({ ...newCart });
    } */

    function addItem() {
        tempCart[props.item] ++;
        props.setCart(tempCart)
        /* localStorage.setItem("cart", JSON.stringify(tempCart));
        localStorage.setItem("totalValue", Number(localStorage.getItem("totalValue")) + item.valueWithD); */
        /* updateCart(temp); */
    }
    function subtractItem() {
        if(tempCart[props.item]>1) {
            tempCart[props.item] --;
            props.setCart(tempCart);
            /* localStorage.setItem("cart", JSON.stringify(tempCart));
            localStorage.setItem("totalValue", Number(localStorage.getItem("totalValue")) - item.valueWithD); */
            /* updateCart(temp); */
        } else {
            removeItem();
        }
    }
    function removeItem() {
        delete tempCart[props.item]
        props.setCart(tempCart);
        /* localStorage.setItem("cart", JSON.stringify(tempCart));
        localStorage.setItem("totalValue", Number(localStorage.getItem("totalValue")) - item.valueWithD * tempCart[props.item]); */
    }

    return(
        <>
            <div key={props.item} className={styles.cartItem} >
                
                <img src={item['imagem']} alt={item['nome']} />

                <div className={styles.itemText}>
                    <h3>{item['nome']}</h3>
                    <p>R${item['preco'].toFixed(2).replace('.', ',')}</p>
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