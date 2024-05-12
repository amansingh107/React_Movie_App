import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styles from "./MovieInfoComponent.module.css";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className={styles.container}>
      {movieInfo ? (
        <>
          <img
            className={styles.coverImage}
            src={movieInfo?.Poster}
            alt={movieInfo?.Title}
          />
          <div className={styles.infoColumn}>
            <span className={styles.movieName}>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </span>
            <span className={styles.movieInfo}>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </span>
            <span className={styles.movieInfo}>
              Year: <span>{movieInfo?.Year}</span>
            </span>
            <span className={styles.movieInfo}>
              Language: <span>{movieInfo?.Language}</span>
            </span>
            <span className={styles.movieInfo}>
              Rated: <span>{movieInfo?.Rated}</span>
            </span>
            <span className={styles.movieInfo}>
              Released: <span>{movieInfo?.Released}</span>
            </span>
            <span className={styles.movieInfo}>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </span>
            <span className={styles.movieInfo}>
              Genre: <span>{movieInfo?.Genre}</span>
            </span>
            <span className={styles.movieInfo}>
              Director: <span>{movieInfo?.Director}</span>
            </span>
            <span className={styles.movieInfo}>
              Actors: <span>{movieInfo?.Actors}</span>
            </span>
            <span className={styles.movieInfo}>
              Plot: <span>{movieInfo?.Plot}</span>
            </span>
          </div>
          <span className={styles.close} onClick={() => props.onMovieSelect()}>
            X
          </span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MovieInfoComponent;
