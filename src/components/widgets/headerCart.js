import React , {useState , useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useRemoveCart from "../../hooks/useRemoveCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import { Link } from 'react-router-dom';
function HeaderCart({data,smallCart}) {
    const [total, settotal] = useState(0);
    const [subtotal, setsubtotal] = useState(0);
    const {removeItem , cartData} = useRemoveCart()
        const removeFromCart= (id)=>{
            removeItem(id)
      }
    useEffect(() => {
        let sum = 0
        let Shipping = 12;
        cartData.map((item)=>{
            sum += item.price * item.quantity
        })
        setsubtotal(sum)
        settotal(sum + Shipping)
    }, [cartData]);
  return (
    <div className={`header-cart_wrap ${smallCart===true ? "vis_cart" : "novis_cart"} `}  >
                        <div className="header-cart_title">Your Cart <span>{data.length} items</span></div>
                        <div className="header-cart_wrap_container fl-wrap">
                            <div className="box-widget-content">
                                <div className="widget-posts fl-wrap">
                                    <ol>
                                        {
                                            data.map((item)=>{
                                                return(
                                                    <li className="clearfix">
                                                    <a href="#"  className="widget-posts-img"><img src={item.image} className="respimg" alt=""/></a>
                                                    <div className="widget-posts-descr">
                                                        <Link to={`/product/${item.id}`} title="">{item.title}</Link>
                                                        <div className="widget-posts-descr_calc clearfix">{item.quantity} <span>x</span> $28</div>
                                                    </div>
                                                    <div className="clear-cart_button"><i className="" onClick={()=>removeFromCart(item.id)} ><FontAwesomeIcon icon={faXmark}/></i></div>
                                                </li>
                                                )
                                            })
                                        }
                                      
                                      
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="header-cart_wrap_total fl-wrap">
                            <div className="header-cart_wrap_total_item">Subtotal : <span>${subtotal}</span></div>
                        </div>
                        <div className="header-cart_wrap_footer fl-wrap">
                            <Link to="/cart"> View Cart</Link>
                            <a href="checkout.html">  Checkout</a>
                        </div>
    </div>
  )
}

export default HeaderCart