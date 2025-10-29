import styles from '../Css/styles.pcard_C.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState} from 'react';
import { Carousel } from "react-responsive-carousel";
export default function ProdC({name, price, img, setState, state}) {
    console.log(state)
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
                <Carousel className={styles.carousel} showArrows={false} showThumbs={true} showStatus={false} swipeable={true} showIndicators={false}>
                    <div className={styles.imagemC}>
                        <img src={img}/>
                    </div>
                    <div className={styles.imagemC}>
                        <img src={img}/>
                    </div>
                </Carousel>
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.description}>Suculento hambúrguer artesanal preparado com pão brioche macio, blend de carne bovina 180g grelhado no ponto perfeito, coberto por queijo cheddar derretido, alface crocante, tomate fresco e molho especial da casa. Finalizado com um toque de cebola caramelizada que realça o sabor e transforma cada mordida em uma experiência única</p>
                    <p className={styles.price}>R$ {price}</p>
                    <div class={styles.productBuy}>
                        <div class={styles.productQuantity}><button onClick={quantity > 1 && decrease}>-</button><span>{quantity}</span><button onClick={quantity < 10 && increase}>+</button></div>
                        <div class={styles.addCart}><button onClick={''}>Adicionar ao carrinho <i class="ri-shopping-cart-2-fill"></i></button></div>
                    </div>
                </div>
                <a className={styles.closeBtn} onClick={() => setState(null)}><i class="ri-close-line"></i></a>
            </div>
         </section>
        </>
    )
}