import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Shounen = () => {
  return (
    <div className="shounen-container">
      <h1>Shounen Anime</h1>
      <GenreData type="Shounen" />
    </div>
  );
};

export default Shounen;
