import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const Ona = () => {
  return (
    <div className="ona-container">
      <h2>ONA Anime</h2>
      <CategoryData type="ona" />
    </div>
  );
};

export default Ona;
