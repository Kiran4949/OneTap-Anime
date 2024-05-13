import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Josei = () => {
  return (
    <div className="josei-container">
      <h1>Josei Anime</h1>
      <GenreData type="Josei" />
    </div>
  );
};

export default Josei;
