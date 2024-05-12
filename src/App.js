import React, { useState } from "react";
import Axios from "axios";
import styles from "./App.module.css";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "57ffc806";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <a href="#">React Movie App</a>
      </div>
      <div className={styles.box}></div>
      <div className={styles.hero}>
        <span>Welcome to Our Movie Search App</span>
        <span>Here you can to access info about various movies</span>
        <span>Search Your favourite movie heres</span>
        <div className={styles.heroButtons}>
          <input
            type="text"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
            className={styles.searchInput}
          />
          <button className={styles.btn}>Search</button>
        </div>
      </div>

      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}

      <div className={styles.movieListContainer}>
        {movieList?.length && movieList.map((movie, index) => (
          <MovieComponent
            key={index}
            movie={movie}
            onMovieSelect={onMovieSelect}
          />

        
        ))}
      </div>
      <footer className={styles.footer}>
      <span>
        Created By{" "}
        <a href="#" className={styles.link}>
          Aman Singh
        </a>{" "}
        |{" "}
        <span className={`far fa-copyright ${styles.icon}`}></span>{" "}
        2023 All rights reserved.
      </span>
    </footer>
    </div>
  );
}

export default App;
