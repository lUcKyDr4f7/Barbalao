import { useState, useEffect, useContext } from 'react';
import { CirclePlus, CircleMinus, CircleX } from 'lucide-react';
import { ModalProdOpenCtx } from '../../Contexts/ModalOpenProvider/ModalOpenProvider';
import styles from './styles.CartItem.module.css';

export default function CartItem({id, item, qtdBtn}) {

    const { setSelectedProduct } = useContext(ModalProdOpenCtx);

    return(
        <div className={styles.cartItem} onClick={() => setSelectedProduct(item)}>
            
            {/* <img src={item.imagens[0]} alt={item.nome} /> */}

            <div className={styles.itemText}>
                <h2 className={styles.itemName}>{item.nome}</h2>
                {item.adicionais?.length>0 && <p className={styles.itemAdicionais}>Adicionais: {item.adicionais.map(a => a.nome)}</p>}
                <p className={styles.itemPrice}>R${parseFloat(item.preco).toFixed(2).replace('.', ',')}</p>
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