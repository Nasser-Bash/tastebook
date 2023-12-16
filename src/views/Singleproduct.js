import React from 'react'
import HeroSection2 from "../components/sections/HeroSection2";
import Sidebar from "../components/layout/Sidebar";
import Review from "../components/sections/Review";
import RelatedItems from "../components/sections/RelatedItems";
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector} from "react-redux";
import { getItemdetails  } from "../Redux/action/actions";
import { useEffect , useState } from 'react';
import Cards2 from "../components/widgets/cards2";
import { Row ,Form} from 'react-bootstrap';
import useAddToCart from "../hooks/useAddToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link  } from "react-router-dom";
import { faArrowRight , faEye , faShoppingBag  } from "@fortawesome/free-solid-svg-icons";
function Singleproduct() {
    const itemID = useParams();
    const dispatch = useDispatch();
    const {  addToCart , check_item_cart } = useAddToCart(itemID.id);

    const data = useSelector((state=>state.Details.details));
    const [search_view, setsearch_view] = useState(false);
    const [quantity, setquantity] = useState(1);
    useEffect(() => {
        dispatch(getItemdetails(itemID.id));
        setsearch_view(false);
    }, [itemID.id]);

    
   
    const additem =  (e) =>{
        setquantity(e.target.value)
      }
      const addcart =  (e)=>{
            e.preventDefault();  
            addToCart(itemID.id,data[0].strMeal,data[0].strMealThumb,quantity);
    }
  return (
    <div id='wrapper'>
      <HeroSection2/>
      <div className="content">
    <section className="hidden-section">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-8">
                                {
                                    search_view &&(
                                        <Row>
                                                <Cards2/>
                                        </Row>
                                        
                                    )
                                }
                                {
                                    !search_view && (
                                      <>
                                        <div className="fl-wrap post-container">
                                     {
                                        data.map((element)=>{
                                            return(
                                                <>
                                                  <div className="post fl-wrap fw-post">
                                                <div className="shop-header-title fl-wrap">
                                                    <h2>{element.strMeal}</h2>
                                                    <div className="shop-header-title_opt">
                                                        <ul>
                                                            <li><span className="menu-single-preice">Price: <strong>$29.00</strong></span></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                              
                                                <div className="blog-media fl-wrap">
                                                    <div className="single-slider-wrap">
                                                        <div className=" fl-wrap">
                                                        <img src={element.strMealThumb} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                          
                                                <div className="blog-text fl-wrap">
                                                    <div className="pr-tags fl-wrap">
                                                        <span>Categories : </span>
                                                        <ul>
                                                            <li><a href="#">{element.strCategory} </a></li>
                                                          
                                                        </ul>
                                                    </div>
                                                    <p>
                                                    {element.strInstructions}
                                                    
                                                    </p>
                                                    <div className="pr-tags fl-wrap">
                                                        <span>Ingredients : </span>
                                                        <ul className='text-white mt-1'>
                                                            <li className='  me-2'>{element.strIngredient1} ,</li>
                                                            <li className='  me-2'>{element.strIngredient2} ,</li>
                                                            <li className='  me-2'>{element.strIngredient3} ,</li>
                                                            <li className='  me-2'>{element.strIngredient4} ,</li>
                                                            <li className='  me-2'>{element.strIngredient5} ,</li>
                                                            <li className='  me-2'>{element.strIngredient6} ,</li>
                                                            <li className='  me-2'>{element.strIngredient7} ,</li>
                                                            <li className='  me-2'>{element.strIngredient8} ,</li>
                                                            <li className='  me-2'>{element.strIngredient9} ,</li>
                                                            <li className='  me-2'>{element.strIngredient10}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                <div className="shop-item-footer fl-wrap">
                                                <Form onSubmit={addcart}>
                                                    <div className="qty_btn">
                                                    
                                                        <input onChange={additem} type="number" name="quantity" max="50" min="1" defaultValue={quantity} className="order-count"/>
                                                       
                                                        <button className="btn" disabled={check_item_cart===true ? true : false} type='submit'  >Add to cart <i className=""><FontAwesomeIcon icon={faArrowRight}/></i></button>
                                                    </div>
                                                   
                                                    </Form>
                                                    
                                                    <ul className="post-counter">
                                                        <li><i className=""><FontAwesomeIcon icon={faEye}/></i><span>567</span></li>
                                                        <li><i className=""><FontAwesomeIcon icon={faShoppingBag}/></i><span>256</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                                     
                                           
                                          <Review itemId={itemID.id}/>
                                           
                                            <RelatedItems itemId={itemID.id} category={element.strCategory}/>
                                                </>
                                            )
                                        })
                                     }
                                          
                                                                                    
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="bold-separator bold-separator_dark"><span></span></div>
                                        <div className="clearfix"></div>
                                        <Link to="/menu" className="btn  shop-btn">Back to Shop<i className=""><FontAwesomeIcon icon={faArrowRight}/></i></Link>  																		
                                        </>
                                    )
                                }
     </div>
                               <Sidebar setsearch_view={setsearch_view}/>
                                  
                            </div>
                            <div className="fl-wrap limit-box"></div>
                        </div>
                        <div className="section-bg">
                            <img className="bg"  src="/images/bg/dec/section-bg.png"/>
                        </div>
                    </section>
                    </div>
                    </div>
  )
}

export default Singleproduct