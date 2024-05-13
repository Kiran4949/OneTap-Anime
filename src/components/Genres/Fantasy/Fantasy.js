import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Fantasy = () => {
  return (
    <div className="fantasy-container">
      <h1>Fantasy Anime</h1>
      <GenreData type="Fantasy" />
    </div>
  );
};

export default Fantasy;
