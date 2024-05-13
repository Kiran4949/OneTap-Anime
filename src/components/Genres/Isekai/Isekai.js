import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Isekai = () => {
  return (
    <div className="isekai-container">
      <h1>Isekai Anime</h1>
      <GenreData type="Isekai" />
    </div>
  );
};

export default Isekai;
