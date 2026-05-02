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

  const metrics = [
    { value: 10, suffix: "+", label: "Departments Coordinated", desc: "Cross-functional operations" },
    { value: 200, suffix: "+", label: "Internal Users Assisted", desc: "Enterprise application support" },
    { value: 3, suffix: "", label: "Enterprise Platforms Supported", desc: "SAP, CRM, Windows Systems" }
  ];

  const operations = [
    "SAP MM Workflow Monitoring",
    "Daily CRM Operations Continuity"
  ];

  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-white/[0.02]" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div style={{ y }} className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Business Impact</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Measuring success through system stability, cross-departmental adoption, and continuous operational throughput.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {metrics.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 group-hover:scale-110 transition-transform duration-500 flex items-baseline justify-center">
                {impact.value < 10 && <span className="text-gray-600 mr-2 font-light text-5xl md:text-7xl">0</span>}
                <Counter value={impact.value} suffix={impact.suffix} />
              </div>
              <div className="text-lg font-bold text-white mb-2 uppercase tracking-widest">{impact.label}</div>
              <div className="text-sm text-gray-500 max-w-[200px]">{impact.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {operations.map((op, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
              className="px-8 py-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center gap-4 group hover:border-amber-500/30 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'}`}></div>
              <span className="text-white font-bold tracking-wider uppercase text-sm md:text-base group-hover:text-amber-500 transition-colors">{op}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
