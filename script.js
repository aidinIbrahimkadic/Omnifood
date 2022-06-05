const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  }
);
obs.observe(sectionHero);
