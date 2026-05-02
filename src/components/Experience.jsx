import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
      period: "2026 – Present",
      company: "Jubeerich Consultancy Pvt Ltd",
      role: "IT Executive — CRM & Business Systems",
      desc: <>Directing CRM functional coordination across <Counter value={7} /> distinct operational departments. Leading the full CRM lifecycle from requirement capture and developer liaison to final delivery validation, ensuring exact alignment with strategic business goals.</>
    },
    {
      period: "2019 – 2025",
      company: "Lulu Group International (Qatar)",
      role: "Senior IT Support Specialist",
      desc: <>Engineered enterprise-scale IT support frameworks for a premier retail group. Orchestrated SAP MM outbound deliveries across <Counter value={20} suffix="+" /> international outlets. Managed POS and Windows infrastructure to guarantee seamless operations for <Counter value={100} suffix="+" /> users.</>
    },
    {
      period: "2018 – 2019",
      company: "Syscon Software (India)",
      role: "Application Support Engineer",
      desc: "Delivered comprehensive technical support for Oracle VB business applications. Executed the full software support lifecycle, from rigorous pre-deployment testing to successful client-side implementation and training."
    }
  ];

  return (
    <section id="experience" className="py-32 md:py-48 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-24 justify-center md:justify-start">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Professional Trajectory</h2>
        </div>

        <div className="relative pl-8 md:pl-0 md:max-w-5xl md:mx-auto">
          {/* Animated Line */}
          <div className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-gray-400 to-transparent origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-32 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-20' : 'md:mr-auto md:pr-20 md:text-right'}`}>
              
              {/* Glowing Node */}
              <div className={`absolute top-4 w-4 h-4 rounded-full bg-black border-2 border-white z-10 flex items-center justify-center
                ${index % 2 === 0 ? 'left-[-6px] md:-left-[8px]' : 'left-[-6px] md:left-auto md:-right-[8px]'}`} 
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">{exp.period}</div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-gray-300 transition-colors">{exp.role}</h3>
                <div className="text-lg text-gray-400 mb-6 font-medium">{exp.company}</div>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
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
