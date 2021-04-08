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
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </HeadLine>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled.div``;
const HeadLine = styled.div``;

export default MovieDetails;
