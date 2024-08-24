import React, { useState, useEffect } from "react";
import MovieItem from "./movie-item";

const MovieList = () => {
  const [movies, setMovies] = useState(null);
  const [moviesCount, setMoviesCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    //Get all movies
    getMovies();
  }, [page]);

  const getMovies = () => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/movie?pageSize=" +
        process.env.REACT_APP_PAGING_SIZE +
        "&pageIndex=" +
        page
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true && res.data.count > 0) {
          setMovies(res.data.movies);
          setMoviesCount(
            Math.ceil(res.data.count / process.env.REACT_APP_PAGING_SIZE)
          );
        }

        if (res.data.count === 0) {
          alert("There is no movie data in the system!");
        }
      })
      .catch((err) => alert("Error getting data."));
  };

  return (
    <>{movies ? movies.map((m, i) => <MovieItem key={i} data={m} />) : ""}</>
  );
};

export default MovieList;
