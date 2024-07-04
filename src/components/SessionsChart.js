import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Day 1", uv: 400, pv: 2400 },
  { name: "Day 2", uv: 300, pv: 4567 },
  // Add more data as needed
];

function SessionsChart() {
  return (
    <LineChart width={300} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
}

export default SessionsChart;
