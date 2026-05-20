const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navParent = document.querySelector(".nav-parent");
const navGroup = document.querySelector(".nav-group");

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav?.classList.toggle("is-open");
});

navParent?.addEventListener("click", () => {
  const expanded = navParent.getAttribute("aria-expanded") === "true";
  navParent.setAttribute("aria-expanded", String(!expanded));
  navGroup?.classList.toggle("is-open");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
