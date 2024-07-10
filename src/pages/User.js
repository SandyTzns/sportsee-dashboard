import React from "react";
import "../styles/User.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ActivityChart from "../components/ActivityChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import SessionsChart from "../components/SessionsChart";
import Specs from "../components/Specs";

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
            <h1>Bonjour {data.userInfos?.firstName}</h1>
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
                <ScoreChart data={data} />
              </div>
            </div>
            <Specs data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
