const menuTrigger = document.querySelector(".menu-trigger");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.getElementsByTagName("body")[0];

menuTrigger.addEventListener("click", () => {
  mobileMenu.classList.add("menu-show");
  mobileMenu.classList.remove("menu-hidden");
  body.classList.add("fixed");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("menu-hidden");
  mobileMenu.classList.remove("menu-show");
  body.classList.remove("fixed");
});

mobileMenu.addEventListener(
  "touchmove",
  () => {
    e.preventDefault();
  },
  false
);
