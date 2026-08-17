import { useState, useEffect, createContext, useContext } from 'react';
import { getProdFromId } from '../../assets/Data/AllProducts.js';
import { getAdicionais } from '../../assets/Data/AllAdicionais.js';
import { AllCategories } from '../../assets/Data/AllCategories.js';
import { CartOpenCtx } from '../ModalOpenProvider/ModalOpenProvider.jsx';

export const CartCtx = createContext();
export const OldCartCtx = createContext();
export const AddCartCtx = createContext();

export default function CartProvider({children}) {

    function createCart(preCart) {
        Object.keys(preCart).map(i => {
            let product = {...getProdFromId(i.includes("+")?i.split("+", 1):`${i}`)};
            product.qtd = preCart[i];
            let adicionais = i.includes("+")?i.split("+").slice(1).map(a => Number(a)):'';
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

    const {setIsCartOpen} = useContext(CartOpenCtx);

    function addCart(prod, quantity=1, adicionais={}) {

        let id = `${prod.id_prod}`;
        Object.keys(adicionais).sort().map(key => {
            id += '+' + adicionais[key].id_add;
        });
        console.log(adicionais)

        let c = {...cart};

        if(c[id]) {
            c[id] = {...c[id]}
            c[id].qtd += quantity;
        } else {
            let product = {...prod};
            product.qtd = quantity;
            product.adicionais = Object.values(adicionais);
            c[id] = product;
        }

        setCart(c);
        setIsCartOpen(true);
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
                <AddCartCtx.Provider value={{addCart}}>
                    {children}
                </AddCartCtx.Provider>
            </CartCtx.Provider>
        </OldCartCtx.Provider>
    )
}