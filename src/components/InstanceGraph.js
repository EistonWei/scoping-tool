import React, { useState } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryContainer,
        VictoryTheme } from 'victory'
import {Card} from 'antd';

const InstanceGraph = props => {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];
      return (
        <Card style={{height:props.hidden?'0':'42vh' }}>
            <div style={{height:props.hidden?'0':'42vh' }}>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}
                height={300}
                containerComponent={<VictoryContainer responsive={false}/>}
            >
                <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                />
                <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryLine
                data={data}
                x="quarter"
                y="earnings"
                />
            </VictoryChart>
            </div>
        </Card>
      )

}
export default InstanceGraph;