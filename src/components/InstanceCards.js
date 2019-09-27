import React, { useState } from 'react';
import {List,Card,Statistic,Button} from 'antd';
const data = [
    {
      title: 'Instance 1',
    },
    {
      title: 'Instance 2',
    },
    {
      title: 'Instance 3',
    },
    {
      title: 'Instance 4',
    },
    {
      title: 'Instance 5',
    },
    {
      title: 'Instance 6',
    },
  ];
  const cards = data.map((item, index) => (
    <List.Item
    key={index}
    >
      <Card 
      hoverable
      title={item.title}
      extra={<Button shape="circle" icon="right" type="default"/>}>
        <Statistic title="Cost in 5 years" value={112893} precision={2} />
      </Card>
    </List.Item>
  ));
const InstanceCards = props => {
    return (
        <List
        grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: props.columes-1?2:1,
        lg: props.columes-1?2:1,
        xl: props.columes,
        xxl: props.columes,
        }}
        >
          <div style={{overflow: 'auto',height:'90vh'}}>
            {cards}
          </div>        
        </List>
    )
}
export default InstanceCards;