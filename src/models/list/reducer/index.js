import {LIST_ITEM} from "../content"
import {fromJS} from "immutable"
const initialState = fromJS({
     list : [],
})
export const reducer = (state=initialState,action) =>{
   switch (action.type) {
       case LIST_ITEM:
        return state.merge({
        list:state.get("list").concat(action.list)
        })  
       default:
       return state;
   }
}