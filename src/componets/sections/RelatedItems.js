import React ,{useEffect} from 'react'
import { getrelatedItems } from "../../Redux/action/actions";
import { useDispatch , useSelector } from "react-redux";
import { Link } from 'react-router-dom';
function RelatedItems({category , itemId}) {
    const related_products = useSelector((state=> state.related.related)) 
    const dispatch = useDispatch();
    const data = related_products.slice(0, 3);
  
    useEffect(() => {
        dispatch(getrelatedItems(category,itemId))
    }, [itemId]);
  return (
    <div className="post-related fl-wrap">
       <h6 className="comments-title">You Might Also Like</h6>                        
          <div className=" row">
            {
                data.map((product)=>{
                    return(
                    <div className="item-related col-md-4">
                    <img src={product.strMealThumb}   alt=""/>
                     <h3><Link to={`/product/${product.idMeal}`}>{product.strMeal}</Link></h3>
                    <span className="post-date post-price">$29.00</span>
               </div>
                )})
            }                  
         
                                                                                        
            </div>
         </div>
  )
}

export default RelatedItems