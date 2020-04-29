import React from 'react';
import ReactDOM from 'react-dom';
import RouterZhu from "./router"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import {RootReducer} from "./models/reducer"
import thnuk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import "./assets/iconfont/iconfont.css"
const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thnuk)))
ReactDOM.render(
  <Provider store={store}>
    <RouterZhu/>
  </Provider>,
  document.getElementById('root')
);
