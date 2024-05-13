import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const SuperPower = () => {
  return (
    <div className="superpower-container">
      <h1>Super Power Anime</h1>
      <GenreData type="Super-power" />
    </div>
  );
};

export default SuperPower;
