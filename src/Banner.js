import React, { useState, useEffect } from 'react';
import axios from './axios'; // Make sure axios.js exists in src
import requests from './requests'; // Import API request URLs
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null); // Changed from [] to null

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log("Fetched Movies:", request.data.results); // Debugging
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length) // Fixed Math.random issue
          ]
        );
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="banner" 
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : `url("https://via.placeholder.com/1500x600?text=No+Image+Available")`, // Fallback image
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name || "Featured Movie"}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
