import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Counter from './Counter';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      period: "Mar 2026 – Present",
      company: "Jubeerich Consultancy Pvt Ltd",
      role: "IT Executive — CRM & Business Systems",
      desc: <>Leading end-to-end CRM functional coordination across <Counter value={7} /> departments. Owning the entire CRM functional lifecycle from capturing requirements to liaising with developers and validating delivery.</>
    },
    {
      period: "Jul 2019 – Jul 2025",
      company: "Lulu Group International (Qatar)",
      role: "Senior IT Support Specialist",
      desc: <>Managed enterprise-scale IT support for a leading international retail group. Coordinated SAP MM outbound delivery to <Counter value={20} suffix="+" /> outlets, controlling stock variation and managing POS/Windows infrastructure for <Counter value={100} suffix="+" /> users.</>
    },
    {
      period: "Jun 2018 – Jun 2019",
      company: "Syscon Software (India)",
      role: "Application Support Engineer",
      desc: "Delivered technical support for Oracle VB business applications, working across the full software support lifecycle from testing to client-side implementation."
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-16 font-semibold">Career Timeline</h2>

        <div className="relative pl-8 md:pl-0 md:max-w-4xl md:mx-auto">
          {/* Animated Line */}
          <div className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-gray-400 to-transparent origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>
          
          {/* Mobile Line */}
          <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-white/10 md:hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-white origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-20 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'}`}>
              
              {/* Dot */}
              <div className={`absolute top-2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 
                ${index % 2 === 0 ? 'left-[-4px] md:-left-[6px]' : 'left-[-4px] md:left-auto md:-right-[6px]'}`} 
              />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 hover:border-white/20 transition-colors duration-500"
              >
                <div className="text-sm text-gray-400 mb-2 font-mono">{exp.period}</div>
                <div className="text-lg font-semibold text-white mb-1">{exp.role}</div>
                <div className="text-md text-gray-500 mb-4">{exp.company}</div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {exp.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
