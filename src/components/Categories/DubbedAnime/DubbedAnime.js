import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const DubbedAnime = () => {
  return (
    <div className="dubbed-container">
      <h2>Dubbed Anime</h2>
      <CategoryData type="dubbed-anime" />
    </div>
  );
};

export default DubbedAnime;
