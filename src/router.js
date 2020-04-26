import React, { Component } from 'react'
import Admin from "./pages/admin"
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Home from "./pages/home"
import Account from "./pages/account/account"
import Setting from "./pages/account/settings"
import Basic from "./pages/form/basic"
import Height from "./pages/form/height"
import Step from "./pages/form/step"
import Search from "./pages/list/search"
import ListSearch from "./pages/list/ListSearch"
import ListCard from "./pages/list/ListCard"
import ListBasic from "./pages/list/Listbasic"
import Success from "./pages/error/success"
import Error from "./pages/error/error"
import Basics from "./pages/proflie/basics"
import LineGhet from "./pages/proflie/lineghet"
export default class RouterZhu extends Component {
    render() {
        return (
            <div>
               <Router>
                   <Admin>
                   <Switch>
                       <Route path ="/admin/home" component={Home}/>
                       <Route path ="/admin/form/basic" component={Basic}/>
                       <Route path ="/admin/form/height" component={Height}/>
                       <Route path ="/admin/form/step" component={Step}/>
                       <Route path ="/admin/list/search" component={Step}/>
                       <Route path ="/admin/list/search" component={Search}/>
                       <Route path ="/admin/list/search-list" component={ListSearch}/>
                       <Route path ="/admin/list/basic-list" component={ListBasic}/>
                       <Route path ="/admin/list/card-list" component={ListCard}/>
                       <Route path ="/admin/result/success" component={Success}/>
                       <Route path ="/admin/result/error" component={Error}/>
                       <Route path ="/admin/proflie/basic" component={Basics}/>
                       <Route path ="/admin/proflie/height" component={LineGhet}/>
                       <Route path ="/admin/account/center" component={Account}/>
                       <Route path ="/admin/account/settings" component={Setting}/>
                   </Switch>
                   </Admin>
               </Router>
            </div>
        )
    }
}
