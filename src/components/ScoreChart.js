import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "../styles/ScoreChart.css";

const ScoreChart = ({ data }) => {
  const scoreData = data * 100;
  const score = [{ value: scoreData, fill: "#FF0000" }];
  const formatDataAngle = scoreData * 3.6;
  const startAngle = 90;
  const endAngle = startAngle + formatDataAngle;

  return (
    <div className="score-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          startAngle={startAngle}
          endAngle={endAngle}
          barSize={10}
          data={score}
        >
          <RadialBar
            minAngle={15}
            cornerRadius={10}
            background
            clockWise
            dataKey="value"
            fill="red"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text">
        <span className="percent">{scoreData}%</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};

export default ScoreChart;
