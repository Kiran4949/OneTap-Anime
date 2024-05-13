import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const SubbedAnime = () => {
  return (
    <div className="subbed-container">
      <h2>Subbed Anime</h2>
      <CategoryData type="subbed-anime" />
    </div>
  );
};

export default SubbedAnime;
