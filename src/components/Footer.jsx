import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Links Section */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
          <a href="#about" className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 hover-target">About</a>
          <a href="#experience" className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 hover-target">Experience</a>
          <a href="#impact" className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 hover-target">Impact</a>
        </nav>
        
        {/* Bottom Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
        
        {/* Copyright Section */}
        <div className="text-sm text-gray-500 font-medium tracking-wide text-center">
          powerd by <span className="text-white">Donet Joseph</span> © {new Date().getFullYear()} · IT Business Systems Analyst · Premium Digital Experience
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
