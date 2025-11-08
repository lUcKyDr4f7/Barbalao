import styles from '../Css/styles.bannerS.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getImagePath } from '../utils/path.jsx';
export default function BannerS(Banners){
    const bannersC = Banners.Banners;
    return(
        <>
        <div style={{ width: "100%", margin: "0 auto" }}>
            <Carousel className={styles.carrousel} showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} swipeable={true} >
                {bannersC.map((banner) => (
                    <div key={banner.id}>
                        <img src={getImagePath(banner)}/>
                        <h1 className={`legend ${styles.customTitle}`}>{banner.title}</h1>
                        <p className={`legend ${styles.customLegend}`}>{banner.desc}</p>
                    </div>
                ))}
            </Carousel>
        </div>
        </>
    )
}