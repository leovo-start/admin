import {ACCOUNTLIST} from "../content"
import axios from "axios"

const changelist = (data) =>{
   return {
    type:ACCOUNTLIST,
    accountlist:data.accountlist
   }
}
export const account_list = () =>{
    return (dispatch)=>{
    axios.get("/api/account.json").then(res=>{
      let data = res.data.data;
      dispatch(changelist(data))
    })
    }
}