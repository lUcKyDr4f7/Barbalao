import styles from '../Css/styles.pcard_S.module.css'
import Hamburgao from '../../assets/popular-imgs/hamburgao.png'
export default function ProdCS(){
    return(
        <>
            <div className={`${styles.cardWithModal} ${styles.airJordan}`}>
                <div className={styles.productCard}>
                    <div className={styles.productImg}>
                        <img src={Hamburgao} alt="" />
                    </div>
                    <div className={styles.productInfo}>
                        <h4 className={styles.info}>Air Jordan 4 Oxidized Green</h4>
                        <ul className={`${styles.productStars} ${styles.info}`}></ul>
                        <div className={`${styles.productOptions} ${styles.info}`}>
                            <div className={`${styles.option} ${styles.info}`}>
                                <p>Branco / Verde</p>
                            </div>
                            <div className={`${styles.option} ${styles.info}`}>
                                <p><span>9</span> Tamanhos</p>
                            </div>
                        </div>
                        <h5 className={`${styles.normalPrice} ${styles.info}`}><s>R$ 1399,99</s></h5>
                        <h4 className={`${styles.priceWithDescount} ${styles.info}`}>R$ 500,00</h4>
                        <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
