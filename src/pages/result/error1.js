import React, { Component } from 'react'
import {Card,Result,Button} from "antd"
export default class Error1 extends Component {
    render() {
        return (
        <Card>
             <Result
            status="403"
            title="403"
            subTitle="Sorry,你没有访问的权限"
            extra={<Button type="primary">Back Home</Button>}
          />
        </Card>
        )
    }
}
