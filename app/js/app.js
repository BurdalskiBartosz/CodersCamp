let btn = document.querySelector(".nav__mobile-trigger");
let nav = document.querySelector(".nav__content");

btn.addEventListener("click", () => {
    nav.style.transform = "translateX(0%)";
})