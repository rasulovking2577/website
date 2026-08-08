/* =========================================================
   1САЙТ — INTERACTIONS
   ========================================================= */

"use strict";

/* =========================================================
   LOADER
   ========================================================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);

});


/* =========================================================
   HEADER + SCROLL PROGRESS
   ========================================================= */

const header = document.getElementById("header");
const progress = document.getElementById("progress");

function updateScroll() {

  const scrollY = window.scrollY;

  if (scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent =
    documentHeight > 0
      ? (scrollY / documentHeight) * 100
      : 0;

  progress.style.width = percent + "%";

}

window.addEventListener(
  "scroll",
  updateScroll,
  { passive: true }
);

updateScroll();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const hamburger =
  document.getElementById("hamburger");

const mobileMenu =
  document.getElementById("mobileMenu");

const mobileLinks =
  mobileMenu.querySelectorAll("a");

function toggleMenu() {

  const opened =
    mobileMenu.classList.toggle("open");

  document.body.classList.toggle(
    "menu-open",
    opened
  );

}

hamburger.addEventListener(
  "click",
  toggleMenu
);

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    document.body.classList.remove(
      "menu-open"
    );

  });

});


/* =========================================================
   THEME
   ========================================================= */

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("site-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

function updateThemeIcon() {

  if (
    document.body.classList.contains("light")
  ) {

    themeToggle.textContent = "☾";

  } else {

    themeToggle.textContent = "☼";

  }

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "site-theme",
    light ? "light" : "dark"
  );

  updateThemeIcon();

});

updateThemeIcon();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add(
          "visible"
        );

        revealObserver.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   COUNTERS
   ========================================================= */

const counters =
  document.querySelectorAll(
    "[data-counter]"
  );

let countersStarted = false;

function animateCounters() {

  if (countersStarted) return;

  countersStarted = true;

  counters.forEach(counter => {

    const target =
      Number(counter.dataset.counter);

    const duration = 1200;

    const startTime =
      performance.now();

    function updateCounter(time) {

      const progress =
        Math.min(
          (time - startTime) / duration,
          1
        );

      const eased =
        1 - Math.pow(1 - progress, 3);

      counter.textContent =
        Math.floor(target * eased);

      if (progress < 1) {
        requestAnimationFrame(
          updateCounter
        );
      } else {
        counter.textContent = target;
      }

    }

    requestAnimationFrame(
      updateCounter
    );

  });

}

const statsSection =
  document.querySelector(".stats");

const statsObserver =
  new IntersectionObserver(
    entries => {

      if (
        entries[0].isIntersecting
      ) {

        animateCounters();

        statsObserver.disconnect();

      }

    },
    { threshold: .3 }
  );

statsObserver.observe(statsSection);


/* =========================================================
   FAQ — CLOSE OTHER ITEMS
   ========================================================= */

const faqItems =
  document.querySelectorAll(
    ".faq-item"
  );

faqItems.forEach(item => {

  item.addEventListener(
    "toggle",
    () => {

      if (!item.open) return;

      faqItems.forEach(other => {

        if (other !== item) {
          other.open = false;
        }

      });

    }
  );

});


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

const canHover =
  window.matchMedia(
    "(hover: hover)"
  ).matches;

if (canHover) {

  document
    .querySelectorAll(".magnetic")
    .forEach(button => {

      button.addEventListener(
        "mousemove",
        event => {

          const rect =
            button.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          button.style.transform =
            `translate(${x * .12}px, ${y * .12}px)`;

        }
      );

      button.addEventListener(
        "mouseleave",
        () => {

          button.style.transform = "";

        }
      );

    });

}


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursorDot =
  document.querySelector(
    ".cursor-dot"
  );

const cursorRing =
  document.querySelector(
    ".cursor-ring"
  );

if (canHover) {

  let mouseX = 0;
  let mouseY = 0;

  let ringX = 0;
  let ringY = 0;

  document.addEventListener(
    "mousemove",
    event => {

      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorDot.style.left =
        mouseX + "px";

      cursorDot.style.top =
        mouseY + "px";

    }
  );

  function animateCursor() {

    ringX +=
      (mouseX - ringX) * .15;

    ringY +=
      (mouseY - ringY) * .15;

    cursorRing.style.left =
      ringX + "px";

    cursorRing.style.top =
      ringY + "px";

    requestAnimationFrame(
      animateCursor
    );

  }

  animateCursor();

  document
    .querySelectorAll(
      "a, button, summary"
    )
    .forEach(element => {

      element.addEventListener(
        "mouseenter",
        () => {
          cursorRing.classList.add(
            "active"
          );
        }
      );

      element.addEventListener(
        "mouseleave",
        () => {
          cursorRing.classList.remove(
            "active"
          );
        }
      );

    });

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const id =
          link.getAttribute("href");

        if (
          !id ||
          id === "#"
        ) return;

        const target =
          document.querySelector(id);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
          header.offsetHeight;

        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          15;

        window.scrollTo({
          top,
          behavior: "smooth"
        });

      }
    );

  });


/* =========================================================
   ESCAPE CLOSE MENU
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      mobileMenu.classList.remove(
        "open"
      );

      document.body.classList.remove(
        "menu-open"
      );

    }

  }
);


/* =========================================================
   PARALLAX HERO GLOW
   ========================================================= */

if (canHover) {

  const hero =
    document.querySelector(".hero");

  const glow1 =
    document.querySelector(
      ".hero-glow-1"
    );

  const glow2 =
    document.querySelector(
      ".hero-glow-2"
    );

  hero.addEventListener(
    "mousemove",
    event => {

      const x =
        (event.clientX /
          window.innerWidth -
          .5) * 30;

      const y =
        (event.clientY /
          window.innerHeight -
          .5) * 30;

      glow1.style.transform =
        `translate(${x}px, ${y}px)`;

      glow2.style.transform =
        `translate(${-x}px, ${-y}px)`;

    }
  );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".nav a"
  );

const sectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting)
          return;

        navLinks.forEach(link => {

          link.classList.remove(
            "active"
          );

          if (
            link.getAttribute("href") ===
            "#" + entry.target.id
          ) {

            link.classList.add(
              "active"
            );

          }

        });

      });

    },
    {
      rootMargin:
        "-35% 0px -55% 0px"
    }
  );

sections.forEach(section => {

  sectionObserver.observe(
    section
  );

});


/* =========================================================
   PAGE VISIBILITY
   ========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.hidden
    ) {

      document.title =
        "1САЙТ — вернитесь, когда будете готовы";

    } else {

      document.title =
        "1САЙТ — современные сайты для бизнеса";

    }

  }
);