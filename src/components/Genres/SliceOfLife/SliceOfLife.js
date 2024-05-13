import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const SliceOfLife = () => {
  return (
    <div className="sliceoflife-container">
      <h1>Slice Of Life Anime</h1>
      <GenreData type="Slice-of-life" />
    </div>
  );
};

export default SliceOfLife;
