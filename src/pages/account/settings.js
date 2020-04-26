import React, { Component } from 'react'
import {Card,Tabs,Skeleton,Switch,Upload,Button} from "antd"
import "./setting.less"
import UserForm from "./userForm"
const { TabPane } = Tabs;

class Settings extends Component {
    
    state = {
      loading:false
    }
    showSkeleton = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        },2000);
      };
    componentDidMount(){
    this.showSkeleton();
    }
    render () {

        return (
            <Card>
                <Skeleton
                loading={this.state.loading} 
                className="Skeleton"
                avatar={true}
                active={true}
                >
                    <Tabs tabPosition="left" 
                    tabBarStyle={{width:"170px"}}
                    >
                    <TabPane tab="基本设置" key="1" className="setting">
                     <div className="setting-user">
                         <h3>基本设置</h3>
                          <div className="setting-upload">
                              <img src="/ljp.png" alt=""/>
                              <div style={{marginTop:7,marginBottom:10}}>
                             <Upload>
                                  <Button>更换头像</Button>
                              </Upload>
                             </div>
                             <UserForm  wrappedComponentRef = {form =>this.form = form} />
                          </div>
                         </div>
                    </TabPane>
                    <TabPane tab="安全设置" key="2" className="setting">
                         <div className="setting-border">
                         <h3>安全设置</h3>
                         <p>账户密码</p>
                         <p>当前密码强度:强<em>修改</em></p> 
                         </div>
                         <div className="setting-border">
                         <h3>密保手机</h3>
                         <p>已绑定手机:133****3914<em>修改</em></p>
                         </div>
                         <div className="setting-border">
                         <h3>密保问题</h3>
                         <p>未设置密保问题，密保问题可有效保护账户安全<em>修改</em></p>
                         </div>
                         <div className="setting-border">
                         <h3>备用邮箱</h3>
                         <p>已绑定邮箱:89****664.com<em>修改</em></p>
                         </div>
                         <div className="setting-border">
                         <h3>MFA 设备</h3>
                         <p>未绑定 MFA 设备，绑定后，可以进行二次确认<em>修改</em></p>
                         </div>
                    </TabPane>
                    <TabPane tab="账号绑定" key="3" className="setting">
                        <div className="setting-border">
                         <h3>账号绑定</h3>
                         <p>未绑定 MFA 设备，绑定后，可以进行二次确认<em>绑定</em></p>
                         </div>
                         <div className="setting-border">
                         <h3>账号绑定</h3>
                         <p>未绑定 MFA 设备，绑定后，可以进行二次确认<em>绑定</em></p>
                         </div>
                         <div className="setting-border">
                         <h3>账号绑定</h3>
                         <p>未绑定 MFA 设备，绑定后，可以进行二次确认<em>绑定</em></p>
                         </div>
                    </TabPane>
                    <TabPane tab="新消息通知" key="4" className="setting">
                     <div  className="setting-border">
                         <h3>新消息通知</h3>
                         <p>账户密码</p>
                         <p>其他用户的消息将以站内信的形式通知
                         <em><Switch  className="setting-span" checkedChildren="开"  unCheckedChildren="关" defaultChecked /></em>
                         </p>
                    </div>
                         <div className="setting-border">
                         <p>系统消息</p>
                         <p>系统消息将以站内信的形式通知
                             <em><Switch className="setting-span" checkedChildren="开" unCheckedChildren="关"/></em>
                             </p>
                         </div>
                         <div className="setting-border">
                         <p>待办任务</p>
                         <p>待办任务将以站内信的形式通知
                             <em><Switch className="setting-span" checkedChildren="开" unCheckedChildren="关"/></em>
                         </p>
                         </div>
                    </TabPane>
                    </Tabs>
                </Skeleton>
            </Card>
        )
    }
}

export default Settings