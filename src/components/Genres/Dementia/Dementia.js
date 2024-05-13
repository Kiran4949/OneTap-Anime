import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Dementia = () => {
  return (
    <div className="dementia-container">
      <h1>Dementia Anime</h1>
      <GenreData type="Dementia" />
    </div>
  );
};

export default Dementia;
