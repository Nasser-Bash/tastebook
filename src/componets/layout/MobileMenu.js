import React from 'react';
import { Link  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight , faArrowLeft}  from "@fortawesome/free-solid-svg-icons";
const MobileMenu = ({active ,setactive,isActive}) => {
  const closeMenu = ()=>{
    setactive(false)
  }
  return (
   
    <div className= {` main-menu d-block d-lg-none ${active ===true ? 'vismobmenu' : ''}`}>
  
    <nav className=' menusb sliding-menu'>
    <div className="sliding-menu-wrapper" style={{width: '1120px', marginLeft: '0px'}}><ul id="menu-panel-xglft" className="menu-panel-root" style={{width: "280px"}}>
                    <li >
                        <a href="#menu-panel-sgt0h" className="nav">Home <i>
                        <FontAwesomeIcon icon={faCaretRight}/></i></a>
                    </li>
                    <li onClick={closeMenu}>
                    <Link className={isActive('/menu')} to="/menu">Menu</Link>
                 
                    </li>
                    <li onClick={closeMenu}> <Link className={isActive('/about')} to="/about">About Us</Link></li>
                    <li onClick={closeMenu}> <Link className={isActive('/cart')} to="/cart">Cart</Link></li>
                    
                   
                </ul>
                <ul id="menu-panel-sgt0h" className="menu-panel" style={{width: "280px"}}><a className="back" href="#menu-panel-xglft"><i><FontAwesomeIcon icon={faArrowLeft}/></i></a>
                <Link  className={isActive('/')} to="/"> <li onClick={closeMenu} >Parallax Image</li></Link>
                <Link className={isActive('/home2')} to="/home2"> <li onClick={closeMenu}>Slider</li></Link>
                <Link className={isActive('/home3')} to="/home3"> <li onClick={closeMenu}>Carousel</li></Link>
                </ul>
              </div>
    </nav>
    </div>
  );
};

export default MobileMenu;