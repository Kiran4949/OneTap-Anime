import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Mystery = () => {
  return (
    <div className="mystery-container">
      <h1>Mystery Anime</h1>
      <GenreData type="Mystery" />
    </div>
  );
};

export default Mystery;
