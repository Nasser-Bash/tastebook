import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation ,Autoplay ,FreeMode} from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faQuoteRight  } from "@fortawesome/free-solid-svg-icons";
function Testimonials() {
    return (
        <section>
            <div className="brush-dec2 brush-dec_bottom"></div>
        <div className="container">
        <div className="section-title">
            <h4>What said about us</h4>
            <h2>Testimonials</h2>
            <div className="dots-separator fl-wrap"><span></span></div>
        </div>
    </div>
    <div className="clearfix"></div>
        <Swiper
        breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            600 : {
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
            className="testimonilas-carousel-wrap fl-wrap p-5"
          >
       
        <SwiperSlide >
        <div className="testi-item fl-wrap">
            
             <div className="testi-avatar"><img src="/images/avatar/4.jpg" alt=""/></div>
            
          
             <div className="testimonilas-text fl-wrap">
             <i className='QuoteLeft'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
                <h3>Andy Dimasky</h3>
                 <div className="star-rating" data-starrating="5"> 
                 {
                  Array.from({length: 5}, (star) => {
                        return(
                            <FontAwesomeIcon icon={faStar}/> 
                        )
                    })
                 }
                     
                 </div>
                 <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                 <span className="testi-number">01.</span>
                 <i className='QuoteRight'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
            </div>
         </div>
        </SwiperSlide>
            
       

        <SwiperSlide >
        <div className="testi-item fl-wrap">
            
             <div className="testi-avatar"><img src="/images/avatar/2.jpg" alt=""/></div>
            
          
             <div className="testimonilas-text fl-wrap">
             <i className='QuoteLeft'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
                <h3>Nicolo Svensky</h3>
                 <div className="star-rating" data-starrating="5"> 
                 {
                  Array.from({length: 5}, (star) => {
                        return(
                            <FontAwesomeIcon icon={faStar}/> 
                        )
                    })
                 }
                     
                 </div>
                 <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                 <span className="testi-number">02.</span>
                 <i className='QuoteRight'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
            </div>
         </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className="testi-item fl-wrap">
            
             <div className="testi-avatar"><img src="/images/avatar/5.jpg" alt=""/></div>
            
          
             <div className="testimonilas-text fl-wrap">
             <i className='QuoteLeft'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
                <h3>Centa Simpson</h3>
                 <div className="star-rating" data-starrating="5"> 
                 {
                  Array.from({length: 5}, (star) => {
                        return(
                            <FontAwesomeIcon icon={faStar}/> 
                        )
                    })
                 }
                     
                 </div>
                 <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                 <span className="testi-number">03.</span>
                 <i className='QuoteRight'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
            </div>
         </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className="testi-item fl-wrap">
            
             <div className="testi-avatar"><img src="/images/avatar/3.jpg" alt=""/></div>
            
          
             <div className="testimonilas-text fl-wrap">
             <i className='QuoteLeft'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
                <h3>Andy Dimasky</h3>
                 <div className="star-rating" data-starrating="5"> 
                 {
                  Array.from({length: 5}, (star) => {
                        return(
                            <FontAwesomeIcon icon={faStar}/> 
                        )
                    })
                 }
                     
                 </div>
                 <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                 <span className="testi-number">04.</span>
                 <i className='QuoteRight'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
            </div>
         </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className="testi-item fl-wrap">     
             <div className="testi-avatar"><img src="/images/avatar/4.jpg" alt=""/></div>
             <div className="testimonilas-text fl-wrap">
             <i className='QuoteLeft'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
                <h3>Frank Dellov</h3>
                 <div className="star-rating" data-starrating="5"> 
                 {
                  Array.from({length: 5}, (star) => {
                        return(
                            <FontAwesomeIcon icon={faStar}/> 
                        )
                    })
                 }
                     
                 </div>
                 <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                 <span className="testi-number">05.</span>
                 <i className='QuoteRight'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
            </div>
         </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className="testi-item fl-wrap">
            
             <div className="testi-avatar"><img src="/images/avatar/5.jpg" alt=""/></div>
            
          
             <div className="testimonilas-text fl-wrap">
             <i className='QuoteLeft'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
                <h3>Centa Simpson</h3>
                 <div className="star-rating" data-starrating="5"> 
                 {
                  Array.from({length: 5}, (star) => {
                        return(
                            <FontAwesomeIcon icon={faStar}/> 
                        )
                    })
                 }
                     
                 </div>
                 <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                 <span className="testi-number">06.</span>
                 <i className='QuoteRight'> <FontAwesomeIcon icon={faQuoteRight}/> </i>
            </div>
         </div>
        </SwiperSlide>
        <div className="brush-dec"></div>
          </Swiper>
    </section>
    
      )
}

export default Testimonials