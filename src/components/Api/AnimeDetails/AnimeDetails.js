import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img from "../../LazyLoading/Img/Img";
import Spinner from "../../Spinner/Spinner";
import "./style.css";
import Carousel from "../../Carousel/Carousel";

const AnimeDetails = ({ id }) => {
  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedAnimes, setRelatedAnimes] = useState([]);
  const [recommendedAnimes, setRecommendedAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/info?id=${id}`);
        const data = response.data;
        console.log("Response data:", data);
        if (data && data.anime && typeof data.anime === "object") {
          setAnimeDetails({ ...data.anime, seasons: data.seasons });
          console.log("Anime details:", { ...data.anime, seasons: data.seasons });
          setRelatedAnimes(data.relatedAnimes || []);
          setRecommendedAnimes(data.recommendedAnimes || []);
        } else {
          console.error("Invalid response data structure:", data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime details:", error);
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (!animeDetails) {
    return <p style={{ color: "white", padding: "130px 20px 0 20px" }}>Anime details are not found yet, Please refresh the page.</p>;
  }

  const handleGenreClick = (genre) => {
    return <Link to={`/${genre}`} />;
  };

  return (
    <>
      <div className="info-container">
        <h2>{animeDetails.info.name}</h2>
        <Img src={animeDetails.info.poster} alt={animeDetails.info.name} />
        <p>
          <span>Description:</span> {animeDetails.info.description}
        </p>
        <p>
          <span>Rating:</span> {animeDetails.info.stats.rating || "N/A"}
        </p>
        <p>
          <span>Quality:</span> {animeDetails.info.stats.quality || "N/A"}
        </p>
        <p>
          <span>Episodes (Sub):</span> {animeDetails.info.stats.episodes?.sub || "N/A"}
        </p>
        <p>
          <span>Episodes (Dub):</span> {animeDetails.info.stats.episodes?.dub || "N/A"}
        </p>
        <p>
          <span>Type:</span> {animeDetails.info.stats.type || "N/A"}
        </p>
        <h1>More Info: </h1>
        <p>
          <span>Japanese Name:</span> {animeDetails.moreInfo.japanese || "N/A"}
        </p>
        <p>
          <span>Synonyms:</span> {animeDetails.moreInfo.synonyms || "N/A"}
        </p>
        <p>
          <span>Aired:</span> {animeDetails.moreInfo.aired || "N/A"}
        </p>
        <p>
          <span>Premiered:</span> {animeDetails.moreInfo.premiered || "N/A"}
        </p>
        <p>
          <span>Duration:</span> {animeDetails.moreInfo.duration || "N/A"}
        </p>
        <p>
          <span>Status:</span> {animeDetails.moreInfo.status || "N/A"}
        </p>
        <p>
          <span>Malscore(MyAnimeList score):</span> {animeDetails.moreInfo.malscore || "N/A"}
        </p>

        <div>
          <p>
            <span>Genres:</span>
            {animeDetails.moreInfo.genres.map((genre, index) => (
              // Updated line
              <button id="button-33">
                <Link key={index} to={`/genre/${genre}`} onClick={() => handleGenreClick(genre)} style={{ color: "inherit", textDecoration: "none" }}>
                  {genre}
                </Link>
              </button>
            ))}
          </p>
        </div>

        <div>
          <p>
            <span>Seasons:</span>
          </p>
          <div className="season-container">
            {animeDetails.seasons.length > 0 ? (
              animeDetails.seasons.map((season, index) => (
                <Link key={index} to={`/data/${season.id}`} className="season-card-link">
                  <div className="card-container">
                    <div className="card">
                      <Img src={season.poster} alt={season.title} />
                      <div className="card-details">
                        <p className="title">{season.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>

        {!animeDetails.info.stats.episodes?.sub || animeDetails.info.stats.episodes.sub === "N/A" ? (
          <p style={{ color: "white" }}>Sub Episodes are not available.</p>
        ) : (
          <div className="button-container">
            <button className="button btn-5" disabled={animeDetails.info.stats.episodes.sub === "N/A"}>
              <Link to={`/wos/${id}`}>Watch Online Sub</Link>
            </button>
          </div>
        )}

        {!animeDetails.info.stats.episodes?.dub || animeDetails.info.stats.episodes.dub === "N/A" ? (
          <p style={{ color: "white" }}>Dub Episodes are not Available.</p>
        ) : (
          <div className="button-container">
            <button className="button btn-5" disabled={animeDetails.info.stats.episodes.dub === "N/A"}>
              <Link to={`/wod/${id}`}>Watch Online Dub</Link>
            </button>
          </div>
        )}
      </div>

      <div>
        <div>
          <h1>Related Animes</h1>
          <Carousel animeData={relatedAnimes} />
        </div>
      </div>

      <div>
        <div className="recommended-container">
          <h1>Recommended Animes</h1>
          <Carousel animeData={recommendedAnimes} />
        </div>
      </div>
    </>
  );
};

export default AnimeDetails;
