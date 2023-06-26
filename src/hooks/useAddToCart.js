import React , {useEffect,useState} from 'react'

const useAddToCart = (id) => {

const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);
const [check_item_cart, setcheck_item_cart] = useState(false);
useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(cart);
    const item_in_crt = cartData.some(cartItem => cartItem.id === id);
    if(item_in_crt){
      setcheck_item_cart(true);
    } 
  }, [id]);
const addToCart = (itemid, itemTitle, itemImage, itemQuantity = 1) => {
    const updatedCart = {
        id: itemid,
        title: itemTitle,
        image: itemImage,
        price: 28.00,
        quantity:itemQuantity
      };
      const updatedCartData = [...cartData, updatedCart];
      console.log(updatedCartData);
      window.localStorage.setItem('cart', JSON.stringify(updatedCartData));
      setcheck_item_cart(true);
             return addToCart;
}
return {  addToCart , check_item_cart };
}


export default useAddToCart