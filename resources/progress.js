function resetAndAnimateProgress() {
  const bars = document.querySelectorAll('.progress-grid .bar');
  if (!bars.length) return;

  bars.forEach(bar => {
    bar.style.width = '0%';
    const text = bar.parentElement.querySelector('.percent');
    if (text) text.textContent = '0%';
  });

  let delay = 600;

  bars.forEach((bar, index) => {
    const target = parseInt(bar.getAttribute('data-percent') || '0', 10);
    const percentText = bar.parentElement.querySelector('.percent');

    setTimeout(() => {
      let startTime = null;
      const duration = 1800;

      function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);

        bar.style.width = current + '%';
        if (percentText) percentText.textContent = current + '%';

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, delay + index * 350);
  });
}

if (document.querySelector('.progress-grid')) {
  setTimeout(resetAndAnimateProgress, 800);
}

const observer = new MutationObserver(() => {
  if (document.querySelector('.progress-grid')) {
    resetAndAnimateProgress();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

setTimeout(resetAndAnimateProgress, 4000);
