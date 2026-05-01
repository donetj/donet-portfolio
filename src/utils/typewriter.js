/** Typewriter Effect */
export function initTypewriter(elementId, words, opts = {}) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const { typeSpeed = 100, deleteSpeed = 60, pauseDelay = 1800, startDelay = 2500 } = opts;
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const word = words[wordIdx];
    if (!deleting) {
      el.textContent = word.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === word.length) {
        setTimeout(() => { deleting = true; type(); }, pauseDelay);
        return;
      }
    } else {
      el.textContent = word.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
    }
    setTimeout(type, deleting ? deleteSpeed : typeSpeed);
  }

  setTimeout(type, startDelay);
}
