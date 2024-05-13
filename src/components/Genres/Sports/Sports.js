import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Sports = () => {
  return (
    <div className="sports-container">
      <h1>Sports Anime</h1>
      <GenreData type="Sports" />
    </div>
  );
};

export default Sports;
