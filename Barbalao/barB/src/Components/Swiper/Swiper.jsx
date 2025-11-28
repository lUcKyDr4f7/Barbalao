import styles from '../Css/styles.swiper.module.css';
import { useRef } from 'react';

export default function Swiper(props) {
  
  const swiperRef = useRef(null)

  function swipeLeft() {
    let gap = Number(getComputedStyle(swiperRef.current).getPropertyValue("column-gap").slice(0, -2));
    swiperRef.current.scrollBy({top: 0, left: -(9 * window.innerWidth / 10 + gap), behavior: "smooth",});
    console.log();
  }

  function swipeRight() {
    let gap = Number(getComputedStyle(swiperRef.current).getPropertyValue("column-gap").slice(0, -2));
    swiperRef.current.scrollBy({top: 0, left: 9 * window.innerWidth / 10 + gap, behavior: "smooth",});
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
