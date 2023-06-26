import React, { useEffect }  from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
const UseBackToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 8000 // adjust the duration as needed
      });
    }, [pathname]);
    return null;
}

export default UseBackToTop;
