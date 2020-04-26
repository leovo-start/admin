import {HEADER_ONBLUR,HEADER_ONFOCUS,HEADER_LEAVE,HEADER_MOUSE,HEADER_TRUE,HEADER_FALSE} from "../content"
import {fromJS} from "immutable"
const initialState = fromJS({
    focused:false,
    mouseIn:false,
    menu:false,
})

export const reducer = (state=initialState,action) =>{
    switch(action.type){
    case HEADER_ONFOCUS:
    return state.set("focused",true)    
    case HEADER_ONBLUR:
    return state.set("focused",false)
    case HEADER_MOUSE:
    return state.set("mouseIn",true)    
    case HEADER_LEAVE:
    return state.set("mouseIn",false)
    case HEADER_TRUE:
    return state.set("menu",true)
    case HEADER_FALSE:
    return state.set("menu",false)
    default:
    return state;
    }
   
}