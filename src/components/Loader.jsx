import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#080706] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="text-center relative">
        <motion.h1 
          className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase mb-4 opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1 }}
        >
          Systems Intelligence
        </motion.h1>
        
        <div className="text-6xl md:text-8xl font-black tabular-nums tracking-tighter">
          {Math.min(progress, 100)}%
        </div>

        <div className="w-48 h-1 bg-white/10 mt-8 mx-auto overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
