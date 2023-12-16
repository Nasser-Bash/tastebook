import React from 'react'
import { Route ,Routes } from "react-router-dom";
import Home from "../views/Home";
import Home2 from "../views/Home2";
import Home3 from "../views/Home3";
import About from "../views/About";
import Cart from "../views/Cart";
import Contact from "../views/Contact";
import Menu from "../views/Menu";
import Singleproduct from "../views/Singleproduct";
import useBackToTop from "../hooks/useBackToTop";
function MainRoutes() {
  const scrollToTop = useBackToTop();
 
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/home3' element={<Home3/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Singleproduct/>}/>
    </Routes>
  )
}

export default MainRoutes