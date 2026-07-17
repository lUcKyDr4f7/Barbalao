import { useState, useEffect } from 'react';
import styles from './styles.Backdrop.module.css';

export default function Cart(props) {

    /* const [isClosing, setIsClosing] = useState(false);
    function closeCart() {
        setIsClosing(true);
        setTimeout(() => {
            props.setIsCartOpen(false);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' cartOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    } */

    return(
        <>
            <div style={{zIndex: props.zIndex}}
                    className={`${styles.backdrop} ${props.show?styles.fadeOut:''}`}
                    onClick={ () => props.close() }>
                {props.children}
            </div>
        </>
    )
}
