import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api/Api/Api";
import "./style.css";
import Img from "../../LazyLoading/Img/Img";

const Top10Anime = () => {
  const [top10Animes, setTop10Animes] = useState([]);

  const handleDataFetchTop10Animes = (data) => {
    if (data && data.top10Animes && data.top10Animes.today) {
      setTop10Animes(data.top10Animes.today);
    } else {
      console.error("Invalid data structure:", data);
      setTop10Animes([]);
    }
  };

  return (
    <div className="top10-animes-background">
      <div className="top10-animes-container">
        <h1>Top 10 Animes</h1>
        <Api url="https://api-aniwatch.onrender.com/anime/home" onDataFetch={handleDataFetchTop10Animes} />
        <div className="top10-anime-card-container">
          {top10Animes.map((anime) => (
            <Link key={anime.id} to={`/data/${anime.id}`} className="top10-anime-card">
              <Img className="top10-image" src={anime.poster} alt={anime.name} />
              <p>{anime.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top10Anime;
