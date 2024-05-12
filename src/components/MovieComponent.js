import React from "react";
import styles from "./MovieComponent.module.css";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className={styles.movieContainer}
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className={styles.coverImage} src={Poster} alt={Title} />
      <span className={styles.movieName}>{Title}</span>
      <div className={styles.infoColumn}>
        <span className={styles.movieInfo}>Year : {Year}</span>
        <span className={styles.movieInfo}>Type : {Type}</span>
      </div>
    </div>
  );
};

export default MovieComponent;
