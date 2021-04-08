import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MovieData from '../MovieData';

const MovieDetails = () => {
  const History = useHistory();
  const url = History.location.pathname;
  const [movies, setMovies] = useState(MovieData);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
  }, []);

  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
};

export default MovieDetails;
