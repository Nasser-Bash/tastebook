import React , {useState} from 'react'


const useUpdateCartItem = () => {
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const editItem = (value,itemid) => {
        const selectedItem = cartData.find(item => item.id === itemid);
        selectedItem.quantity = value;
        window.localStorage.setItem('cart', JSON.stringify(cartData))
                 return editItem;
    }
    return {  editItem };
    }
    

export default useUpdateCartItem