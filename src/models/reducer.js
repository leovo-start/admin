import {reducer as HeaderReducer} from "./header/reducer"
import {reducer as AccountReducer} from "./account/reducer"
import {combineReducers} from "redux-immutable"

export const RootReducer = combineReducers({
    header:HeaderReducer,
    account:AccountReducer
})