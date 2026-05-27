(function () {
  const sliders = document.querySelectorAll('[data-app-slider]');
  if (!sliders.length) return;

  sliders.forEach(card => {
    const track = card.querySelector('[data-app-track]');
    const dots = Array.from(card.querySelectorAll('[data-app-dots] .app-dot'));
    if (!track || !dots.length) return;

    let index = 0;
    let startX = 0;
    let currentX = 0;
    let dragging = false;
    let timerId = null;
    const interval = 3000;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }

    function nextSlide() {
      index = (index + 1) % dots.length;
      update();
    }

    function startAuto() {
      if (timerId) return;
      timerId = setInterval(nextSlide, interval);
    }

    function stopAuto() {
      if (!timerId) return;
      clearInterval(timerId);
      timerId = null;
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        update();
        stopAuto();
      });
    });

    track.addEventListener('touchstart', e => {
      dragging = true;
      startX = e.touches[0].clientX;
      currentX = startX;
      stopAuto();
    }, { passive: true });

    track.addEventListener('touchmove', e => {
      if (!dragging) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', () => {
      if (!dragging) return;
      const delta = currentX - startX;
      const threshold = 40;
      if (delta < -threshold && index < dots.length - 1) index++;
      if (delta > threshold && index > 0) index--;
      update();
      dragging = false;
    });

    card.addEventListener('mouseenter', startAuto);
    card.addEventListener('mouseleave', stopAuto);

    update();
  });
})();

(function () {
    const root = document.documentElement;
    const toggle = document.querySelector('[data-theme-toggle]');
    let mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const icon = (theme) => theme === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4.5"></circle><path d="M12 2v2.4M12 19.6V22M4.93 4.93l1.7 1.7M17.37 17.37l1.7 1.7M2 12h2.4M19.6 12H22M4.93 19.07l1.7-1.7M17.37 6.63l1.7-1.7"></path></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    const applyTheme = (next) => { mode = next; root.setAttribute('data-theme', mode); toggle.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'); toggle.innerHTML = icon(mode) };
    applyTheme(mode); toggle.addEventListener('click', () => applyTheme(mode === 'dark' ? 'light' : 'dark'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // stop tracking this element
            }
        });
    }, { threshold: 0.18 });
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
})();

(function () {
  const emailChip = document.querySelector('.email-chip');
  if (!emailChip) return;

  const email = 'chandrarao.ravi@gmail.com';

  function showCopyToast() {
    let toast = document.querySelector('.copy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'copy-toast';
      toast.textContent = 'Email copied';
      document.body.appendChild(toast);
    }

    toast.classList.add('show');
    clearTimeout(toast._hideTimeout);
    toast._hideTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 1200);
  }

  emailChip.addEventListener('click', function (e) {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    if (isMobile) return; // mobile: let mailto work

    e.preventDefault();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(showCopyToast)
        .catch(showCopyToast); // still show feedback even if it fails silently
    } else {
      showCopyToast();
    }
  });
})();