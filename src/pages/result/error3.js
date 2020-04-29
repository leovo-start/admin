import React, { Component } from 'react'
import {Card,Result,Button} from "antd"
export default class Error3 extends Component {
    render() {
        return (
          <Card>
        <Result
            status="500"
            title="500"
            subTitle="Sorry,服务器端发生了错误"
            extra={<Button type="primary">Back Home</Button>}
          />
          </Card>
        )
    }
}
