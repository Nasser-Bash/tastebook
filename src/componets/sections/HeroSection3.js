
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation ,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useBgImage from "../../hooks/useBgImage";
function HeroSection3() {
    useBgImage()
  return (
    <div className="hero-wrap fl-wrap full-height">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      speed={2000}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[ Autoplay,Navigation]}
      className="fs-slider-wrap fs-slider-det full-height fl-wrap hero_fsw dark-bg"
    >
      <SwiperSlide>
      <div className="fs-slider-item " >
         <div className="bg" style={{backgroundAttachment: "fixed !important"}}  data-bg="/images/bg/12.jpg" data-scrollax="properties: { translateY: '30%' }" ></div>
         <div className="overlay"></div>
         <div className="grid-carousel-title">
             <h3>Welcome To Our Restaurant </h3>
             <div className="clearfix"></div>
             <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
             <div className="bold-separator"><span></span></div>
             <a href="#sec2" className="hero_btn custom-scroll-link">Scroll down to Discover<i className="fal fa-long-arrow-down"></i></a>
         </div>
</div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="fs-slider-item ">
         <div className="bg" style={{backgroundAttachment: "fixed !important"}}  data-bg="/images/bg/10.jpg" data-scrollax="properties: { translateY: '30%' }" ></div>
         <div className="overlay"></div>
         <div className="grid-carousel-title">
             <h3>Our Awesome Story </h3>
             <div className="clearfix"></div>
             <h4>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</h4>
             <div className="bold-separator"><span></span></div>
             <a href="#sec2" className="hero_btn custom-scroll-link">Scroll down to Discover<i className="fal fa-long-arrow-down"></i></a>
         </div>
</div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="fs-slider-item ">
         <div className="bg" style={{backgroundAttachment: "fixed !important"}}  data-bg="/images/bg/4.jpg" data-scrollax="properties: { translateY: '30%' }" ></div>
         <div className="overlay"></div>
         <div className="grid-carousel-title">
             <h3>Visit Our Online Store</h3>
             <div className="clearfix"></div>
             <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
             <div className="bold-separator"><span></span></div>
             <a href="#sec2" className="hero_btn custom-scroll-link">Scroll down to Discover<i className="fal fa-long-arrow-down"></i></a>
         </div>
</div>
    </SwiperSlide>
    <div className="brush-dec"></div>
    </Swiper>
  </div>
  )
}

export default HeroSection3