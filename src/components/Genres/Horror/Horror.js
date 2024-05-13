import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Horror = () => {
  return (
    <div className="horror-container">
      <h1>Horror Anime</h1>
      <GenreData type="Horror" />
    </div>
  );
};

export default Horror;
