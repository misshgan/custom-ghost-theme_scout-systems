!function(){"use strict";new Swiper(".testimonials",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".tech-big-slider__content",{slidesPerView:"auto",spaceBetween:40,direction:"horizontal",autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0}});const e=document.querySelectorAll(".header-dropdown-target"),t=document.querySelectorAll(".h-dropdown");e.forEach(((c,i)=>{c.addEventListener("click",(function(){!function(c){t[c].classList.toggle("active"),e[c].classList.toggle("active")}(i)}))})),document.addEventListener("click",(function(c){e.forEach(((i,o)=>{i.contains(c.target)||(t[o].classList.remove("active"),e[o].classList.remove("active"))}))})),window.addEventListener("load",(function(){const e=document.querySelectorAll(".tech-u-accordion__item-header"),t=document.querySelectorAll(".tech-u-accordion__img"),c=document.querySelectorAll(".tech-u-accordion-wide__item-header");e&&e.forEach(((t,c)=>{t.addEventListener("click",(function(){t.classList.contains("active")||(e.forEach((e=>e.classList.remove("active"))),t.classList.add("active"))}))})),t&&document.querySelector(".tech-u-accordion__img-1")&&e.forEach(((e,c)=>{e.addEventListener("click",(function(){t.forEach((e=>e.classList.remove("active")));const e=document.querySelector(`.tech-u-accordion__img-${c+1}`);e&&e.classList.add("active")}))})),c&&c.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(c.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))}))}));const i=document.querySelectorAll(".tech-o-accordion__item-header"),o=document.querySelectorAll(".tech-o-accordion__img");i&&i.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(i.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))}))})),o&&document.querySelector(".tech-o-accordion__img-1")&&i.forEach(((e,t)=>{e.addEventListener("click",(function(){o.forEach((e=>e.classList.remove("active")));const e=document.querySelector(`.tech-o-accordion__img-${t+1}`);e&&e.classList.add("active")}))}))}))}();
//# sourceMappingURL=index.js.map
