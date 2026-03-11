function resetAndAnimateBars() {
  const bars = document.querySelectorAll('.bar');
  if (!bars.length) return;
  
  bars.forEach(bar => {
  bar.style.width = '0%';
  const text = bar.parentElement.querySelector('.percent');
  if (text) text.textContent = '0%';
});

  let delay = 400;

  bars.forEach((bar, index) => {
  const target = parseInt(bar.getAttribute('data-percent') || '0', 10);
  const percentText = bar.parentElement.querySelector('.percent');

  setTimeout(() => {
    let startTime = null;
    const duration = 2200;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      bar.style.width = current + '%';
      if (percentText) percentText.textContent = current + '%';

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
    }, delay + index * 400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(resetAndAnimateBars, 600);
});

const progressObserver = new MutationObserver((mutations) => {
  if (document.querySelector('.progress-grid')) {
    resetAndAnimateBars();
  }
});

progressObserver.observe(document.body, {
  childList: true,
  subtree: true
});

setTimeout(resetAndAnimateBars, 3000);
