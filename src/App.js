import React from 'react';
import Instance from './components/Instance'
import {Layout, Menu, Icon, Button} from 'antd'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

const { Content, Sider} = Layout;


const Siderbar = () => {
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
            <Link to="/instance">
              <Icon type="container" />
              <span>Instance</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/question">
              <Icon type="question" />
              <span>Question</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/cost">
              <Icon type="dollar" />
              <span>Cost</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
  )
}

function App() {

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>    
          <Siderbar/>
          <Layout style={{ marginLeft: 88 }}>
            <Switch>
              <Route path="/instance" component={Instance} />
            </Switch>
          </Layout>
      </Layout>
    </Router>
  );
}

export default App;
