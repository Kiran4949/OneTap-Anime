import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const ShoujoAi = () => {
  return (
    <div className="shoujoai-container">
      <h1>ShoujoAi Anime</h1>
      <GenreData type="Shoujo-ai" />
    </div>
  );
};

export default ShoujoAi;
