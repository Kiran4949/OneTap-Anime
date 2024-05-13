import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Thriller = () => {
  return (
    <div className="thriller-container">
      <h1>Thriller Anime</h1>
      <GenreData type="Thriller" />
    </div>
  );
};

export default Thriller;
