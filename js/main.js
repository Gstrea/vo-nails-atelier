=
// =========================
// SMOOTH SCROLL
// =========================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =========================
// PORTFOLIO FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        const portfolioItems = document.querySelectorAll(".portfolio-item");

        portfolioItems.forEach(item => {

            if (filter === "all" || item.dataset.category === filter) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});
/* ===================================== */
/* MOBILE MENU */
/* ===================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

    document.addEventListener("click", (e) => {

        if (
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

}