import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../service/getData";
import "../styles/SessionsChart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const SessionsChart = () => {
  const { id } = useParams();
  const [session, setSession] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", parseInt(id));
      if (!request) return alert("Error Average Session Chart");
      setSession(request.data.sessions);
    };
    data();
  }, [id]);

  const formatLabel = (value) => {
    const labels = ["L", "M", "M", "J", "V", "S", "D"];
    return labels[value - 1];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p>{payload[0].value + " min"}</p>
        </div>
      );
    }
  };

  return (
    <div className="sessions-container">
      <div className="sessions_legend">
        <span>Durée moyenne des</span>
        <span>sessions</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={session}>
          <CartesianGrid stroke="none" fill="red" />
          <XAxis
            dataKey="day"
            tickFormatter={formatLabel}
            strokeOpacity={0}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: "14px" }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide domain={["dataMin - 3", "auto"]} />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            activeDot={true}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
