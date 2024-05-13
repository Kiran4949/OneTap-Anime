import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const Tv = () => {
  return (
    <div className="tv-container">
      <h2>TV Anime</h2>
      <CategoryData type="tv" />
    </div>
  );
};

export default Tv;
