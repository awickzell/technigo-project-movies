import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const [currentBackdrop, setCurrentBackdrop] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${filter}?api_key=a0e3d4b2c36ec0210efb2eafa9bb312c&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
      if (data.results.length > 0) {
        setCurrentBackdrop(data.results[0].backdrop_path);
      }
    };

    fetchMovies();
  }, [filter]);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % movies.length;
        setCurrentIndex(nextIndex);
        setCurrentBackdrop(movies[nextIndex].backdrop_path);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [movies, currentIndex]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="popular-list">
      {currentBackdrop && (
        <div
          className="backdrop-slideshow"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${currentBackdrop})`,
          }}
        ></div>
      )}
      <div className="content">
        <div className="filter-dropdown">
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="popular">Popular Movies</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming Movies</option>
          </select>
        </div>
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularList;
