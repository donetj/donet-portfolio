// Styles
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/sections.css';
import './styles/sections-part2.css';
import './styles/responsive.css';

// Modules
import { initParticleNetwork } from './canvas/ParticleNetwork.js';
import { initIntroParticles } from './canvas/IntroParticles.js';
import { initTypewriter } from './utils/typewriter.js';
import { initScrollReveal } from './utils/scrollReveal.js';
import { initCounters } from './utils/counters.js';
import { initSmoothScroll } from './utils/smoothScroll.js';

import { renderApp } from './app.js';

// Mount
document.getElementById('app').innerHTML = renderApp();

// Init
initParticleNetwork('bg-canvas');
const introCtrl = initIntroParticles('intro-canvas');

// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
setInterval(()=>{rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';},16);
document.querySelectorAll('a,button,.info-card,.skill-card,.timeline-card,.contact-item,.project-card,.cert-card,.why-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hovered'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hovered'));
});

// Intro enter
document.getElementById('enter-btn').addEventListener('click',()=>{
  if(introCtrl) introCtrl.stop();
  document.getElementById('intro').classList.add('intro-exit');
  setTimeout(()=>{document.getElementById('intro').style.display='none';},900);
});

// Mobile menu
let menuOpen=false;
document.getElementById('hamburger').addEventListener('click',()=>{
  menuOpen=!menuOpen;
  document.getElementById('mobile-menu').classList.toggle('open',menuOpen);
  document.getElementById('hamburger').classList.toggle('active',menuOpen);
});
document.querySelectorAll('#mobile-menu a').forEach(a=>{
  a.addEventListener('click',()=>{menuOpen=false;document.getElementById('mobile-menu').classList.remove('open');document.getElementById('hamburger').classList.remove('active');});
});

// Typewriter
initTypewriter('dynamic-role',['Business Analyst','SAP MM Expert','Systems Strategist','CRM Coordinator','IT Operations Pro']);

// Scroll
initSmoothScroll();
initScrollReveal();
initCounters();

// Skill bars
const skillObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const l=e.target.dataset.level;const b=e.target.querySelector('.skill-bar-fill');if(b)b.style.width=l+'%';}});},{threshold:0.3});
document.querySelectorAll('.skill-card').forEach(el=>skillObs.observe(el));

// Skill card glow
document.querySelectorAll('.skill-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');});
});

// Contact form
const form=document.getElementById('contact-form');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const status=document.getElementById('form-status');
  status.className='form-status success';
  status.textContent='Thank you! Your message has been received. I will get back to you soon.';
  form.reset();
  setTimeout(()=>{status.className='form-status';status.textContent='';},5000);
});}
