import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Psychological = () => {
  return (
    <div className="psychological-container">
      <h1>Psychological Anime</h1>
      <GenreData type="Psychological" />
    </div>
  );
};

export default Psychological;
