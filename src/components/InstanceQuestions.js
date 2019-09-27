import React, { useState } from 'react';
import {Form,Card, Input, Button, Icon, Steps, Row, Col} from 'antd';
const { Step } = Steps;
const listData = [];
const listData2 = [];
const listData3 = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    name: 'name'+i,
    question: 'Question'+i,
    description: 'description'+i,
    default_value: i*17
  });
}
const steps = [
  {
    title: 'Question Group 1',
    content: 'First-content',
  },
  {
    title: 'Question Group 2',
    content: 'Second-content',
  },
  {
    title: 'Question Group 3',
    content: 'Last-content',
  },
];

class InstanceQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <Card
       title={this.props.isSmall?"Values":"Questions"}
       extra={
         <div>
          <Button shape="circle" icon="left" type="default" style={{marginRight:'8px'}}/>
          <Button shape="circle" icon="right" type="primary"/>
         </div>
        }>
          <Row>
            <Col span="6">
              <Steps progressDot direction="vertical" current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
              </Steps>
            </Col>
            <Col span={18}>
              <div style={{overflow: 'auto',height:this.props.half?'32vh':'75vh'}}>
              <Form gutter='8'>
                  {this.props.isSmall?formItemsSmall:formItems}
              </Form>
              </div>
            </Col>
          </Row>
      </Card>
    )
  }
}
const formItems = listData.map((k, index) => (
    <Form.Item
      label={k.question}
      required={false}
      key={index}
      style={{marginBottom: 8 }}
    >
    <Input defaultValue={k.default_value}
        style={{ width: '95%', marginRight: 8 }} />
    <Icon
        type="info-circle"/>
    </Form.Item>
  ));
  const formItemsSmall = listData.map((k, index) => (
    <Form.Item
    label={k.name}
    required={false}
    key={index}
    labelCol= {{ span: '10' }}
    wrapperCol= {{ span: '14' }}
    style={{marginBottom: 8 }}
    >
    <Input defaultValue={k.default_value}
        style={{ width: '90%', marginRight: 8 }} />
    <Icon
        type="info-circle"/>
    </Form.Item>
  ));
export default InstanceQuestions;