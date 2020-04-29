import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Menu,Icon,Button,Layout} from "antd"
import {MenuList} from "../../config"
import {header_true,header_false,switchMenu} from "../../models/header/action"
import {connect} from "react-redux"
import "./index.less"
const MenuItem = Menu.Item;
const {SubMenu} = Menu;
const { Sider } = Layout;
 class NavLeft extends Component {

      state = {
        collapsed: false,
        currentKey:"",
      };
    componentWillMount(){
    const menu = this.MenuItems(MenuList);
    let currentKey = window.location.hash.replace(/#|\?.*$/g,"")
    this.setState({menu,currentKey})
    }
    handleClick = ({item,key}) =>{
      this.props.switchMenu(item.props.title)
      this.setState({
        currentKey:key   
      })
    }
    MenuItems = (data) =>{
       return  data.map(item=>{
         if(item.children){
            return <SubMenu inlineCollapsed={this.state.collapsed}
            key={item.key}
            title={
              <span>
                  <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
            }>
                {this.MenuItems(item.children)}
            </SubMenu>
         }
        return (
            <MenuItem title={item.title} key={item.key}>
                <Link to={item.key}>
                 <Icon type={item.icon}/>
                 <span>{item.title}</span>
                </Link>     
            </MenuItem>
        )
        })
    }
      toggleCollapsed = () => {
        let {header_true,header_false} =this.props;
        this.setState({
          collapsed: !this.state.collapsed,
        });
        this.state.collapsed?header_false():header_true();
      };
    render() {   
      const  {collapsed } = this.state;
      let flag = collapsed?"112px":"233px"
        return (
      <Layout  className="nav-left">
               <Sider
                trigger={null} 
                collapsed={this.state.collapsed}          
               >
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginLeft:flag,marginTop:12 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>   
                 <div className="nav-content">
                     <img src="/logo-ant.svg" alt=""/>
                   {
                    this.state.collapsed?null:<h3>Ant Design管理系统</h3>
                   }
                 </div>   
               <Menu theme="dark"
                  mode="inline" 
                  selectedKeys={this.state.currentKey}
                  onClick={this.handleClick}   
                  >
                     {this.state.menu}
                 </Menu>
               </Sider>  
    </Layout>
        )
    }
}

export default connect(null,{header_true,header_false,switchMenu})(NavLeft)