import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Magic = () => {
  return (
    <div className="magic-container">
      <h1>Magic Anime</h1>
      <GenreData type="Magic" />
    </div>
  );
};

export default Magic;
