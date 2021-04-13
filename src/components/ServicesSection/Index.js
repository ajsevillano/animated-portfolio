//Images
import home2 from '../../assets/img/home2.png';
import clock from '../../assets/img/clock.svg';
import diaphragm from '../../assets/img/diaphragm.svg';
import money from '../../assets/img/money.svg';
import teamwork from '../../assets/img/teamwork.svg';

//Styles
import { StyledLayout, StyledDescription, StyledImage } from '../../styles';
import styled from 'styled-components';

import { fadeAnimation } from '../../utils/animations';
import { useScroll } from '../../utils/hooks/useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fadeAnimation}
      animate={controls}
      initial={'hidden'}
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span>services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="camera" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="" />
      </StyledImage>
    </StyledServices>
  );
};

//Create a new mutable style from the original StyledLayout
const StyledServices = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
