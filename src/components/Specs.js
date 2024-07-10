import React from "react";
import "../styles/Specs.css";
import calories from "../assets/calories.png";
import carbs from "../assets/carbs.png";
import protein from "../assets/protein.png";
import fat from "../assets/fat.png";

const Specs = ({ data }) => {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    data.keyData || {};

  return (
    <div className="specs-container">
      <div className="spec-card">
        <img src={calories} alt="calories-icon" className="spec-icon" />
        <div className="spec-details">
          <span className="spec-quantity">{calorieCount}</span>
          <span className="spec-unit">Calories</span>
        </div>
      </div>
      <div className="spec-card">
        <img src={protein} alt="protein-icon" className="spec-icon" />
        <div className="spec-details">
          <span className="spec-quantity">{proteinCount}g</span>
          <span className="spec-unit">Proteines</span>
        </div>
      </div>
      <div className="spec-card">
        <img src={carbs} alt="carbs-icon" className="spec-icon" />
        <div className="spec-details">
          <span className="spec-quantity">{carbohydrateCount}g</span>
          <span className="spec-unit">Glucides</span>
        </div>
      </div>
      <div className="spec-card">
        <img src={fat} alt="fat-icon" className="spec-icon" />
        <div className="spec-details">
          <span className="spec-quantity">{lipidCount}g</span>
          <span className="spec-unit">Lipides</span>
        </div>
      </div>
    </div>
  );
};

export default Specs;
