import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Demons = () => {
  return (
    <div className="demons-container">
      <h1>Demons Anime</h1>
      <GenreData type="Demons" />
    </div>
  );
};

export default Demons;
