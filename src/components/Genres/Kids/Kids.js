import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Kids = () => {
  return (
    <div className="kids-container">
      <h1>Kids Anime</h1>
      <GenreData type="Kids" />
    </div>
  );
};

export default Kids;
