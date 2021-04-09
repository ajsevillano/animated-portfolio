import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MovieData from '../MovieData';
import Award from '../components/Award/Index';

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
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secundary picture" />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MovieDetails;
