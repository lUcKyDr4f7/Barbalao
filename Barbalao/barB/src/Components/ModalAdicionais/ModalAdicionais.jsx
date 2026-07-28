import styles from './styles.ModalAdicionais.module.css';
import { useState } from 'react';
/* import { Carousel } from "react-responsive-carousel"; */
import { CircleX } from 'lucide-react';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Swiper from '../Swiper/Swiper.jsx';

/* provavelmente excluir essa pasta */

export default function ModalAdicionais({open, adicionais, selected, setSelected, priceId}) {

    const [isClosing, setIsClosing] = useState(false);
    function closeModal() {
        setIsClosing(true);
        setTimeout(() => {
            open(false);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' cartOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    /* const [selectionAdicionais, setSelectionAdicionais] = useState(false); */

    function checkAdicional(adicional) {
        let s = {...selected};
        if (s[adicional.nome]) {
            delete s[adicional.nome]
        } else {
            s[adicional.nome] = adicional;
        }
        setSelected(s);
        console.log(selected);
    }

    function getPrice(adicional) {
        let price = adicional.categ_preco;
        price = price[priceId[0]]||price[priceId[1]];
        return price?parseFloat(price).toFixed(2).replace('.', ','):'?,??'
    }

    return (
        <>
        {/* <Backdrop customClass={styles.backdrop} show={isClosing} close={() => closeModal()}> */}
            <div className={styles.modalAdicionais} onClick={e => e.stopPropagation()}>
                <h2 className={styles.titleAdicionais}>Adicionais</h2>
                <div className={styles.adicionais}>
                {adicionais.map(a => (
                    <div className={`${styles.adicional} ${selected[a.nome]?styles.selected:''}`} onClick={() => checkAdicional(a)}>
                        {/* <div className={`${styles.checkbox} ${selected[a.nome]?styles.checked:''}`}></div> */}
                        <div className={styles.infoAdicional}>
                            <p>{a.nome}</p>
                            <p>+R${getPrice(a)}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div className={styles.btnDiv}>
                    <button className={styles.addCart}>Voltar</button>
                    <button className={styles.addCart} onClick={() => setSelectionAdicionais(true)}>
                        Adicionar ao carrinho 
                        <i className="ri-shopping-cart-2-fill"></i>
                    </button>
                </div>
                <CircleX className={styles.closeBtn} onClick={() => closeModal()} />
            </div>
        {/* </Backdrop> */}
        </>
    )
}
