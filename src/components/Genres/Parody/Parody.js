import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Parody = () => {
  return (
    <div className="parody-container">
      <h1>Parody Anime</h1>
      <GenreData type="Parody" />
    </div>
  );
};

export default Parody;
