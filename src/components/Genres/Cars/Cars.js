import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Cars = () => {
  return (
    <div className="cars-container">
      <h1>Car Anime</h1>
      <GenreData type="Cars" />
    </div>
  );
};

export default Cars;
