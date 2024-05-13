import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const RecentlyUpdated = () => {
  return (
    <div className="recently-updated-container">
      <h2>Recently Updated Anime</h2>
      <CategoryData type="recently-updated" />
    </div>
  );
};

export default RecentlyUpdated;
