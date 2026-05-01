import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiSettings, FiMonitor, FiPieChart, FiUsers, FiTrendingUp } from 'react-icons/fi';
import Counter from './Counter';

const SkillsBento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="expertise" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-12 font-semibold">Core Expertise</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Large Card */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <FiDatabase className="text-4xl text-gray-400 mb-6 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-2xl font-bold mb-3">ERP SAP MM</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                End-to-end ERP support across procurement, inventory, and delivery. Trained sales staff, generated analytical reports, and coordinated outbound logistics.
              </p>
            </div>
            <div className="text-sm font-mono text-gray-500 uppercase tracking-wider mt-4">Advanced Proficiency</div>
          </motion.div>

          {/* Medium Card */}
          <motion.div variants={itemVariants} className="glass-panel p-6 md:col-span-1 lg:col-span-2 flex flex-col justify-center group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <FiSettings className="text-6xl text-white transform group-hover:rotate-90 transition-transform duration-1000" />
            </div>
            <h3 className="text-xl font-bold mb-2 relative z-10">CRM Functional Coordination</h3>
            <p className="text-gray-400 text-sm max-w-[80%] relative z-10">Liaison between <Counter value={7} suffix="+" /> departments and development teams, ensuring perfect requirement translation.</p>
          </motion.div>

          {/* Small Cards */}
          <motion.div variants={itemVariants} className="glass-panel p-6 flex flex-col justify-center items-start group hover:bg-white/[0.05] transition-colors">
            <FiMonitor className="text-2xl text-gray-400 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-bold mb-1">IT Infrastructure</h3>
            <p className="text-gray-500 text-xs">Windows Admin, Active Directory, POS</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 flex flex-col justify-center items-start group hover:bg-white/[0.05] transition-colors">
            <FiPieChart className="text-2xl text-gray-400 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-bold mb-1">Data & Reporting</h3>
            <p className="text-gray-500 text-xs">Excel Analytics, Power BI Dashboards</p>
          </motion.div>

          {/* Horizontal Card */}
          <motion.div variants={itemVariants} className="glass-panel p-6 md:col-span-2 lg:col-span-2 flex items-center gap-6 group hover:border-white/20 transition-colors">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <FiUsers className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Stakeholder Management</h3>
              <p className="text-gray-400 text-sm">Vendor communication, senior management liaison, and cross-team coordination.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 md:col-span-1 lg:col-span-2 flex flex-col justify-center items-start bg-gradient-to-br from-white/[0.05] to-transparent border-white/10">
            <FiTrendingUp className="text-2xl text-gray-300 mb-4" />
            <h3 className="text-lg font-bold mb-1">Business Intelligence</h3>
            <p className="text-gray-400 text-sm">Transforming raw operational data into actionable business insights.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default SkillsBento;
