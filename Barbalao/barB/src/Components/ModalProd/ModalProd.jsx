import styles from './styles.ModalProd.module.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import { CirclePlus, CircleMinus, CircleX, ArrowLeft } from 'lucide-react';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Swiper from '../Swiper/Swiper.jsx';
//import ModalAdicionais from '../ModalAdicionais/ModalAdicionais.jsx';

localStorage.setItem("theme", localStorage.getItem("theme")?localStorage.getItem("theme").replaceAll(' modalOpen', ''):localStorage.getItem("theme"));

export default function ModalProd({setProd, prod}) {

    /* console.log(descricao)
    console.log(prod.adicionais) */
    const [isClosing, setIsClosing] = useState(false);
    function closeModal() {
        setIsClosing(true);
        setTimeout(() => {
            setProd(null);
            setIsClosing(false);
        }, 400);
        let theme = localStorage.getItem("theme").replaceAll(' modalOpen', '');
        localStorage.setItem("theme", theme);
        document.body.classList = theme;
    }

    const [selectionAdicionais, setSelectionAdicionais] = useState(false);
    const [selectedAdicionais, setSelectedAdicionais] = useState({})

    let price = typeof prod.preco == 'number' ? parseFloat(prod.preco).toFixed(2).replace('.', ',') : '?,??';
    
    const [quantity, setQuantity] = useState(1);

    const [selectedImg, setSelectedImg] = useState(prod.imagens[0]);

    function addCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(!cart) cart = {};
        let id = `${prod.id_prod}`;
        Object.keys(selectedAdicionais).map(key => {
            id += '+' + selectedAdicionais[key].id_add;
        })
        if(cart[id]) {
            cart[id] += quantity;
        } else {
            cart[id] = quantity;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setProd(null);
    }
    //console.log(stdImg)

    function checkAdicional(adicional) {
        let s = {...selectedAdicionais};
        if (s[adicional.nome]) {
            delete s[adicional.nome]
        } else {
            s[adicional.nome] = adicional;
        }
        setSelectedAdicionais(s);
        /* console.log(selected); */
    }

    function getPrice(adicional) {
        let price = adicional.categ_preco;
        price = price[prod.categId]||price[prod.categoria];
        return price?parseFloat(price).toFixed(2).replace('.', ','):'?,??'
    }

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
                        {/* <br/>
                        Adicionais: {Object.keys(selectedAdicionais).map(a => a)} */}
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
                    {prod.adicionais.map(a => (
                        <div className={`${styles.adicional} ${selectedAdicionais[a.nome]?styles.selected:''}`} onClick={() => checkAdicional(a)}>
                            {/* <div className={`${styles.checkbox} ${selectedAdicionais[a.nome]?styles.checked:''}`}></div> */}
                            <div className={styles.infoAdicional}>
                                <p>{a.nome}</p>
                                <p>+R${getPrice(a)}</p>
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
