import home1 from '../../assets/img/home1.png';

//Framer Motion
import { motion } from 'framer-motion';

//Styles
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../../styles';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              Your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2> true.</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for a any photography or videography ideas that you have.
          We have professionals with amazing skills to help you achive it.
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with camera" />
      </StyledImage>
    </StyledLayout>
  );
};

export default AboutSection;
