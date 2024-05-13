import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const MartialArts = () => {
  return (
    <div className="martialArts-container">
      <h1>Martial Arts Anime</h1>
      <GenreData type="martial-arts" />
    </div>
  );
};

export default MartialArts;
