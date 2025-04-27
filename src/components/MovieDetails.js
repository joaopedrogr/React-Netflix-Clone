import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss"; 

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjk1ZTUyZmUzZWJmZTY0ZWIyNjA5N2VkMWFmZDA3OCIsIm5iZiI6MTc0NTc4NTg1MC44NDksInN1YiI6IjY4MGU5M2ZhNWE5Yjc4ZDI3MjgxMjI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xMnrq7OMc9fqXmL0HgEqgO0laVzDHImj4g_ZVGZq76o",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do filme:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return <div className="error">Detalhes do filme não encontrados.</div>;
  }

  return (
    <div className="movie-details">
      <div
        className="movie-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="movie-banner-overlay">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-tagline">{movie.tagline}</p>
        </div>
      </div>
      <div className="movie-content">
        <div className="movie-info">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;