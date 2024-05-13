import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Police = () => {
  return (
    <div className="police-container">
      <h1>Police Anime</h1>
      <GenreData type="Police" />
    </div>
  );
};

export default Police;
