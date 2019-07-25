import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

const ChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={145}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <Tooltip />
      <Line type="monotone" dataKey="Visits" stroke="#2DD1AC" />
      <Line type="monotone" dataKey="Orders" stroke="#3F93F5" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default ChartComponent;
