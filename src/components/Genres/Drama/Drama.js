import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Drama = () => {
  return (
    <div className="drama-container">
      <h1>Drama Anime</h1>
      <GenreData type="Drama" />
    </div>
  );
};

export default Drama;
