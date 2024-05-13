import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Military = () => {
  return (
    <div className="military-container">
      <h1>Military Anime</h1>
      <GenreData type="Military" />
    </div>
  );
};

export default Military;
