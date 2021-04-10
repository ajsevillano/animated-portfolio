//Styled
import styled from 'styled-components';

//Link
import { Link } from 'react-router-dom';

//Images
import athlete from '../assets/img/athlete-small.png';
import theracer from '../assets/img/theracer-small.png';
import goodtimes from '../assets/img/goodtimes-small.png';

//Animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
} from '../utils/animations';

const OurWork = () => {
  return (
    <StyledOurWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledMovie>
        <motion.h2 variants={fadeAnimation}>The athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt="Athlete" />
          </Hide>
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

const StyledOurWork = styled(motion.div)`
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
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;
