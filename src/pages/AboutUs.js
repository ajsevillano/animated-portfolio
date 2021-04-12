import AboutSection from '../components/AboutSection/Index';
import ServicesSection from '../components/ServicesSection/Index';
import FAQ from '../components/FaqSection/Index';
import ScrollTop from '../utils/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/animations';

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FAQ />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
