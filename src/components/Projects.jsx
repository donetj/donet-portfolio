import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Projects = () => {
  const projects = [
    {
      title: "SAP MM Retail Rollout",
      company: "LULU GROUP · QATAR",
      desc: "Coordinated SAP MM outbound delivery operations across Qatar's entire Lulu retail network, ensuring seamless inventory flow from warehouses to store shelves.",
      metrics: [
        { value: 20, suffix: "+", label: "Outlets" },
        { value: 100, suffix: "+", label: "Users" },
        { value: 99, suffix: "%", label: "Uptime" }
      ]
    },
    {
      title: "CRM Lifecycle Overhaul",
      company: "JUBEERICH CONSULTANCY",
      desc: "Led complete CRM functional coordination from requirement gathering across 7 departments to developer liaison, QA validation, and enterprise-wide adoption.",
      metrics: [
        { value: 7, suffix: "", label: "Depts" },
        { value: 50, suffix: "+", label: "Features" },
        { value: 100, suffix: "%", label: "Adoption" }
      ]
    },
    {
      title: "Inventory Accuracy Program",
      company: "LULU GROUP · QATAR",
      desc: "Designed and executed stock variation control processes to minimize shrinkage and improve inventory accuracy across the retail chain.",
      metrics: [
        { value: 20, suffix: "+", label: "Stores" },
        { value: 95, suffix: "%", label: "Accuracy" },
        { value: 30, suffix: "%", label: "Less Shrink" }
      ]
    }
  ];

  return (
    <section id="impact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Business Impact & <br/><span className="text-gray-400">Key Projects.</span></h3>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-500 uppercase tracking-widest text-xs font-mono">04 — Selected Works</span>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-12 group hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-white/[0.02] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="lg:w-1/2">
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">{proj.company}</div>
                  <h4 className="text-3xl font-bold mb-4">{proj.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
                    {proj.desc}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:flex gap-8 md:gap-12 lg:w-1/2 lg:justify-end">
                  {proj.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-3xl md:text-5xl font-bold text-white mb-1">
                        <Counter value={metric.value} suffix={metric.suffix} />
                      </span>
                      <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 font-bold">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
