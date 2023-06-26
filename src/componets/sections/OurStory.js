import React from 'react'
import {Link  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  ,faUtensils , faFish , faCarrot , faQuoteRight } from "@fortawesome/free-solid-svg-icons";
function OurStory() {
  return (
    <>
     <section className="hidden-section big-padding" data-scrollax-parent="true" id="sec2">
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
                    <Link to="/menu" className="btn fl-btn ">Explore Our Menu<i className=""></i><FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
            </div>
            <div className="col-md-6">
                <div className="image-collge-wrap fl-wrap">
                    <div className="main-iamge">
                        <img src="/images/all/3.jpg"   alt=""/>
                    </div>
                    <div className="images-collage-item" style={{width:"65%"}} data-position-left="68" data-position-top="-15" data-zindex="2" data-opacity="1.0"><img src="/images/all/8.jpg" alt=""/></div>
                    <div className="images-collage-item col_par" style={{width:"120px"}} data-position-left="-23" data-position-top="-17" data-zindex="9" data-scrollax="properties: { translateY: '150px' }"><img src="/images/all/cube.png" alt=""/></div>
                </div>
            </div>
        </div>
        <div className="section-dec sec-dec_top"></div>
    <div className="wave-bg" data-scrollax="properties: { translateY: '-150px' }"></div>                            
    </div>
    </section>

    <section className="column-section no-padding hidden-section" data-scrollax-parent="true" id="sec4">
                        <div className="column-wrap-bg left-wrap">
                            <div className="bg par-elem " style={{backgroundAttachment:"fixed"}} data-bg="images/bg/12.jpg" data-scrollax="properties: { translateY: '30%' }"></div>
                            <div className="overlay"></div>
                            <div className="quote-box">
                                <i className=""><FontAwesomeIcon icon={faQuoteRight}/></i>
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi accusantium."</p>
                                <div className="signature"><img src="/images/all/signature.png" alt=""/></div>
                                <h4>Kevin  Kowalsky - Restaurant’s cheaf</h4>
                            </div>
                        </div>
                        <div className="column-section-wrap dark-bg" >
                            <div className="container"  >
                                <div className="column-text">
                                    <div className="section-title">
                                        <h4>Call For Reservations</h4>
                                        <h2>Opening Hours</h2>
                                        <div className="dots-separator fl-wrap"><span></span></div>
                                    </div>
                                    <div className="work-time fl-wrap">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3>Sunday to Tuesday</h3>
                                                <div className="hours">
                                                    09:00<br/>
                                                    22:00
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>Friday to Saturday</h3>
                                                <div className="hours">
                                                    11:00<br/>
                                                    19:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="bold-separator"><span></span></div>
                                    <div className="big-number"><a href="#">+7(111)123456789</a></div>
                                </div>
                            </div>
                            <div className="illustration_bg">
                                <div className="bg"  data-bg="images/ink2.png"></div>
                            </div>
                        </div>
    </section>
    <section data-scrollax-parent="true">
                        <div className="container">
                            <div className="section-title">
                                <h4>Why people choose us</h4>
                                <h2>Prepare for first-className service</h2>
                                <div className="dots-separator fl-wrap"><span></span></div>
                            </div>
                            <div className="cards-wrap fl-wrap">
                                <div className="row">
                                 
                                    <div className="col-md-4">
                                        <div className="content-inner fl-wrap">
                                            <div className="content-front">
                                                <div className="cf-inner">
                                                    <div className="bg"  data-bg="images/services/1.jpg"></div>
                                                    <div className="overlay"></div>
                                                    <div className="inner">
                                                        <h2>Daily New Fresh Menus</h2>
                                                        <h4>Start eating better</h4>
                                                    </div>
                                                    <div className="serv-num">01.</div>
                                                </div>
                                            </div>
                                            <div className="content-back">
                                                <div className="cf-inner">
                                                    <div className="inner">
                                                        <div className="dec-icon">

                                                            <i >
                                                            <FontAwesomeIcon icon={faFish}/></i>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-4">
                                        <div className="content-inner fl-wrap">
                                            <div className="content-front">
                                                <div className="cf-inner">
                                                    <div className="bg"  data-bg="/images/services/2.jpg">
                                                        
                                                    </div>
                                                    <div className="overlay"></div>
                                                    <div className="inner">
                                                        <h2>Fresh Ingredient, Tasty Meals</h2>
                                                        <h4>Quality is the heart</h4>
                                                    </div>
                                                    <div className="serv-num">02.</div>
                                                </div>
                                            </div>
                                            <div className="content-back">
                                                <div className="cf-inner">
                                                    <div className="inner">
                                                        <div className="dec-icon">
                                                            
                                                            <i >
                                                            <FontAwesomeIcon icon={faCarrot}/></i>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    <div className="col-md-4">
                                        <div className="content-inner fl-wrap">
                                            <div className="content-front">
                                                <div className="cf-inner">
                                                    <div className="bg " data-bg="/images/services/3.jpg"></div>
                                                    <div className="overlay"></div>
                                                    <div className="inner">
                                                        <h2>Creative & Talented Chefs</h2>
                                                        <h4>Hot & ready to serve</h4>
                                                    </div>
                                                    <div className="serv-num">03.</div>
                                                </div>
                                            </div>
                                            <div className="content-back">
                                                <div className="cf-inner">
                                                    <div className="inner">
                                                        <div className="dec-icon">
                                                            <i >
                                                            <FontAwesomeIcon icon={faUtensils}/></i>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                                                               
                                </div>
                                <div className="section-dec sec-dec_top"></div>
                                <div className="section-dec sec-dec_bottom"></div>
                            </div>
                            <Link to="/about" className="btn fl-btn border-btn">Read More About us <i className=""><FontAwesomeIcon icon={faArrowRight}/></i></Link>
                            <div className="images-collage-item col_par" style={{width:"120px"}} data-position-left="83" data-position-top="87" data-zindex="1" data-scrollax="properties: { translateY: '150px' }"><img src="/images/cube.png" alt=""/></div>
                        </div>
                        <div className="section-bg">
                            <div className="bg"  data-bg="images/bg/dec/section-bg.png"></div>
                        </div>
                    </section>
    </>
    

  )
}

export default OurStory