import React, { Component,Fragment } from 'react'
import {Card,Form,Input,Button,Table} from "antd"
import "./index.less"
import "../../mock/listsearch"
import axios from "axios"
const FormItem = Form.Item;
class Listbasic extends Component {
    
    state = {
    open:false,
    dataSource:[],
    searchText: '',
    }
    componentWillMount(){
      this.request();
    }
    request = () =>{
    axios.get("/list_item.json").then(res=>{
       if(res.data.code === 0 ){
        res.data.data.map((item,index)=>{
            return item.key = index;
        })
       }
      this.setState({dataSource:res.data.data})  
    }) 
}
    handleClick = (selectedKeys, confirm, dataIndex) =>{
    
    }

    render () {
        const {getFieldDecorator} = this.props.form;
        let { open,dataSource } = this.state;
        let { Icon} = this;
        const columns = [
            {
              title: '名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '描述',
              dataIndex: 'desc',
              key: 'desc',
              render(state){
               return state === 1?"男":"女"
              }
            },
            {
              title: '次数',
              dataIndex: 'once',
              key: 'once',
              render(state){
                return state === 1?"150万":"350万"
               }
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render(state){
                    return state === 1?"工作中":"关闭"
                }
            },
             {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render(state){
                    return state === 1?"添加":"删除"
                }
            },
          ]; 
        return (
            <div>
                <Card>
                   <Form layout="inline" style={{marginLeft:40}}>
                       <FormItem label="名称" style={{marginRight:30}}>
                        {
                        getFieldDecorator("name",{
                        initialValue:"",
                        })(
                        <Input type="text" 
                        placeholder="请输入查询的名称"
                        value={this.state.inputValue}
                        onChange = {(e)=>{
                        this.setState({inputValue:e.target.value})
                        }}
                        />            
                        )
                        }
                       </FormItem>
                       <FormItem label="描述" style={{marginRight:30}}>
                        {
                        getFieldDecorator("desc",{
                        initialValue:"",                 
                        })(
                        <Input type="text" placeholder="请输入描述内容"/>            
                        )
                        }
                       </FormItem>
                       <FormItem label="次数"  style={{marginRight:30}}>
                        {
                        getFieldDecorator("once",{
                        initialValue:"",                 
                        })(
                        <Input type="text" placeholder="请输入查询次数"/>            
                        )
                        }
                       </FormItem>  
                      {
                        open?<Fragment>
                            <FormItem label="状态" >
                        {
                        getFieldDecorator("status",{
                        initialValue:"",                 
                        })(
                        <Input type="text" placeholder="请输入查询状态"/>            
                        )
                        }
                       </FormItem>
                          <FormItem label="调度时间" >
                          {
                          getFieldDecorator("time",{
                          initialValue:"",                 
                          })(
                          <Input type="text" placeholder="请输入查询时间"/>            
                          )
                          }
                         </FormItem>
                        </Fragment>
                       :null
                      }
                      <div className="list-searchRight">
                      <Button 
                      style={{marginRight:10}}
                      icon="search"
                      onClick={this.handleSearch}
                      >查询</Button>
                       <Button>重置</Button>
                        <span
                         className="list-searchLeft"
                         onClick={()=>{
                        this.setState({open:!this.state.open})  
                        let speed= Icon.style.transform.replace(/[^0-9]/ig,"")  
                        speed?speed=parseInt(speed,10):speed=0;
                        Icon.style.transform='rotate('+(speed + 180)+'deg)';
                         }
                         }>
                         {open?"收起":"展开"}
                         <i className="list-icon iconfont" ref = {input =>Icon = input} alt="">&#xe603;</i>
                         </span>
                      </div>                    
                   </Form>                
                </Card>
                <Card title="查询表格">
                   <Table
                    columns= {columns}
                    dataSource={dataSource}
                   />
                </Card>

            </div>
        )
    }
}

export default Form.create()(Listbasic);