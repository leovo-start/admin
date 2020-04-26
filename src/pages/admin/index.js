import React, { Component } from 'react'
import Header from "../../components/header"
import NavLeft from "../../components/navLeft"
import Footer from "../../components/footer"
import {Row,Col} from "antd"
import {connect} from "react-redux"
import "./index.less"
class Admin extends Component {

    render () {
        let { menu } =this.props;
        console.log(menu)
        return (
            <div>
                <Row>
                {
                menu?<Col span={2}><NavLeft/></Col>:
                <Col span={5}><NavLeft/></Col>
                }
                {
                menu?<Col span={22} className="main">
                   <Header/>
                    <Row  style={{ margin: '10px 10px 10px 0'}}>
                      {this.props.children}  
                    </Row>    
                    <Footer/>  
                   </Col>:
                    <Col span={19} className="main">
                   <Header/>
                    <Row  style={{ margin: '10px 10px 10px 0'}}>
                      {this.props.children}  
                    </Row>    
                    <Footer/>  
                   </Col>    
                }
              
               </Row> 
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        menu: state.getIn(["header","menu"])
    }
}
export default connect(mapStateToProps)(Admin);