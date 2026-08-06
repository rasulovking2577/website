/* =========================
   ROOT / TOKENS
========================= */

:root {
    --bg: #0a0e17;
    --surface: #121826;
    --surface-2: #161d2c;
    --border: #232b3d;

    --text: #eef0f4;
    --text-dim: #8b93a7;
    --text-faint: #4c5468;

    --accent: #c9a227;
    --accent-strong: #e0bd4c;
    --accent-soft: rgba(201, 162, 39, 0.14);

    --display: "Space Grotesk", sans-serif;
    --body-font: "Inter", sans-serif;
    --mono: "JetBrains Mono", monospace;
}


body.light {
    --bg: #f6f5f2;
    --surface: #ffffff;
    --surface-2: #ffffff;
    --border: #e2ded4;

    --text: #14161c;
    --text-dim: #5a5f6d;
    --text-faint: #9a9fac;

    --accent-soft: rgba(201, 162, 39, 0.16);
}


/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: var(--body-font);

    background: var(--bg);

    color: var(--text);

    line-height: 1.6;

    overflow-x: hidden;

    transition: background 0.3s, color 0.3s;
}


a {
    color: inherit;
    text-decoration: none;
}


button {
    font-family: inherit;
}


a:focus-visible,
button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
}


.container {
    width: 90%;
    max-width: 1150px;

    margin: 0 auto;
}


/* =========================
   PARTICLES
========================= */

#particles {
    position: fixed;

    inset: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;

    z-index: -3;

    opacity: 0.6;
}


/* =========================
   CURSOR GLOW
========================= */

.cursor-glow {
    position: fixed;

    width: 350px;
    height: 350px;

    border-radius: 50%;

    pointer-events: none;

    background: radial-gradient(circle, rgba(201, 162, 39, 0.09), transparent 70%);

    transform: translate(-50%, -50%);

    z-index: -1;

    transition: width 0.3s, height 0.3s;
}


/* =========================
   HEADER
========================= */

.header {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    border-bottom: 1px solid var(--border);

    background: rgba(10, 14, 23, 0.78);

    backdrop-filter: blur(15px);

    transition: background 0.3s;
}


body.light .header {
    background: rgba(246, 245, 242, 0.85);
}


.header-inner {
    height: 75px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}


.logo {
    display: flex;

    align-items: center;

    gap: 8px;

    font-family: var(--display);

    font-size: 20px;

    font-weight: 700;

    letter-spacing: -0.5px;
}


.logo span {
    color: var(--accent);
}


.logo-mark {
    width: 26px;
    height: 26px;

    object-fit: contain;

    border-radius: 4px;
}


.nav {
    display: flex;

    align-items: center;

    gap: 28px;
}


.nav a {
    position: relative;

    color: var(--text-dim);

    font-size: 13px;

    transition: 0.3s;
}


.nav a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: var(--accent);

    transition: 0.3s;
}


.nav a:hover {
    color: var(--text);
}


.nav a:hover::after {
    width: 100%;
}


.header-actions {
    display: flex;

    align-items: center;

    gap: 12px;
}


.theme-button,
.menu-button {
    border: 1px solid var(--border);

    background: var(--surface);

    color: var(--text);

    width: 40px;
    height: 40px;

    border-radius: 8px;

    cursor: pointer;

    transition: border-color 0.3s;
}


.theme-button:hover,
.menu-button:hover {
    border-color: var(--accent);
}


.theme-button {
    font-size: 16px;
}


.menu-button {
    display: none;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 5px;
}


.menu-button span {
    width: 19px;
    height: 2px;

    background: var(--text);

    transition: 0.3s;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    display: flex;

    align-items: center;

    padding-top: 75px;

    position: relative;

    overflow: hidden;
}


.hero::before {
    content: "";

    position: absolute;

    width: 600px;
    height: 600px;

    right: -200px;
    top: 10%;

    background: radial-gradient(circle, rgba(201, 162, 39, 0.10), transparent 65%);

    pointer-events: none;
}


.hero-content {
    display: grid;

    grid-template-columns: 1.1fr 0.9fr;

    align-items: center;

    gap: 70px;
}


.status {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    padding: 7px 12px;

    border: 1px solid var(--border);

    border-radius: 50px;

    color: var(--text-dim);

    font-size: 11px;

    margin-bottom: 30px;
}


.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #4ade80;

    box-shadow: 0 0 12px #4ade80;
}


.hero-small {
    font-family: var(--mono);

    color: var(--accent);

    font-size: 12px;

    font-weight: 500;

    letter-spacing: 4px;

    margin-bottom: 10px;
}


.hero h1 {
    font-family: var(--display);

    font-size: clamp(60px, 9vw, 105px);

    line-height: 0.95;

    letter-spacing: -3px;

    margin-bottom: 22px;
}


.hero h1 span {
    color: var(--accent);
}


.hero h2 {
    font-family: var(--display);

    font-size: clamp(22px, 3.4vw, 36px);

    font-weight: 500;

    color: var(--text-dim);

    margin-bottom: 25px;
}


.hero h2 span {
    color: var(--text);

    border-right: 2px solid var(--accent);

    padding-right: 5px;
}


.hero-description {
    max-width: 560px;

    color: var(--text-dim);

    font-size: 16px;

    margin-bottom: 35px;
}


.hero-buttons {
    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}


.button {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding: 14px 22px;

    border-radius: 8px;

    font-size: 13px;

    font-weight: 600;

    transition: 0.3s;
}


.primary-button {
    background: var(--accent);

    color: #0f1830;

    box-shadow: 0 10px 30px rgba(201, 162, 39, 0.18);
}


.primary-button:hover {
    background: var(--accent-strong);

    transform: translateY(-3px);

    box-shadow: 0 15px 35px rgba(201, 162, 39, 0.28);
}


.primary-button span {
    font-family: var(--mono);

    font-weight: 400;

    opacity: 0.85;

    font-size: 12px;
}


.secondary-button {
    border: 1px solid var(--border);

    color: var(--text-dim);
}


.secondary-button:hover {
    border-color: var(--accent);

    color: var(--text);

    transform: translateY(-3px);
}


.social-links {
    display: flex;

    align-items: center;

    gap: 15px;

    margin-top: 35px;

    color: var(--text-faint);

    font-size: 11px;

    font-family: var(--mono);
}


.social-links a {
    color: var(--text-dim);

    transition: 0.3s;
}


.social-links a:hover {
    color: var(--accent);
}


.social-links span {
    width: 4px;
    height: 4px;

    background: var(--accent);

    border-radius: 50%;
}


/* =========================
   CODE CARD
========================= */

.hero-card {
    perspective: 1000px;
}


.code-window {
    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 14px;

    overflow: hidden;

    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);

    transform: rotateY(-5deg) rotateX(3deg);

    transition: 0.5s;
}


.code-window:hover {
    transform: rotateY(0) rotateX(0) translateY(-5px);
}


.window-top {
    height: 48px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 18px;

    border-bottom: 1px solid var(--border);

    background: var(--surface-2);
}


.window-top p {
    font-family: var(--mono);

    color: var(--text-faint);

    font-size: 11px;
}


.window-dots {
    display: flex;

    gap: 6px;
}


.window-dots span {
    width: 9px;
    height: 9px;

    border-radius: 50%;

    background: var(--border);
}


.code-content {
    padding: 30px;

    min-height: 390px;

    color: var(--text-dim);

    font-family: var(--mono);

    font-size: 13px;

    line-height: 2;
}


.code-purple {
    color: #7fb0ff;
}


.code-accent {
    color: var(--accent);
}


.indent {
    padding-left: 25px;
}


.code-cursor {
    display: inline-block;

    width: 7px;
    height: 15px;

    background: var(--accent);

    vertical-align: middle;

    animation: blink 1s infinite;
}


@keyframes blink {

    0%,
    45% {
        opacity: 1;
    }

    46%,
    100% {
        opacity: 0;
    }

}


/* =========================
   SCROLL
========================= */

.scroll-down {
    position: absolute;

    bottom: 35px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 10px;

    color: var(--text-faint);

    font-size: 9px;

    letter-spacing: 3px;

    font-family: var(--mono);
}


.scroll-down div {
    width: 1px;
    height: 40px;

    background: linear-gradient(var(--accent), transparent);
}


/* =========================
   SECTIONS
========================= */

.section {
    padding: 130px 0;
}


.section-heading {
    margin-bottom: 70px;
}


.section-number {
    font-family: var(--mono);

    color: var(--accent);

    font-size: 11px;

    font-weight: 500;

    letter-spacing: 3px;

    margin-bottom: 15px;
}


.section-heading h2 {
    font-family: var(--display);

    font-size: clamp(38px, 6vw, 60px);

    line-height: 1.05;

    letter-spacing: -2px;
}


.section-heading h2 span,
.contact-box h2 span {
    color: var(--accent);
}


.section-description {
    max-width: 550px;

    color: var(--text-dim);

    margin-top: 20px;

    font-size: 15px;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;

    grid-template-columns: 1.2fr 0.8fr;

    gap: 80px;

    align-items: start;
}


.about-text {
    color: var(--text-dim);

    font-size: 16px;
}


.large-text {
    color: var(--text);

    font-family: var(--display);

    font-weight: 500;

    font-size: 25px;

    line-height: 1.4;

    margin-bottom: 30px;
}


.large-text span {
    color: var(--accent);
}


.about-text p:not(.large-text) {
    margin-bottom: 20px;
}


.about-stats {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;
}


.stat-card {
    min-height: 140px;

    padding: 22px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 10px;

    transition: 0.3s;
}


.stat-card:hover {
    border-color: var(--accent);

    transform: translateY(-5px);
}


.stat-card strong {
    font-family: var(--display);

    font-size: 30px;

    color: var(--accent);
}


.stat-card span {
    color: var(--text-dim);

    font-size: 12px;
}


/* =========================
   SKILLS
========================= */

.skills-section {
    background: var(--surface);

    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}


.skills-list {
    display: flex;

    flex-direction: column;

    gap: 30px;
}


.skill {
    padding-bottom: 30px;

    border-bottom: 1px solid var(--border);
}


.skill-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 15px;
}


.skill h3 {
    font-family: var(--display);

    font-size: 20px;

    font-weight: 600;
}


.skill-percent {
    font-family: var(--mono);

    color: var(--text-dim);

    font-size: 12px;
}


.skill-bar {
    width: 100%;

    height: 3px;

    background: var(--border);

    overflow: hidden;
}


.skill-progress {
    width: 0;

    height: 100%;

    background: var(--accent);

    transition: width 1.5s cubic-bezier(0.22, 1, 0.36, 1);
}


/* =========================
   SERVICES
========================= */

.services-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;
}


.service-card {
    padding: 32px 26px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 12px;

    transition: 0.3s;
}


.service-card:hover {
    border-color: var(--accent);

    transform: translateY(-6px);
}


.service-icon {
    font-family: var(--mono);

    color: var(--accent);

    font-size: 13px;

    width: 34px;
    height: 34px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 1px solid var(--border);

    border-radius: 8px;

    margin-bottom: 22px;
}


.service-card h3 {
    font-family: var(--display);

    font-size: 20px;

    margin-bottom: 12px;
}


.service-card p {
    color: var(--text-dim);

    font-size: 14px;
}


/* =========================
   PROJECTS
========================= */

.projects-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;
}


.project-card {
    min-height: 340px;

    padding: 30px;

    position: relative;

    display: flex;

    flex-direction: column;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 12px;

    overflow: hidden;

    transition: 0.4s;
}


.project-card:hover {
    border-color: var(--accent);

    transform: translateY(-8px);
}


.project-card-cta {
    background: var(--accent-soft);

    border-style: dashed;

    justify-content: center;
}


.project-icon {
    width: 50px;
    height: 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 40px;

    color: var(--accent);

    border: 1px solid var(--border);

    border-radius: 10px;

    font-family: var(--mono);

    font-size: 18px;

    background: var(--surface-2);
}


.project-label {
    font-family: var(--mono);

    color: var(--accent);

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 500;

    margin-bottom: 10px;
}


.project-content h3 {
    font-family: var(--display);

    font-size: 24px;

    margin-bottom: 12px;
}


.project-content > p:last-child {
    color: var(--text-dim);

    font-size: 14px;
}


.project-bottom {
    margin-top: auto;

    padding-top: 30px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}


.tags {
    display: flex;

    flex-wrap: wrap;

    gap: 6px;
}


.tags span {
    padding: 5px 8px;

    background: var(--surface-2);

    border: 1px solid var(--border);

    border-radius: 4px;

    color: var(--text-dim);

    font-family: var(--mono);

    font-size: 9px;
}


.project-arrow {
    color: var(--accent);

    font-size: 20px;

    transition: 0.3s;
}


.project-card:hover .project-arrow {
    transform: translate(4px, -4px);
}


/* =========================
   CONTACT
========================= */

.contact-section {
    padding-bottom: 160px;
}


.contact-box {
    position: relative;

    padding: 70px;

    background: radial-gradient(circle at 100% 0%, rgba(201, 162, 39, 0.10), transparent 35%), var(--surface);

    border: 1px solid var(--border);

    border-radius: 15px;

    overflow: hidden;
}


.contact-box::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background: linear-gradient(90deg, transparent, var(--accent), transparent);
}


.contact-box h2 {
    max-width: 800px;

    font-family: var(--display);

    font-size: clamp(34px, 6vw, 56px);

    line-height: 1.1;

    letter-spacing: -2px;

    margin-bottom: 24px;
}


.contact-box > p:not(.section-number) {
    max-width: 600px;

    color: var(--text-dim);

    margin-bottom: 35px;
}


.contact-methods {
    display: flex;

    flex-wrap: wrap;

    gap: 12px;
}


/* =========================
   FOOTER
========================= */

.footer {
    border-top: 1px solid var(--border);

    padding: 30px 0;
}


.footer-inner {
    display: flex;

    align-items: center;

    justify-content: space-between;
}


.footer-inner p,
.footer-inner a[href^="tel:"],
.footer-inner a[href*="instagram"] {
    color: var(--text-faint);

    font-family: var(--mono);

    font-size: 11px;
}


.footer-inner a[href^="tel:"]:hover,
.footer-inner a[href*="instagram"]:hover {
    color: var(--accent);
}


/* =========================
   REVEAL ANIMATION
========================= */

.reveal {
    opacity: 0;

    transform: translateY(35px);

    transition: opacity 0.8s ease, transform 0.8s ease;
}


.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    .reveal {
        opacity: 1;
        transform: none;
        transition: none;
    }

    .code-cursor {
        animation: none;
        opacity: 1;
    }

    .code-window,
    .project-card,
    .stat-card,
    .service-card {
        transition: none;
    }

}


/* =========================
   PROCESS
========================= */

.process-list {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 18px;
}


.process-step {
    padding: 26px 22px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 12px;

    transition: 0.3s;
}


.process-step:hover {
    border-color: var(--accent);

    transform: translateY(-5px);
}


.process-num {
    font-family: var(--display);

    font-size: 30px;

    color: var(--accent);

    margin-bottom: 16px;
}


.process-text h3 {
    font-family: var(--display);

    font-size: 18px;

    margin-bottom: 8px;
}


.process-text p {
    color: var(--text-dim);

    font-size: 13px;
}


/* =========================
   PRICING
========================= */

.pricing-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;

    align-items: stretch;
}


.pricing-card {
    position: relative;

    padding: 34px 28px;

    display: flex;

    flex-direction: column;

    gap: 18px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 14px;

    transition: 0.3s;
}


.pricing-card:hover {
    transform: translateY(-6px);

    border-color: var(--accent);
}


.pricing-featured {
    border-color: var(--accent);

    background: linear-gradient(180deg, var(--accent-soft), var(--surface) 40%);
}


.pricing-badge {
    position: absolute;

    top: -13px;
    right: 24px;

    background: var(--accent);

    color: #0f1830;

    font-family: var(--mono);

    font-size: 10px;

    font-weight: 600;

    padding: 5px 12px;

    border-radius: 20px;
}


.pricing-card h3 {
    font-family: var(--display);

    font-size: 20px;
}


.pricing-value {
    font-family: var(--display);

    font-size: 28px;

    color: var(--accent);
}


.pricing-list {
    list-style: none;

    display: flex;

    flex-direction: column;

    gap: 10px;

    flex-grow: 1;
}


.pricing-list li {
    color: var(--text-dim);

    font-size: 13px;

    padding-left: 18px;

    position: relative;
}


.pricing-list li::before {
    content: "—";

    position: absolute;

    left: 0;

    color: var(--accent);
}


.pricing-card .button {
    justify-content: center;
}


/* =========================
   FAQ
========================= */

.faq-list {
    display: flex;

    flex-direction: column;

    gap: 12px;

    max-width: 750px;
}


.faq-item {
    border: 1px solid var(--border);

    border-radius: 10px;

    overflow: hidden;

    background: var(--surface);
}


.faq-question {
    width: 100%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;

    padding: 20px 22px;

    background: none;

    border: none;

    color: var(--text);

    font-family: var(--body-font);

    font-size: 15px;

    font-weight: 500;

    text-align: left;

    cursor: pointer;
}


.faq-icon {
    flex-shrink: 0;

    width: 26px;
    height: 26px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 1px solid var(--border);

    border-radius: 50%;

    color: var(--accent);

    font-size: 15px;

    transition: transform 0.3s;
}


.faq-item.open .faq-icon {
    transform: rotate(45deg);
}


.faq-answer {
    max-height: 0;

    overflow: hidden;

    transition: max-height 0.35s ease, padding 0.35s ease;

    padding: 0 22px;
}


.faq-item.open .faq-answer {
    max-height: 220px;

    padding: 0 22px 20px;
}


.faq-answer p {
    color: var(--text-dim);

    font-size: 14px;
}


/* =========================
   CONTACT FORM
========================= */

.contact-form {
    display: flex;

    flex-direction: column;

    gap: 12px;

    max-width: 520px;

    margin-bottom: 30px;
}


.form-row {
    display: flex;

    gap: 12px;
}


.contact-form input,
.contact-form textarea {
    width: 100%;

    padding: 13px 16px;

    background: var(--surface-2);

    border: 1px solid var(--border);

    border-radius: 8px;

    color: var(--text);

    font-family: var(--body-font);

    font-size: 14px;

    resize: vertical;

    transition: border-color 0.3s;
}


.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;

    border-color: var(--accent);
}


.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: var(--text-faint);
}


.contact-form button {
    align-self: flex-start;

    border: none;

    cursor: pointer;
}


/* =========================
   SCROLL PROGRESS
========================= */

.scroll-progress {
    position: fixed;

    top: 0;
    left: 0;

    height: 3px;
    width: 0%;

    background: linear-gradient(90deg, var(--accent), var(--accent-strong));

    z-index: 2000;

    transition: width 0.1s ease-out;
}


/* =========================
   BACK TO TOP
========================= */

.back-to-top {
    position: fixed;

    right: 22px;
    bottom: 22px;

    width: 46px;
    height: 46px;

    border-radius: 50%;

    background: var(--accent);

    color: #0f1830;

    border: none;

    font-size: 18px;

    font-weight: 700;

    cursor: pointer;

    display: flex;

    align-items: center;
    justify-content: center;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);

    opacity: 0;

    transform: translateY(15px) scale(0.9);

    pointer-events: none;

    transition: opacity 0.3s, transform 0.3s;

    z-index: 900;
}


.back-to-top.visible {
    opacity: 1;

    transform: translateY(0) scale(1);

    pointer-events: auto;
}


.back-to-top:hover {
    background: var(--accent-strong);

    transform: translateY(-3px) scale(1.05);
}


/* =========================
   MOBILE CTA BAR
========================= */

.mobile-cta-bar {
    display: none;
}


/* =========================
   BUTTON RIPPLE + PULSE
========================= */

.button {
    position: relative;

    overflow: hidden;
}


.button .ripple {
    position: absolute;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.35);

    transform: scale(0);

    animation: ripple-anim 0.6s ease-out;

    pointer-events: none;
}


@keyframes ripple-anim {

    to {
        transform: scale(3);
        opacity: 0;
    }

}


.hero-buttons .primary-button {
    animation: pulse-glow 2.6s ease-in-out infinite;
}


@keyframes pulse-glow {

    0%,
    100% {
        box-shadow: 0 10px 30px rgba(201, 162, 39, 0.18);
    }

    50% {
        box-shadow: 0 10px 38px rgba(201, 162, 39, 0.42);
    }

}


@media (prefers-reduced-motion: reduce) {

    .hero-buttons .primary-button {
        animation: none;
    }

    .button .ripple {
        display: none;
    }

}



@media (max-width: 900px) {

    .nav {
        position: fixed;

        top: 75px;
        left: 0;

        width: 100%;

        padding: 25px;

        flex-direction: column;

        align-items: flex-start;

        gap: 20px;

        background: var(--bg);

        border-bottom: 1px solid var(--border);

        transform: translateY(-150%);

        transition: 0.4s;
    }


    .nav.active {
        transform: translateY(0);
    }


    .menu-button {
        display: flex;
    }


    .hero-content {
        grid-template-columns: 1fr;
    }


    .hero-card {
        max-width: 650px;

        width: 100%;
    }


    .code-window {
        transform: none;
    }


    .about-grid {
        grid-template-columns: 1fr;

        gap: 50px;
    }


    .projects-grid,
    .services-grid {
        grid-template-columns: 1fr 1fr;
    }


    .process-list,
    .pricing-grid {
        grid-template-columns: 1fr 1fr;
    }

}


@media (max-width: 600px) {

    .container {
        width: 88%;
    }


    .header-inner {
        height: 65px;
    }


    .nav {
        top: 65px;
    }


    .hero {
        padding-top: 100px;

        padding-bottom: 100px;
    }


    .hero h1 {
        font-size: 58px;

        letter-spacing: -2px;
    }


    .hero h2 {
        font-size: 22px;
    }


    .hero-description {
        font-size: 14px;
    }


    .code-content {
        padding: 20px;

        font-size: 10px;

        min-height: 330px;
    }


    .section {
        padding: 90px 0;
    }


    .section-heading {
        margin-bottom: 45px;
    }


    .large-text {
        font-size: 20px;
    }


    .about-stats {
        grid-template-columns: 1fr 1fr;
    }


    .stat-card {
        min-height: 110px;
    }


    .stat-card strong {
        font-size: 26px;
    }


    .projects-grid,
    .services-grid {
        grid-template-columns: 1fr;
    }


    .process-list,
    .pricing-grid {
        grid-template-columns: 1fr;
    }


    .form-row {
        flex-direction: column;
    }


    .faq-question {
        font-size: 14px;

        padding: 16px 18px;
    }


    .contact-box {
        padding: 35px 25px;
    }


    .footer-inner {
        flex-direction: column;

        gap: 15px;

        align-items: flex-start;
    }


    body {
        padding-bottom: 68px;
    }


    .mobile-cta-bar {
        display: flex;

        position: fixed;

        left: 0;
        bottom: 0;

        width: 100%;

        z-index: 950;

        border-top: 1px solid var(--border);

        background: var(--surface);
    }


    .mobile-cta-button {
        flex: 1;

        display: flex;

        align-items: center;
        justify-content: center;

        padding: 16px 10px;

        color: var(--text);

        font-size: 13px;

        font-weight: 600;
    }


    .mobile-cta-accent {
        background: var(--accent);

        color: #0f1830;
    }


    .back-to-top {
        right: 16px;
        bottom: 76px;

        width: 42px;
        height: 42px;
    }

}
