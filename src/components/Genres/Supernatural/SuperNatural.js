import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const SuperNatural = () => {
  return (
    <div className="supernatural-container">
      <h1>Super Natural Anime</h1>
      <GenreData type="Supernatural" />
    </div>
  );
};

export default SuperNatural;
