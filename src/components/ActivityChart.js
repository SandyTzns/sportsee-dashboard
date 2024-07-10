import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../service/getData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/ActivityChart.css";

const ActivityChart = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY", parseInt(id));
      if (!request) return alert("Error Chart Activity");
      let activitySessions = request.data.sessions;
      let newActivity = activitySessions?.map((object) => {
        return {
          day: object.day,
          kilogram: object.kilogram,
          calories: Math.round(object.calories / 10),
        };
      });
      setActivity(newActivity);
    };
    data();
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value + "kg"}</p>
          <p>{payload[1].value * 10 + "Kcal"}</p>
        </div>
      );
    }
  };

  return (
    <div className="activity_container">
      <div className="legend">
        <span>Activité quotidienne</span>
        <ul>
          <li>
            <span className="legend-text">Poids (kg)</span>
          </li>
          <li className="redDot">
            <span className="legend-text">Calories brûlées (Kcal)</span>
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activity} barCategoryGap="10%" barGap={4}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(day) => new Date(day).getDate()}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            orientation="right"
            tickCount={3}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="kilogram"
            fill="black"
            barSize={10}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="red"
            barSize={10}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
