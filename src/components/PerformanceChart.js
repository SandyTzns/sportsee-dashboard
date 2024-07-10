import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../service/getData";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/PerformanceChart.css";

const PerformanceChart = () => {
  const { id } = useParams();
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE", parseInt(id));
      if (!request) return alert("Error Performance Chart");

      const performanceResponseData = request.data?.data;
      const performanceResponseKind = request.data?.kind;

      const newPerformanceArray = performanceResponseData?.map((object) => ({
        value: object.value,
        kind: performanceResponseKind[`${object.kind}`],
      }));

      setPerformance(newPerformanceArray);
    };
    data();
  }, [id]);

  return (
    <div className="performance-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PerformanceChart;
