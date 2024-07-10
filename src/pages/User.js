import React from "react";
import "../styles/User.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ActivityChart from "../components/ActivityChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import SessionsChart from "../components/SessionsChart";
import NutritionalItem from "../components/NutritionalItem";

import calories from "../assets/calories.png";
import protein from "../assets/protein.png";
import carbs from "../assets/carbs.png";
import fat from "../assets/fat.png";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../service/getData";

function User() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await getData("USER_MAIN_DATA", parseInt(id));
      if (!response) return alert("cannot get API");
      setData(response.data);
    };
    data();
  }, [id]);
  return (
    <div className="user-page">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard">
          <header className="greetings">
            <h1>Bonjour Thomas</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </header>
          <div className="content-container">
            <div className="charts-container">
              <div className="upper-charts">
                <ActivityChart />
              </div>
              <div className="lower-charts">
                <SessionsChart />
                <PerformanceChart />
                <ScoreChart data={data.todayScore || data.score} />
              </div>
            </div>
            <div className="nutritional-info">
              <NutritionalItem
                label="Calories"
                value="1,930kCal"
                icon={calories}
              />
              <NutritionalItem label="Proteins" value="155g" icon={protein} />
              <NutritionalItem label="Glucides" value="290g" icon={carbs} />
              <NutritionalItem label="Lipides" value="50g" icon={fat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
