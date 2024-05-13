import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img from "../../LazyLoading/Img/Img";
import Spinner from "../../Spinner/Spinner";
import "./style.css";

const GenreData = ({ type }) => {
  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/genre/${type}?page=${currentPage}`);
        if (response.data && response.data.animes) {
          setAnimeList((prevAnime) => [...prevAnime, ...response.data.animes]);
          setTotalPages(response.data.totalPages);
        } else {
          console.error("Invalid response structure:", response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime:", error);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [type, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="anime-genre-container">
      {loading && <Spinner loading={loading} />}
      {!loading && (
        <>
          <div className="genre-container">
            {animeList.map((anime) => (
              <Link key={anime.id} to={`/data/${anime.id}`} className="anime-card-link">
                <div className="genre-card-container">
                  <div className="genre-card">
                    <Img src={anime.poster} alt={anime.name} />
                    <h3>{anime.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="button-container">
            {currentPage < totalPages && (
              <button className="load-button" id="load-more-button" onClick={handleLoadMore}>
                <span> Load More </span>
              </button>
            )}
          </div>
        </>
      )}
      {!loading && animeList.length === 0 && <p>No Anime available.</p>}
    </div>
  );
};

export default GenreData;
