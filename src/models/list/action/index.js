import {LIST_ITEM} from "../content"
import "../../../mock/listsearch"
import axios from "axios"
import {fromJS} from "immutable"
const chang_list = (list) =>{
    return {
    type:LIST_ITEM,
    list:fromJS(list)
    }
}
export const list_item = () =>{
    return (dispatch)=>{
    axios.get("/list_item.json").then(res=>{
     let data = res.data.data;
     dispatch(chang_list(data))
    })
    }
}
