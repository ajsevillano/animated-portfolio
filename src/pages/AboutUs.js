import AboutSection from '../components/AboutSection/Index';
import ServicesSection from '../components/ServicesSection/Index';
import FAQ from '../components/FaqSection/Index';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/animations';

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FAQ />
    </motion.div>
  );
};

export default AboutUs;
