import React from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>Choisissez un utilisateur</h1>
      <div className="users">
        <Link to="/user/1" className="user-link">
          Karl
        </Link>
        <Link to="/user/2" className="user-link">
          Cecilia
        </Link>
      </div>
    </div>
  );
}

export default Profile;
