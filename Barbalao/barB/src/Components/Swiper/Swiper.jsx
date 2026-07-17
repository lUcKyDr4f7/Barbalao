import styles from './styles.swiper.module.css';
import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Swiper(props) {
  
  const swiperRef = useRef(null)
  const [isSwiperStart, setIsSwiperStart] = useState(false);
  const [isSwiperEnd, setIsSwiperEnd] = useState(false);

  function checkSwiperSection(swiper, scrollDist) {
    if(swiper.offsetWidth >= swiper.scrollWidth) {
      setIsSwiperStart(true);
      setIsSwiperEnd(true);
      return;
    }
    setIsSwiperStart((swiper.scrollLeft + scrollDist) <= 0 ? true : false);
    setIsSwiperEnd((swiper.scrollLeft + 2*scrollDist) >= swiper.scrollWidth ? true : false);
  }

  function swipe(direction) {
    let gap = Number(getComputedStyle(swiperRef.current).getPropertyValue("column-gap").slice(0, -2));
    let scrollDist = direction * (swiperRef.current.offsetWidth + gap);
    swiperRef.current.scrollBy({top: 0, left: scrollDist, behavior: "smooth",});
    checkSwiperSection(swiperRef.current, scrollDist);
  }

  useEffect(() => {
    checkSwiperSection(swiperRef.current, 0);
  }, [])

  return (
      <>
        <div className={styles.swiper}>
          <button className={`${styles.swipeBtn} ${props.classBtn}`} onClick={() => !isSwiperStart && swipe(-1)}>
            {!isSwiperStart && <ChevronLeft />}
          </button>
          <div key='swiper' className={`${styles.swiperSlide} ${props.classSwiper}`} ref={swiperRef}>{props.children}</div>
          <button className={`${styles.swipeBtn} ${props.classBtn}`} onClick={() => !isSwiperEnd && swipe(1)}>
            {!isSwiperEnd && <ChevronRight />}
          </button>
        </div>
      </>
  );
}
