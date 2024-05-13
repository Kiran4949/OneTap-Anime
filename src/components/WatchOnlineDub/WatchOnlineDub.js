import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Hls from "hls.js";
import "./style.css";
import Spinner from "../Spinner/Spinner";

const WatchOnlineDub = () => {
  const { animeId } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [nextEpisode, setNextEpisode] = useState(null);
  const [playingEpisodeName, setPlayingEpisodeName] = useState("");
  const [userInteracted, setUserInteracted] = useState(false);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchAnimeEpisodes = async () => {
      try {
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/episodes/${animeId}`);
        const data = response.data;
        console.log("Anime Episodes:", data);
        setAnimeDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime episodes:", error);
        setLoading(false);
      }
    };

    fetchAnimeEpisodes();
  }, [animeId]);

  const handleEpisodeClick = useCallback(
    async (index) => {
      try {
        setIsLoadingEpisode(true);
        console.log("Fetching episode data for episode:", animeDetails.episodes[index].episodeId);
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/episode-srcs?id=${animeDetails.episodes[index].episodeId}&server=vidstreaming&category=dub`);
        console.log("response: ", response);
        const episodeData = response.data;
        console.log("Episode data:", episodeData);
        setSelectedEpisodeIndex(index);
        setSelectedEpisode(episodeData);
        setPlayingEpisodeName(`Episode ${animeDetails.episodes[index].number}: ${animeDetails.episodes[index].title}`);
        if (index + 1 < animeDetails.episodes.length) {
          setNextEpisode({
            index: index + 1,
            number: animeDetails.episodes[index + 1].number,
            title: animeDetails.episodes[index + 1].title,
          });
        } else {
          setNextEpisode(null);
        }
        setIsLoadingEpisode(false);
      } catch (error) {
        console.error("Error fetching episode data:", error);
        setIsLoadingEpisode(false);
      }
    },
    [animeDetails]
  );

  useEffect(() => {
    if (animeDetails && animeDetails.episodes.length > 0) {
      handleEpisodeClick(0);
    }
  }, [animeDetails, handleEpisodeClick]);

  const handleNextEpisode = useCallback(() => {
    if (selectedEpisodeIndex + 1 < animeDetails.episodes.length) {
      handleEpisodeClick(selectedEpisodeIndex + 1);
    }
  }, [selectedEpisodeIndex, animeDetails, handleEpisodeClick]);

  const handleVideoEnded = useCallback(() => {
    setIsLoadingEpisode(true);
    handleNextEpisode();
  }, [handleNextEpisode]);

  useEffect(() => {
    if (selectedEpisode && userInteracted) {
      const video = videoRef.current;
      if (video) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(selectedEpisode.sources[0].url);
          hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = selectedEpisode.sources[0].url;
        }
        video.play();
      }
    }
  }, [selectedEpisode, userInteracted]);

  const handleVideoInteraction = () => {
    setUserInteracted(true);
  };

  const handleMobileVideoInteraction = () => {
    // On mobile devices, use touchstart event for interaction
    handleVideoInteraction();
  };

  const handleNextEpisodeClick = () => {
    if (nextEpisode !== null) {
      setSelectedEpisodeIndex(nextEpisode.index);
      handleEpisodeClick(nextEpisode.index);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner loading={loading} />
      </div>
    );
  }

  return (
    <>
      <div className="watch-online-dub-container">
        <h2 className="anime-title">{animeId && animeId.slice(0, animeId.lastIndexOf("-"))}</h2>
        <div className="watch-online-container">
          {selectedEpisode && (
            <div className="playback-section">
              <h4>{selectedEpisode.episodeId}</h4>
              <h2>{playingEpisodeName}</h2>
              {isLoadingEpisode && <p className="episode-loading">Loading...</p>}
              <video className="video-player" id="video-player" ref={videoRef} controls onEnded={handleVideoEnded} onClick={handleVideoInteraction} onTouchStart={handleMobileVideoInteraction}>
                <source src={selectedEpisode.sources[0].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {nextEpisode && (
                <div className="next-episode">
                  <h4>
                    Next Episode: <span onClick={handleNextEpisodeClick}>{`Episode ${nextEpisode.number} - ${nextEpisode.title}`}</span>
                  </h4>
                </div>
              )}
            </div>
          )}

          {animeDetails && (
            <div className="dub-episodes">
              <h2>Dub Episode List</h2>
              <ul>
                {animeDetails.episodes.map((episode, index) => (
                  <li key={episode.episodeId}>
                    <span onClick={() => handleEpisodeClick(index)}>{`Episode ${episode.number}: ${episode.title}`}</span>
                    {isLoadingEpisode && selectedEpisodeIndex === index && <p className="episode-list-loading">Loading...</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchOnlineDub;
