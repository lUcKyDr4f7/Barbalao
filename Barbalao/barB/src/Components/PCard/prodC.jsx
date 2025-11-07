import styles from '../Css/styles.pcard_C.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState} from 'react';
import { Carousel } from "react-responsive-carousel";

export default function ProdC({name, price, img, descricao, setState, state}) {

    console.log(descricao)
    console.log(state)
    
    const [quantity, setQuantity] = useState(1);
    const increase = () => {
            setQuantity(quantity + 1);
    }
    const decrease = () => {
            setQuantity(quantity - 1);
    }

    function addCart() {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if(!cart) {
            cart = {};
        }
        if(cart[state.id_prod]) {
            cart[state.id_prod] += quantity;
        } else {
            cart[state.id_prod] = quantity;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
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
                    <p className={styles.description}>{descricao}</p>
                    <p className={styles.price}>R$ {price}</p>
                    <div className={styles.productBuy}>
                        <div className={styles.productQuantity}>
                            <button onClick={() => {if(quantity > 1){ decrease() }}}>-</button>
                            <span>{quantity}</span>
                            <button onClick={quantity < 10 && increase}>+</button>
                        </div>
                        <div className={styles.addCart}>
                            <button onClick={() => addCart()}>
                                Adicionar ao carrinho 
                                <i className="ri-shopping-cart-2-fill">
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <a className={styles.closeBtn} onClick={() => setState(null)}><i className="ri-close-line"></i></a>
            </div>
         </section>
        </>
    )
}
