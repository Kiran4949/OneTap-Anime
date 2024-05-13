import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Adventure = () => {
  return (
    <div className="adventure-container">
      <h1>Adventure Anime</h1>
      <GenreData type="Adventure" />
    </div>
  );
};

export default Adventure;
