import home1 from '../../assets/img/home1.png';

//Framer Motion
import { motion } from 'framer-motion';
import {
  titleAnimation,
  fadeAnimation,
  photoAnimation,
} from '../../utils/animations';

//Styles
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../../styles/otherStyles';

//Components
import Wave from '../Wave/Index';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}> true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for a any photography or videography ideas that you have.
          We have professionals with amazing skills to help you achive it.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with camera"
        />
      </StyledImage>
      <Wave />
    </StyledLayout>
  );
};

export default AboutSection;
