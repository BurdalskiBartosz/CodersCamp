// CODE_REVIEW najlepiej jest takie skrypty umieszczać wewnątrz:
// document.addEventListener("DOMContentLoaded", () => {

// })
const btn = document.querySelector(".nav__mobile-trigger");
const navContent = document.querySelector(".nav__content");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");

btn.addEventListener("click", () => {
    btn.classList.toggle("nav__mobile-trigger--active");
    navContent.classList.toggle("nav__content--active")
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        btn.classList.remove("nav__mobile-trigger--active");
        navContent.classList.remove("nav__content--active")
    })
})
// CODE_REVIEW ta funkcja jest całkiem ciekawa, ale myślę, że dałoby się ją napisać prościej
function debounce(func, wait = 15, immediate = true) {
    // CODE_REVIEW bezpieczniej używać let i const
    var timeout;
    // CODE_REVIEW dobrą praktyką jest nazywanie wszystkich funkcji
    return function () {
        // CODE_REVIEW zamiast tego contex = this, wystarczy zrobić funkcję
        // strzałkową (z tej wyżej) i używać samego this
        // zamiast arguments wygodniej jest używać spread operator z es6
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
        const slideAt = (window.scrollY + window.innerHeight);
        const distanceToTop = window.pageYOffset + section.getBoundingClientRect().top;
        if (slideAt > distanceToTop) {
            section.classList.add("active");
        }
    })
    if (currentScroll >= 100) {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }
}
window.addEventListener('scroll', debounce(showOnScroll));
// Nieźle dojebane IIFE xd
(function () {
    var scrollLinks = document.querySelectorAll('[href^="#"]');
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", scrollHandler);
    }
    function scrollHandler(event) {
        event.preventDefault();
        debugger;
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var targetElementId = this.getAttribute("href").split("#")[1];
        var goToPosition = document.getElementById(targetElementId).offsetTop - 100;
        var distance = goToPosition - currentPosition;
        var totalStep = 40;
        var currentStep = 0;
        var intervalTime = 10;
        var scrollby = distance / totalStep;
        var isScrollElementBody = document.scrollingElement && document.scrollingElement.tagName == "BODY";
        var interval = setInterval(function () {
            if (currentStep < totalStep) {
                isScrollElementBody ? (document.body.scrollTop += scrollby) : (document.documentElement.scrollTop += scrollby);
                currentStep++;
            } else {
                clearInterval(interval);
            }
        }, intervalTime);
    }
})();