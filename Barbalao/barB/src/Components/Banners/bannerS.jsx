import styles from '../Css/styles.bannerS.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/Banners/Lanches.jpg'
import img2 from '../../assets/Banners/Porcoes.png'
import img3 from '../../assets/Banners/Pasteis.jpg'
export default function BannerS(){


    
    return(
        <>
        <div style={{ width: "100%", margin: "0 auto" }}>
            <Carousel className={styles.carrousel} showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} swipeable={true} >
                <div>
                    <img src={img1} alt="Slide 1" />
                    <h1 className={`legend ${styles.customTitle}`}>Lanches Variados</h1>
                    <p className={`legend ${styles.customLegend}`}>Suculentos, artesanais e feitos para conquistar</p>
                </div>
                <div>
                    <img src={img2} alt="Slide 2" />
                    <h1 className={`legend ${styles.customTitle}`}>Porções Irresistíveis</h1>
                    <p className={`legend ${styles.customLegend}`}>Batatas e petiscos no ponto certo para compartilhar</p>
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                    <h1 className={`legend ${styles.customTitle}`}>Pastéis Crocantes</h1>
                    <p className={`legend ${styles.customLegend}`}>Recheados de sabor, crocantes a cada mordida</p>
                </div>
            </Carousel>
        </div>
                
        
        
        </>
    )
}