import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      period: "2026 – Present",
      company: "Jubeerich Consultancy Pvt Ltd",
      role: "IT Executive — CRM & Business Systems",
      bullets: [
        "Coordinated CRM workflows across 10+ operational departments including CRE, Front Office, Counsellors, Country Managers, Application, Visa, and Travel Desk teams",
        "Managed user onboarding, system access, and internal business application support",
        "Provided Excel-based operational reporting and management summaries",
        "Liaised with external software developers for CRM modifications and issue resolution",
        "Maintained office IT assets, printers, attendance devices, and network continuity",
        "Supported lead lifecycle visibility, follow-up monitoring, and process tracking within CRM"
      ]
    },
    {
      period: "2019 – 2025",
      company: "Lulu Group International",
      role: "Senior IT Support Specialist",
      bullets: [
        "Supported Windows Server environments, VMware systems, POS devices, scanners, and printers",
        "Managed Active Directory users, groups, permissions, and organizational policies",
        "Assisted SAP MM inventory workflows including goods movement, stock transfer, and procurement support",
        "Maintained CRM loyalty systems and customer operational data",
        "Delivered stock, sales, and reconciliation reports for retail operations continuity",
        "Provided enterprise L1/L2 hardware and application troubleshooting"
      ]
    },
    {
      period: "2018 – 2019",
      company: "Syscon Software",
      role: "Application Support Engineer",
      bullets: [
        "Installed and supported Oracle/VB based business applications",
        "Delivered end-user troubleshooting and application issue resolution",
        "Assisted report generation, system testing, and implementation support",
        "Supported operational monitoring for sales and inventory systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 md:py-48 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-24 justify-center md:justify-start">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Professional Trajectory</h2>
        </div>

        <div className="relative pl-8 md:pl-0 md:max-w-6xl md:mx-auto">
          {/* Animated Line */}
          <div className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-500 via-white to-transparent origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-32 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-20' : 'md:mr-auto md:pr-20'}`}>
              
              {/* Glowing Node */}
              <div className={`absolute top-4 w-4 h-4 rounded-full bg-black border-2 border-white/50 z-10 flex items-center justify-center transition-colors duration-500
                ${index % 2 === 0 ? 'left-[-6px] md:-left-[8px]' : 'left-[-6px] md:left-auto md:-right-[8px]'}`} 
              >
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="text-xs text-amber-500/80 tracking-[0.2em] uppercase mb-4 font-semibold">{exp.period}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-gray-300 transition-colors">{exp.role}</h3>
                <div className="text-base text-gray-400 mb-8 font-medium">{exp.company}</div>
                
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-4">
                      <span className="text-white/30 mt-1.5 text-xs">▹</span>
                      <span className="text-gray-400 leading-relaxed text-sm md:text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
