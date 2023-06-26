import React from 'react'

function Slide() {
  return (
    <div className="swiper-slide">
      <div className="fs-slider-item fl-wrap">
         <div className="bg"  data-bg="/images/bg/20.jpg" data-swiper-parallax="40%"></div>
         <div className="overlay"></div>
         <div className="grid-carousel-title">
             <h3>Welcome To Our Restaurant </h3>
             <div className="clearfix"></div>
             <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate</h4>
             <div className="bold-separator"><span></span></div>
             <a href="#sec2" className="hero_btn custom-scroll-link">Scroll down to Discover<i className="fal fa-long-arrow-down"></i></a>
         </div>
     </div>
 </div>
  )
}

export default Slide