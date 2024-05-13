import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Space = () => {
  return (
    <div className="space-container">
      <h1>Space Anime</h1>
      <GenreData type="Space" />
    </div>
  );
};

export default Space;
