import { useState, useEffect, useContext } from 'react';
import styles from './styles.DeliveryWarning.module.css';
import { CircleX } from 'lucide-react';
import Backdrop from '../Backdrop/Backdrop.jsx';

export default function DeliveryWarning({setIsDelivery, setShowDeliveryWarning}) {

    const [isClosing, setIsClosing] = useState(false);
    function closeModal() {
        setIsClosing(true);
        setTimeout(() => {
            setShowDeliveryWarning(false);
            setIsClosing(false);
        }, 400);
    }

    return(
        <>
        <Backdrop customClass={styles.backdrop} show={isClosing} close={() => closeModal()}>
            <div className={styles.deliveryWarning}>
                <h1 className={styles.dwTitle}>Delivery</h1>
                <p className={styles.dwInfo}>Entregamos somente para a cidade de Águas de Lindóia</p>
                <p className={styles.dwInfo}>O valor da entrega é fixo de R$2,00</p>
                <div className={styles.dwBtns}>
                    <button className={styles.dwConfirm} onClick={() => {setIsDelivery(true); closeModal()}}>Confirmar</button>
                    <button className={styles.dwCancel} onClick={() => closeModal()}>Cancelar</button>
                </div>
            </div>
        </Backdrop>
        </>
    )
}
