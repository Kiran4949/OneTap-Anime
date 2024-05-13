import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BackgroundPoster = () => {
  const [poster, setPoster] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnimePoster();
  }, []);

  const fetchAnimePoster = async () => {
    try {
      const response = await fetch("https://api-aniwatch.onrender.com/anime/home");
      if (!response.ok) {
        throw new Error("Failed to fetch poster");
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.spotlightAnimes.length);
      const posterUrl = data.spotlightAnimes[randomIndex].poster;
      if (posterUrl) {
        setPoster(posterUrl);
      } else {
        console.error("Poster URL not found in fetched data");
      }
    } catch (error) {
      console.error("Error fetching anime poster:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchValue}`);
  };

  return (
    <div className="background-poster" style={{ backgroundImage: poster ? `url(${poster})` : "none" }}>
      <div className="poster-content">
        <p>Millions of Animes and Movies. Explore now</p>
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <input type="text" name="search" id="srch" placeholder="Find your favorite anime by name" value={searchValue} onChange={handleSearchChange} required />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPoster;
