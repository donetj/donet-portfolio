import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Counter from './Counter';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    // Scanning line animation
    gsap.to('.scan-line', {
      top: '100%',
      duration: 3,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <section id="projects" className="py-32 md:py-48 relative bg-[#080706]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Background Parallax Element */}
        <motion.div 
          style={{ y: yOffset }}
          className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-gradient-to-bl from-white/[0.02] to-transparent rounded-3xl -z-10"
        ></motion.div>

        <div className="flex flex-col xl:flex-row gap-16 md:gap-24 items-center">
          
          {/* Left Side Content */}
          <div className="xl:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-amber-500/80 font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-amber-500/50"></span> 
                BUSINESS SYSTEMS OPERATIONS
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
                Optimizing Technology, CRM & Enterprise Workflows
              </h2>
              
              <p className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-2xl mb-12">
                Delivering reliable IT support, SAP MM workflow assistance, CRM lifecycle coordination, and internal business systems continuity across multi-department operations.
              </p>
            </motion.div>
          </div>
          
          {/* Right Side: Enterprise Intelligence Dashboard */}
          <div className="xl:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Ambient inner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              {/* Scanning Data Line */}
              <div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)] z-20 pointer-events-none"></div>

              {/* Dashboard Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-mono flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    System Status: Active
                  </div>
                  <div className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">Intelligent Ops</div>
                </div>

                {/* Grid of counters */}
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 mb-12">
                  <div className="flex flex-col">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-baseline">
                      <span className="text-gray-600 mr-1 font-light text-2xl md:text-3xl">0</span>
                      <Counter value={3} suffix="+" />
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">Years Experience</div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-baseline">
                      <span className="text-gray-600 mr-1 font-light text-2xl md:text-3xl">0</span>
                      <Counter value={7} suffix="" />
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">Depts Connected</div>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                      <Counter value={200} suffix="+" />
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">Users Assisted</div>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-baseline">
                      <span className="text-gray-600 mr-1 font-light text-2xl md:text-3xl">0</span>
                      <Counter value={3} suffix="" />
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">Enterprise Platforms</div>
                  </div>
                </div>

                {/* Workflow Tags */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide">SAP MM Workflow Support</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide">CRM Lifecycle Coordination</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
