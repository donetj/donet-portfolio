import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-[#060504] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Links Section */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
          <a href="#about" className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 hover-target">Identity</a>
          <a href="#expertise" className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 hover-target">Core Domains</a>
          <a href="#experience" className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 hover-target">Trajectory</a>
        </nav>
        
        {/* Bottom Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
        
        {/* Copyright Section */}
        <div className="text-xs text-gray-500 uppercase tracking-widest text-center flex flex-col items-center gap-2">
          <span className="font-bold text-gray-400">DONET JOSEPH <span className="text-white">© {new Date().getFullYear()}</span></span>
          <span>Enterprise IT & Business Systems Operations</span>
          <span className="mt-4 text-[10px] text-gray-700">Kochi, India · Global Operations</span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
