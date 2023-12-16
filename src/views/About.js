import React from 'react'
import HeroSection2 from "../components/sections/HeroSection2";
import GallerySlider from "../components/sections/GallerySlider";
import OurChefs from "../components/sections/OurChefs";
import Testimonials from "../components/sections/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  ,faPlay } from "@fortawesome/free-solid-svg-icons";
import useBgImage from "../hooks/useBgImage";
function About() {
  useBgImage();
  return (
    <div id='wrapper'>
    <HeroSection2/>
    <div className="content">
    <section className="hidden-section big-padding" data-scrollax-parent="true">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="section-title text-align_left">
                                        <h4>Our story</h4>
                                        <h2>Few words about us</h2>
                                        <div className="dots-separator fl-wrap"><span></span></div>
                                    </div>
                                    <div className="text-block ">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                                        </p>
                                        <p> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                        <a href="about.html" className="btn fl-btn">Explore Our Menu<i className=""><FontAwesomeIcon icon={faArrowRight}/></i></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                  <GallerySlider/>
                                </div>
                            </div>
                            <div className="section-dec sec-dec_top"></div>
							<div className="wave-bg" data-scrollax="properties: { translateY: '-150px' }"></div>							
                        </div>
    </section>

    <section className="parallax-section dark-bg hidden-section" data-scrollax-parent="true">
                        <div className="brush-dec2"></div>
                        <div className="brush-dec"></div>
                        <div className="bg par-elem bg_tabs"  data-bg="/images/bg/14.jpg" data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="container">
                         
                            <div className="inline-facts-wrap">
                                <div className="inline-facts">
                                    <div className="milestone-counter">
                                        <div className="stats animaper">
                                            <div className="num" data-content="0" data-num="254">154</div>
                                        </div>
                                    </div>
                                    <h6>New Visiters Every Week</h6>
                                </div>
                            </div>
                      
                            <div className="inline-facts-wrap">
                                <div className="inline-facts">
                                    <div className="milestone-counter">
                                        <div className="stats animaper">
                                            <div className="num" data-content="0" data-num="12168">12168</div>
                                        </div>
                                    </div>
                                    <h6>Happy Customers Every Year</h6>
                                </div>
                            </div>
                            
                            <div className="inline-facts-wrap">
                                <div className="inline-facts">
                                    <div className="milestone-counter">
                                        <div className="stats animaper">
                                            <div className="num" data-content="0" data-num="172">172</div>
                                        </div>
                                    </div>
                                    <h6>Won Awards</h6>
                                </div>
                            </div>
                            
                            <div className="inline-facts-wrap">
                                <div className="inline-facts">
                                    <div className="milestone-counter">
                                        <div className="stats animaper">
                                            <div className="num" data-content="0" data-num="732">732</div>
                                        </div>
                                    </div>
                                    <h6>Weekly Deliveries</h6>
                                </div>
                            </div>
                                                  
                        </div>
    </section>

   <OurChefs/>

    <section className="parallax-section dark-bg hidden-section" data-scrollax-parent="true">
                        <div className="brush-dec2"></div>
                        <div className="brush-dec"></div>
                        <div style={{backgroundAttachment:"fixed"}} className="bg par-elem bg_tabs"  data-bg="/images/bg/12.jpg" data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="video_section-title fl-wrap">
                                <h4>Our promo video</h4>
                                <h2>Get ready to start your exciting journey. <br/> Our restaurant will lead you through the amazing food world.</h2>
                                <div className="dots-separator fl-wrap"><span></span></div>
                            </div>
                            <a href="https://vimeo.com/10322316" className="promo-link big_prom     image-popup"><span className="color-bg"><i className=""><FontAwesomeIcon icon={faPlay}/></i></span></a>                          
                        </div>
    </section>

    <Testimonials/>
    </div>
    </div>
  )
}

export default About