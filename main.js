let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".header-inner");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});