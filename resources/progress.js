function startBarAnimation() {
  const bars = document.querySelectorAll('.bar');
  if (bars.length === 0) return;

  console.log('Starting bar animation – found', bars.length, 'bars');

  bars.forEach((bar, index) => {
    const target = parseInt(bar.getAttribute('data-percent') || '0', 10);
    const percentText = bar.parentElement.querySelector('.percent');

    bar.style.width = '0%';
    percentText.textContent = '0%';

    let startTime = null;
    const duration = 2200;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      bar.style.width = current + '%';
      percentText.textContent = current + '%';

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 800 + index * 400);
  });
}
    
if (document.querySelector('.progress-grid')) {
  startBarAnimation();
}

const observer = new MutationObserver((mutations) => {
  if (document.querySelector('.progress-grid')) {
    startBarAnimation();
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

setTimeout(startBarAnimation, 3000);
