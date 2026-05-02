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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Split text reveal for headline
    tl.fromTo('.hero-title-word',
      { opacity: 0, y: 40, rotateX: -45 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.08, ease: "power3.out", delay: 0.2 }
    )
    // Description reveal
    .fromTo('.hero-desc',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    // Floating Card and CTAs reveal
    .fromTo('.hero-floating-card',
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out" },
      "-=0.4"
    )
    .fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.8"
    );

    // Continuous multi-color shimmering effect for name
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

  const headline = "Reliable Technology Support Across Systems, ERP & Business Operations";
  const myName = "DONET JOSEPH";

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIvPjwvZz48L3N2Zz4=')] [background-position:center] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start justify-between">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 xl:w-3/5 max-w-4xl pt-8">
            
            {/* Color Shimmering Name */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mb-8 flex flex-col items-start gap-4"
            >
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-[0.1em] md:tracking-[0.2em] uppercase whitespace-nowrap">
                {myName.split("").map((letter, i) => (
                  <span key={i} className="name-letter inline-block text-white">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-amber-500/50"></span>
                <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 font-bold">ENTERPRISE IT & BUSINESS SYSTEMS</span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] mb-8" style={{ perspective: '1000px' }}>
              <div className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2">
                {headline.split(" ").map((word, i) => (
                  <div key={i} className="overflow-hidden pb-1">
                    <span className="hero-title-word inline-block origin-bottom text-white opacity-0">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            </h1>

            <p className="hero-desc opacity-0 text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Delivering L1/L2 IT support, SAP MM workflow assistance, CRM coordination, application troubleshooting, and operational systems continuity across enterprise business environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/donetj" target="_blank" rel="noreferrer" className="hero-cta opacity-0 group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-sm hover-target">
                <span className="relative z-10 flex items-center gap-2">
                  Connect on LinkedIn
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </a>
              <a href="mailto:donetj@gmail.com" className="hero-cta opacity-0 group px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-wider hover:bg-white/5 transition-colors rounded-sm hover-target">
                Email Me
              </a>
            </div>
          </div>

          {/* Right Floating Stats Dashboard */}
          <div className="w-full lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
            <div className="hero-floating-card opacity-0 glass-panel p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative overflow-hidden w-full max-w-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="flex flex-col gap-6 relative z-10">
                
                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/5">
                  <div className="flex flex-col">
                    <div className="text-3xl font-black text-white mb-1 flex items-baseline">
                      <span className="text-gray-600 mr-1 font-light text-xl">0</span>
                      <Counter value={7} suffix="+" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Years Experience</div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="text-3xl font-black text-white mb-1 flex items-baseline">
                      <Counter value={10} suffix="+" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Depts Coordinated</div>
                  </div>
                </div>

                <div className="flex flex-col pb-6 border-b border-white/5">
                  <div className="text-3xl font-black text-white mb-1">
                    <Counter value={200} suffix="+" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Users Assisted</div>
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                    <div className="text-sm font-semibold text-gray-300">SAP MM & ERP Workflow Support</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    <div className="text-sm font-semibold text-gray-300">CRM Lifecycle Coordination</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse"></div>
                    <div className="text-sm font-semibold text-gray-300">L1/L2 IT Infrastructure Support</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
