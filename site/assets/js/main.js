// Header scroll effect
const header = document.querySelector('.site-header');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!header.contains(e.target)) {
      burger.classList.remove('open');
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Testimonial slider
const track = document.querySelector('.testimonial-track');
const dots = document.querySelectorAll('.testimonial-dot');
if (track && dots.length) {
  let current = 0;
  const slides = track.querySelectorAll('.testimonial-slide');

  const goTo = idx => {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  goTo(0);

  // Auto-advance
  let timer = setInterval(() => goTo(current + 1), 8000);
  track.closest('.testimonial-slider').addEventListener('mouseenter', () => clearInterval(timer));
  track.closest('.testimonial-slider').addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo(current + 1), 8000);
  });
}

// Accordion (native <details> elements — no JS needed, but we add keyboard nav)
document.querySelectorAll('.accordion-item summary').forEach(summary => {
  summary.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      summary.click();
    }
  });
});
