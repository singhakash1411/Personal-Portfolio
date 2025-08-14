// Smooth in-page navigation
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (href.startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Simple reveal on scroll
const revealElems = document.querySelectorAll('.glass-card, .project-card');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  revealElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealElems.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
  });
  revealOnScroll();
});
