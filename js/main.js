/* ============ Header scroll state + barre de progression ============ */
const header = document.getElementById('header');
const progress = document.createElement('div');
progress.className = 'scroll-progress';
document.body.appendChild(progress);

const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else if (!header.classList.contains('locked')) header.classList.remove('scrolled');
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
};
// le header de la page menu reste toujours "scrolled"
if (header && header.classList.contains('scrolled')) header.classList.add('locked');
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============ Mobile nav ============ */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

/* ============ FAQ accordion ============ */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!open) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

/* ============ Reveal on scroll (stagger via data-delay) ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((el) => {
  const d = el.getAttribute('data-delay');
  if (d) el.style.transitionDelay = d + 'ms';
  io.observe(el);
});

/* ============ Compteurs animés ============ */
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.getAttribute('data-count'), 10);
    const dur = 1400; let start = null;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    countObs.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

/* ============ Parallaxe douce ============ */
const parallaxEls = [...document.querySelectorAll('[data-parallax]')];
const heroContent = document.querySelector('.hero__content');
const heroVideo = document.querySelector('.hero__video');
let ticking = false;
function applyParallax() {
  const y = window.scrollY;
  parallaxEls.forEach(el => {
    const speed = parseFloat(el.getAttribute('data-parallax')) || 12;
    const r = el.getBoundingClientRect();
    const center = r.top + r.height / 2 - window.innerHeight / 2;
    el.style.transform = `translateY(${(center / window.innerHeight) * -speed}px)`;
  });
  if (heroContent && y > 0 && y < window.innerHeight) {
    heroContent.style.transform = `translateY(${y * 0.18}px)`;
    heroContent.style.opacity = String(Math.max(1 - y / (window.innerHeight * 0.85), 0));
    if (heroVideo) heroVideo.style.transform = `scale(${1 + y / 6000})`;
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(applyParallax); ticking = true; }
}, { passive: true });
applyParallax();

/* ============ Lecture vidéo robuste ============ */
document.querySelectorAll('video[autoplay]').forEach(v => {
  v.muted = true;            // garantit l'autoplay
  v.setAttribute('muted', '');
  const tryPlay = () => { const p = v.play(); if (p) p.catch(() => {}); };
  tryPlay();
  v.addEventListener('loadeddata', tryPlay, { once: true });
  v.addEventListener('canplay', tryPlay, { once: true });
  // relance si l'onglet redevient visible
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay(); });
  // débloque sur première interaction (mobile / data-saver)
  ['touchstart', 'click', 'scroll'].forEach(ev =>
    document.addEventListener(ev, tryPlay, { once: true, passive: true })
  );
});
