import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Seinen = () => {
  return (
    <div className="seinen-container">
      <h1>Seinen Anime</h1>
      <GenreData type="Seinen" />
    </div>
  );
};

export default Seinen;
