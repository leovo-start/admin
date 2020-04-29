import {reducer as HeaderReducer} from "./header/reducer"
import {reducer as AccountReducer} from "./account/reducer"
import {reducer as ListReducer} from "./list/reducer"
import {combineReducers} from "redux-immutable"

export const RootReducer = combineReducers({
    header:HeaderReducer,
    account:AccountReducer,
    List:ListReducer,
})