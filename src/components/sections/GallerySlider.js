import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation ,Autoplay ,FreeMode} from "swiper";
function GallerySlider() {
  return (
    <Swiper
    slidesPerView={1}
    navigation={true}
    speed={1200}
    loop
    centeredSlides 
    loopedSlides= {1}
    autoplay={{
        delay: 3500,
        disableOnInteraction: false,
    }}
  modules={[ FreeMode,Autoplay,Navigation]}
    className="image-collge-wrap fl-wrap"
  >

<SwiperSlide className='hov_zoom'>
<img src="/images/all/4.jpg" alt=""/><a href="images/all/4.jpg" className="box-media-zoom   popup-image"></a>
</SwiperSlide>

  <SwiperSlide className='hov_zoom'>
<img src="/images/all/1.jpg" alt=""/><a href="images/all/2.jpg" className="box-media-zoom   popup-image"></a>
</SwiperSlide>

<SwiperSlide className='hov_zoom'>
<img src="/images/all/2.jpg" alt=""/><a href="images/all/2.jpg" className="box-media-zoom   popup-image"></a>
</SwiperSlide>

<div className="brush-dec"></div>
  </Swiper>
  )
}

export default GallerySlider