import home1 from '../../assets/img/home1.png';

//Styles
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../../styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for a any photography or videography ideas that you have.
          We have professionals with amazing skills to help you achive it.
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
