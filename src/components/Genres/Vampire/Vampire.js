import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Vampire = () => {
  return (
    <div className="vampire-container">
      <h1>Vampire Anime</h1>
      <GenreData type="Vampire" />
    </div>
  );
};

export default Vampire;
