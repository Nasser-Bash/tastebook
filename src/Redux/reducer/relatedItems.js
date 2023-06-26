import { related_items } from "../types/types";
const intialvalue = {related : []}
export const relatedItems = (state = intialvalue , action) =>{
        switch (action.type) {
            case related_items:         
                return {related:action.data};
            default:
                return state;
        }
};  