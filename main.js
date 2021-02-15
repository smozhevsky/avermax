let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".header-inner");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("menu-button-active");
  menu.classList.toggle("header-inner-active");
});

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
