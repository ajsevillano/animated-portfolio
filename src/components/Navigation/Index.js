import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

const Navigation = () => {
  const { pathname } = useLocation();
  const [windowSize] = useWindowSize();

  const variants = {
    mobile: { width: '100%' },
    others: { width: '40%' },
    none: { width: '0%' },
  };

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <HoverLine
            variants={variants}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={
              pathname === '/'
                ? windowSize.width <= 1300
                  ? 'mobile'
                  : 'others'
                : 'none'
            }
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <HoverLine
            variants={variants}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={
              pathname === '/work'
                ? windowSize.width <= 1300
                  ? 'mobile'
                  : 'others'
                : 'none'
            }
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <HoverLine
            variants={variants}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={
              pathname === '/contact'
                ? windowSize.width <= 1300
                  ? 'mobile'
                  : 'others'
                : 'none'
            }
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const HoverLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Navigation;
