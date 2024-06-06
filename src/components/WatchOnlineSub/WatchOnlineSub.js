import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Hls from "hls.js";
import "./style.css";
import Spinner from "../Spinner/Spinner";

const WatchOnlineSub = () => {
  const { animeId } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [nextEpisode, setNextEpisode] = useState(null);
  const [playingEpisodeName, setPlayingEpisodeName] = useState("");
  const [userInteracted, setUserInteracted] = useState(false);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(null); 
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchAnimeEpisodes = async () => {
      try {
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/episodes/${animeId}`);
        const data = response.data;
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
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/episode-srcs?id=${animeDetails.episodes[index].episodeId}&server=vidstreaming&category=sub`);
        const episodeData = response.data;
        setSelectedEpisodeIndex(index);
        setSelectedEpisode(episodeData);
        setPlayingEpisodeName(`Episode ${animeDetails.episodes[index].number}: ${animeDetails.episodes[index].title}`);

        // Fetch and set thumbnail URL for the selected episode
        if (episodeData && episodeData.thumbnailsFile) {
          const thumbnailResponse = await axios.get(episodeData.thumbnailsFile);
          if (thumbnailResponse && thumbnailResponse.data) {
            setThumbnailUrl(thumbnailResponse.data);
          }
        } else {
          setThumbnailUrl(null); // Reset thumbnail URL if not available
        }

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
      }
    }
  }, [selectedEpisode, userInteracted]);

  const handleVideoInteraction = useCallback(() => {
    setUserInteracted(true);
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then((_) => {})
            .catch((error) => {
              console.error("Autoplay prevented:", error);
            });
        }
      }
    }
  }, []);

  const handleMobileVideoInteraction = useCallback((event) => {
    event.preventDefault();
    handleVideoInteraction();
  }, [handleVideoInteraction]);

  // Add event listeners for click and touch events to trigger video interaction
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("click", handleVideoInteraction);
      video.addEventListener("touchstart", handleMobileVideoInteraction);
    }
    return () => {
      if (video) {
        video.removeEventListener("click", handleVideoInteraction);
        video.removeEventListener("touchstart", handleMobileVideoInteraction);
      }
    };
  }, [handleVideoInteraction, handleMobileVideoInteraction]);

  const handleNextEpisodeClick = () => {
    if (nextEpisode !== null) {
      setSelectedEpisodeIndex(nextEpisode.index);
      handleEpisodeClick(nextEpisode.index);
    }
  };

  useEffect(() => {
    // Inside useEffect for adding subtitles track
    const addSubtitlesTracks = async () => {
      const video = videoRef.current;
      if (video && selectedEpisode && selectedEpisode.tracks) {
        // Remove existing track elements
        while (video.firstChild) {
          video.removeChild(video.firstChild);
        }

        let englishSubtitleAdded = false; // Flag to check if English subtitle is added

        // Add track elements for each subtitle track
        selectedEpisode.tracks.forEach((track) => {
          const trackElement = document.createElement("track");
          trackElement.kind = track.kind; // Use the kind specified in the track data
          trackElement.src = track.file;
          trackElement.srclang = track.language; // Use the language specified in the track data
          trackElement.label = track.label;

          // Check if the track is for English subtitles
          if (track.language === "en") {
            // Only add the track if it's not already added and it's not redundant
            if (!englishSubtitleAdded && track.default) {
              trackElement.default = true; // Set as default track
              video.appendChild(trackElement);
              englishSubtitleAdded = true; // Set flag to true
            }
          } else {
            video.appendChild(trackElement); // Add other language tracks as normal
          }
        });
      }
    };

    addSubtitlesTracks();
  }, [selectedEpisode]);


  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div className="watch-online-sub-container">
      <h2 className="anime-title">{animeId && animeId.slice(0, animeId.lastIndexOf("-"))}</h2>
      <div className="watch-online-container">
        {selectedEpisode && (
          <div className="playback-section">
            {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />} 
            <h4>{selectedEpisode.episodeId}</h4>
            <h2>{playingEpisodeName}</h2>
            {isLoadingEpisode && <p className="episode-loading">Loading...</p>}
            <video className="video-player" id="video-player" ref={videoRef} controls onEnded={handleVideoEnded} onClick={handleVideoInteraction} onTouchStart={handleMobileVideoInteraction} crossOrigin="anonymous">
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
          <div className="sub-episodes">
            <h2>Sub Episode List</h2>
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
  );
};

export default WatchOnlineSub;
