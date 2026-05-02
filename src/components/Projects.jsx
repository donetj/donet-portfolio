import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "SAP MM Retail Logistics Sync",
      company: "Lulu Group International",
      desc: "Architected a synchronized outbound delivery protocol across 20+ Qatari outlets. Minimized inventory discrepancy and optimized the supply chain flow, establishing a single source of truth for enterprise logistics.",
      tags: ["SAP MM", "Logistics", "Inventory"]
    },
    {
      title: "Enterprise CRM Lifecycle Integration",
      company: "Jubeerich Consultancy",
      desc: "Directed the complete functional integration of a unified CRM system. Bridged 7 disparate departments into a cohesive technical workflow, resulting in 100% adoption and streamlined client lifecycle management.",
      tags: ["CRM Coordination", "Process Mapping", "QA Validation"]
    },
    {
      title: "Zero-Shrinkage Inventory Strategy",
      company: "Lulu Group International",
      desc: "Engineered and implemented rigorous stock variation controls. Leveraged advanced data analytics to identify bottlenecks, reducing shrinkage by 30% and significantly enhancing overall operational margins.",
      tags: ["Data Analytics", "Process Optimization", "Retail Ops"]
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-48 relative bg-[#080706]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-32">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Featured Solutions</h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((proj, idx) => {
            const cardRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            });
            const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

            return (
              <div key={idx} ref={cardRef} className="relative group">
                {/* Background Parallax Element */}
                <motion.div 
                  style={{ y: yOffset }}
                  className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-gradient-to-bl from-white/[0.03] to-transparent rounded-3xl -z-10 group-hover:from-white/[0.06] transition-colors duration-1000"
                ></motion.div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4 flex items-center gap-3">
                        <span className="text-white/50 font-mono text-sm">0{idx + 1}</span> 
                        <span className="w-4 h-[1px] bg-gray-600"></span> 
                        {proj.company}
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">{proj.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-xl">
                        {proj.desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {proj.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono tracking-wider text-gray-300 uppercase bg-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative glass-panel"
                    >
                      {/* Abstract Data Visualization / Image placeholder */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-50 mix-blend-overlay"></div>
                      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-600 font-mono text-sm tracking-[0.5em] uppercase">Data Stream {idx + 1}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
