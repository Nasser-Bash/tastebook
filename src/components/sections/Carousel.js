import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation ,Autoplay ,FreeMode} from "swiper";
function Carousel() {
  return (
    <div className="hero-wrap fl-wrap full-height">
    <Swiper
  
    breakpoints={{
        718: {
          slidesPerView: 3,
        },
        // when window width is >= 768px
        591 : {
            slidesPerView:2,
        }
       
      }}
        slidesPerView={1}
        navigation={true}
        speed={1200}
        loop
        centeredSlides 
        loopedSlides= {2}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
      modules={[ FreeMode,Autoplay,Navigation]}
        className="hero-wrap fl-wrap full-height hc-w"
      >
   
    <SwiperSlide >
         <div className="swiper-slide hov_zoom">
             <div className="bg"  data-bg="/images/bg/long/1.jpg" data-swiper-parallax="10%"></div>
            <div className="overlay"></div>
              <div className="grid-carousel-title">
                <h3><a href="menu.html">View Our Story</a></h3>
                <div className="clearfix"></div>
                 <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
                <div className="bold-separator"><span></span></div>
             </div>
            <div className="carousle-item-number"><span>01.</span></div>
        </div>
    </SwiperSlide>
        
    <SwiperSlide>
    <div className="swiper-slide hov_zoom">
        <div className="bg"  data-bg="/images/bg/long/2.jpg" data-swiper-parallax="10%"></div>
        <div className="overlay"></div>
        <div className="grid-carousel-title">
            <h3><a href="about.html">Buy Delicious Desserts</a></h3>
            <div className="clearfix"></div>
             <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
            <div className="bold-separator"><span></span></div>
         </div>
        <div className="carousle-item-number"><span>02.</span></div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div class="swiper-slide hov_zoom">
        <div className="bg"  data-bg="images/bg/long/3.jpg" data-swiper-parallax="10%"></div>
        <div className="overlay"></div>
        <div className="grid-carousel-title">
            <h3><a href="shop.html">Explore Our Restaurant</a></h3>
            <div className="clearfix"></div>
            <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
            <div className="bold-separator"><span></span></div>
        </div>
        <div className="carousle-item-number"><span>03.</span></div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div class="swiper-slide hov_zoom">
        <div className="bg"  data-bg="images/bg/long/4.jpg" data-swiper-parallax="10%"></div>
        <div className="overlay"></div>
         <div className="grid-carousel-title">
            <h3><a href="gallery.html">Contact Us </a></h3>
            <div className="clearfix"></div>
            <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
            <div className="bold-separator"><span></span></div>
        </div>
        <div className="carousle-item-number"><span>04.</span></div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div class="swiper-slide hov_zoom">
        <div className="bg"  data-bg="images/bg/long/3.jpg" data-swiper-parallax="10%"></div>
        <div className="overlay"></div>
        <div className="grid-carousel-title">
            <h3><a href="shop.html">Explore Our Meat</a></h3>
            <div className="clearfix"></div>
            <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
            <div className="bold-separator"><span></span></div>
        </div>
        <div className="carousle-item-number"><span>03.</span></div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div class="swiper-slide hov_zoom">
        <div className="bg"  data-bg="images/bg/long/4.jpg" data-swiper-parallax="10%"></div>
        <div className="overlay"></div>
         <div className="grid-carousel-title">
            <h3><a href="gallery.html">Explore Our Menu</a></h3>
            <div className="clearfix"></div>
            <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
            <div className="bold-separator"><span></span></div>
        </div>
        <div className="carousle-item-number"><span>04.</span></div>
    </div>
    </SwiperSlide>
    <div className="brush-dec"></div>
      </Swiper>
      </div>
  )
}

export default Carousel