//Styled
import styled from 'styled-components';

//Link
import { Link } from 'react-router-dom';

//Images
import athlete from '../assets/img/athlete-small.png';
import theracer from '../assets/img/theracer-small.png';
import goodtimes from '../assets/img/goodtimes-small.png';

const OurWork = () => {
  return (
    <StyledOurWork>
      <StyledMovie>
        <h2>The athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The racer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good times" />
        </Link>
      </StyledMovie>
    </StyledOurWork>
  );
};

const StyledOurWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
