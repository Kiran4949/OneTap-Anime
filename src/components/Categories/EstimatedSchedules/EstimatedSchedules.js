import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const EstimatedSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        const response = await axios.get(`https://api-aniwatch.onrender.com/anime/schedule?date=${formattedDate}`);
        const { scheduledAnimes } = response.data;
        setSchedules(scheduledAnimes);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching schedules:", error);
        // setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="schedules-container">
      <h3 className="today-anime">Today's Anime Shows</h3>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            <span>Anime Name:</span> {schedule.name} - <span>Time:</span> {schedule.time}
          </li>
        ))}
      </ul>
      {/* )} */}
    </div>
  );
};

export default EstimatedSchedules;
