import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const Special = () => {
  return (
    <div className="special-container">
      <h2>Special Anime</h2>
      <CategoryData type="special" />
    </div>
  );
};

export default Special;
