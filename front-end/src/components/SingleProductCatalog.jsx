/** @format */

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Product-catalog.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

function SingleProductCatalog() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#3f3f3f',
          '--swiper-pagination-color': '#3f3f3f',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'>
        <SwiperSlide>
          <img src='https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1_2-581x851.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1-581x851.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602780_Form_Barstool_65cm_WhiteOak_3-581x851.jpeg' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        <SwiperSlide>
          <img src='https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1_2-581x851.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1-581x851.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602780_Form_Barstool_65cm_WhiteOak_3-581x851.jpeg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SingleProductCatalog;
