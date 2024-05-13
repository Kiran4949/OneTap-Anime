import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Harem = () => {
  return (
    <div className="harem-container">
      <h1>Harem Anime</h1>
      <GenreData type="Harem" />
    </div>
  );
};

export default Harem;
