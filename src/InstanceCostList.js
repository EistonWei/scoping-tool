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
const InstanceCostList = props => {
    return (
        <List
        style={{background:"#fff", marginTop:"50px"}}
        dataSource={data}
        size="large"
        footer={<div>All Costs</div>}
        bordered
        renderItem={(item,index) => (
            <List.Item>
            {item.title}
            </List.Item>
        )}
        />
    )
}
export default InstanceCostList;