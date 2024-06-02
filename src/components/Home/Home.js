import React, { useState } from "react";
import Api from "../Api/Api/Api";
import Carousel from "../Carousel/Carousel";
import Top10Anime from "../Categories/Top10Anime/Top10Anime";
import "./style.css";
import BackgroundPoster from "../BackgroundPoster/BackgroundPoster";
import Genres from "../Genres/Genres/Genres";

const Home = () => {
  const [spotlightAnimes, setSpotlightAnimes] = useState([]);
  const [trendingAnimes, setTrendingAnimes] = useState([]);
  const [topUpcomingAnimes, setTopUpcomingAnimes] = useState([]);
  const [topAiringAnimes, setTopAiringAnimes] = useState([]);

  const handleDataFetchSpotlightAnime = (data) => {
    setSpotlightAnimes(data.spotlightAnimes || []);
  };

  const handleDataFetchTrendingAnimes = (data) => {
    setTrendingAnimes(data.trendingAnimes || []);
  };

  const handleDataFetchTopUpcomingAnimes = (data) => {
    setTopUpcomingAnimes(data.topUpcomingAnimes || []);
  };

  const handleDataFetchTopAiringAnimes = (data) => {
    setTopAiringAnimes(data.topAiringAnimes || []);
  };

  return (
    <>
      <BackgroundPoster />
      <div className="home-container">
        <div className="trendinganime-container">
          <h1>Trending Animes</h1>
          <Api url="https://api-aniwatch.onrender.com/anime/home" onDataFetch={handleDataFetchTrendingAnimes} />
          <Carousel animeData={trendingAnimes} />
        </div>

        <div className="spotlightanime-container">
          <h1>Spotlight Anime</h1>
          <Api url="https://api-aniwatch.onrender.com/anime/home" onDataFetch={handleDataFetchSpotlightAnime} />
          <Carousel animeData={spotlightAnimes} />
        </div>

        <Top10Anime />

        <div>
          <h1>Top Airing Animes</h1>
          <Api url="https://api-aniwatch.onrender.com/anime/home" onDataFetch={handleDataFetchTopAiringAnimes} />
          <Carousel animeData={topAiringAnimes} />
        </div>

        <div className="topupcominganime-container">
          <h1>Top Upcoming Animes</h1>
          <Api url="https://api-aniwatch.onrender.com/anime/home" onDataFetch={handleDataFetchTopUpcomingAnimes} />
          <Carousel animeData={topUpcomingAnimes} />
        </div>

        <Genres />
      </div>
    </>
  );
};

export default Home;
