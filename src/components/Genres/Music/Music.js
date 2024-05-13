import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Music = () => {
  return (
    <div className="music-container">
      <h1>Music Anime</h1>
      <GenreData type="Music" />
    </div>
  );
};

export default Music;
