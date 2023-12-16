import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faTwitter , faInstagram , faLinkedin } from "@fortawesome/free-brands-svg-icons";
function OurChefs() {
  return (
    <section data-scrollax-parent="true">
    <div className="container">
        <div className="section-title">
            <h4>Our awesome team</h4>
            <h2>Met Our Chefs</h2>
            <div className="dots-separator fl-wrap"><span></span></div>
        </div>
        <div className="about-wrap  fl-wrap">
            <div className="row">
                <div className="col-md-4">
               
               
                    <div className="team-box">
                        <div className="team-photo">
                            <img src="/images/team/1.jpg" alt="" className="respimg"/>
                            <div className="overlay"></div>
                            <div className="team-social">
                                <span className="ts_title">Follow</span>
                                <ul className="no-list-style">
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faFacebookF}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faLinkedin}/></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-info fl-wrap">
                            <h3> Kevin  Gray </h3>
                            <h4>Master chef in New York</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                        </div>
                    </div>
                </div>
            
            
                <div className="col-md-4">
                    <div className="team-box">
                        <div className="team-photo">
                            <img src="/images/team/2.jpg" alt="" className="respimg"/>
                            <div className="overlay"></div>
                            <div className="team-social">
                                <span className="ts_title">Follow</span>
                                <ul className="no-list-style">
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faFacebookF}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faLinkedin}/></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-info fl-wrap">
                            <h3> Austin Evon </h3>
                            <h4>Master chef in Florida</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                        </div>
                    </div>
                </div>
             
             
                <div className="col-md-4">
                    <div className="team-box">
                        <div className="team-photo">
                            <img src="/images/team/3.jpg" alt="" className="respimg"/>
                            <div className="overlay"></div>
                            <div className="team-social">
                                <span className="ts_title">Follow</span>
                                <ul className="no-list-style">
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faFacebookF}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                    <li><a href="#" target="_blank"><i className=""><FontAwesomeIcon icon={faLinkedin}/></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-info fl-wrap">
                            <h3> Taylor Roberts </h3>
                            <h4>Master chef in Maiami</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                        </div>
                    </div>
                </div>
            
               
            </div>
            <div className="section-dec sec-dec_top"></div>
        </div>
        <div className="wave-bg wave-bg_right " data-scrollax="properties: { translateY: '-150px' }"></div>
    </div>
</section>
  )
}

export default OurChefs