!function(){"use strict";new Swiper(".testimonials",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".tech-big-slider__content",{slidesPerView:"auto",spaceBetween:40,direction:"horizontal",autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0}});const e=document.querySelectorAll(".header-dropdown-target"),t=document.querySelectorAll(".h-dropdown");e.forEach(((c,o)=>{c.addEventListener("click",(function(){!function(c){t[c].classList.toggle("active"),e[c].classList.toggle("active")}(o)}))})),document.addEventListener("click",(function(c){e.forEach(((o,n)=>{o.contains(c.target)||(t[n].classList.remove("active"),e[n].classList.remove("active"))}))})),window.addEventListener("load",(function(){const e=document.querySelectorAll(".tech-u-accordion__item-header"),t=document.querySelectorAll(".tech-u-accordion__img"),c=document.querySelectorAll(".tech-u-accordion-wide__item-header");e&&e.forEach(((t,c)=>{t.addEventListener("click",(function(){t.classList.contains("active")||(e.forEach((e=>e.classList.remove("active"))),t.classList.add("active"))}))})),t&&document.querySelector(".tech-u-accordion__img-1")&&e.forEach(((e,c)=>{e.addEventListener("click",(function(){t.forEach((e=>e.classList.remove("active")));const e=document.querySelector(`.tech-u-accordion__img-${c+1}`);e&&e.classList.add("active")}))})),c&&c.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(c.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))}))}));const o=document.querySelectorAll(".tech-o-accordion__item-header"),n=document.querySelectorAll(".tech-o-accordion__img");o&&o.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(o.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))}))})),n&&document.querySelector(".tech-o-accordion__img-1")&&o.forEach(((e,t)=>{e.addEventListener("click",(function(){n.forEach((e=>e.classList.remove("active")));const e=document.querySelector(`.tech-o-accordion__img-${t+1}`);e&&e.classList.add("active")}))}))})),function(){const e=document.getElementById("post-nav-container").querySelectorAll("h2");let t="";e.forEach((e=>{const c=e.getAttribute("id");t+=`<a class="side-panel__nav-item" href="#${c}">${e.textContent}</a>`})),document.getElementById("scrollToLinks").innerHTML=t;let c=window.pageYOffset,o=null;window.addEventListener("scroll",(()=>{const t=window.pageYOffset;if(t>c?o="down":t<c&&(o="up"),c=t,"down"===o){let t=null,c=50;if(e.forEach((e=>{const o=Math.abs(e.getBoundingClientRect().top);o<c&&(c=o,t=e)})),null!==t){const e=t.getAttribute("id"),c=document.querySelector(`a[href="#${e}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((e=>{e.classList.remove("active")})),c.classList.add("active")}}else if("up"===o){let t=null;if(e.forEach((e=>{e.getBoundingClientRect().bottom<500&&(t=e)})),null!==t){const e=t.getAttribute("id"),c=document.querySelector(`a[href="#${e}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((e=>{e.classList.remove("active")})),c.classList.add("active")}}}))}();const c=document.getElementById("copyLinkButton");c.addEventListener("click",(()=>{const e=document.createElement("textarea"),t=window.location.href;e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),c.querySelector("span").textContent="Link Copied!",setTimeout((()=>{c.querySelector("span").textContent="Copy link"}),1500)}))}();
//# sourceMappingURL=index.js.map
