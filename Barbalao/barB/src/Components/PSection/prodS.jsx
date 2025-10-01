import '../Css/styles.categP.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
export default function prodS(){
    
    return(
        <>
            <div style={{ width: "100%", margin: "0 auto" }}>
                <h2>Carrossel com Carousel.js</h2>
                <Swiper className="brandsSwiper"slidesPerView={2.426} slidesPerGroup={2.426} centerInsufficientSlides={true} allowTouchMove={false} navigation={true} modules={[Navigation]} swipeable={true} slidesOffsetBefore={15} slidesOffsetAfter={395} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>


                <SwiperSlide className="swiper-slide avaliable start"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>
                
                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable"></SwiperSlide>

                <SwiperSlide className="swiper-slide avaliable end"></SwiperSlide>
        </Swiper>




                
            </div>
        </>
    )
}