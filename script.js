document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');

    nav.addEventListener('click', function () {
        nav.classList.toggle('expanded');
    });
});
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".collapsed");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

