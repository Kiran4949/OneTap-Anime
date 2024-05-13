import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const Movies = () => {
  return (
    <div className="movies-container">
      <h2>Movie Anime</h2>
      <CategoryData type="movie" />
    </div>
  );
};

export default Movies;
