import { combineReducers } from 'redux';
import { foodCategories } from "../reducer/categories";
import { itemDetails } from "../reducer/item_details";
import { Items } from "../reducer/items";
import { search_items } from "../reducer/search";
import { relatedItems } from "../reducer/relatedItems";
const rootReducer = combineReducers({
    categories: foodCategories,
    items: Items,
    Details:itemDetails,
    search:search_items,
    related:relatedItems
  });
  export default rootReducer;