import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsBento from './components/SkillsBento';
import Impact from './components/Impact';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="grain-overlay"></div>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <About />
            <SkillsBento />
            <Experience />
            <Impact />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
