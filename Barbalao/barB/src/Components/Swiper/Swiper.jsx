import styles from '../Css/styles.swiper.module.css';
import { useRef } from 'react';

export default function Swiper(props) {
  
  const swiperRef = useRef(null)

  function swipeLeft() {
    swiperRef.current.scrollBy({top: 0, left: -(9 * window.innerWidth / 10 + Number(swiperRef.current.style.columnGap)), behavior: "smooth",});
  }

  function swipeRight() {
    swiperRef.current.scrollBy({top: 0, left: 9 * window.innerWidth / 10 + Number(swiperRef.current.style.columnGap), behavior: "smooth",});
  }

  return (
      <>
        <div className={styles.swiper}>
          <button className={styles.swipeBtn} onClick={() => swipeLeft()}><i className="ri-arrow-left-s-line"></i></button>
          <div id='swiper' className={styles.swiperSlide} ref={swiperRef}>{props.children}</div>
          <button className={styles.swipeBtn} onClick={() => swipeRight()}><i className="ri-arrow-right-s-line"></i></button>
        </div>
      </>
  );
}