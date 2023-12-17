import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight , faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    
    <div className="hero-wrap fl-wrap full-height" data-scrollax-parent="true">
    <img className="bg par-elem "  src="/images/bg/2.jpg" style={{
        ObjectFit:"cover"
    }} />
    <div className="overlay"></div>
    <div className="hero-title-wrap fl-wrap">
        <div className="container">
            <div className="hero-title">
                <h4>Top Services and Premium Cuisine </h4>
                <h2>Welcome to Restabook Restaurant</h2>
                <Link to="/menu" className="hero_btn">Check out our Menu <i className="">
                    <FontAwesomeIcon icon={faArrowRight}/></i></Link>
            </div>
        </div>
    </div>
   
   
 
    <div className="hero-social">
        <ul>
            <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-vk"></i></a></li>
        </ul>
    </div>
    	
    <div className="hero-bottom-container">
        <div className="container">
            <div className="scroll-down-wrap">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
                <span>Scroll down to Discover</span>
            </div>
            <a href="#sec2" className="sd_btn custom-scroll-link"><i className=""><FontAwesomeIcon icon={faArrowDown}/></i></a>
        </div>
    </div>
  	
    <div className="hero-dec_top"></div>
    <div className="hero-dec_bottom"></div>
    <div className="brush-dec"></div>
</div>
  )
}

export default HeroSection