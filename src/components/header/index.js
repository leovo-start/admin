import React, { Component } from 'react'
import {Icon,Input} from "antd"
import {connect} from "react-redux"
import {header_onblur,header_onfocus,header_mouse,header_leave} from "../../models/header/action"
import "./index.less"
class Header extends Component {

    
    render() {
        let {focused,mouseIn,header_onblur,header_onfocus,header_mouse,header_leave} = this.props;
        return (
            <div className="header">
               <div className="header-left">
                </div>
                <div className="header-right">
                <Icon type="search" className="header-Icon" 
                    onClick={header_mouse}    
                    />               
                    {focused ||mouseIn? <span className="header-serach header-Icon">
                        <Input type="text" placeholder="搜索" 
                        onFocus={header_onfocus}
                        onBlur={header_onblur}
                        onMouseLeave={header_leave}
                        />
                        </span>:null}
                    <Icon type="question-circle" className="header-Icon"/>
                    <div className="header-user">使用文档</div>
                    <Icon type="bell" className="header-Icon"/> 
                    <span>
                        <img src="" alt=""/>
                        <span>欢迎,李俊鹏</span>  
                    </span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.getIn(["header","focused"]),
        mouseIn: state.getIn(["header","mouseIn"])
    }
}
export default connect(mapStateToProps,{header_onblur,header_onfocus,header_mouse,header_leave})(Header)
