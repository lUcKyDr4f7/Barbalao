import { Banners } from '../../assets/Data/Banners'

export default function Banner(){
    const listaBanners = Banners.map(
        (banner) => 
            <div key={banner.id}>
                <img src={getImagePath(banner)}/>
                <h1 className={`legend ${styles.customTitle}`}>{banner.title}</h1>
                <p className={`legend ${styles.customLegend}`}>{banner.desc}</p>
            </div>
    )
    return(
        <>
        <Banner/>
            {/* <div class="earth-tenis-wrapper">
                <div class="section-title">
                    <h3>Popular</h3>
                    <p>Os queridinhos da loja!</p>
                </div>
                <div class="section-content">
                    <div class="swiper popular-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="swiper-slide-img">
                                    <img src="assets/imgs/popular-imgs/popular-img-1.jpg" alt=""/>
                                </div>
                                <div class="slide-info">
                                    <h1>Air Force 1<img src={AirForce1}/> Supreme Wheat</h1>
                                    <p>Clássico como o outono, firme como o seu estilo.</p>
                                    <a data-filter="air-force-1-supreme-wheat"><p>Ver mais</p></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide-img">
                                    <img src="assets/imgs/popular-imgs/popular-img-2.jpg" alt=""/>
                                </div>
                                <div class="slide-info">
                                    <h1>Air Jordan 4<img src="assets/imgs/popular-imgs/air-jordan-logo.png"/> Black Cat</h1>
                                    <p>Sombra, atitude e poder em cada passo.</p>
                                    <a data-filter="air-jordan-4-black-cat"><p>Ver mais</p></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide-img">
                                    <img src="assets/imgs/popular-imgs/popular-img-3.jpg" alt=""/>
                                </div>
                                <div class="slide-info">
                                    <h1>Adidas Forum<img src="assets/imgs/popular-imgs/adidas-logo.png"/> Bad Bunny</h1>
                                    <p>Autenticidade nos pés. Arte em movimento.</p>
                                    <a data-filter="adidas-forum-bad-bunny"><p>Ver mais</p></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide-img">
                                    <img src="assets/imgs/popular-imgs/popular-img-4.jpg" alt=""/>
                                </div>
                                <div class="slide-info">
                                    <h1>New Balance<img src="assets/imgs/popular-imgs/new-balance-logo.png"/> 9060 Black White</h1>
                                    <p>Futurismo em preto e branco.</p>
                                    <a data-filter="new-balance-9060-black-white"><p>Ver mais</p></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide-img">
                                    <img src="assets/imgs/popular-imgs/popular-img-5.jpg" alt="" />
                                </div>
                                <div class="slide-info">
                                    <h1>Yeezy Boost<img src="assets/imgs/popular-imgs/yeezy-logo.png" /> 350 Onyx</h1>
                                    <p>Silêncio. Estilo que fala por si.</p>
                                    <a data-filter="yeezy-boost-350-onyx"><p>Ver mais</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next">
                            <i class="ri-arrow-right-s-line"></i>    
                        </div>
                        <div class="swiper-button-prev">
                            <i class="ri-arrow-left-s-line"></i>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}