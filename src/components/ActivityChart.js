import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Day 1", kg: 60, calories: 1200 },
  { name: "Day 2", kg: 62, calories: 1400 },
  // Add more data as needed
];

function ActivityChart() {
  return (
    <BarChart width={300} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kg" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  );
}

export default ActivityChart;
