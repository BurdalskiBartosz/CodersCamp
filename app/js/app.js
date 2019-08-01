const btn = document.querySelector(".nav__mobile-trigger");
const navContent = document.querySelector(".nav__content");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
    btn.classList.toggle("nav__mobile-trigger--active");
    navContent.classList.toggle("nav__content--active")
})

function debounce(func, wait = 15, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function showOnScroll(e) {
    const slideInSection = document.querySelectorAll(".slideIn");
    const currentScroll = window.scrollY;
    slideInSection.forEach(section => {
        const slideAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
        const isShown = section.offsetTop;
        console.log(slideAt, isShown);
        if (slideAt > isShown) {
            section.classList.add("active");
        }
    })
    if (currentScroll >= 300) {
        nav.classList.add("nav__active")
    }
    else {
        nav.classList.remove("nav__active")
    }
}
window.addEventListener("scroll", debounce(showOnScroll));