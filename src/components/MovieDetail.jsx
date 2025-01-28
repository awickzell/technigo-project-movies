import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a0e3d4b2c36ec0210efb2eafa9bb312c&language=en-US`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    navigate("/404");
    return null;
  }
  const convertRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  function getStars(rating) {
    const roundedRating = Math.round(rating);
    let stars = '';
    for (let i = 0; i < 10; i++) {
      if (i < roundedRating) {
        stars += '⭐';
      } else {
        stars += '☆';
      }
    }
    return stars;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  function formatYear(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
}

  return (
    <div className="movie-detail">
      <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}></div>
      <div className="content-wrapper">
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="details">
          <div className="title-wrapper">
          <h1>{movie.title}</h1>
          <div className="release-year">({formatYear(movie.release_date)})</div>
          </div>
          <div className="runtime">({convertRuntime(movie.runtime)})</div>
          <p><strong>Rating </strong>{getStars(movie.vote_average)}</p>
          <p>{movie.overview}</p>
          <p><i>{" "}{movie.genres && movie.genres.map((genre) => genre.name).join(", ")}</i></p>
          <p><strong>Release Date</strong>  {formatDate(movie.release_date)}</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate("/")}> ← Back to Home </button>
    </div>
  );
}

export default MovieDetail;
