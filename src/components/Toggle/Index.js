import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4>{title}</motion.h4>
      {toggle ? children : null}
      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;
