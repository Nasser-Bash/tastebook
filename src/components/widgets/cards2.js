import React, { useEffect , useState } from 'react'
import { Col } from 'react-bootstrap';
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Cards2() {
    const data  = useSelector((state=>state.search.searchItems));
  return (
    <>
    {   
        data !== null ?
        data.map((item)=>{
        return(
          
            <Col md={6} className='mb-3'>
                 
            <div key={item.idMeal} >
            <div className="grid-item-holder hov_zoom">
                <a href={item.strMealThumb}  className="box-media-zoom   popup-image" target='_blank'><i className=""><FontAwesomeIcon icon={faSearch}/></i></a>
                <img className='item-image' src={item.strMealThumb}    alt=""/>
            </div>
            <div className="grid-item-details">
            <Link to={`/product/${item.idMeal}`}>
                <h3><a>{item.strMeal}</a> <span>Sale -30%</span></h3>
                </Link>
                <p>Seasoned with an herb crust, served with au jus and handcarved to order. </p>
                <div className="grid-item_price">
                    <span>$29</span>
                </div>
            </div>
            </div>
          
            </Col>
    
        )
        }) : <h1>No result found</h1>
    }
   </>
  )
}

export default Cards2