import React , {useState,useEffect} from 'react'

const useRemoveCart = () => {
    const [cartData, setCartData] = useState([]);
useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(data);
    localStorage.setItem('cart', JSON.stringify(data));
  }, []);
const removeItem = (itemid) => {
    const updatedCartData = cartData.filter((cartItem) => cartItem.id !== itemid);
    setCartData(updatedCartData);
    window.localStorage.setItem('cart', JSON.stringify(updatedCartData))
    return removeItem;
}
return {  removeItem ,cartData};
}


export default useRemoveCart