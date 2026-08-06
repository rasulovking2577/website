/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "сайты для бизнеса",
    "лендинги под заявки",
    "сайты-визитки"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}


if (prefersReducedMotion) {

    typingElement.textContent = words[0];

} else {

    typeEffect();

}



/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");


menuButton.addEventListener("click", function () {

    const isActive = nav.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isActive);

});


const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

    });

});



/* =========================
   THEME SWITCHER
========================= */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeButton.textContent = "☾";

    } else {

        themeButton.textContent = "☀";

    }

});



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (prefersReducedMotion) {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

} else {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

}



/* =========================
   SKILL BARS
========================= */

const skillProgress =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const progress =
                        entry.target;

                    const width =
                        progress.dataset.width;

                    progress.style.width = width;

                    skillObserver.unobserve(progress);

                }

            });

        },

        {
            threshold: 0.5
        }

    );


skillProgress.forEach(function (bar) {

    skillObserver.observe(bar);

});



/* =========================
   CURSOR GLOW
========================= */

if (!prefersReducedMotion) {

    const cursorGlow =
        document.querySelector(".cursor-glow");


    document.addEventListener(
        "mousemove",
        function (event) {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );

}



/* =========================
   PROJECT CARD TILT
========================= */

if (!prefersReducedMotion) {

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 25;

                const rotateY =
                    (centerX - x) / 25;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform = "";

            }
        );

    });

}



/* =========================
   HEADER SCROLL
========================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            header.style.background =
                document.body.classList.contains("light")
                    ? "rgba(246, 245, 242, 0.95)"
                    : "rgba(10, 14, 23, 0.94)";

        } else {

            header.style.background = "";

        }

    }
);



/* =========================
   SCROLL PROGRESS + BACK TO TOP
========================= */

const scrollProgress =
    document.getElementById("scrollProgress");

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    const scrollTop =
        window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent =
        docHeight > 0
            ? (scrollTop / docHeight) * 100
            : 0;

    scrollProgress.style.width = percent + "%";


    if (scrollTop > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
    });

});



/* =========================
   BUTTON RIPPLE
========================= */

if (!prefersReducedMotion) {

    document.querySelectorAll(".button").forEach(function (button) {

        button.addEventListener("click", function (event) {

            const rect =
                button.getBoundingClientRect();

            const ripple =
                document.createElement("span");

            const size =
                Math.max(rect.width, rect.height);


            ripple.className = "ripple";

            ripple.style.width =
                ripple.style.height = size + "px";

            ripple.style.left =
                (event.clientX - rect.left - size / 2) + "px";

            ripple.style.top =
                (event.clientY - rect.top - size / 2) + "px";


            button.appendChild(ripple);


            setTimeout(function () {

                ripple.remove();

            }, 600);

        });

    });

}



/* =========================
   COPY PHONE NUMBER
========================= */

const copyPhoneButton =
    document.getElementById("copyPhoneButton");


if (copyPhoneButton) {

    copyPhoneButton.addEventListener("click", function () {

        const phone =
            copyPhoneButton.dataset.phone;


        navigator.clipboard.writeText(phone).then(function () {

            const originalText =
                copyPhoneButton.textContent;

            copyPhoneButton.textContent = "Скопировано ✓";


            setTimeout(function () {

                copyPhoneButton.textContent = originalText;

            }, 2000);

        });

    });

}



/* =========================
   ANIMATED COUNTERS
========================= */

const counters =
    document.querySelectorAll("[data-count]");


const counterObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const el =
                        entry.target;

                    const target =
                        parseInt(el.dataset.count, 10);

                    const suffix =
                        el.dataset.suffix || "";


                    if (prefersReducedMotion) {

                        el.textContent = target + suffix;

                        counterObserver.unobserve(el);

                        return;

                    }


                    let current = 0;

                    const duration = 1200;

                    const stepTime = 30;

                    const steps = duration / stepTime;

                    const increment = target / steps;


                    const timer = setInterval(function () {

                        current += increment;


                        if (current >= target) {

                            current = target;

                            clearInterval(timer);

                        }


                        el.textContent =
                            Math.round(current) + suffix;

                    }, stepTime);


                    counterObserver.unobserve(el);

                }

            });

        },

        {
            threshold: 0.6
        }

    );


counters.forEach(function (counter) {

    counterObserver.observe(counter);

});



/* =========================
   FAQ ACCORDION
========================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", function () {

        const isOpen =
            item.classList.contains("open");


        faqItems.forEach(function (other) {

            other.classList.remove("open");

        });


        if (!isOpen) {

            item.classList.add("open");

        }

    });

});



/* =========================
   CONTACT FORM → WHATSAPP
========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("formName").value.trim();

        const phone =
            document.getElementById("formPhone").value.trim();

        const message =
            document.getElementById("formMessage").value.trim();


        let text =
            `Здравствуйте! Меня зовут ${name}.`;

        text += ` Телефон для связи: ${phone}.`;

        if (message) {

            text += ` ${message}`;

        }


        const encodedText =
            encodeURIComponent(text);


        window.open(
            `https://wa.me/79696656414?text=${encodedText}`,
            "_blank"
        );

    });

}



/* =========================
   PARTICLES
========================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];

let mouse = {
    x: null,
    y: null
};


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



document.addEventListener(
    "mousemove",
    function (event) {

        mouse.x = event.clientX;
        mouse.y = event.clientY;

    }
);



class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() * 1.5 + 0.5;

        this.speedX =
            (Math.random() - 0.5) * 0.3;

        this.speedY =
            (Math.random() - 0.5) * 0.3;

    }


    update() {

        this.x += this.speedX;
        this.y += this.speedY;


        if (this.x < 0 ||
            this.x > canvas.width) {

            this.speedX *= -1;

        }


        if (this.y < 0 ||
            this.y > canvas.height) {

            this.speedY *= -1;

        }


        if (mouse.x !== null) {

            const dx =
                this.x - mouse.x;

            const dy =
                this.y - mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                const force =
                    (120 - distance) / 120;

                this.x +=
                    (dx / distance) *
                    force *
                    0.5;

                this.y +=
                    (dy / distance) *
                    force *
                    0.5;

            }

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(201, 162, 39, 0.35)";

        ctx.fill();

    }

}



function createParticles() {

    particles = [];

    const amount =
        window.innerWidth < 600
            ? 25
            : 55;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();


window.addEventListener(
    "resize",
    createParticles
);



function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        function (particle) {

            particle.update();

            particle.draw();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


if (!prefersReducedMotion) {

    animateParticles();

} else {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}
