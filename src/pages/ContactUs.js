//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/animations';

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

export default ContactUs;
