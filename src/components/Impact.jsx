import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Counter from './Counter';

const Impact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const impacts = [
    { value: 8, suffix: "+", label: "Years Experience", desc: "Delivering enterprise solutions" },
    { value: 100, suffix: "+", label: "Users Supported", desc: "Across diverse retail environments" },
    { value: 20, suffix: "+", label: "Outlets Integrated", desc: "Unified via SAP MM pipelines" },
    { value: 7, suffix: "", label: "Depts Transformed", desc: "Through custom CRM workflows" }
  ];

  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-white/[0.02]" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div style={{ y }} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Enterprise Scale</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Measuring success through system stability, adoption rates, and operational throughput.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {impacts.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 group-hover:scale-110 transition-transform duration-500">
                <Counter value={impact.value} suffix={impact.suffix} />
              </div>
              <div className="text-lg font-bold text-white mb-2 uppercase tracking-widest">{impact.label}</div>
              <div className="text-sm text-gray-500 max-w-[200px]">{impact.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
