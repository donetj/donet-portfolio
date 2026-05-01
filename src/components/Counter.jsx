import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, animate, useTransform } from 'framer-motion';

const Counter = ({ value, duration = 2, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default Counter;
