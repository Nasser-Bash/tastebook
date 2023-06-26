import React from 'react'
import useBgImage from "../../hooks/useBgImage";

function HeroSection2({title}) {
    useBgImage()
  return (
    <section className="parallax-section hero-section hidden-section" data-scrollax-parent="true" >
                        <div className="bg par-elem "  data-bg="/images/bg/12.jpg" data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="section-title">
                                <h4>Order food with home delivery</h4>
                                <h2>{title}</h2>
                                <div className="dots-separator fl-wrap"><span></span></div>
                            </div>
                        </div>
                        <div className="hero-section-scroll">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
                        <div className="brush-dec"></div>
    </section>
  )
}

export default HeroSection2