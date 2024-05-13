import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Ecchi = () => {
  return (
    <div className="ecchi-container">
      <h1>Ecchi Anime</h1>
      <GenreData type="Ecchi" />
    </div>
  );
};

export default Ecchi;
