import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-subtitle', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    )
    .fromTo('.hero-title-word',
      { opacity: 0, y: 50, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "expo.out" },
      "-=0.5"
    )
    .fromTo('.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.6"
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
      ease: "sine.inOut",
      delay: 2
    });

  }, []);

  const name = "DONET JOSEPH";

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="max-w-5xl">
          <div className="hero-subtitle mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md opacity-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">IT Support & SAP MM Professional</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] mb-8 uppercase" style={{ perspective: '1000px' }}>
            <div className="flex flex-wrap gap-x-4 md:gap-x-8">
              {name.split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="overflow-hidden pb-2 whitespace-nowrap">
                  <span className="hero-title-word inline-block origin-bottom opacity-0 flex">
                    {word.split("").map((letter, i) => (
                      <span key={`${wordIndex}-${i}`} className="name-letter inline-block text-white">
                        {letter}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </h1>

          <div className="w-24 h-1 bg-white/20 mb-8 hero-description opacity-0"></div>

          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8 hero-description opacity-0 max-w-3xl leading-tight">
            Architecting <span className="text-white font-medium">Operational Excellence</span> Through Intelligent Systems.
          </h2>

          <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed hero-description opacity-0">
            Bridging business complexity and technical execution. Specializing in SAP MM, CRM coordination, and comprehensive system support.
          </p>

          <div className="flex flex-wrap gap-4 hero-cta opacity-0">
            <a href="#contact" className="group relative px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider overflow-hidden rounded-sm hover-target">
              <span className="relative z-10">Initiate Contact</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </a>
            <a href="#expertise" className="group px-8 py-4 bg-transparent text-white border border-white/20 font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors rounded-sm hover-target">
              Explore Systems
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4 opacity-50 hero-cta hidden md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-bottom mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
