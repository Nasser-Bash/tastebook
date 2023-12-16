import {food_categories,items,item_details,search,related_items,Update_cart,Update_item_cart} from "../types/types";
import { api } from "../../api/config";
import { store } from "../store/store";
import axios from "axios";
export const getAllCategories = (setLoading)=>{
        return async (dispatch) =>{
            const repos = await axios.get(`${api.baseUrl}/${api.type.categories}`);
            setLoading(false)
            dispatch({type: food_categories , data:repos.data.categories})
       
    }
}
export const getItems = (category,setLoading)=>{
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.filter}?c=${category}`);
    
        setLoading(false)
        dispatch({type: items , data:repos.data.meals})
   
}
}
export const getItemdetails = (id)=>{
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.meal_details}?i=${id}`);
        
                dispatch({type: item_details , data:repos.data.meals})
   
}
}
export const getrelatedItems = (category , id)=>{
  return async (dispatch) =>{
      const repos = await axios.get(`${api.baseUrl}/${api.type.filter}?c=${category}`);
      const filter =  repos.data.meals.filter((item) => item.idMeal !== id);
      dispatch({type: related_items , data:filter})
 
}
}
export const searchItem = (word)=>{
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.search_item}?s=${word}`);
        dispatch({type: search , data:repos.data.meals})
   
}
}
export const updateLocalstorage = (cart,setLocalStorage) => {
  return  (dispatch) => {
    const intervalId = setInterval(() => {
      setLocalStorage(cart);
    }, 1000);

    dispatch({ type: Update_cart });
    return () => {
      clearInterval(intervalId);
    };
   
  }
  
}
export const updateCartItem = (value,id) => {
  return  (dispatch) => {
    const data = JSON.parse(window.localStorage.getItem('cart'));
    const selectedItem = data.find(item => item.id === id);
    selectedItem.quantity = value;
    window.localStorage.setItem('cart', JSON.stringify(data))

    dispatch({ type: Update_item_cart });
  }
  
}
