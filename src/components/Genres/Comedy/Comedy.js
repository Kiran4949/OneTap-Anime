import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Comedy = () => {
  return (
    <div className="comedy-container">
      <h1>Comedy Anime</h1>
      <GenreData type="Comedy" />
    </div>
  );
};

export default Comedy;
