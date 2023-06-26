import { items, search } from "../types/types";
const intialvalue = {items : []}
export const Items = (state = intialvalue , action) =>{
        switch (action.type) {
            case items:         
                return {items:action.data};
          
            default:
                return state;
        }
};  