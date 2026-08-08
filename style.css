/* =========================================================
   1САЙТ — PREMIUM DESIGN SYSTEM
   ========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Manrope", sans-serif;
  background: #08090b;
  color: #f5f7f8;
  line-height: 1.6;
  overflow-x: hidden;
}

body.menu-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

:root {
  --bg: #08090b;
  --bg2: #0d0f12;
  --card: #111419;
  --card2: #15181d;

  --text: #f5f7f8;
  --muted: #9298a2;
  --faint: #5d626b;

  --accent: #3ddc84;
  --accent2: #20b968;

  --line: rgba(255,255,255,.08);
  --line2: rgba(255,255,255,.15);

  --radius: 20px;

  --container: 1180px;

  --ease: cubic-bezier(.16,.84,.44,1);
}

/* =========================================================
   LIGHT THEME
   ========================================================= */

body.light {
  --bg: #f5f6f3;
  --bg2: #ffffff;
  --card: #ffffff;
  --card2: #f0f1ee;

  --text: #0c0e10;
  --muted: #62676d;
  --faint: #8a8e93;

  --line: rgba(0,0,0,.08);
  --line2: rgba(0,0,0,.15);
}

/* =========================================================
   GLOBAL
   ========================================================= */

.container {
  width: min(var(--container), calc(100% - 48px));
  margin: auto;
}

.section {
  padding: 140px 0;
  border-top: 1px solid var(--line);
}

.eyebrow {
  display: inline-block;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: .16em;
  color: var(--accent);
  margin-bottom: 18px;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 65px;
}

.section-heading.split {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 50px;
}

.section-heading h2 {
  font-size: clamp(42px, 5vw, 70px);
  line-height: 1.02;
  letter-spacing: -.055em;
  font-weight: 800;
}

.section-heading h2 span {
  color: var(--accent);
}

.section-heading p {
  color: var(--muted);
  max-width: 400px;
}

/* =========================================================
   BUTTONS
   ========================================================= */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 9px;

  font-size: 14px;
  font-weight: 700;

  transition:
    transform .25s var(--ease),
    box-shadow .25s,
    background .25s,
    border-color .25s,
    color .25s;
}

.btn span {
  transition: transform .25s var(--ease);
}

.btn:hover span {
  transform: translate(3px,-3px);
}

.btn-small {
  padding: 11px 18px;
}

.btn-large {
  padding: 17px 27px;
}

.btn-primary {
  background: var(--accent);
  color: #04140b;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow:
    0 15px 45px rgba(61,220,132,.25);
}

.btn-outline {
  border: 1px solid var(--line2);
  color: var(--text);
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(61,220,132,.06);
}

/* =========================================================
   LOADER
   ========================================================= */

.loader {
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: #08090b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition:
    opacity .7s var(--ease),
    visibility .7s;
}

.loader.hide {
  opacity: 0;
  visibility: hidden;
}

.loader-logo {
  font-family: "JetBrains Mono", monospace;
  font-size: 26px;
  font-weight: 700;
}

.loader-logo span {
  color: var(--accent);
}

.loader-line {
  width: 150px;
  height: 2px;
  margin-top: 20px;
  background: rgba(255,255,255,.1);
  overflow: hidden;
}

.loader-line span {
  display: block;
  width: 0;
  height: 100%;
  background: var(--accent);
  animation: loader 1.2s ease forwards;
}

@keyframes loader {
  to {
    width: 100%;
  }
}

/* =========================================================
   CURSOR
   ========================================================= */

.cursor-dot,
.cursor-ring {
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  border-radius: 50%;
  transform: translate(-50%,-50%);
}

.cursor-dot {
  width: 5px;
  height: 5px;
  background: var(--accent);
}

.cursor-ring {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(61,220,132,.5);
  transition:
    width .25s,
    height .25s,
    background .25s;
}

.cursor-ring.active {
  width: 50px;
  height: 50px;
  background: rgba(61,220,132,.06);
}

@media (hover:none) {
  .cursor-dot,
  .cursor-ring {
    display: none;
  }
}

/* =========================================================
   PROGRESS
   ========================================================= */

.progress {
  position: fixed;
  top: 0;
  left: 0;

  width: 0;
  height: 2px;

  background: var(--accent);

  z-index: 5000;
}

/* =========================================================
   HEADER
   ========================================================= */

.header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  z-index: 2000;

  padding: 24px 0;

  transition:
    padding .35s var(--ease),
    background .35s,
    border .35s;
}

.header.scrolled {
  padding: 12px 0;

  background: rgba(8,9,11,.75);
  backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--line);
}

.header-inner {
  width: min(var(--container), calc(100% - 48px));
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 9px;

  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 15px;
}

.brand-mark {
  width: 29px;
  height: 29px;

  display: grid;
  place-items: center;

  border-radius: 7px;

  background: var(--accent);
  color: #04140b;

  font-weight: 800;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  color: var(--muted);
  font-size: 13px;
  transition: color .2s;
}

.nav a:hover {
  color: var(--text);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-toggle {
  width: 39px;
  height: 39px;

  border-radius: 50%;

  border: 1px solid var(--line);

  background: transparent;
  color: var(--text);

  cursor: pointer;

  transition: .25s;
}

.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.hamburger {
  display: none;

  border: 0;
  background: transparent;

  width: 40px;
  height: 40px;

  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 23px;
  height: 2px;
  margin: 5px auto;

  background: var(--text);

  transition: .25s;
}

/* =========================================================
   MOBILE MENU
   ========================================================= */

.mobile-menu {
  position: fixed;
  inset: 0;

  z-index: 1500;

  background: var(--bg);

  transform: translateX(100%);
  transition: transform .5s var(--ease);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-inner {
  width: min(var(--container), calc(100% - 48px));
  margin: auto;

  padding-top: 120px;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.mobile-menu-inner > a:not(.btn) {
  padding: 15px 0;

  font-size: 30px;
  font-weight: 800;

  border-bottom: 1px solid var(--line);
}

.mobile-menu-inner .btn {
  margin-top: 30px;
}

/* =========================================================
   HERO
   ========================================================= */

.hero {
  position: relative;
  min-height: 100vh;

  display: flex;
  align-items: center;

  overflow: hidden;

  padding: 150px 0 90px;
}

.hero-grid-bg {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);

  background-size: 70px 70px;

  mask-image: linear-gradient(
    to bottom,
    black,
    transparent 90%
  );

  opacity: .4;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;

  filter: blur(80px);

  pointer-events: none;
}

.hero-glow-1 {
  width: 500px;
  height: 500px;

  background: rgba(61,220,132,.11);

  top: -200px;
  right: -100px;
}

.hero-glow-2 {
  width: 400px;
  height: 400px;

  background: rgba(61,220,132,.06);

  bottom: -250px;
  left: -150px;
}

.hero-container {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr .85fr;

  gap: 90px;

  align-items: center;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 7px 12px;

  border: 1px solid var(--line2);
  border-radius: 100px;

  color: var(--muted);

  font-size: 11px;
  margin-bottom: 22px;
}

.status-dot {
  width: 7px;
  height: 7px;

  background: var(--accent);
  border-radius: 50%;

  box-shadow:
    0 0 0 4px rgba(61,220,132,.1);

  animation: pulse 2s infinite;
}

@keyframes pulse {
  50% {
    box-shadow:
      0 0 0 8px rgba(61,220,132,0);
  }
}

.hero-label {
  font-family: "JetBrains Mono", monospace;
  color: var(--accent);

  font-size: 11px;
  letter-spacing: .16em;

  margin-bottom: 18px;
}

.hero h1 {
  max-width: 800px;

  font-size: clamp(48px, 6vw, 82px);

  line-height: .98;
  letter-spacing: -.065em;

  font-weight: 800;
}

.hero h1 span {
  display: block;
  color: var(--accent);
}

.hero-description {
  max-width: 590px;

  margin-top: 30px;

  color: var(--muted);

  font-size: 17px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;

  margin-top: 35px;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 15px 35px;

  margin-top: 32px;

  font-family: "JetBrains Mono", monospace;
  font-size: 10px;

  color: var(--faint);
}

.hero-trust div {
  display: flex;
  gap: 13px;
}

.hero-trust strong {
  color: var(--text);
}

.hero-visual {
  position: relative;
}

.browser {
  border: 1px solid var(--line2);
  border-radius: 18px;

  overflow: hidden;

  background: var(--card);

  box-shadow:
    0 40px 100px rgba(0,0,0,.4);

  transform:
    perspective(1000px)
    rotateY(-5deg)
    rotateX(3deg);

  transition:
    transform .7s var(--ease);
}

.hero-visual:hover .browser {
  transform:
    perspective(1000px)
    rotateY(0)
    rotateX(0)
    translateY(-8px);
}

.browser-top {
  height: 48px;

  display: flex;
  align-items: center;

  padding: 0 16px;

  border-bottom: 1px solid var(--line);
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3a3d43;
}

.browser-url {
  margin-left: auto;
  margin-right: auto;

  font-family: "JetBrains Mono", monospace;
  font-size: 10px;

  color: var(--faint);
}

.browser-screen {
  min-height: 440px;

  padding: 28px;

  background:
    radial-gradient(
      circle at 70% 20%,
      rgba(61,220,132,.12),
      transparent 40%
    );
}

.mock-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
}

.mock-nav div {
  display: flex;
  gap: 4px;
}

.mock-nav span {
  width: 5px;
  height: 5px;
  background: var(--accent);
  border-radius: 50%;
}

.mock-content {
  margin-top: 75px;
}

.mock-content small {
  font-family: "JetBrains Mono", monospace;
  color: var(--accent);
  font-size: 9px;
  letter-spacing: .15em;
}

.mock-content h3 {
  font-size: 44px;
  line-height: 1;

  letter-spacing: -.06em;

  margin: 15px 0;
}

.mock-content h3 em {
  color: var(--accent);
  font-style: normal;
}

.mock-button {
  display: inline-block;

  margin-top: 20px;

  padding: 11px 16px;

  background: var(--accent);
  color: #04140b;

  border-radius: 6px;

  font-size: 10px;
  font-weight: 800;
}

.mock-stats {
  display: grid;
  grid-template-columns: repeat(3,1fr);

  gap: 8px;

  margin-top: 65px;
}

.mock-stats div {
  padding: 13px;

  background: rgba(255,255,255,.03);

  border: 1px solid var(--line);
  border-radius: 8px;
}

.mock-stats b {
  display: block;
  font-family: "JetBrains Mono", monospace;
  color: var(--accent);
  font-size: 14px;
}

.mock-stats span {
  font-size: 8px;
  color: var(--faint);
}

.floating-card {
  position: absolute;

  padding: 11px 15px;

  background: rgba(17,20,25,.9);
  backdrop-filter: blur(12px);

  border: 1px solid var(--line2);
  border-radius: 10px;

  font-size: 10px;

  box-shadow: 0 15px 40px rgba(0,0,0,.3);

  z-index: 3;
}

.card-top {
  top: -25px;
  right: -30px;
}

.card-bottom {
  bottom: -25px;
  left: -30px;
}

.mini-dot {
  display: inline-block;

  width: 6px;
  height: 6px;

  background: var(--accent);

  border-radius: 50%;

  margin-right: 7px;
}

.hero-scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--faint);

  font-family: "JetBrains Mono", monospace;
  font-size: 8px;
  letter-spacing: .15em;
}

.hero-scroll i {
  width: 1px;
  height: 35px;

  margin-top: 8px;

  background: linear-gradient(
    var(--accent),
    transparent
  );

  animation: scrollline 1.5s infinite;
}

@keyframes scrollline {
  50% {
    transform: translateY(7px);
  }
}

/* =========================================================
   MARQUEE
   ========================================================= */

.marquee {
  overflow: hidden;

  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);

  padding: 18px 0;

  background: var(--bg2);
}

.marquee-track {
  width: max-content;

  display: flex;
  align-items: center;

  gap: 30px;

  font-family: "JetBrains Mono", monospace;
  font-size: 12px;

  color: var(--faint);

  animation: marquee 25s linear infinite;
}

.marquee-track b {
  color: var(--accent);
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

/* =========================================================
   PROBLEM
   ========================================================= */

.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 100px;
}

.problem-main {
  position: relative;
}

.big-number {
  font-family: "JetBrains Mono", monospace;

  font-size: 12px;

  color: var(--accent);

  margin-bottom: 35px;
}

.problem-main h3 {
  max-width: 600px;

  font-size: clamp(30px,4vw,52px);

  line-height: 1.08;

  letter-spacing: -.04em;
}

.problem-main p {
  max-width: 540px;

  margin-top: 30px;

  color: var(--muted);
}

.problem-list {
  border-top: 1px solid var(--line);
}

.problem-item {
  display: grid;
  grid-template-columns: 50px 1fr;

  gap: 20px;

  padding: 23px 0;

  border-bottom: 1px solid var(--line);
}

.problem-item span {
  font-family: "JetBrains Mono", monospace;

  color: var(--faint);

  font-size: 11px;
}

.problem-item p {
  color: var(--muted);
}

.problem-item.active p {
  color: var(--text);
  font-weight: 700;
}

.problem-item.active span {
  color: var(--accent);
}

/* =========================================================
   SERVICES
   ========================================================= */

.services {
  background: var(--bg2);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);

  gap: 18px;
}

.service-card {
  position: relative;

  min-height: 500px;

  padding: 34px;

  border: 1px solid var(--line);
  border-radius: var(--radius);

  background: var(--card);

  display: flex;
  flex-direction: column;

  overflow: hidden;

  transition:
    transform .4s var(--ease),
    border-color .3s,
    box-shadow .4s;
}

.service-card::before {
  content: "";

  position: absolute;

  width: 250px;
  height: 250px;

  right: -120px;
  top: -120px;

  background: var(--accent);

  border-radius: 50%;

  filter: blur(90px);

  opacity: 0;

  transition: opacity .4s;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(61,220,132,.4);

  box-shadow:
    0 25px 70px rgba(0,0,0,.25);
}

.service-card:hover::before {
  opacity: .08;
}

.service-card.featured {
  border-color: rgba(61,220,132,.3);
}

.popular {
  position: absolute;
  top: 22px;
  right: 22px;

  padding: 5px 8px;

  border-radius: 5px;

  background: var(--accent);
  color: #04140b;

  font-family: "JetBrains Mono", monospace;
  font-size: 8px;
  font-weight: 700;
}

.service-number {
  font-family: "JetBrains Mono", monospace;
  color: var(--accent);

  font-size: 11px;
}

.service-icon {
  margin-top: 60px;

  font-size: 35px;

  color: var(--accent);
}

.service-card h3 {
  margin-top: 25px;

  font-size: 26px;
}

.service-card > p {
  margin-top: 14px;

  color: var(--muted);

  font-size: 14px;
}

.service-card ul {
  margin-top: 25px;

  display: flex;
  flex-direction: column;

  gap: 10px;
}

.service-card li {
  font-size: 12px;
  color: var(--muted);
}

.service-card li::before {
  content: "✓";
  color: var(--accent);
  margin-right: 9px;
}

.service-card > a {
  margin-top: auto;

  padding-top: 30px;

  font-family: "JetBrains Mono", monospace;
  font-size: 12px;

  color: var(--text);

  transition: color .2s;
}

.service-card > a:hover {
  color: var(--accent);
}

/* =========================================================
   STATS
   ========================================================= */

.stats {
  padding: 70px 0;

  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);

  background: #0a0c0e;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
}

.stat {
  padding: 10px 30px;

  border-right: 1px solid var(--line);
}

.stat:last-child {
  border: 0;
}

.stat strong {
  font-family: "JetBrains Mono", monospace;

  font-size: 45px;

  letter-spacing: -.05em;

  color: var(--text);
}

.stat > span {
  color: var(--accent);
  font-family: "JetBrains Mono", monospace;
}

.stat p {
  color: var(--faint);

  font-size: 11px;

  margin-top: 5px;
}

/* =========================================================
   PROJECTS
   ========================================================= */

.projects {
  display: grid;

  grid-template-columns: 1.5fr 1fr;

  gap: 20px;
}

.project {
  border: 1px solid var(--line);
  border-radius: var(--radius);

  overflow: hidden;

  background: var(--card);

  transition:
    transform .45s var(--ease),
    border-color .3s;
}

.project:hover {
  transform: translateY(-7px);

  border-color: var(--line2);
}

.project-large {
  grid-row: span 2;
}

.project-image {
  height: 470px;

  position: relative;

  overflow: hidden;
}

.barber-image {
  background:
    linear-gradient(
      130deg,
      rgba(0,0,0,.1),
      rgba(0,0,0,.75)
    ),
    url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&q=85")
    center/cover;
}

.project-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding: 28px;

  opacity: 0;

  background: rgba(0,0,0,.3);

  transition: opacity .3s;
}

.project:hover .project-overlay {
  opacity: 1;
}

.project-overlay span {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
}

.project-overlay strong {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  background: var(--accent);
  color: #04140b;

  border-radius: 50%;
}

.project-info {
  display: flex;
  justify-content: space-between;
  gap: 30px;

  padding: 25px;
}

.project-info small {
  font-family: "JetBrains Mono", monospace;
  font-size: 9px;
  color: var(--accent);
}

.project-info h3 {
  margin-top: 8px;

  font-size: 21px;
}

.project-info p {
  max-width: 260px;

  color: var(--muted);

  font-size: 12px;
}

.project-mini {
  display: flex;
  flex-direction: column;
}

.mini-project-visual {
  flex: 1;
  min-height: 210px;

  display: grid;
  place-items: center;

  background:
    radial-gradient(
      circle,
      rgba(61,220,132,.12),
      transparent 55%
    );

  font-family: "JetBrains Mono", monospace;

  font-size: 60px;

  color: var(--accent);
}

.open-project .mini-project-visual {
  font-size: 70px;
}

/* =========================================================
   PROCESS
   ========================================================= */

.process {
  background: var(--bg2);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);

  gap: 1px;

  background: var(--line);

  border: 1px solid var(--line);
}

.process-card {
  min-height: 250px;

  padding: 30px;

  background: var(--bg2);

  transition: background .3s;
}

.process-card:hover {
  background: var(--card);
}

.process-card > span {
  font-family: "JetBrains Mono", monospace;

  color: var(--accent);

  font-size: 11px;
}

.process-card h3 {
  margin-top: 60px;

  font-size: 22px;
}

.process-card p {
  margin-top: 10px;

  color: var(--muted);

  font-size: 13px;
}

/* =========================================================
   WHY
   ========================================================= */

.why-box {
  display: grid;
  grid-template-columns: .9fr 1.1fr;

  gap: 100px;

  padding: 70px;

  border: 1px solid var(--line);

  border-radius: var(--radius);

  background:
    radial-gradient(
      circle at 0 0,
      rgba(61,220,132,.08),
      transparent 35%
    ),
    var(--card);
}

.why-left h2 {
  font-size: clamp(40px,5vw,65px);

  line-height: 1;

  letter-spacing: -.055em;
}

.why-left h2 span {
  color: var(--accent);
}

.why-right {
  border-top: 1px solid var(--line);
}

.why-row {
  display: grid;
  grid-template-columns: 45px 1fr;

  gap: 20px;

  padding: 22px 0;

  border-bottom: 1px solid var(--line);
}

.why-row > span {
  font-family: "JetBrains Mono", monospace;
  color: var(--accent);
  font-size: 11px;
}

.why-row h3 {
  font-size: 16px;
}

.why-row p {
  margin-top: 5px;

  color: var(--muted);

  font-size: 12px;
}

/* =========================================================
   FAQ
   ========================================================= */

.faq-list {
  max-width: 850px;
}

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-item summary {
  list-style: none;

  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 0;

  font-size: 17px;
  font-weight: 700;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary span {
  color: var(--accent);

  font-family: "JetBrains Mono", monospace;

  font-size: 22px;

  transition: transform .3s;
}

.faq-item[open] summary span {
  transform: rotate(45deg);
}

.faq-item p {
  max-width: 700px;

  padding-bottom: 25px;

  color: var(--muted);

  font-size: 14px;
}

/* =========================================================
   CONTACT
   ========================================================= */

.contact {
  position: relative;

  padding: 160px 0;

  overflow: hidden;

  border-top: 1px solid var(--line);
}

.contact-grid-bg {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);

  background-size: 70px 70px;

  mask-image:
    radial-gradient(
      circle at center,
      black,
      transparent 70%
    );
}

.contact-box {
  position: relative;
  z-index: 2;

  max-width: 850px;
}

.contact-box h2 {
  font-size: clamp(50px,7vw,95px);

  line-height: .95;

  letter-spacing: -.065em;
}

.contact-box h2 span {
  color: var(--accent);
}

.contact-box > p {
  max-width: 550px;

  margin-top: 28px;

  color: var(--muted);

  font-size: 16px;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 35px;
}

.contact-note {
  margin-top: 22px;

  font-family: "JetBrains Mono", monospace;

  font-size: 10px;

  color: var(--faint);
}

/* =========================================================
   FOOTER
   ========================================================= */

.footer {
  padding: 35px 0 20px;

  border-top: 1px solid var(--line);

  background: var(--bg2);
}

.footer-grid {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
}

.footer-grid p {
  text-align: center;

  color: var(--faint);

  font-size: 11px;
}

.footer-grid > a:last-child {
  text-align: right;

  font-family: "JetBrains Mono", monospace;

  font-size: 11px;

  color: var(--muted);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;

  margin-top: 35px;
  padding-top: 18px;

  border-top: 1px solid var(--line);

  color: var(--faint);

  font-family: "JetBrains Mono", monospace;

  font-size: 9px;
}

/* =========================================================
   REVEAL
   ========================================================= */

.reveal {
  opacity: 0;

  transform: translateY(30px);

  transition:
    opacity .8s var(--ease),
    transform .8s var(--ease);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay {
  transition-delay: .15s;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1000px) {

  .hero-container {
    grid-template-columns: 1fr;
    gap: 70px;
  }

  .hero-visual {
    max-width: 650px;
  }

  .problem-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: auto;
  }

  .projects {
    grid-template-columns: 1fr;
  }

  .project-large {
    grid-row: auto;
  }

  .project-image {
    height: 400px;
  }

  .process-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .why-box {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .stats-grid {
    grid-template-columns: repeat(2,1fr);
    gap: 30px 0;
  }

  .stat:nth-child(2) {
    border: 0;
  }

}

@media (max-width: 760px) {

  .container {
    width: min(100% - 36px, var(--container));
  }

  .section {
    padding: 90px 0;
  }

  .nav,
  .header-actions .btn {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .hero {
    padding-top: 130px;
  }

  .hero h1 {
    font-size: clamp(45px,13vw,70px);
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .hero-trust {
    flex-direction: column;
  }

  .browser-screen {
    min-height: 350px;
  }

  .mock-content {
    margin-top: 45px;
  }

  .mock-content h3 {
    font-size: 34px;
  }

  .card-top {
    right: 5px;
  }

  .card-bottom {
    left: 5px;
  }

  .section-heading.split {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-heading h2 {
    font-size: 46px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stat {
    padding: 10px 15px;
  }

  .stat strong {
    font-size: 35px;
  }

  .project-image {
    height: 300px;
  }

  .project-info {
    flex-direction: column;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .why-box {
    padding: 35px 25px;
  }

  .contact {
    padding: 110px 0;
  }

  .contact-box h2 {
    font-size: 55px;
  }

  .contact-buttons {
    flex-direction: column;
  }

  .contact-buttons .btn {
    width: 100%;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-grid p,
  .footer-grid > a:last-child {
    text-align: left;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
  }

}

@media (max-width: 420px) {

  .hero h1 {
    font-size: 43px;
  }

  .section-heading h2 {
    font-size: 40px;
  }

  .browser-screen {
    padding: 20px;
  }

  .mock-stats {
    margin-top: 40px;
  }

  .floating-card {
    font-size: 9px;
  }

}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }

}