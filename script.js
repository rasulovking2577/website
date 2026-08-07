/* ============================================================
   1САЙТ — main.js
   Header · mobile menu · theme · scroll reveal · micro-interactions
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;

  /* ---------- header on scroll + progress bar ---------- */
  var header = document.getElementById('header');
  var progress = document.getElementById('progress');

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 32);

    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');

  function openMenu() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    document.body.classList.add('nav-open');
  }
  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    document.body.classList.remove('nav-open');
  }
  hamburger.addEventListener('click', function () {
    mobileNav.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMenu();
  });

  /* ---------- theme toggle (persisted) ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('1sayt-theme'); } catch (e) {}
  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  var initial = stored || (prefersLight ? 'light' : 'dark');
  if (initial === 'light') root.setAttribute('data-theme', 'light');

  themeToggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('1sayt-theme', next); } catch (e) {}
  });

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal, .process-step');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- staggered process steps ---------- */
  var processSteps = document.querySelectorAll('.process-step');
  if ('IntersectionObserver' in window && processSteps.length) {
    var stepObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = Array.prototype.indexOf.call(processSteps, el) * 90;
        setTimeout(function () { el.classList.add('visible'); }, reduceMotion ? 0 : delay);
        stepObserver.unobserve(el);
      });
    }, { threshold: 0.2 });
    processSteps.forEach(function (el) { stepObserver.observe(el); });
  }

  /* ---------- magnetic CTA (desktop only, max 5px) ---------- */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll('.magnetic').forEach(function (btn) {
      var strength = 5;
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        var relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        btn.style.transform = 'translate(' + (relX * strength) + 'px,' + (relY * strength) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ---------- mouse spotlight on large dark cards ---------- */
  if (!isTouch) {
    document.querySelectorAll('.code-window, .price-box').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
        card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
      });
    });
  }

})();
