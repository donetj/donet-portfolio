import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Let's build something <br/><span className="text-gray-400 italic">remarkable</span> together.
          </h2>
          
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to transform your business systems, implement ERP solutions, or coordinate a CRM overhaul — I'm ready to deliver results that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:donetj@gmail.com" 
              className="group relative px-8 py-5 w-full sm:w-auto rounded-full bg-white text-black font-semibold text-lg overflow-hidden flex items-center justify-center hover-target"
            >
              <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Send an Email 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/donetj" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-5 w-full sm:w-auto rounded-full border border-white/20 bg-transparent text-white font-semibold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center hover-target"
            >
              Connect on LinkedIn
            </a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
