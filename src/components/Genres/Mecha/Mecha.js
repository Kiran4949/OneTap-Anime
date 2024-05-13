import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Mecha = () => {
  return (
    <div className="mecha-container">
      <h1>Mecha Anime</h1>
      <GenreData type="Mecha" />
    </div>
  );
};

export default Mecha;
