import React from "react";
import "./style.css";
import GenreData from "../../Api/GenreData/GenreData";

const Game = () => {
  return (
    <div className="game-container">
      <h1>Game Anime</h1>
      <GenreData type="Game" />
    </div>
  );
};

export default Game;
