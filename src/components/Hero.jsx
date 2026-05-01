import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Counter from './Counter';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // Cinematic entrance animation
    const tl = gsap.timeline();
    
    // Letters falling animation (Restored previous transition)
    tl.fromTo('.name-letter',
      { y: -300, opacity: 0, rotate: () => Math.random() * 20 - 10 },
      { 
        y: 0, 
        opacity: 1, 
        rotate: 0, 
        duration: 2.5, 
        stagger: 0.1, 
        ease: "power3.out" 
      }
    )
    .fromTo('.hero-line-1', 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=1.5"
    )
    .fromTo('.hero-line-2', 
      { x: 100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=1.2"
    )
    .fromTo('.hero-line-3', 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=1.2"
    )
    .fromTo('.hero-fade-in',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" },
      "-=0.8"
    );

    // Continuous multi-color shimmering effect
    const colors = ["#ffffff", "#9ca3af", "#d4af37", "#ffffff"];
    gsap.to('.name-letter', {
      color: (i) => colors[Math.floor(Math.random() * colors.length)],
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.3,
        from: "random"
      },
      ease: "sine.inOut"
    });
  }, []);

  const spawnParticle = (e) => {
    const particle = document.createElement('div');
    particle.className = 'absolute w-1 h-1 bg-white rounded-full pointer-events-none z-[100]';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    particle.style.boxShadow = '0 0 8px #ffffff';
    document.body.appendChild(particle);

    const destX = e.clientX + (Math.random() - 0.5) * 100;
    const destY = e.clientY + 200 + Math.random() * 100;

    gsap.to(particle, {
      x: destX - e.clientX,
      y: destY - e.clientY,
      opacity: 0,
      scale: 0,
      duration: 1 + Math.random(),
      ease: "power2.out",
      onComplete: () => particle.remove()
    });
  };

  const name = "DONET JOSEPH";

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Massive Background Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <motion.span 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="text-[20vw] font-black text-white/[0.02] whitespace-nowrap uppercase tracking-tighter"
        >
          Donet Joseph
        </motion.span>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
      >
        <div className="mb-10 flex justify-center" style={{ perspective: "1000px" }}>
          <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-3 px-4">
            {name.split("").map((letter, i) => (
              <span 
                key={i} 
                onMouseMove={spawnParticle}
                className={`name-letter inline-block text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.05em] md:tracking-[0.1em] text-white uppercase opacity-0 cursor-default ${letter === " " ? "w-4 md:w-6" : ""}`}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hero-fade-in opacity-0">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Available for new opportunities</span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 w-full max-w-5xl">
          <div className="overflow-hidden">
            <span className="block hero-line-1 opacity-0">Transforming Business</span>
          </div>
          <div className="overflow-hidden">
            <span className="block text-gray-400 hero-line-2 opacity-0">Operations Through</span>
          </div>
          <div className="overflow-hidden">
            <span className="block hero-line-3 opacity-0">Intelligent Systems.</span>
          </div>
        </h1>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed hero-fade-in opacity-0 px-4">
          IT Business Systems Analyst bridging the gap between business complexity and technical execution. Specializing in SAP MM, CRM coordination, and operational excellence with <Counter value={8} suffix="+" /> years of enterprise experience.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hero-fade-in">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
