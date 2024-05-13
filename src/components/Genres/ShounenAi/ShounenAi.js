import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const ShounenAi = () => {
  return (
    <div className="shounenai-container">
      <h1>ShounenAi Anime</h1>
      <GenreData type="Shounen-ai" />
    </div>
  );
};

export default ShounenAi;
