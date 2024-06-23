import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import WarehouseDetailsListItem from "./WarehouseDetailsListItem";

const AnimatedWarehouseDetailsListItem = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <WarehouseDetailsListItem item={item} />
    </motion.div>
  );
};

export default AnimatedWarehouseDetailsListItem;
