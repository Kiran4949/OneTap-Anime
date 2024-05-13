import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const School = () => {
  return (
    <div className="school-container">
      <h1>School Anime</h1>
      <GenreData type="School" />
    </div>
  );
};

export default School;
