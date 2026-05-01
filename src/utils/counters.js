/** Animated Number Counters */
export function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = '1';
        const target = +entry.target.dataset.target;
        const suffix = entry.target.dataset.suffix || '';
        let start = 0;
        const duration = 1800;
        const step = 16;
        const increment = target / (duration / step);

        const timer = setInterval(() => {
          start = Math.min(start + increment, target);
          entry.target.textContent = Math.floor(start) + (target >= 6 ? '+' : '') + suffix;
          if (start >= target) clearInterval(timer);
        }, step);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}
