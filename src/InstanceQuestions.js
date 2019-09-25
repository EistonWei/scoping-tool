import React, { useState } from 'react';
import {Form,Card, Input, Button, Icon} from 'antd';
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    name: 'name'+i,
    question: 'Question'+i,
    description: 'description'+i,
    default_value: i*17
  });
}
const formItems = listData.map((k, index) => (
    <Form.Item
      label={k.question}
      required={false}
      key={index}
      style={{marginBottom: 8 }}
    >
    <Input defaultValue={k.default_value}
        style={{ width: '90%', marginRight: 8 }} />
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
const InstanceQuestions = props => {
    return (
        <div>
            <Card size='small' title={props.isSmall?"Values":"Questions"}>
                <div style={{overflow: 'auto',height:props.half?'42vh':'85vh'}}>
                <Form gutter='8'>
                    {props.isSmall?formItemsSmall:formItems}
                </Form>
                </div>
            </Card>
        </div>

    )
}
export default InstanceQuestions;