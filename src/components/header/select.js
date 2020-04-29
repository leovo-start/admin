import React, { Component,Fragment} from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import {Link,withRouter} from "react-router-dom"
import {connect} from "react-redux"
class Select extends Component {
    
    state = {
     user:"李俊鹏",
    }
    render () {
        const menu = (
            <Menu>
              <Menu.Item key="1">
             
               <Link to="/admin/account/center"><Icon type="user" />  个人中心</Link>
              </Menu.Item>
              <Menu.Item key="2">
               <Link to="/admin/account/settings"><Icon type="user" /> 个人设置</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="user" />
                退出登录
              </Menu.Item>
            </Menu>
          );     
        return (
        <Fragment>
             <Dropdown overlay={menu}
              overlayStyle={{
                  width:150,
                  paddingTop:20
                  }}>
             <span>
             欢迎,{this.state.user} <img src="/ljp.png" alt="" style={{width:24,height:24}}/>
             </span>
            </Dropdown>
          </Fragment>
        )
    }
}
export default Select;