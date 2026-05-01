export function renderApp() {
  return `
<!-- CUSTOM CURSOR -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursor-ring"></div>

<!-- BACKGROUND CANVAS -->
<canvas id="bg-canvas"></canvas>

<!-- SCROLL PROGRESS -->
<div class="scroll-progress"></div>

<!-- INTRO SCREEN -->
<div id="intro">
  <canvas id="intro-canvas"></canvas>
  <div class="intro-content">
    <p class="intro-tagline">Transforming Business Needs Into Intelligent IT Systems</p>
    <div class="intro-line"></div>
    <h1 class="intro-name">DONET JOSEPH</h1>
    <p class="intro-sub">IT Business Systems Analyst &nbsp;·&nbsp; ERP SAP MM &nbsp;·&nbsp; CRM Specialist</p>
    <button class="enter-btn" id="enter-btn">Enter Portfolio →</button>
  </div>
</div>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobile-menu">
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#why">Why Me</a>
  <a href="#contact">Contact</a>
</div>

<!-- NAV -->
<nav id="nav">
  <div class="nav-logo">DJ</div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#why">Why Me</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="mailto:donetj@gmail.com" class="nav-cta">Hire Me</a>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="glow-line hero-glow-1"></div>
  <div class="glow-line hero-glow-2"></div>
  <div class="hero-grid">
    <div class="hero-left">
      <div class="hero-eyebrow">Available for Opportunities</div>
      <h1 class="hero-name">DONET<br>JOSEPH</h1>
      <div class="hero-roles">
        <span class="hero-role-static">IT Business Systems Analyst<br>ERP (SAP MM) Specialist · CRM Coordinator</span>
        <div style="margin-top:0.8rem;">
          <span id="dynamic-role" class="hero-role-dynamic"></span><span class="type-cursor"></span>
        </div>
      </div>
      <p class="hero-desc">
        Bridging the gap between business complexity and intelligent IT systems.
        6+ years of delivering ERP, CRM, and enterprise solutions across retail,
        consulting, and international operations.
      </p>
      <div class="hero-btns">
        <a href="#experience" class="btn-primary">View Experience</a>
        <a href="#contact" class="btn-secondary">Download CV</a>
        <a href="#contact" class="btn-secondary">Contact Me</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="photo-frame">
        <div class="photo-outer-glow"></div>
        <div class="photo-placeholder">
          <span class="photo-initials">DJ</span>
          <span class="photo-label">DONET JOSEPH</span>
        </div>
        <div class="photo-glow"></div>
        <div class="floating-tag tag-1">SAP MM Expert</div>
        <div class="floating-tag tag-2">CRM Specialist</div>
        <div class="floating-tag tag-3">6+ Years XP</div>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<section id="stats">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item reveal">
        <span class="stat-number" data-target="100">0</span>
        <span class="stat-label">Users Supported</span>
      </div>
      <div class="stat-item reveal reveal-delay-1">
        <span class="stat-number" data-target="20">0</span>
        <span class="stat-label">Lulu Outlets Coordinated</span>
      </div>
      <div class="stat-item reveal reveal-delay-2">
        <span class="stat-number" data-target="6">0</span>
        <span class="stat-label">Years of Experience</span>
      </div>
      <div class="stat-item reveal reveal-delay-3">
        <span class="stat-number" data-target="8">0</span>
        <span class="stat-label">Departments Transformed</span>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-left reveal">
        <div class="section-label">About Me</div>
        <h2 class="section-title">The Bridge Between Business & Technology</h2>
        <div class="about-text">
          <p>I am a results-driven IT professional with <strong>6+ years of progressive experience</strong> transforming complex business needs into streamlined, intelligent IT systems that drive measurable outcomes.</p>
          <p>My career spans enterprise retail IT, <strong>ERP SAP MM implementations</strong>, CRM functional coordination, and full-stack business systems support — giving me a rare combination of technical depth and business acumen.</p>
          <p>From coordinating <strong>SAP MM outbound deliveries</strong> across 20+ Lulu outlets in Qatar to leading CRM functional enhancements for multi-department operations, every role has sharpened my ability to <strong>understand stakeholders, translate requirements</strong>, and deliver solutions that work.</p>
        </div>
      </div>
      <div class="about-right reveal reveal-delay-2">
        <div class="about-cards">
          <div class="info-card"><span class="info-card-icon">🎯</span><div class="info-card-title">Business Analysis</div><div class="info-card-text">Translating complex business requirements into actionable IT specifications</div></div>
          <div class="info-card"><span class="info-card-icon">⚙️</span><div class="info-card-title">SAP MM / ERP</div><div class="info-card-text">End-to-end ERP support across procurement, inventory and delivery</div></div>
          <div class="info-card"><span class="info-card-icon">🔗</span><div class="info-card-title">CRM Coordination</div><div class="info-card-text">Functional analysis, enhancement coordination and multi-department rollout</div></div>
          <div class="info-card"><span class="info-card-icon">📊</span><div class="info-card-title">Data & Reporting</div><div class="info-card-text">Excel analytics, Power BI dashboards and business intelligence</div></div>
          <div class="info-card"><span class="info-card-icon">🏗️</span><div class="info-card-title">IT Infrastructure</div><div class="info-card-text">Windows admin, Active Directory, POS systems and enterprise hardware</div></div>
          <div class="info-card"><span class="info-card-icon">🤝</span><div class="info-card-title">Stakeholder Mgmt</div><div class="info-card-text">Vendor communication, senior management liaison and cross-team coordination</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="container">
    <div class="section-label reveal">Career Journey</div>
    <h2 class="section-title reveal">Experience Timeline</h2>
    <div class="timeline" style="margin-top:4rem;">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span class="timeline-period">Mar 2026 – Present</span>
            <span class="timeline-company">Jubeerich Consultancy Pvt Ltd · Kochi, India</span>
          </div>
          <h3 class="timeline-role">IT Executive — CRM & Business Systems Coordination</h3>
          <p class="timeline-desc">Leading end-to-end CRM functional coordination across seven departments including Front Office, Counsellors, Country Managers, Application, Visa, and Travel Desk operations.</p>
          <ul class="timeline-list">
            <li>Coordinate CRM functional enhancements for 7+ departments</li>
            <li>Gather and document business requirements from all units</li>
            <li>Conduct review meetings with Managing Director</li>
            <li>Liaise with external CRM development provider</li>
            <li>Validate and QA all delivered CRM changes</li>
            <li>Support reporting and business application workflows</li>
          </ul>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span class="timeline-period">Jul 2019 – Jul 2025</span>
            <span class="timeline-company">Lulu Group International · Doha, Qatar</span>
          </div>
          <h3 class="timeline-role">Senior IT Support Specialist — Systems, ERP & Retail Operations</h3>
          <p class="timeline-desc">Managed enterprise-scale IT support for a leading international retail group, handling ERP SAP MM operations, infrastructure, and large-scale user support across Qatar's Lulu retail network.</p>
          <ul class="timeline-list">
            <li>Managed IT support for 100+ enterprise users</li>
            <li>Coordinated SAP MM outbound delivery to 20+ outlets</li>
            <li>Controlled stock variation and inventory accuracy</li>
            <li>Trained sales staff and supervisors on SAP MM</li>
            <li>Generated Excel analytical and operational reports</li>
            <li>Managed POS systems and Windows infrastructure</li>
            <li>Active Directory user and access management</li>
            <li>Vendor coordination and IT procurement support</li>
          </ul>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span class="timeline-period">Jun 2018 – Jun 2019</span>
            <span class="timeline-company">Syscon Software · India</span>
          </div>
          <h3 class="timeline-role">Application Support Engineer</h3>
          <p class="timeline-desc">Delivered technical support for Oracle Visual Basic business applications, working across the full software support lifecycle from testing to client-side implementation.</p>
          <ul class="timeline-list">
            <li>Oracle VB application support and maintenance</li>
            <li>Software testing and quality assurance</li>
            <li>Implementation support for client deployments</li>
            <li>Bug identification, escalation and troubleshooting</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

${renderSkillsAndRest()}

<!-- BACK TO TOP -->
<button class="back-to-top" aria-label="Back to top">↑</button>
`;
}

function renderSkillsAndRest() {
  return `
<!-- SKILLS -->
<section id="skills">
  <div class="container">
    <div class="section-label reveal">Competencies</div>
    <h2 class="section-title reveal">Skills & Expertise</h2>
    <div class="skills-grid">
      ${skill('Business Requirement Gathering',92,'Core')}
      ${skill('CRM Functional Analysis',88,'CRM')}
      ${skill('SAP MM',90,'ERP')}
      ${skill('ERP Systems',85,'ERP')}
      ${skill('Stakeholder Communication',88,'Ops')}
      ${skill('Vendor Coordination',85,'Ops')}
      ${skill('Windows Administration',87,'IT')}
      ${skill('Excel Reporting & Analytics',90,'Data')}
      ${skill('Power BI',75,'Data')}
      ${skill('IT Infrastructure & POS',83,'IT')}
      ${skill('Application Support',82,'IT')}
      ${skill('User Training & Enablement',88,'Ops')}
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="container">
    <div class="section-label reveal">Case Studies</div>
    <h2 class="section-title reveal">Key Projects & Impact</h2>
    <div class="projects-grid">
      ${project('📦','SAP MM Retail Rollout','LULU GROUP · QATAR','Coordinated SAP MM outbound delivery operations across Qatar\'s entire Lulu retail network, ensuring seamless inventory flow from warehouses to store shelves.','20+','Outlets','100+','Users','99%','Uptime')}
      ${project('🔗','CRM Lifecycle Overhaul','JUBEERICH CONSULTANCY','Led complete CRM functional coordination from requirement gathering across 7 departments to developer liaison, QA validation, and enterprise-wide adoption.','7','Depts','50+','Features','100%','Adoption')}
      ${project('📊','Inventory Accuracy Program','LULU GROUP · QATAR','Designed and executed stock variation control processes to minimize shrinkage and improve inventory accuracy across the retail chain.','20+','Stores','95%','Accuracy','30%','Less Shrink')}
      ${project('🏗️','IT Infrastructure Modernization','LULU GROUP · QATAR','Managed Windows infrastructure, Active Directory, and POS systems estate-wide, delivering enterprise-grade reliability for retail operations.','100+','Endpoints','24/7','Support','99.5%','SLA')}
    </div>
  </div>
</section>

<!-- CERTIFICATIONS -->
<section id="certifications">
  <div class="container">
    <div class="section-label reveal">Qualifications</div>
    <h2 class="section-title reveal">Education & Certifications</h2>
    <div class="certs-grid">
      <div class="cert-card"><div class="cert-icon">🎓</div><div class="cert-info"><div class="cert-title">Bachelor of Computer Applications (BCA)</div><div class="cert-org">University Graduate</div><div class="cert-year">Completed</div></div></div>
      <div class="cert-card"><div class="cert-icon">⚙️</div><div class="cert-info"><div class="cert-title">SAP MM — Materials Management</div><div class="cert-org">Enterprise ERP Specialization</div><div class="cert-year">Professional Experience</div></div></div>
      <div class="cert-card"><div class="cert-icon">🔗</div><div class="cert-info"><div class="cert-title">CRM Functional Coordination</div><div class="cert-org">Multi-Department Implementation</div><div class="cert-year">Current Role</div></div></div>
      <div class="cert-card"><div class="cert-icon">🖥️</div><div class="cert-info"><div class="cert-title">Windows Server & Active Directory</div><div class="cert-org">Enterprise IT Administration</div><div class="cert-year">Professional Experience</div></div></div>
    </div>
  </div>
</section>

<!-- WHY ME -->
<section id="why">
  <div class="container">
    <div class="section-label reveal">Value Proposition</div>
    <h2 class="section-title reveal">Why Choose Me</h2>
    <div class="why-grid">
      <div class="why-card"><span class="why-number">01</span><span class="why-icon">🧠</span><h3 class="why-title">Rare Business + Technical Duality</h3><p class="why-text">Most IT professionals speak either business or tech. I speak both fluently — gathering requirements at the executive level while translating them into precise technical specifications.</p></div>
      <div class="why-card"><span class="why-number">02</span><span class="why-icon">🌍</span><h3 class="why-title">International Enterprise Experience</h3><p class="why-text">Proven performance within Lulu Group International — one of the region's largest retail conglomerates — managing ERP operations and 100+ user infrastructure across a multinational environment.</p></div>
      <div class="why-card"><span class="why-number">03</span><span class="why-icon">⚡</span><h3 class="why-title">End-to-End CRM Ownership</h3><p class="why-text">From capturing requirements to liaising with developers, validating delivery, and supporting adoption across 7 departments — I own the entire CRM functional lifecycle.</p></div>
      <div class="why-card"><span class="why-number">04</span><span class="why-icon">📈</span><h3 class="why-title">Measurable Operational Impact</h3><p class="why-text">Every role has delivered quantifiable outcomes: 20+ outlets coordinated, stock accuracy improved, users trained, systems stabilized. I don't just maintain systems — I make them perform better.</p></div>
      <div class="why-feature"><p class="why-feature-text">"The right candidate doesn't just understand the technology — they understand the business, the people, and the problem. That's exactly what I bring."</p><p style="margin-top:1.5rem;font-family:var(--font-mono);font-size:0.7rem;letter-spacing:0.2em;color:var(--gold);">— DONET JOSEPH</p></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="container">
    <div class="contact-inner">
      <div class="section-label reveal" style="justify-content:center">Get In Touch</div>
      <h2 class="section-title reveal" style="text-align:center">Let's Build Something<br>Remarkable Together</h2>
      <p class="reveal" style="color:var(--text-dim);font-size:1rem;line-height:1.8;text-align:center;margin-bottom:1rem;">
        Whether you're looking to transform your business systems, implement ERP solutions,
        or coordinate a CRM overhaul — I'm ready to deliver results that matter.
      </p>
      <div class="contact-grid">
        <a href="mailto:donetj@gmail.com" class="contact-item reveal"><span class="contact-icon">✉️</span><span class="contact-type">Email</span><span class="contact-val">donetj@gmail.com</span></a>
        <a href="https://linkedin.com/in/donetj" target="_blank" class="contact-item reveal reveal-delay-1"><span class="contact-icon">💼</span><span class="contact-type">LinkedIn</span><span class="contact-val">linkedin.com/in/donetj</span></a>
        <div class="contact-item reveal reveal-delay-2"><span class="contact-icon">📍</span><span class="contact-type">Location</span><span class="contact-val">Kochi, Kerala, India</span></div>
      </div>
      <form id="contact-form" class="contact-form reveal">
        <div class="form-grid">
          <div class="form-group"><label class="form-label" for="name">Your Name</label><input class="form-input" type="text" id="name" name="name" placeholder="John Doe" required></div>
          <div class="form-group"><label class="form-label" for="email">Email Address</label><input class="form-input" type="email" id="email" name="email" placeholder="john@example.com" required></div>
          <div class="form-group full"><label class="form-label" for="subject">Subject</label><input class="form-input" type="text" id="subject" name="subject" placeholder="Project Inquiry"></div>
          <div class="form-group full"><label class="form-label" for="message">Message</label><textarea class="form-textarea" id="message" name="message" placeholder="Tell me about your project..." required></textarea></div>
          <button type="submit" class="btn-primary form-submit">Send Message</button>
          <div id="form-status" class="form-status"></div>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-brand">DONET JOSEPH</div>
    <div class="footer-links">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer-copy">© 2026 · IT Business Systems Analyst · ERP SAP MM Specialist</div>
  </div>
</footer>
`;
}

function skill(name,level,cat){
  return `<div class="skill-card" data-level="${level}"><span class="skill-category">${cat}</span><div class="skill-name">${name}</div><div class="skill-bar-track"><div class="skill-bar-fill"></div></div><div class="skill-level">${level>=85?'Advanced':'Proficient'} · ${level}%</div></div>`;
}

function project(icon,title,sub,desc,m1v,m1l,m2v,m2l,m3v,m3l){
  return `<div class="project-card"><span class="project-icon">${icon}</span><h3 class="project-title">${title}</h3><div class="project-subtitle">${sub}</div><p class="project-desc">${desc}</p><div class="project-metrics"><div class="project-metric"><span class="project-metric-value">${m1v}</span><span class="project-metric-label">${m1l}</span></div><div class="project-metric"><span class="project-metric-value">${m2v}</span><span class="project-metric-label">${m2l}</span></div><div class="project-metric"><span class="project-metric-value">${m3v}</span><span class="project-metric-label">${m3l}</span></div></div></div>`;
}
