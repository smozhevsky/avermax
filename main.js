let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".header-inner");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("menu-button-active");
  menu.classList.toggle("header-inner-active");
});