import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiSettings, FiMonitor, FiPieChart, FiUsers, FiTrendingUp } from 'react-icons/fi';
import Counter from './Counter';

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
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Core Expertise</h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[220px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Hero Card - SAP MM */}
          <motion.div variants={itemVariants} className="glass-panel p-10 md:col-span-4 lg:col-span-4 md:row-span-2 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent">
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <FiDatabase className="text-5xl text-gray-300 mb-8 group-hover:text-white transition-colors duration-500" />
              <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Enterprise ERP & SAP MM</h3>
              <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
                Orchestrating end-to-end ERP architectures. Specializing in procurement lifecycle, inventory management, and outbound logistics synchronization across high-volume retail environments.
              </p>
            </div>
            <div className="relative z-10 text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Primary Competency
            </div>
          </motion.div>

          {/* CRM Card */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col justify-center group relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-3 relative z-10 text-white">CRM Systems<br/>Coordination</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">Translating complex operational needs into technical specifications across <Counter value={7} suffix="+" /> distinct business units.</p>
            <FiSettings className="absolute -bottom-4 -right-4 text-7xl text-white/5 group-hover:rotate-180 transition-transform duration-[2s] ease-out" />
          </motion.div>

          {/* Data & Reporting */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold mb-1 text-white">Business Intelligence</h3>
              <FiPieChart className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Advanced Excel analytics and executive dashboarding to convert raw data into strategic business insights.</p>
          </motion.div>

          {/* Infrastructure */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 lg:col-span-2 md:row-span-1 flex items-center gap-6 group hover:border-white/20 transition-colors duration-500">
            <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500">
              <FiMonitor className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-white">Infrastructure Ops</h3>
              <p className="text-gray-400 text-sm">Active Directory & POS Systems Support.</p>
            </div>
          </motion.div>

          {/* Stakeholder Management */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 lg:col-span-4 md:row-span-1 flex flex-col md:flex-row justify-between items-start md:items-center group bg-gradient-to-r from-transparent via-white/[0.02] to-transparent">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Executive Stakeholder Liaison</h3>
              <p className="text-gray-400 text-sm max-w-md">Bridging the communication gap between technical teams, vendors, and senior leadership.</p>
            </div>
            <FiUsers className="text-4xl text-white/20 mt-4 md:mt-0 group-hover:text-white/40 transition-colors" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default SkillsBento;
