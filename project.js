const btnOpenMenu = document.querySelector("nav .menu");
const btnCloseMenu = document.querySelector("nav .close-menu");
const body = document.querySelector("body");
const sidebar = document.querySelector("main aside");
const btnScrollTop = document.querySelector("main footer .links .arrow-up");

btnOpenMenu.addEventListener("click", (event) => {
  body.style.overflow = "hidden";

  sidebar.style.display = "block";

  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "flex";
});

btnCloseMenu.addEventListener("click", (event) => {
  body.style.overflow = null;

  sidebar.style.display = "none";

  btnCloseMenu.style.display = "none";
  btnOpenMenu.style.display = "flex";
});

btnScrollTop.addEventListener("click", (event) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
