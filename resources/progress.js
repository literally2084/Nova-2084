function initProgress() {
  const bars = document.querySelectorAll('.bar');
  if (!bars.length) return;

  bars.forEach(bar => {
    bar.style.width = '0%';
    const text = bar.parentElement.querySelector('.percent');
    if (text) text.textContent = '0%';
  });

  let delay = 600;

  bars.forEach((bar, i) => {
    const target = parseInt(bar.getAttribute('data-percent') || 0, 10);
    const text = bar.parentElement.querySelector('.percent');

    setTimeout(() => {
      let t0 = null;
      const dur = 1800;
      
      function step(t) {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);

        bar.style.width = val + '%';
        if (text) text.textContent = val + '%';

        if (p < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }, delay + i * 350);
  });
}

if (document.querySelector('.progress-grid')) {
  initProgress();
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initProgress, 800);
});

new MutationObserver(() => {
  if (document.querySelector('.progress-grid')) {
    initProgress();
  }
}).observe(document.body, { childList: true, subtree: true });
