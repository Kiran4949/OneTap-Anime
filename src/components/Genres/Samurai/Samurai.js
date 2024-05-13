import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Samurai = () => {
  return (
    <div className="samurai-container">
      <h1>Samurai Anime</h1>
      <GenreData type="Samurai" />
    </div>
  );
};

export default Samurai;
