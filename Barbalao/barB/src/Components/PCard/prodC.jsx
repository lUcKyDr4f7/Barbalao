import styles from '../Css/styles.pcard_C.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import Hamburgao from '../../assets/popular-imgs/hamburgao.png';
export default function ProdC() {
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
    if (isOpen) {
        const scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.classList.add('lock-scroll');
    } else {
        const top = document.body.style.top;
        document.body.classList.remove('lock-scroll');
        document.body.style.top = '';
        // restaura a posição de rolagem
        const y = top ? parseInt(top) * -1 : 0;
        window.scrollTo(0, y);
    }
    }, [isOpen]);



    const increase = () => {
            setQuantity(quantity + 1);
    }
    const decrease = () => {
            setQuantity(quantity - 1);
    }
    return (
         <>
         {isOpen && (
         <section className={styles.screenBlur}>
            <div className={styles.productCard}>
                <div >
                <Carousel className={styles.carousel} showArrows={false} showThumbs={true} showStatus={false} swipeable={true} showIndicators={false}>
                    <div className={styles.imagemC}>
                        <img src={Hamburgao}/>
                    </div>
                    <div className={styles.imagemC}>
                        <img src={Hamburgao}/>
                    </div>
                </Carousel>
                </div>
                <div className={styles.productInfo}>
                    <h1>Hamburgão</h1>
                    <p className={styles.description}>Suculento hambúrguer artesanal preparado com pão brioche macio, blend de carne bovina 180g grelhado no ponto perfeito, coberto por queijo cheddar derretido, alface crocante, tomate fresco e molho especial da casa. Finalizado com um toque de cebola caramelizada que realça o sabor e transforma cada mordida em uma experiência única</p>
                    <p className={styles.price}>R$ 29,90</p>
                    <div class={styles.productBuy}>
                        <div class={styles.productQuantity}><button onClick={quantity > 1 && decrease}>-</button><span>{quantity}</span><button onClick={quantity < 10 && increase}>+</button></div>
                        <div class={styles.addCart}><button onClick={''}>Adicionar ao carrinho <i class="ri-shopping-cart-2-fill"></i></button></div>
                    </div>
                </div>
                <a className={styles.closeBtn} onClick={() => setIsOpen(false)}><i class="ri-close-line"></i></a>
            </div>
         </section>
         )}
        </>
    )
}