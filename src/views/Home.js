import React ,{useEffect,useState}from 'react'
import HeroSection from "../components/sections/HeroSection";
import OurStory from "../components/sections/OurStory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faCaretLeft,faCaretRight  } from "@fortawesome/free-solid-svg-icons";
import useBgImage from "../hooks/useBgImage";
import { Link } from "react-router-dom";

function Home() {
  useBgImage();
  
  return (
    <div id='wrapper'>
        <HeroSection/>
          <div className="content">
            <OurStory/>
         
            <section className="column-section no-padding hidden-section" data-scrollax-parent="true">
                  <div className="column-wrap-bg right-wrap">
                      <div className="bg par-elem "  data-bg="images/bg/10.jpg" data-scrollax="properties: { translateY: '30%' }" style={{backgroundAttachment: "fixed"}}></div>
                      <div className="overlay"></div>
                      <div className="column-wrap-bg-text">
                          <h3>Our Store</h3>
                          <h4>Want to order food home? Visit our online store.</h4>
                          <Link to="/about" className="btn">Buy online <i className=""><FontAwesomeIcon icon={faArrowRight}/></i></Link>
                      </div>
                  </div>
                  <div className="column-section-wrap left-column-section dark-bg" >
                      <div className="container"  >
                          <div className="column-text">
                              <div className="section-title">
                                  <h4>Book a table</h4>
                                  <h2>Upcoming  Events</h2>
                                  <div className="dots-separator fl-wrap"><span></span></div>
                              </div>
                         
                              <div className="events-carousel-wrap fl-wrap">
                                  <div className="events-carousel fl-wrap">
                                      <div className="swiper-container">
                                          <div className="swiper-wrapper">
                                          
                                              <div className="swiper-slide">
                                                  <div className="event-carousel-item">
                                                      <h4>Jazz Band Live Event</h4>
                                                      <span className="event-date">25 may 2020</span>
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. </p>
                                                  </div>
                                              </div>
                                              
                                              <div className="swiper-slide">
                                                  <div className="event-carousel-item">
                                                      <h4>Wine and Steak Day</h4>
                                                      <span className="event-date">19 June 2020</span>
                                                      <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit   gravida. </p>
                                                  </div>
                                              </div>
                                             
                                              <div className="swiper-slide">
                                                  <div className="event-carousel-item">
                                                      <h4>Freedom Day Celebration</h4>
                                                      <span className="event-date">14 October 2020</span>
                                                      <p>Lorem Ipsum generators on the Internet king this the first true generator laudantium totam aperiam. </p>
                                                  </div>
                                              </div>
                                                                                        
                                          </div>
                                      </div>
                                  </div>
                                  <div className="ec-button ec-button-prev"><i className=""></i><FontAwesomeIcon icon={faCaretRight}/></div>
                                  <div className="ec-button ec-button-next"><i className=""></i><FontAwesomeIcon icon={faCaretLeft}/></div>
                              </div>
                              <div className="clearfix"></div>
                              <div className="bold-separator"><span></span></div>
                            
                              <a href="#" className="hero_btn no-align show-rb">Book Table Now<i className=""><FontAwesomeIcon icon={faArrowRight}/></i></a>
                          </div>
                      </div>
                      
                  </div>
              </section>
       
        </div>
       
    </div>
  )
}

export default Home