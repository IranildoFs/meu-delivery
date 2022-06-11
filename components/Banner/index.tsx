import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner1.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
