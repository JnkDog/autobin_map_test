import React from 'react';
import { Pie } from '@ant-design/charts';

// to do
// fetchDAta from database
const data = [
    {
        type: 'Recyclable Waste',
        value: 27,
    },
    {
        type: 'Residual Waste',
        value: 25,
    },
    {
        type: 'Household Food Waste',
        value: 18,
    },
    {
        type: 'Hazardous Waste',
        value: 15,
    }
];

// Pie Chart's config
const config = {
    appendPadding: 10, 
    autoFit: true,
    data: data,
    angleField: 'value',
    colorField: 'type',
    color: ['#002EB8', '#1F1F1F', '#663300', '#B8002E'],
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat(Math.floor(percent * 100), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
};

const PieChart = () => {
    return <Pie {...config} />;
};
  
export default PieChart;