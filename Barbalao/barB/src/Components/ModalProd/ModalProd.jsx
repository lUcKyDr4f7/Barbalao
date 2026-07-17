import styles from './styles.ModalProd.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
/* import { Carousel } from "react-responsive-carousel"; */
import { CirclePlus, CircleMinus } from 'lucide-react';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Swiper from '../Swiper/Swiper.jsx'

export default function ModalProd({setProd, prod}) {

    /* console.log(descricao)
    console.log(state) */
    const [isClosing, setIsClosing] = useState(false);
    function closeModal() {
        setIsClosing(true);
        setTimeout(() => {
            setProd(null);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' cartOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    let price = typeof prod.preco == 'number' ? parseFloat(prod.preco).toFixed(2).replace('.', ',') : '?,??';
    
    const [quantity, setQuantity] = useState(1);

    const [selectedImg, setSelectedImg] = useState(prod.imagens[0]);

    function addCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(!cart) cart = {};
        if(cart[prod.id_prod]) {
            cart[prod.id_prod] += quantity;
        } else {
            cart[prod.id_prod] = quantity;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setProd(null);
    }
    //console.log(stdImg)

    return (
        <>
        <Backdrop zIndex={1500} show={isClosing} close={() => closeModal()}>
            <div className={styles.productCard} onClick={e => e.stopPropagation()}>
                <div className={styles.productImgs}>
                    <img className={styles.mainImg} src={selectedImg || prod.stdImg} alt={prod.nome} />
                    {(prod.imagens.length > 1)&&
                        <Swiper classSwiper={styles.imgSwiper} classBtn={styles.imgSwiperBtn}>
                            {prod.imagens.map((img, id) => 
                                <img key={id} src={img} alt={`${prod.nome}${id}`}
                                className={`${styles.otherImg} ${(selectedImg == img)?styles.selectedImg:''}`}
                                onClick={() => setSelectedImg(img)}/>
                            )}
                        </Swiper>
                    }
                    {/* <Carousel className={styles.carousel} showArrows={false} showThumbs={true} showStatus={false} swipeable={true} showIndicators={false}>
                        <div className={styles.imagemC}>
                            <img src={imgs || prod.stdImg} onError={() => setImgs(prod.stdImg)}/>
                        </div>
                        <div className={styles.imagemC}>
                            <img src={imgs}/>
                        </div>
                    </Carousel> */}
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{prod.nome}</h1>
                    <p className={styles.description}>{prod.descricao}</p>
                    <p className={styles.price}>R$ {price}</p>
                    <div className={styles.productBuy}>
                        <div className={styles.productQuantity}>
                            <button onClick={() => (quantity > 1) && setQuantity(quantity - 1)}><CircleMinus /></button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}><CirclePlus /></button>
                        </div>
                        <button className={styles.addCart} onClick={() => addCart()}>
                            Adicionar ao carrinho 
                            <i className="ri-shopping-cart-2-fill">
                            </i>
                        </button>
                    </div>
                </div>
                <a className={styles.closeBtn} onClick={() => closeModal()}><i className="ri-close-line"></i></a>
            </div>
        </Backdrop>
        </>
    )

}
