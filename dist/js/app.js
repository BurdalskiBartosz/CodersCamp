!function r(c,i,l){function u(n,e){if(!i[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(a)return a(n,!0);throw new Error("Cannot find module '"+n+"'")}var o=i[n]={exports:{}};c[n][0].call(o.exports,function(e){var t=c[n][1][e];return u(t||e)},o,o.exports,r,c,i,l)}return i[n].exports}for(var a="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,t,n){"use strict";var o=document.querySelector(".nav__mobile-trigger"),r=document.querySelector(".nav__content"),c=document.querySelector(".nav"),i=document.querySelectorAll(".nav__link");o.addEventListener("click",function(){o.classList.toggle("nav__mobile-trigger--active"),r.classList.toggle("nav__content--active")}),i.forEach(function(e){e.addEventListener("click",function(){o.classList.remove("nav__mobile-trigger--active"),r.classList.remove("nav__content--active")})}),window.addEventListener("scroll",function(o,e,t){var r,c=1<arguments.length&&void 0!==e?e:15,i=!(2<arguments.length&&void 0!==t)||t;return function(){var e=this,t=arguments,n=i&&!r;clearTimeout(r),r=setTimeout(function(){r=null,i||o.apply(e,t)},c),n&&o.apply(e,t)}}(function(e){var t=document.querySelectorAll(".slideIn"),n=window.scrollY;t.forEach(function(e){var t=window.scrollY+window.innerHeight;window.pageYOffset+e.getBoundingClientRect().top<t&&e.classList.add("active")}),100<=n?c.classList.add("active"):c.classList.remove("active")})),function(){for(var e=document.querySelectorAll('[href^="#"]'),t=0;t<e.length;t++)e[t].addEventListener("click",n);function n(e){e.preventDefault();var t=document.documentElement.scrollTop||document.body.scrollTop,n=this.getAttribute("href").split("#")[1],o=document.getElementById(n).offsetTop-100,r=0,c=(o-t)/40,i=document.scrollingElement&&"BODY"==document.scrollingElement.tagName,l=setInterval(function(){r<40?(i?document.body.scrollTop+=c:document.documentElement.scrollTop+=c,r++):clearInterval(l)},10)}}()},{}]},{},[1]);
//# sourceMappingURL=app.js.map
