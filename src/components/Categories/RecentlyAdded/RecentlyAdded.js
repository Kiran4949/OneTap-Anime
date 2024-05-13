import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const RecentlyAdded = () => {
  return (
    <div className="recently-added-container">
      <h2>Recently Added Anime</h2>
      <CategoryData type="recently-added" />
    </div>
  );
};

export default RecentlyAdded;
