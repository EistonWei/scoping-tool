import React from 'react';
import {Layout, Menu, Icon, Row, Col, Button, Select} from 'antd'
//components
import InstanceCards from './InstanceCards'
import InstanceQuestions from './InstanceQuestions'
import InstanceGraph from './InstanceGraph'
import InstanceCostList from './InstanceCostList'

import 'antd/dist/antd.css';
const { Header, Content, Footer, Sider} = Layout;
const { Option } = Select;


class Instance extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataview: false,
            cardColumes: 3,
            listValue:false
        }
        this.setCardColumes = this.setCardColumes.bind(this);
        this.toggleDataview = this.toggleDataview.bind(this);
        this.toggleListValue = this.toggleListValue.bind(this);
        this.Siderbar = this.Siderbar.bind(this);
        this.ButtonGroupLeft = this.ButtonGroupLeft.bind(this);
        this.ButtonGroupRight = this.ButtonGroupRight.bind(this);
    }
    setCardColumes(k) {
        this.setState({cardColumes: k});
    }
    toggleDataview(){
        this.setCardColumes(this.state.dataview?3:1)
        this.setState((state)=>({
            dataview: !state.dataview
        }))
    }
    toggleListValue(){
        this.setState((state)=>({
            listValue: !state.listValue
        }))
    }
    Siderbar(){
        return (
            <Sider 
            collapsible collapsed={true}
            trigger={null}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0
            }}
            theme="dark">
            <Button shape="circle" icon="fire" type="primary" style={{margin: '16px 23px'}}/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
        )
    }
    ButtonGroupLeft () {
        return (
            <div style={{align: 'right',marginBottom: '16px',textAlign:'right'}}>
                <Select defaultValue="3" style={{ width: 60, marginRight:'8px', visibility: this.state.dataview ?'hidden':'visible' }}  onChange={(value)=>this.setCardColumes(value)}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                </Select>
                <Button shape="circle" icon="plus" type="primary"style={{marginRight:'8px'}}/>
                <Button shape="circle" icon="swap" type="primary"/>
            </div>
        )
    }
    ButtonGroupRight () {
        return (
            <div style={{align: 'right',marginBottom: '16px',textAlign:'right'}}>
                <Button shape="circle" icon="bars" type="default"style={{marginRight:'8px'}} onClick={this.toggleListValue}/>
                <Button shape="circle" icon="area-chart" type="default"style={{marginRight:'8px'}} onClick={this.toggleDataview}/>
                <Button shape="round" icon="check" type="primary">Submit</Button>
            </div>
        )
    }
    render(){
        return (
            <Content style={{ margin: '16px'}}>
                <Row gutter = {16}>
                    <Col span={this.state.dataview?4:12}>
                        <this.ButtonGroupLeft/>
                        <InstanceCards columes={this.state.cardColumes}/>
                    </Col>
                    <Col span = {this.state.dataview?4:0}>
                        <InstanceCostList/>
                    </Col>
                    <Col span={this.state.dataview?16:12}>
                        <this.ButtonGroupRight/>
                        <InstanceGraph hidden={!this.state.dataview}/>
                        <InstanceQuestions half={this.state.dataview} isSmall={this.state.listValue}/>
                    </Col>
                </Row>
            </Content>
        )
    }
}
export default Instance;