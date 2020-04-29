import React, { Component } from 'react'
import {Card,Result,Button} from "antd"
export default class Error2 extends Component {
    render() {
        return (
           <Card>
        <Result
            status="404"
            title="404"
            subTitle="Sorry,找不到您访问的页面"
            extra={<Button type="primary">Back Home</Button>}
          />
           </Card>
        )
    }
}
