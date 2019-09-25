import React, { useState } from 'react';
import {XYPlot, LineSeries} from 'react-vis';
import {Card} from 'antd';

const InstanceGraph = props => {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
      return (
        <Card style={{height:props.hidden?'0':'42vh' }}>
            <div>
            <XYPlot height={300} width={300}>
            <LineSeries data={data} />
            </XYPlot>
            </div>
        </Card>
      )

}
export default InstanceGraph;