import {ACCOUNTLIST } from "../content"
import { fromJS} from "immutable"
const initialState = fromJS({
    accountlist : [],
})
export const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case ACCOUNTLIST:
        return state.merge({
            "accountlist":fromJS(action.accountlist)
        })
        default:
        return state;
    }
}