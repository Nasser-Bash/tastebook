import React ,{useEffect, useState} from 'react'
import { Link ,useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag , faCaretDown ,faCaretRight , faArrowLeft}  from "@fortawesome/free-solid-svg-icons";
import HeaderCart from "../widgets/headerCart";
import MobileMenu from "./MobileMenu";
function Header() {
    const [activeNav, setActiveNav] = useState(false);
    const [mobileMenu, setmobileMenu] = useState(false);
    const [smallCart, setsmallCart] = useState(false);
    const [localStorageLength, setLocalStorage] = useState(JSON.parse(window.localStorage.getItem('cart'))?.length || 0);
    const [cartData, setcartData] = useState(JSON.parse(window.localStorage.getItem('cart')) || []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const cart = JSON.parse(window.localStorage.getItem('cart')) ; 
            setLocalStorage(cart?.length || 0 );
            setcartData(cart);
          }, 1000);
          return () => {
            clearInterval(intervalId);
          };
      }, []);
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 100) {
            setActiveNav(true);
          } else {
            setActiveNav(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
     
      const location = useLocation();

      const isActive = (path) => {
        return location.pathname === path ? 'act-link' : '';
      }
  return (
    <div className='main-header'>
     
            <div className={` fl-wrap ${activeNav===true ? "header-inner-fixed" : "header-inner" } `}>
            <div className="container">
                <div className="header-container fl-wrap">
                    <Link to="/" className="logo-holder"><img src="/images/logo.png" alt=""/></Link>
                    <div className="show-cart sc_btn htact" onClick={()=>setsmallCart(!smallCart)}><i className="" ><FontAwesomeIcon icon={faShoppingBag}/></i><span className="show-cart_count">{localStorageLength}</span></div>

                    <div className="nav-button-wrap" onClick={()=>setmobileMenu(!mobileMenu)}>
                        <div className="nav-button">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                
                    <div className= {`nav-holder main-menu d-md-none d-lg-block`}>
                   
                        <nav>
                            <ul>
                                <li>
                                <a href="#">Home<i className=""><FontAwesomeIcon icon={faCaretDown}/></i></a>
                                    
                                    <ul>
                                    <Link className={isActive('/')} to="/"> <li >Parallax Image</li></Link>

                                    <Link className={isActive('/home2')} to="/home2"> <li >Slider</li></Link>

                                    <Link className={isActive('/home3')} to="/home3"> <li >Carousel</li></Link>
                                    </ul>
                                    
                                </li>
                                <li>
                                    <Link className={isActive('/menu')} to="/menu">Menu</Link>
                                </li>
                                <li><Link className={isActive('/about')} to="/about">About</Link></li>
                                
                            </ul>
                        </nav>
          
                    </div>
                    
                    <MobileMenu active={mobileMenu} setactive={setmobileMenu} isActive={isActive}/>
                   

                        <HeaderCart data={cartData} smallCart={smallCart}/>
                    <div className="share-wrapper isShare">
                        <div className="share-container fl-wrap"></div>
                    </div>
                
                </div>
            </div>
        </div>
        
</div>
  )
}

export default Header