import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Romance = () => {
  return (
    <div className="romance-container">
      <h1>Romance Anime</h1>
      <GenreData type="Romance" />
    </div>
  );
};

export default Romance;