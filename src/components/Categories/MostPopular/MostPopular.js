import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const MostPopular = () => {
  return (
    <div className="popular-container">
      <h2>Most Popular Anime</h2>
      <CategoryData type="most-popular" />
    </div>
  );
};

export default MostPopular;
