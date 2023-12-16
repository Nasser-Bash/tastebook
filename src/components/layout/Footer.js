import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faTwitter , faInstagram , faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
    const heightEmulatorRef = useRef(null);
    const fixedFooterRef = useRef(null);
    useEffect(() => {
        if (heightEmulatorRef.current && fixedFooterRef.current) {
          heightEmulatorRef.current.style.height = `${fixedFooterRef.current.offsetHeight}px`;
        }
      }, []);
  return (
    <>
        <div ref={heightEmulatorRef} class="height-emulator fl-wrap "></div>
        <footer className="fl-wrap dark-bg fixed-footer " ref={fixedFooterRef}>
        <div className="container">
            <div className="footer-top fl-wrap">
                <Link to="/" className="footer-logo"><img src="/images/logo.png" alt=""/></Link>
                <div className="footer-social">
                    <span className="footer-social-title">Follow us :</span>
                    <ul>
                        <li><a  target="_blank"><i className=""><FontAwesomeIcon icon={faFacebookF}/></i></a></li>
                        <li><a  target="_blank"><i className=""><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                        <li><a  target="_blank"><i className=""><FontAwesomeIcon icon={faInstagram}/></i></a></li>
                        <li><a  target="_blank"><i className=""><FontAwesomeIcon icon={faLinkedin}/></i></a></li>
                    </ul>
                </div>
            </div>
           
            <div className="footer-widget-wrap fl-wrap">
                <div className="row">
                
                    <div className="col-md-4">
                        <div className="footer-widget">
                            <div className="footer-widget-title">About us</div>
                            <div className="footer-widget-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque ipsa quae ab illo inventore veritatis et quasi architecto. </p>
                                <Link to="/about" className="footer-widget-content-link">Read more</Link>                                                    	
                            </div>
                        </div>
                    </div>
                 
                    <div className="col-md-4">
                        <div className="footer-widget">
                            <div className="footer-widget-title">Contact info  </div>
                            <div className="footer-widget-content">
                                <div className="footer-contacts footer-box fl-wrap">
                                    <ul>
                                        <li><span>Call :</span><a href="#">+201017753291</a></li>
                                        <li><span>Write  :</span><a href="mailto:nasser9959@gmail.com">nasser9959@gmail.com</a></li>
                                        
                                    </ul>
                                </div>
                                <Link to="/contact" className="footer-widget-content-link">Get in Touch</Link>                                                    	
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="footer-widget">
                            <div className="footer-widget-title">Subscribe</div>
                            <div className="footer-widget-content">
                                <div className="subcribe-form fl-wrap">
                                    <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                                    <form id="subscribe" className="fl-wrap">
                                        <input className="enteremail" name="email" id="subscribe-email" placeholder="Your Email" spellcheck="false" type="text"/>
                                        <button type="submit" id="subscribe-button" className="subscribe-button color-bg">Send </button>
                                        <label for="subscribe-email" className="subscribe-message"></label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
           
            <div className="footer-bottom fl-wrap">
                <div className="copyright">&#169; TasteBook 2023 . All rights reserved. </div>
                <div className="to-top"><span>Back To Top </span><i className="fal fa-angle-double-up"></i></div>
            </div>
        </div>
        </footer>                           

    
           
         
    </>
   
  )
}

export default Footer