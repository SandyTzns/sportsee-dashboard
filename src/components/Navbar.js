import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="SportSee" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/">Profil</Link>
        <Link to="/settings">Réglage</Link>
        <Link to="/community">Communauté</Link>
      </div>
    </nav>
  );
}

export default Navbar;
