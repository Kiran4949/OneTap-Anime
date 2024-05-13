import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Action = () => {
  return (
    <div className="action-container">
      <h1>Action Anime</h1>
      <GenreData type="Action" />
    </div>
  );
};

export default Action;
