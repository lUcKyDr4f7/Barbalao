import styles from '../Css/styles.pcard_C.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import Hamburgao from '../../assets/popular-imgs/hamburgao.png';
export default function ProdC() {
    const [quantity, setQuantity] = useState(1);
    const increase = () => {
            setQuantity(quantity + 1);
    }
    const decrease = () => {
            setQuantity(quantity - 1);
    }
    return (
         <>
         <section className={styles.screenBlur}>
            <div className={styles.productCard}>
                <div >
                <Carousel className={styles.carousel} showArrows={true} showThumbs={true} showStatus={false} swipeable={true} showIndicators={false}>
                    <div className={styles.imagemC}>
                        <img src={Hamburgao}/>
                        <p>1</p>
                    </div>
                    <div className={styles.imagemC}>
                        <img src={Hamburgao}/>
                        <p>2</p>
                    </div>
                </Carousel>
                </div>
                <div>
                    <h1>Title</h1>
                    <p>Description</p>
                    <div class={styles.productBuy}>
                        <div class="product-quantity"><button class="decrease-btn" onClick={quantity > 1 && decrease}>-</button><span class="quantity">{quantity}</span><button class="increase-btn" onClick={quantity < 10 && increase}>+</button></div>
                        <div class="add-to-cart-btn border-btn">Adicionar ao carrinho <i class="ri-shopping-cart-2-fill"></i></div>
                    </div>
                </div>
                <a className={styles.closeBtn}><i class="ri-close-line"></i></a>
            </div>
         </section>
        </>
    )
}