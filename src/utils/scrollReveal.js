/** Scroll Reveal — IntersectionObserver-based animations */
export function initScrollReveal() {
  const selectors = '.reveal, .reveal-left, .reveal-scale, .timeline-item, .skill-card, .why-card, .why-feature, .project-card, .cert-card';
  const elements = document.querySelectorAll(selectors);

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}
