import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Historical = () => {
  return (
    <div className="historical-container">
      <h1>Historical Anime</h1>
      <GenreData type="Historical" />
    </div>
  );
};

export default Historical;
