import React from "react";
import "../styles/Sidebar.css";
import iconone from "../assets/iconone.png"; // Ensure the path to your image is correct
import icontwo from "../assets/icontwo.png";
import iconthree from "../assets/iconthree.png";
import iconfour from "../assets/iconfour.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src={iconone} alt="Home" />
      </div>
      <div className="sidebar-item">
        <img src={icontwo} alt="Profile" />
      </div>
      <div className="sidebar-item">
        <img src={iconthree} alt="Settings" />
      </div>
      <div className="sidebar-item">
        <img src={iconfour} alt="Community" />
      </div>
      <div className="sidebar-footer">Copyright, SportSee 2020</div>
    </div>
  );
}

export default Sidebar;
