import React ,{useEffect,useState}from 'react'
import HeroSection2 from "../components/sections/HeroSection2";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useRemoveCart from "../hooks/useRemoveCart";
import useUpdateCartItem from "../hooks/useUpdateCartItem";
function Cart() {
    const [total, settotal] = useState(0);
    const [subtotal, setsubtotal] = useState(0);
    const {removeItem , cartData} = useRemoveCart()
    const {editItem} = useUpdateCartItem()
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
    
const updateitem = (e,id)=>{
         editItem(e.target.value,id)
    }
    
  return (
    <div id='wrapper'>
    <HeroSection2/>
    <div className="content">
    <section className="hidden-section">
                        <div className="container">

                            {cartData.length > 0 ? (
                            <div className="row">
                                <div className="col-md-8">
                                    <h4 className="cart-title">Your cart <span>{cartData.length} items</span></h4>
                                    <table className="table table-border checkout-table text-white">
                                        <tbody>
                                            <tr>
                                                <th className="hidden-xs">Item</th>
                                                <th>Description</th>
                                                <th className="hidden-xs">Price</th>
                                                <th>Count</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                           {
                                            cartData.map((item)=>{
                                                return(
                                            <tr className='text-white'>
                                                <td className="hidden-xs">
                                                    <a href="#"><img src={item.image} alt="" className="respimg"/></a>
                                                </td>
                                                <td>
                                                    <h5 className="product-name">{item.title}</h5>
                                                </td>
                                                <td className="hidden-xs">
                                                    <h5 className="product-title order-money">${item.price}</h5>
                                                </td>
                                                <td>
                                                <input onChange={(e)=>updateitem(e,item.id)} type="number" name="quantity" max="50" min="1" defaultValue={item.quantity} className="order-count"/>
                                                </td>
                                                <td>
                                                    <h5 className="order-money">${item.price * item.quantity }</h5>
                                                </td>
                                                <td className="pr-remove">
                                                    <a onClick={()=>removeFromCart(item.id)}  title="Remove"><i className=""><FontAwesomeIcon icon={faXmark}/></i></a>
                                                </td>
                                            </tr>)
                                            })
                                           }
                                            
                                        </tbody>
                                    </table>
                                                                  
                                </div>
                                <div className="col-md-4">
                                   
                                    <div className="cart-totals dark-bg fl-wrap">
                                        <h3>Cart totals</h3>
                                        <table className="total-table">
                                            <tbody>
                                                <tr>
                                                    <th>Cart Subtotal:</th>
                                                    <td>${subtotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping Total:</th>
                                                    <td>$12</td>
                                                </tr>
                                                <tr>
                                                    <th>Total:</th>
                                                    <td>${total}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button type="submit" className="cart-totals_btn color-bg">Proceed to Checkout</button>
                                    </div>
                                                                 
                                </div>
                            </div>
                             ) : (
                                <>
                                 <h1 className='empty-cart text-white'> Your cart is empty !!!!</h1>
                                    <Link to="/menu"><Button className='boreder-none' >Shopping Now </Button></Link>
                                </>
                               
                             )}
                        </div>
                        <div className="section-bg">
                            <div className="bg"  data-bg="images/bg/dec/section-bg.png"></div>
                        </div>
                    </section>
                    <div class="brush-dec2 brush-dec_bottom"></div>
    </div>
    </div>
     
  )
}

export default Cart