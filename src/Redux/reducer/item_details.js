import { item_details } from "../types/types";
const intialvalue = {details : []}
export const itemDetails = (state = intialvalue , action) =>{
        switch (action.type) {
            case item_details:         
                return {details:action.data};
            default:
                return state;
        }
};  