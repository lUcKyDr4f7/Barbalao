import styles from './styles.ModalProd.module.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useContext } from 'react';
import { CirclePlus, CircleMinus, CircleX, ArrowLeft } from 'lucide-react';
import { AllAdicionais, getAdicionais } from '../../assets/Data/AllAdicionais.js';
import { RelCategAdicional } from '../../assets/Data/RelCategAdicional.js';
import { CartCtx } from '../../Contexts/CartProvider/CartProvider.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Swiper from '../Swiper/Swiper.jsx';
//import ModalAdicionais from '../ModalAdicionais/ModalAdicionais.jsx';

localStorage.setItem("theme", localStorage.getItem("theme")?localStorage.getItem("theme").replaceAll(' modalOpen', ''):localStorage.getItem("theme"));

export default function ModalProd({setProd, prod}) {

    const [isClosing, setIsClosing] = useState(false);
    function closeModal() {
        setIsClosing(true);
        setSelectedAdicionais({});
        setTimeout(() => {
            setProd(null);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' modalOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    const [adicionais, SetAdicionais] = useState(getAdicionais(prod.categoria));

    const [selectionAdicionais, setSelectionAdicionais] = useState(false);
    const [selectedAdicionais, setSelectedAdicionais] = useState(prod.adicionais?.reduce((acc, adicional) => {
        acc[adicional.nome] = adicional;
        return acc;
    }, {}) || {});

    let price = typeof prod.preco == 'number' ? parseFloat(prod.preco).toFixed(2).replace('.', ',') : '?,??';
    
    const [quantity, setQuantity] = useState(1);

    const [selectedImg, setSelectedImg] = useState(prod.imagens[0]);

    const [cart, setCart] = useContext(CartCtx);
    function addCart() {
        /* let cart = JSON.parse(localStorage.getItem("cart"));
        if(!cart) cart = {}; */
        /* if(cart[id]) {
            cart[id] += quantity;
        } else {
            cart[id] = quantity;
        }
        localStorage.setItem("cart", JSON.stringify(cart)); */

        let id = `${prod.id_prod}`;
        Object.keys(selectedAdicionais).toSorted((a, b) => a - b).map(key => {
            id += '+' + selectedAdicionais[key].id_add;
        });

        
        let c = {...cart};

        if(c[id]) {
            c[id].qtd += quantity;
        } else {
            let product = {...prod};
            product.qtd = quantity;
            product.adicionais = Object.values(selectedAdicionais);
            c[id] = product;
        }

        setCart(c);
        closeModal();
        /* setProd(null);
        setSelectedAdicionais({}); */
    }

    function checkAdicional(adicional) {
        let s = {...selectedAdicionais};
        if (s[adicional.nome]) {
            delete s[adicional.nome];
        } else {
            s[adicional.nome] = adicional;
        }
        setSelectedAdicionais(s);
    }

    /* function getPrice(adicional) {
        let price = adicional.categ_preco;
        price = price[prod.categId]||price[prod.categoria];
        return price?parseFloat(price).toFixed(2).replace('.', ','):'?,??';
    } */

    return (
        <>
        <Backdrop customClass={styles.backdrop} show={isClosing} close={() => closeModal()}>
            <div className={selectionAdicionais?styles.modalAdicionais:styles.productCard} onClick={e => e.stopPropagation()}>
            {!selectionAdicionais?<>
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
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{prod.nome}</h1>
                    <p className={styles.description}>
                        {prod.descricao}
                    </p>
                    {/* <div className={styles.midDiv}> */}
                        <p className={styles.price}>R$ {price}</p>
                        {/* <button className={styles.adicionaisBtn} onClick={() => setSelectionAdicionais(true)}>Adicionais +</button>
                    </div> */}
                    <div className={styles.productBuy}>
                        <div className={styles.productQuantity}>
                            <button onClick={() => (quantity > 1) && setQuantity(quantity - 1)}><CircleMinus /></button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}><CirclePlus /></button>
                        </div>
                        <button className={styles.addCart} onClick={() => setSelectionAdicionais(true)}>
                            Adicionar ao carrinho 
                            <i className="ri-shopping-cart-2-fill">
                            </i>
                        </button>
                    </div>
                </div>
            </>:<>
                <h1 className={styles.titleAdicionais}>Adicionais</h1>
                    <div className={styles.adicionais}>
                    {adicionais.map(a => (
                        <div className={`${styles.adicional} ${selectedAdicionais[a.nome]?styles.selected:''}`} onClick={() => checkAdicional(a)}>
                            {/* <div className={`${styles.checkbox} ${selectedAdicionais[a.nome]?styles.checked:''}`}></div> */}
                            <div className={styles.infoAdicional}>
                                <p>{a.nome}</p>
                                <p>+R${a.preco?parseFloat(a.preco).toFixed(2).replace('.', ','):'?,??'}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className={styles.btnDiv}>
                        <button className={styles.addCart} onClick={() => setSelectionAdicionais(false)}>
                            <ArrowLeft />
                            Voltar
                        </button>
                        <button className={styles.addCart} onClick={() => addCart()}>
                            Adicionar ao carrinho 
                            <i className="ri-shopping-cart-2-fill"></i>
                        </button>
                    </div></>}
                <CircleX className={styles.closeBtn} onClick={() => closeModal()} />
            </div>
        </Backdrop>
        </>
    )

}
