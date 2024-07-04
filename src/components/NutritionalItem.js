import React from "react";
import "../styles/NutritionalItem.css";

function NutritionalItem({ icon, label, value }) {
  return (
    <div className="nutritional-item">
      <img src={icon} alt={label} className="nutritional-icon" />
      <div className="nutritional-content">
        <span className="nutritional-value">{value}</span>
        <span className="nutritional-label">{label}</span>
      </div>
    </div>
  );
}

export default NutritionalItem;
