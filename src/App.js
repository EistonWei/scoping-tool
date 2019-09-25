import React, { useState } from 'react';
import {Layout, Menu, Icon, Row, Col, Button, Select} from 'antd'
import './App.css';
import 'antd/dist/antd.css';
import InstanceCards from './InstanceCards'
import InstanceQuestions from './InstanceQuestions'
import InstanceGraph from './InstanceGraph'
import InstanceCostList from './InstanceCostList'
const { Header, Content, Footer, Sider} = Layout;
const { Option } = Select;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [columes, setColumes] = useState('3');
  const [dataView, setDataView] = useState(false)
  const [smallQuestion, setSmallQuestion] = useState(false)
  const setDataViewFun = () => {
    dataView?setColumes('3'):setColumes('1')
    setDataView(!dataView)
  }
  const submitFun = () => {
    setColumes('1')
    setDataView(true)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider 
      collapsible collapsed={collapsed}
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
    <Layout style={{ marginLeft: 88 }}>
      <Header style={{ background: '#fff', padding: 0, height:'auto' }} />
      <Content style={{ margin: '16px'}}>
        <Row gutter = {16}>
          <Col span={dataView?4:12}>
            <div style={{align: 'right',marginBottom: '16px',textAlign:'right'}}>
              <Select defaultValue="3" style={{ width: 60, marginRight:'8px', visibility:dataView?'hidden':'visible' }}  onChange={(value) => setColumes(value)}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
              <Button shape="circle" icon="plus" type="primary"style={{marginRight:'8px'}}/>
              <Button shape="circle" icon="swap" type="primary"/>
            </div>
            <InstanceCards columes={columes}/>
          </Col>
          <Col span = {dataView?4:0} style={{visibility:dataView?'visible':'hidden'}}>
            <InstanceCostList/>
          </Col>
          <Col span={dataView?16:12}>
            <div style={{align: 'right',marginBottom: '16px',textAlign:'right'}}>
              <Button shape="circle" icon="bars" type="default"style={{marginRight:'8px'}} onClick={()=>setSmallQuestion(!smallQuestion)}/>
              <Button shape="circle" icon="area-chart" type="default"style={{marginRight:'8px'}} onClick={setDataViewFun}/>
              <Button shape="round" icon="check" type="primary" onClick={submitFun}>Submit</Button>
            </div>
            <InstanceGraph hidden={!dataView}/>
            <InstanceQuestions half={dataView} isSmall={smallQuestion}/>
          </Col>
        </Row>

      </Content>
    </Layout>
  </Layout>
  );
}

export default App;
