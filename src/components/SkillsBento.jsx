import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiServer, FiUsers, FiCpu, FiPieChart, FiMonitor } from 'react-icons/fi';

const SkillsBento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="expertise" className="py-32 md:py-48 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Core Support Domains</h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[220px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: SAP MM / ERP */}
          <motion.div variants={itemVariants} className="glass-panel p-10 md:col-span-3 md:row-span-2 flex flex-col justify-between group relative overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-colors duration-700 pointer-events-none"></div>
            
            <div className="relative z-10">
              <FiDatabase className="text-5xl text-gray-400 mb-8 group-hover:text-amber-500 transition-colors duration-500" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">SAP MM & ERP Workflow Support</h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Assisting inventory workflows, goods movement, stock transfer, and procurement support. Ensuring reliable operational continuity across enterprise ERP environments.
              </p>
            </div>
            <div className="relative z-10 text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mt-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span> Enterprise Scale
            </div>
          </motion.div>

          {/* Card 2: IT Infrastructure Support */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-3 md:row-span-1 flex flex-col justify-center group relative overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">IT Infrastructure Support</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                  Managing Active Directory users, groups, permissions, and organizational policies for secure systems access.
                </p>
              </div>
              <FiServer className="text-4xl text-gray-500 group-hover:text-white transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Card 3: CRM & Business Application */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-3 md:row-span-1 flex flex-col justify-center group relative overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">CRM Lifecycle Coordination</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                  Coordinating workflows across disparate departments, supporting lead visibility, and maintaining loyalty system data.
                </p>
              </div>
              <FiUsers className="text-4xl text-blue-500/50 group-hover:text-blue-400 transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Card 4: Application Troubleshooting */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 md:row-span-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold mb-2 text-white">Application Troubleshooting</h3>
              <FiCpu className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">End-user support, testing, and issue resolution for enterprise applications.</p>
          </motion.div>

          {/* Card 5: Reporting & Data Validation */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 md:row-span-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold mb-2 text-white">Reporting & Data Validation</h3>
              <FiPieChart className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Excel-based operational reporting, stock reconciliation, and management summaries.</p>
          </motion.div>

          {/* Card 6: Hardware / Printer / Network */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 md:row-span-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden">
            <div className="flex justify-between items-start relative z-10">
              <h3 className="text-lg font-bold mb-2 text-white z-10">Hardware & Network Support</h3>
              <div className="p-2 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500">
                <FiMonitor className="text-xl text-white" />
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed relative z-10">Supporting VMware, POS devices, scanners, printers, and network continuity.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default SkillsBento;
