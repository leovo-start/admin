import {HEADER_ONBLUR,HEADER_ONFOCUS,HEADER_LEAVE,HEADER_MOUSE,HEADER_TRUE,HEADER_FALSE,SWITCH_MENU} from "../content"
import {fromJS} from "immutable"
export const header_onfocus = () =>{
    return {
        type:HEADER_ONFOCUS
    }
}
export const header_onblur = () =>{
    return {
        type:HEADER_ONBLUR
    }
}
export const header_mouse = () =>{
    return {
        type:HEADER_MOUSE
    }
}
export const header_leave = () =>{
    return {
        type:HEADER_LEAVE
    }
}
export const header_true = () =>{
    return {
        type:HEADER_TRUE
    }
}
export const header_false = () =>{
    return {
        type:HEADER_FALSE
    }
}
export const switchMenu = (menuName) =>{
    return {
        type:SWITCH_MENU,
        menuName:fromJS(menuName)
    }
}