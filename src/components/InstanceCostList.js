import React, { useState } from 'react';
import {List,Card,Statistic,Button} from 'antd';
const data = [
    {
      title: 'Cost 1',
    },
    {
      title: 'Cost 2',
    },
    {
      title: 'Cost 3',
    },
    {
      title: 'Cost 4',
    },
    {
      title: 'Cost 5',
    },
    {
      title: 'Cost 6',
    },
  ];
  const cards = data.map((item, index) => (
    <List.Item
    key={index}
    >
      <Card 
      bordered
      hoverable>
        <Statistic title={item.title} value={234234.23423} precision={2} />
      </Card>
    </List.Item>
  ));
const InstanceCostList = props => {
    return (
        <List
        grid={{ gutter: 16, column: 1 }}
        style={{marginTop:"50px"}}
        >
        <div style={{overflow: 'auto',height:'90vh'}}>
            {cards}
        </div> 
        </List>
    )
}
export default InstanceCostList;