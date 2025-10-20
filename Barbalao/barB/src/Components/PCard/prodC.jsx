import styles from '../Css/styles.pcard_C.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
export default function ProdC() {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if(quantity > 11){
            setQuantity(quantity + 1);
        }
    }
    const decrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }
    return (
         <>
         <section className=''>
            <div className=''>
                <div style={{ width: "100%", margin: "0 auto" }}>
                <Carousel className={''} showThumbs={true} swipeable={true}>
                    <div><img src="https://i.ibb.co/4f1y2vY/prod-C1.jpg" alt="Slide 1" /></div>
                    <div><img src="https://i.ibb.co/7G6v3vD/prod-C2.jpg" alt="Slide 2" /></div>
                </Carousel>
                </div>
                <div>
                    <h1>Title</h1>
                    <p>Description</p>
                    <div class="product-buy">
                        <div class="product-quantity"><button class="decrease-btn" onClick={decrease}>-</button><span class="quantity">{quantity}</span><button class="increase-btn" onClick={increase}>+</button></div>
                        <div class="add-to-cart-btn border-btn">Adicionar ao carrinho <i class="ri-shopping-cart-2-fill"></i></div>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}