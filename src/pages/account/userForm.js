import React, { Component } from 'react'
import {Input,Button,Form,Select,Modal,message} from "antd"
import "./setting.less"
const FormItem = Form.Item;
const {TextArea} = Input;
const { Option } = Select;
class UserForm extends Component {

    handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
        Modal.confirm({
        title:"确定修改吗",
        onOk:()=>{
        message.success("修改成功"); 
        }
        })
        }
    });    
    }
    render () {
        const {getFieldDecorator} = this.props.form;
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 12,
              offset:6,
            },
            sm: {
              span: 12,
              offset: 6,
            },
          },
          labelCol: {
            xs: {
              span: 24,
              offset:12,
            },
            sm: {
              span: 12,
              offset: 6,
            },
          },
        };
        return (
            <Form labelAlign="left">
                <FormItem label="邮箱"{...tailFormItemLayout}>
                    {
                      getFieldDecorator("emial",{
                        initialValue:"897574664@qq.com",
                        rules: [
                            {
                              type: 'email',
                              message: '这不是正确的邮箱格式',
                            },
                            {
                              required: true,
                              message: '请输入你的邮箱',
                            },
                          ],
                      })(
                        <Input type="text" placeholder="请输入邮箱"/>
                      )  
                    }
                </FormItem>
                <FormItem label="昵称" {...tailFormItemLayout}>
                    {
                      getFieldDecorator("userName",{
                        initialValue:"李俊鹏",
                        rules: [
                            { required: true, message: '请输入用户名', whitespace: true }
                        ],
                      })(
                        <Input type="text" placeholder="请输入用户名"/>
                      )  
                    }
                </FormItem>
                <FormItem label="个人简介" {...tailFormItemLayout}>
                    {
                      getFieldDecorator("one",{
                        initialValue:"",
                        rules: [
                            { required: true, message: '请输入个人简介' }
                        ],
                      })(
                        <TextArea type="text" placeholder="个人简介"style={{height:90 }}/>
                      )  
                    }
                </FormItem>
                <FormItem label="国家/地区" {...tailFormItemLayout}>
                    {
                      getFieldDecorator("city",{
                        initialValue:"chinese",
                      })(
                        <Select type="text" placeholder="国籍">
                            <Option value="chinese">中国</Option>
                            <Option value="UK">英国</Option>
                        </Select>
                      )  
                    }
                </FormItem>
                <FormItem label="所在省市" {...tailFormItemLayout}>
                    {
                      getFieldDecorator("citys",{
                        initialValue:"杭州市",
                      })(
                        <Select type="text" placeholder="请选择">
                            <Option value="chinese">天津市</Option>
                            <Option value="UK">杭州市</Option>
                        </Select>
                      )  
                    }
                </FormItem>
                <FormItem label="街道地址" {...tailFormItemLayout}>
                    {
                      getFieldDecorator("address",{
                        initialValue:"西湖区工专路 77 号",
                      })(
                       <Input type="text" placeholder="地址"/>
                      )  
                    }
                </FormItem>
                <FormItem label="联系电话"  {...tailFormItemLayout}>
                    {
                      getFieldDecorator("phone",{
                        initialValue:"0752",
                      })(
                        <Input type="text" placeholder="域号" style={{width:'20%',display:"inline-block",marginRight:8}}/>
                      )  
                    }
                        <Input type="text" placeholder="手机号"style={{width:'75%',display:"inline-block"}}/>
                </FormItem>
                  <Button type="primary" onClick={this.handleSubmit}>更新基本信息</Button>
            </Form>
        )
    }
}

export default Form.create()(UserForm)