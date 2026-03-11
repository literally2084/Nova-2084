window.addEventListener('load', () => {
  setTimeout(() => {
    const bars = document.querySelectorAll('.bar');
    if (!bars.length) return;

    bars.forEach(bar => {
      bar.style.width = '0%';
      const t = bar.parentElement.querySelector('.percent');
      if (t) t.textContent = '0%';
    });
    
    let d = 600;
    bars.forEach((bar, i) => {
      const target = parseInt(bar.getAttribute('data-percent') || 0, 10);
      const t = bar.parentElement.querySelector('.percent');

      setTimeout(() => {
        let s = null;
        const dur = 1800;
        function f(time) {
          if (!s) s = time;
          const e = time - s;
          const p = Math.min(e / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = Math.round(target * eased);
          bar.style.width = v + '%';
          if (t) t.textContent = v + '%';
          if (p < 1) requestAnimationFrame(f);
        }
        requestAnimationFrame(f);
      }, d + i * 350);
    });
  }, 800);
});
