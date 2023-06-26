import { search } from "../types/types";
const intialvalue = {searchItems : []}
export const search_items = (state = intialvalue , action) =>{
        switch (action.type) {
            case search:         
                return {searchItems:action.data};
            default:
                return state;
        }
};  