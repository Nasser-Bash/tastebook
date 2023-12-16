import React , {useEffect,useState} from 'react'
import { Col, Row , Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Cards({title,image ,id}) {
  return (
             <div className="hero-menu-item  p-4 ">
                <Row>
                    <Col md={2}>
                     <img src={image}alt="" className="hero-menu-item-img  my-auto  image-popup"/>
                     
                    </Col>
                    
                    
                           <Col md={10}>
                           <Link to={`/product/${id}`}>
                    <div className=' '>
                   
                      <div className="hero-menu-item-title fl-wrap ">
             <h6> {title} </h6>    
             <div className="hmi-dec"></div>
         <span className="hero-menu-item-price">$29</span>
       
                      </div>
                      
                 <div className="hero-menu-item-details">
                   <p>Seasoned with an herb crust, served with au jus and handcarved to order.</p>
                  
                     </div>
                   
                  </div>
                  </Link>
                    </Col>
                    
                </Row>
           
           
             
                          </div>  
    
           
    
  )
}

export default Cards