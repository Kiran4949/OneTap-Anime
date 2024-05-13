import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const SciFi = () => {
  return (
    <div className="scifi-container">
      <h1>SciFi Anime</h1>
      <GenreData type="sci-fi" />
    </div>
  );
};

export default SciFi;
