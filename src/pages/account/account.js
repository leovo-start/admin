import React, { Component } from 'react'
import {Row,Col,Card,Icon,Button,Input,Skeleton } from "antd"
import {connect} from "react-redux"
import {account_list} from "../../models/account/action"
import "./index.less"
class Account extends Component {

    state = {
    inputValue : "",
    visible : false,
    loading: false,
    list : [],
    }
    //DidMount获取数据
    componentDidMount(){
    this.props.account_list();
    this.showSkeleton();
    }
    //获取value值
    handleChange = (e) =>{
    this.setState({inputValue:e.target.value})
    }
    addClick = () =>{
    this.setState({visible:true})
    }
    PressEnter = () =>{
    let arr = this.state.list;
    arr.push(this.state.inputValue)
    console.log(arr)
    this.state.inputValue = "";
    this.setState({list:arr,visible:false})    
    }
    // 骨架控件
    showSkeleton = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 5000);
      };
    
    render () {
        let {visible } = this.state;
        let flag = visible?"inline-block":"none";
        let flot = visible?"none":"inline-block";
        return (
        <Row> 
             <Col span={5} style={{marginRight:20}}>  
                   <Card>
                   <Skeleton loading={this.state.loading} 
                        className="Skeleton"
                        avatar={true}
                        active={true}
                >       
                       <div className="account-content">
                           <img src="/ljp.png" alt=""/>
                            <h3>李俊鹏</h3>
                           <p>海纳百川,有容乃大</p>
                       </div>
                       <div className="account-link">
                          <p><Icon type="team" className="icon"/>社交专家</p>
                          <p><Icon type="car"  className="icon"/>Link部 - 李俊鹏</p>
                          <p><Icon type="bank" className="icon"/>浙江杭州</p>
                       </div>
                       <div className="account-card">
                            <p>标签</p>
                            <span>大长腿</span>
                            <span>专注设计</span>
                            <span>海纳百川</span>
                            <span>人才</span>
                            {this.state.list.map((item,index)=>{
                                return <span key={index}>{item}</span>
                            })}
                            <Button type="dashed" style={{height:"24px",float:"left",display:flot}}
                             onClick={this.addClick}>
                             <Icon type="plus"/>
                            </Button>
                            <Input type="text" 
                            style={{width:"100px",height:"24px",display:flag}}
                            value={this.state.inputValue}
                            onChange = {this.handleChange}
                            onPressEnter = {this.PressEnter}
                            />
                       </div>
                        <div className="account-timo">
                          <p className="account-item">团队</p>
                          <p><Icon type="alipay" className="icon one"/>支付宝</p>
                          <p><Icon type="reddit"  className="icon two"/>考拉</p>
                          <p><Icon type="qq" className="icon three"/>QQ</p>
                          <p><Icon type="wechat" className="icon four"/>微信</p>
                          <p><Icon type="google"  className="icon five"/>酷狗</p>
                          <p><Icon type="weibo" className="icon sex"/>微博</p>          
                        </div>
                        </Skeleton> 
                   </Card>
                   </Col>   
                   <Col span={18}>
                   <Card title="文章(10)">
                       {
                        (
                            this.props.accountlist.map((item,index)=>{
                                let list = item.toJS();
                                let arr = list.item;
                              return (
                                 <div className="account-title" key={index}>
                                    <h3>{item.get("title")}</h3>
                                    <span className="account-Item">Ant Design</span>
                                    <span className="account-Item">设计语言</span>
                                    <span className="account-Item">蚂蚁金服</span>
                                    <p>{item.get("content")}</p>
                                    <p><Icon type="alipay" className="icon one"/>{item.get("list")}
                                    <span>{item.get("time")}</span>
                                    </p>
                                    <p>
                                        <span><Icon type="star" className="icon"/>{item.get("xing")}</span>|
                                        <span><Icon type="like"  className="icon"/>{item.get("zhan")}</span>|
                                        <span><Icon type="wechat"  className="icon"/>{item.get("weixin")}</span>
                                    </p>
                                </div>
    
                              )  
                            })
                        )
                       }
                   </Card>
                   </Col>    
    </Row>    
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        accountlist: state.getIn(["account","accountlist"])
    }
}
export default connect(mapStateToProps,{account_list})(Account)