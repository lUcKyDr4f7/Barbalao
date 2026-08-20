import styles from './styles.CartItem.module.css';
import { useState, useEffect, useContext } from 'react';
import { CirclePlus, CircleMinus, CircleX } from 'lucide-react';
import { ModalProdOpenCtx } from '../../Contexts/ModalOpenProvider/ModalOpenProvider';
import { formatPrice } from '../../assets/Data/AllProducts.js';

export default function CartItem({id, item, qtdBtn}) {

    const { setSelectedProduct } = useContext(ModalProdOpenCtx);

    return(
        <div className={styles.cartItem} onClick={() => setSelectedProduct(item)}>
            
            {/* <img src={item.imagens[0]} alt={item.nome} /> */}

            <div className={styles.itemText}>
                <h2 className={styles.itemName}>{item.nome}</h2>
                {item.adicionais?.length>0 && <p className={styles.itemAdicionais}>Adicionais: {item.adicionais.map(a => a.nome).join(', ')}</p>}
                <p className={styles.itemPrice}>{formatPrice(item.preco * item.qtd)}</p>
            </div>
            <div className={styles.itemQuantity}>
                <button className={styles.itemBtn} onClick={e => qtdBtn(id, -1, e)}>
                    <CircleMinus />
                </button>
                <span className={styles.itemQtd}>{item.qtd}</span>
                <button className={styles.itemBtn} onClick={e => qtdBtn(id, 1, e)}>
                    <CirclePlus />
                </button>
                <button className={styles.itemBtn} onClick={e => qtdBtn(id, 0, e)}>
                    <CircleX />
                </button>
            </div>
        </div>
    )
}