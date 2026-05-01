import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Counter from './Counter';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Users Supported" },
    { value: 20, suffix: "+", label: "Outlets Coordinated" },
    { value: 7, suffix: "", label: "Depts Transformed" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold text-center lg:text-left">Professional Identity</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-center lg:text-left">
              The bridge between <span className="text-gray-400 italic">business objectives</span> and <span className="text-white">technical reality.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                With <strong>8+ years of progressive experience</strong>, I transform complex business needs into streamlined, intelligent IT systems that drive measurable outcomes. My career spans enterprise retail IT, ERP SAP MM implementations, and full-stack business systems support.
              </p>
              <p>
                From coordinating SAP MM outbound deliveries across 20+ Lulu outlets in Qatar to leading CRM functional enhancements for multi-department operations, I bring a rare combination of technical depth and executive business acumen.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="glass-panel p-8 flex flex-col justify-center items-start hover:bg-white/[0.08] transition-colors duration-300 hover-target"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
