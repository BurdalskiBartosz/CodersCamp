const btn = document.querySelector(".nav__mobile-trigger");
const nav = document.querySelector(".nav__content");

btn.addEventListener("click", () => {
    btn.classList.toggle("nav__mobile-trigger--active");
    nav.classList.toggle("nav__content--active")
})