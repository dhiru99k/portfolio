import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Section = ({ children, id, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
