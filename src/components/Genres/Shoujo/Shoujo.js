import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Shoujo = () => {
  return (
    <div className="shoujo-container">
      <h1>Shoujo Anime</h1>
      <GenreData type="Shoujo" />
    </div>
  );
};

export default Shoujo;
