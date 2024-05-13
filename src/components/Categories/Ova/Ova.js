import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const Ova = () => {
  return (
    <div className="ova-container">
      <h2>OVA Anime</h2>
      <CategoryData type="ova" />
    </div>
  );
};

export default Ova;
