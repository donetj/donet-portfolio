import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('.reveal-text');
    
    gsap.fromTo(chars, 
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const narrative = "I am a dedicated IT Support Specialist and SAP MM Professional. I specialize in bridging the gap between complex business requirements and reliable technology solutions, driving process optimization and system intelligence across enterprise operations.";

  return (
    <section id="about" className="py-32 md:py-48 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-white/30"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-semibold">Professional Identity</span>
          </motion.div>

          <h2 
            ref={textRef} 
            className="text-3xl md:text-5xl lg:text-7xl font-medium leading-[1.2] tracking-tight"
          >
            {narrative.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em]">
                {word.split('').map((char, j) => (
                  <span key={j} className="reveal-text inline-block">{char}</span>
                ))}
              </span>
            ))}
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-12"
          >
            <div>
              <h4 className="text-white font-semibold mb-2 text-lg">System Intelligence</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Implementing and supporting enterprise tools that empower data-driven decision making.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-lg">Process Optimization</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Streamlining workflows through SAP MM and CRM integrations to maximize operational efficiency.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-lg">Business Reliability</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Ensuring zero-downtime environments and seamless support for mission-critical business systems.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
