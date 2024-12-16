// LineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Consert_ratio: 65 },
  { name: 'Feb', Consert_ratio: 42 },
  { name: 'Mar', Consert_ratio: 80 },
  { name: 'Apr', Consert_ratio: 45 },
  { name: 'May', Consert_ratio: 66 },
  { name: 'Jun', Consert_ratio: 40 },
  { name: 'Jul', Consert_ratio: 81 },
  { name: 'Jul', Consert_ratio: 87 },

];

const Event = () => {
  return (
    <ResponsiveContainer width="100%" height={540}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Consert_ratio" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Event;
