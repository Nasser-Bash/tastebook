import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Cards3({title,id,image}) {
   
  return (     
    <div key={title} className='my-3' >
    <div className="grid-item-holder hov_zoom">
        <a href={image}  className="box-media-zoom   popup-image" target='_blank'><i className=""><FontAwesomeIcon icon={faSearch}/></i></a>
        <img className='item-image' src={image}    alt=""/>
    </div>
    <div className="grid-item-details">
    <Link to={`/product/${id}`}>
        <h3><a>{title}</a> <span>Sale -30%</span></h3>
        </Link>
        <p>Seasoned with an herb crust, served with au jus and handcarved to order. </p>
        <div className="grid-item_price">
            <span>$29</span>
        </div>
    </div>
    </div>
  
  )
}

export default Cards3