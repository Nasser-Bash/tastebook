import { food_categories } from "../types/types";
const intialvalue = {categories : []}
export const foodCategories = (state = intialvalue , action) =>{
        switch (action.type) {
            case food_categories:         
                return {categories:action.data};
            default:
                return state;
        }
};  