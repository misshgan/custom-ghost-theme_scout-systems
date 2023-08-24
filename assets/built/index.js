!function(){"use strict";if("/"===window.location.pathname&&new Swiper(".testimonials",{direction:"horizontal",autoplay:{delay:1e4,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),"/industrial-iot/"===window.location.pathname&&new Swiper(".tech-big-slider__content",{slidesPerView:"auto",spaceBetween:window.innerWidth>768?30:20,direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0}}),("/tech-overview/"===window.location.pathname||"/root-cause-analysis/"===window.location.pathname)&&window.innerWidth<601){const i=document.querySelector(".tech-track-swiper"),n=i.querySelector(".tech-track__cards"),a=n.querySelectorAll(".tech-track__card");i.classList.add("swiper"),n.classList.add("swiper-wrapper"),a.forEach((e=>{e.classList.add("swiper-slide")})),window.innerWidth>500?new Swiper(".tech-track-swiper",{slidesPerView:2,spaceBetween:50,direction:"horizontal",pagination:{el:".swiper-pagination"}}):window.innerWidth<501&&new Swiper(".tech-track-swiper",{slidesPerView:1,spaceBetween:50,direction:"horizontal",pagination:{el:".swiper-pagination"}})}if("/work-instructions/"===window.location.pathname&&window.innerWidth<651){const o=document.querySelector(".tech-white-cards-2-swiper"),c=o.querySelector(".tech-white-cards-2__cards"),s=c.querySelectorAll(".tech-white-cards-2__card");o.classList.add("swiper"),c.classList.add("swiper-wrapper"),s.forEach((e=>{e.classList.add("swiper-slide")})),window.innerWidth>550?new Swiper(".tech-white-cards-2-swiper",{slidesPerView:2,spaceBetween:30,direction:"horizontal",pagination:{el:".swiper-pagination"}}):window.innerWidth<551&&new Swiper(".tech-white-cards-2-swiper",{slidesPerView:1,spaceBetween:30,direction:"horizontal",pagination:{el:".swiper-pagination"}})}if("/data-collection/"===window.location.pathname&&window.innerWidth<769){const r=document.querySelector(".tech-white-cards-3-swiper"),d=r.querySelector(".tech-white-cards-3__cards"),l=d.querySelectorAll(".tech-white-cards-3__card");r.classList.add("swiper"),d.classList.add("swiper-wrapper"),l.forEach((e=>{e.classList.add("swiper-slide")})),window.innerWidth>450?new Swiper(".tech-white-cards-3-swiper",{slidesPerView:2,spaceBetween:20,direction:"horizontal",pagination:{el:".swiper-pagination"}}):window.innerWidth<451&&new Swiper(".tech-white-cards-3-swiper",{slidesPerView:1,spaceBetween:30,direction:"horizontal",pagination:{el:".swiper-pagination"}})}if("/pricing/"===window.location.pathname&&window.innerWidth<1201){const p=document.querySelector(".pricing-swiper"),w=p.querySelector(".page-pricing__cards"),u=w.querySelectorAll(".pricing-card");p.classList.add("swiper"),w.classList.add("swiper-wrapper"),u.forEach((e=>{e.classList.add("swiper-slide")})),window.innerWidth>950?new Swiper(".pricing-swiper",{slidesPerView:2,spaceBetween:50,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}):window.innerWidth<951&&window.innerWidth>768?new Swiper(".pricing-swiper",{slidesPerView:1.5,spaceBetween:50,direction:"horizontal",pagination:{el:".swiper-pagination"}}):window.innerWidth<769&&new Swiper(".pricing-swiper",{slidesPerView:1,spaceBetween:30,direction:"horizontal",pagination:{el:".swiper-pagination"}})}if("/academy/"===window.location.pathname&&window.innerWidth<769){const h=document.querySelector(".academy-swiper"),m=h.querySelector(".tech-hero__categories"),g=m.querySelectorAll(".tech-hero__category");h.classList.add("swiper"),m.classList.add("swiper-wrapper"),g.forEach((e=>{e.classList.add("swiper-slide")})),new Swiper(".academy-swiper",{slidesPerView:"auto",spaceBetween:window.innerWidth<500?10:25,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}})}else if("/blog/"===window.location.pathname&&window.innerWidth<769){const v=document.querySelector(".academy-swiper"),_=v.querySelector(".tech-hero__categories"),f=_.querySelectorAll(".tech-hero__category");v.classList.add("swiper"),_.classList.add("swiper-wrapper"),f.forEach((e=>{e.classList.add("swiper-slide")})),new Swiper(".academy-swiper",{slidesPerView:"auto",spaceBetween:window.innerWidth<500?10:25,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}})}const e=document.querySelectorAll(".header-dropdown-target"),t=document.querySelectorAll(".h-dropdown");if(e.forEach(((i,n)=>{i.addEventListener("click",(function(){!function(i){t[i].classList.toggle("active"),e[i].classList.toggle("active")}(n)}))})),document.addEventListener("click",(function(i){e.forEach(((n,a)=>{n.contains(i.target)||(t[a].classList.remove("active"),e[a].classList.remove("active"))}))})),window.addEventListener("load",(function(){const e=document.querySelectorAll(".tech-u-accordion__item-header"),t=document.querySelectorAll(".tech-u-accordion__img"),i=document.querySelectorAll(".tech-u-accordion-wide__item-header");e&&e.forEach(((t,i)=>{t.addEventListener("click",(function(){t.classList.contains("active")||(e.forEach((e=>e.classList.remove("active"))),setTimeout((()=>{t.classList.add("active")}),200))}))})),t&&document.querySelector(".tech-u-accordion__img-1")&&e.forEach(((e,i)=>{e.addEventListener("click",(function(){t.forEach((e=>e.classList.remove("active")));const e=document.querySelector(`.tech-u-accordion__img-${i+1}`);e&&e.classList.add("active")}))})),i&&i.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.contains("active")?e.classList.contains("active")&&e.classList.remove("active"):(i.forEach((e=>e.classList.remove("active"))),setTimeout((()=>{e.classList.add("active")}),200))}))}));const n=document.querySelectorAll(".tech-o-accordion__item-header"),a=document.querySelectorAll(".tech-o-accordion__img");n&&n.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(n.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))}))})),a&&document.querySelector(".tech-o-accordion__img-1")&&n.forEach(((e,t)=>{e.addEventListener("click",(function(){a.forEach((e=>e.classList.remove("active")));const e=document.querySelector(`.tech-o-accordion__img-${t+1}`);e&&e.classList.add("active")}))}))})),function(){const e=document.getElementById("post-nav-container");if(e){const t=e.querySelectorAll("h2, h3");if(console.log(t),0!=t.length){const e=document.querySelector(".post-body__left"),t=document.createElement("h2");t.className="side-panel__title",t.innerText="On this page",e.insertBefore(t,e.firstChild)}let i="";t.forEach((e=>{const t=e.getAttribute("id");i+=`<a class="side-panel__nav-item" href="#${t}">${e.textContent}</a>`}));document.getElementById("scrollToLinks").innerHTML=i;let n=window.pageYOffset,a=null;const o=()=>{const e=window.pageYOffset;if(e>n?a="down":e<n&&(a="up"),n=e,"down"===a){let e=null,i=50;if(t.forEach((t=>{const n=Math.abs(t.getBoundingClientRect().top);n<i&&(i=n,e=t)})),null!==e){const t=e.getAttribute("id"),i=document.querySelector(`a[href="#${t}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((e=>{e.classList.remove("active")})),i.classList.add("active")}}else if("up"===a){let e=null;if(t.forEach((t=>{t.getBoundingClientRect().bottom<500&&(e=t)})),null!==e){const t=e.getAttribute("id"),i=document.querySelector(`a[href="#${t}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((e=>{e.classList.remove("active")})),i.classList.add("active")}}};window.addEventListener("scroll",o);const c=document.getElementById("copyLinkButton");c.addEventListener("click",(()=>{const e=document.createElement("textarea"),t=window.location.href;e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),c.querySelector("span").textContent="Link Copied!",setTimeout((()=>{c.querySelector("span").textContent="Copy link"}),1500)}))}}(),window.location.pathname.includes("/academy/")||window.location.pathname.includes("/blog/")){const y=document.getElementById("posts-container"),L=document.querySelectorAll(".tech-hero__category"),E=document.getElementById("pagination"),S=9;let q=1;function b(e){const t=new Date(e);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`}function $(e,t,i){let n="";e?n=`tag:${e}`:window.location.pathname.includes("/academy/")?n="tag:academy":window.location.pathname.includes("/blog/")&&(n="tag:hash-blog");fetch(`https://scout-systems-inc.ghost.io/ghost/api/v3/content/posts/?key=4c6802d178d7a0d297d9cc7e4b&limit=${i}&page=${t}&filter=${n}&include=authors,tags`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((e=>e.json())).then((e=>{const t=e.posts;if(0===t.length){y.innerHTML="";const e=document.createElement("h1");return e.className="page-academy__404",e.innerText="We don't have any of these articles yet...",void y.appendChild(e)}y.innerHTML="",t.forEach((e=>{const t=e.tags.filter((e=>!e.name.startsWith("#"))).map((e=>`<a href="${e.url}" class="post-card__tag">${e.name}</a>`)).join(""),i=document.createElement("div");i.className="post-footer__card post-card",i.innerHTML=`\n\t\t\t<a href='${e.url}' class="post-card__image">\n\t\t\t<img src="${e.feature_image||"/assets/images/placeholder.png"}" alt="feature image">\n\t\t\t</a>\n\t\t\t<div class="post-card__header">\n\t\t\t\t<div class="post-card__tags">${t}</div>\n\t\t\t</div>\n\t\t\t<div class="post-card__body">\n\t\t\t\t<h3 class="post-card__title"><a href="${e.url}">${e.title}</a></h3>\n\t\t\t\t<div class="post-card__description">${e.html||""}</div>\n\t\t\t</div>\n\t\t\t<div class="post-card__header-info">\n\t\t\t\t${e.reading_time?`<div class="post-card__read-time"> <img src="/assets/images/post/time.png" alt="reading time icon"> ${e.reading_time} minute read</div>`:""}\n\t\t\t\t${e.tags.some((e=>"#blog"===e.name))?`<div class="post-card__publication-date"> <img src="/assets/images/post/date.png" alt="date icon"> <time datetime="${b(e.published_at)}">${b(e.published_at)}</time></div>`:""}\n\t\t\t</div>\n\t\t\t<div class="post-card__footer">\n\t\t\t\t${e.authors.map((e=>`\n\t\t\t\t\t<div class="post-card__author">\n\t\t\t\t\t\t<div class="post-card__author-img">\n\t\t\t\t\t\t\t<img src="${e.profile_image}" alt="author image">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="post-card__author-info">\n\t\t\t\t\t\t\t<span class="post-card__author-name">${e.name}</span>\n\t\t\t\t\t\t\t${e.location?`<span class="post-card__author-location">${e.location}</span>`:""}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t`)).join("")}\n\t\t\t\t<a href="${e.url}" class="post-card__link">Read article <img style="margin-left:1rem" src="/assets/images/post/arrow-up.svg" alt="arrow top icon"></a>\n\t\t\t</div>\n\t\t\t`,y.appendChild(i)})),k(e.meta.pagination)})).catch((e=>{console.error("Error fetching data:",e)}))}function k(e){E.innerHTML="";const t=e.pages;if(e.prev){const e=document.createElement("a");e.href="#",e.className="pagination__prev",e.innerHTML='<img src="/assets/images/post/arrow-right.svg" alt="arrow right icon">',e.addEventListener("click",(e=>{e.preventDefault(),q-=1;const t=document.querySelector(".tech-hero__category.active").getAttribute("data-tag");$("all"===t?null:t,q,S)})),E.appendChild(e)}for(let e=1;e<=t;e++){const t=document.createElement("a");t.href="#",t.textContent=e,e===q&&t.classList.add("active"),t.addEventListener("click",(t=>{t.preventDefault(),q=e;const i=document.querySelector(".tech-hero__category.active").getAttribute("data-tag");$("all"===i?null:i,q,S)})),E.appendChild(t)}if(e.next){const e=document.createElement("a");e.href="#",e.className="pagination__next",e.innerHTML='<img src="/assets/images/post/arrow-right.svg" alt="arrow right icon">',e.addEventListener("click",(e=>{e.preventDefault(),q+=1;const t=document.querySelector(".tech-hero__category.active").getAttribute("data-tag");$("all"===t?null:t,q,S)})),E.appendChild(e)}}L.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-tag");L.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active"),q=1,$("all"===t?null:t,q,S)}))})),$(null,q,S)}if(window.addEventListener("load",(function(){const e=document.querySelectorAll(".runScriptButton");if(e){const t=document.querySelector(".popup-form-container");let i;e.forEach((e=>{e.addEventListener("click",(function(){document.body.classList.add("not-scroll"),t.classList.add("active");const e=document.querySelector(".popup-close");i=function(n){n.target!==t&&n.target!==e||(t.classList.remove("active"),document.body.classList.remove("not-scroll"),window.removeEventListener("click",i))},window.addEventListener("click",i)}))}))}})),window.innerWidth<769){const A=document.querySelector(".mobile-menu-open"),B=document.querySelector(".mobile-nav"),W=document.querySelectorAll(".mobile-nav__title");if(A){A.addEventListener("click",(()=>{B.classList.add("active"),document.body.classList.add("not-scroll")}));document.querySelector(".mobile-nav__close").addEventListener("click",(()=>{B.classList.remove("active"),document.body.classList.remove("not-scroll")})),W.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("active")?e.classList.contains("active")&&W.forEach((e=>{e.classList.remove("active")})):(W.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"))}))}))}}}();
//# sourceMappingURL=index.js.map
