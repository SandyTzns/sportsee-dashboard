import { RadialBarChart, RadialBar } from "recharts";
import "../styles/ScoreChart.css";

const ScoreChart = ({ data }) => {
  const score =
    data && (data.todayScore || data.score) ? data.todayScore || data.score : 0;
  const scoreData = score * 100;
  const dataArray = [{ name: "score", value: score }];
  const startAngle = 90;
  const endAngle = startAngle + 360 * score; // Calculate end angle based on percentage

  return (
    <div className="score-container">
      <div className="score-title">Score</div>
      <div className="radialbar-wrapper">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          startAngle={90}
          endAngle={450} // Background bar covers full circle
          width={250}
          height={250}
          barSize={10} // Background bar size
          data={[{ name: "full", value: 1 }]}
        >
          <RadialBar
            dataKey="value"
            background={{ fill: "#FFF" }}
            clockWise
            fill="#FFF"
            cornerRadius={10}
          />
        </RadialBarChart>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          startAngle={90}
          endAngle={endAngle} // Dynamic end angle based on score
          width={250}
          height={250}
          barSize={20} // Thickness of the red line
          data={dataArray}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <RadialBar
            dataKey="value"
            clockWise
            fill="#FF0000"
            cornerRadius={10}
          />
        </RadialBarChart>
      </div>
      <div className="score-label center">
        <p className="percent">{scoreData}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default ScoreChart;
