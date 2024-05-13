import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const MostFavorite = () => {
  return (
    <div className="favorite-container">
      <h2>Most Favorite Anime</h2>
      <CategoryData type="most-favorite" />
    </div>
  );
};

export default MostFavorite;
