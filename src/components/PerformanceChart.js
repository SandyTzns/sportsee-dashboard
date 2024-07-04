import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  { name: "18-24", uv: 31.47, fill: "#8884d8" },
  { name: "25-29", uv: 26.69, fill: "#83a6ed" },
  // Add more data as needed
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

function PerformanceChart() {
  return (
    <RadialBarChart
      width={300}
      height={250}
      cx={150}
      cy={125}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}

export default PerformanceChart;
