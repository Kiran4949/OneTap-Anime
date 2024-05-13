import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.css";
import Img from "../LazyLoading/Img/Img";

const AnimeSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");
    if (query) {
      fetchSearchResults(query);
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      setSearchResults(data.animes);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="anime-search">
      <h1>Search Results</h1>
      {isLoading ? (
        <div className="search-results">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="anime-card-skeleton">
              <div className="card-skeleton"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="search-results">
          {searchResults.map((anime) => (
            <Link key={anime.id} to={`/data/${anime.id}`} className="anime-card">
              <div className="search-card-container">
                <div className="card">
                  <Img src={anime.poster} alt={anime.name} />
                  <div className="card-details">
                    <h2>{anime.name}</h2>
                    <p>Duration: {anime.duration || "N/A"} </p>
                    <p>Type: {anime.type || "N/A"}</p>
                    <p>Rating: {anime.rating || "N/A"}</p>
                    <p>Sub Episodes: {anime.episodes.sub || "N/A"}</p>
                    <p>Dub Episodes: {anime.episodes.dub || "N/A"}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
