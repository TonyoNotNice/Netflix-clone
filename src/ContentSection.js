import React, { useEffect, useState, useRef } from 'react';
import './ContentSection.css';

function ContentSection({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const rowRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Scroll Functions
  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="contentSection">
      <h2>{title}</h2>
      <div className="contentSection__wrapper">
        <button className="contentSection__arrow left" onClick={scrollLeft}>◀</button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="contentSection__posters" ref={rowRef}>
            {movies.map((movie) => (
              <img
                key={movie.id}
                className="contentSection__poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title || movie.name}
              />
            ))}
          </div>
        )}
        <button className="contentSection__arrow right" onClick={scrollRight}>▶</button>
      </div>
    </div>
  );
}

export default ContentSection;
