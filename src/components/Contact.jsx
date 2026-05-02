import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 border-t border-white/10 relative overflow-hidden bg-[#060504]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-semibold mb-12">Available for Executive Roles</p>
          
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-16 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 hover:to-white transition-colors duration-1000 cursor-default">
            Let's<br/>Connect.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 w-full max-w-3xl">
            <a 
              href="mailto:donetj@gmail.com" 
              className="group relative px-10 py-6 w-full sm:w-auto rounded-none bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden flex items-center justify-center hover-target"
            >
              <div className="absolute inset-0 bg-gray-300 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Send Email
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="group-hover:translate-x-2 transition-transform duration-300">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/donetj" 
              target="_blank" 
              rel="noreferrer"
              className="group px-10 py-6 w-full sm:w-auto rounded-none border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center hover-target"
            >
              LinkedIn Profile
            </a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
