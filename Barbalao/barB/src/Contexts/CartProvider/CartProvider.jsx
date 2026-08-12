import { useState, useEffect, createContext} from 'react';
import { getProdFromId } from '../../assets/Data/AllProducts.js';
import { getAdicionais } from '../../assets/Data/AllAdicionais.js';
import { AllCategories } from '../../assets/Data/AllCategories.js';

export const CartCtx = createContext();
export const OldCartCtx = createContext();

export default function CartProvider({children}) {

    function createCart(preCart) {
        Object.keys(preCart).map(i => {
            let product = getProdFromId(i.includes("+")?i.split("+", 1):i);
            product.qtd = preCart[i];
            let adicionais = i.includes("+")?i.split("+").slice(1):'';
            if(adicionais) {
                product.adicionais = getAdicionais(product.categoria, adicionais)
            }
            preCart[i] = product;
        });
        return preCart;
    }

    if(!localStorage.getItem("cart")) {
        localStorage.setItem('cart', JSON.stringify({}));
    }

    const [cart, setCart] = useState(createCart(JSON.parse(localStorage.getItem('cart'))));

    /* if(!cart) {
        setCartItems({});
        localStorage.setItem("cart", JSON.stringify({}));
    } */
    if(!localStorage.getItem("oldCart")) {
        localStorage.setItem('oldCart', JSON.stringify({}));
    }

    const [isOldCart, setIsOldCart] = useState(false);

    useEffect(() => {
        let shortCart = Object.keys(cart).reduce((acc, i) => {
            acc[i] = cart[i].qtd;
            return acc;
        }, {})
        localStorage.setItem(isOldCart?"oldCart":"cart", JSON.stringify(shortCart));
    }, [cart]);
        
    useEffect(() => {
        if (isOldCart) {
            setCart(createCart(JSON.parse(localStorage.getItem('oldCart'))));
        }
        else {
            setCart(createCart(JSON.parse(localStorage.getItem('cart'))));
        }
    }, [isOldCart]);

    return (
        <OldCartCtx.Provider value={[isOldCart, setIsOldCart]}>
            <CartCtx.Provider value={[cart, setCart]}>
            {children}
            </CartCtx.Provider>
        </OldCartCtx.Provider>
    )
}