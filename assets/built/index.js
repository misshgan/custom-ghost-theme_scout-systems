!function(t,e){t&&!t.getElementById("livereloadscript")&&((e=t.createElement("script")).async=1,e.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e))}(self.document),function(){"use strict";if("/"===window.location.pathname&&(new Swiper(".testimonials",{direction:"horizontal",autoplay:{delay:1e4,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".tech-big-slider__content",{slidesPerView:"auto",spaceBetween:40,direction:"horizontal",autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0}})),"/tech-overview/"===window.location.pathname&&window.innerWidth<601){const a=document.querySelector(".tech-track-swiper"),n=a.querySelector(".tech-track__cards"),c=n.querySelectorAll(".tech-track__card");a.classList.add("swiper"),n.classList.add("swiper-wrapper"),c.forEach((t=>{t.classList.add("swiper-slide")})),window.innerWidth>500?new Swiper(".tech-track-swiper",{slidesPerView:2,spaceBetween:50,direction:"horizontal",pagination:{el:".swiper-pagination"}}):window.innerWidth<501&&new Swiper(".tech-track-swiper",{slidesPerView:1,spaceBetween:50,direction:"horizontal",pagination:{el:".swiper-pagination"}})}const t=document.querySelectorAll(".header-dropdown-target"),e=document.querySelectorAll(".h-dropdown");if(t.forEach(((a,n)=>{a.addEventListener("click",(function(){!function(a){e[a].classList.toggle("active"),t[a].classList.toggle("active")}(n)}))})),document.addEventListener("click",(function(a){t.forEach(((n,c)=>{n.contains(a.target)||(e[c].classList.remove("active"),t[c].classList.remove("active"))}))})),window.addEventListener("load",(function(){const t=document.querySelectorAll(".tech-u-accordion__item-header"),e=document.querySelectorAll(".tech-u-accordion__img"),a=document.querySelectorAll(".tech-u-accordion-wide__item-header");t&&t.forEach(((e,a)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(t.forEach((t=>t.classList.remove("active"))),setTimeout((()=>{e.classList.add("active")}),200))}))})),e&&document.querySelector(".tech-u-accordion__img-1")&&t.forEach(((t,a)=>{t.addEventListener("click",(function(){e.forEach((t=>t.classList.remove("active")));const t=document.querySelector(`.tech-u-accordion__img-${a+1}`);t&&t.classList.add("active")}))})),a&&a.forEach(((t,e)=>{t.addEventListener("click",(function(){t.classList.contains("active")?t.classList.contains("active")&&t.classList.remove("active"):(a.forEach((t=>t.classList.remove("active"))),setTimeout((()=>{t.classList.add("active")}),200))}))}));const n=document.querySelectorAll(".tech-o-accordion__item-header"),c=document.querySelectorAll(".tech-o-accordion__img");n&&n.forEach(((t,e)=>{t.addEventListener("click",(function(){t.classList.contains("active")||(n.forEach((t=>t.classList.remove("active"))),t.classList.add("active"))}))})),c&&document.querySelector(".tech-o-accordion__img-1")&&n.forEach(((t,e)=>{t.addEventListener("click",(function(){c.forEach((t=>t.classList.remove("active")));const t=document.querySelector(`.tech-o-accordion__img-${e+1}`);t&&t.classList.add("active")}))}))})),function(){const t=document.getElementById("post-nav-container");if(t){const e=t.querySelectorAll("h2, h3");if(console.log(e),0!=e.length){const t=document.querySelector(".post-body__left"),e=document.createElement("h2");e.className="side-panel__title",e.innerText="On this page",t.insertBefore(e,t.firstChild)}let a="";e.forEach((t=>{const e=t.getAttribute("id");a+=`<a class="side-panel__nav-item" href="#${e}">${t.textContent}</a>`}));document.getElementById("scrollToLinks").innerHTML=a;let n=window.pageYOffset,c=null;const i=()=>{const t=window.pageYOffset;if(t>n?c="down":t<n&&(c="up"),n=t,"down"===c){let t=null,a=50;if(e.forEach((e=>{const n=Math.abs(e.getBoundingClientRect().top);n<a&&(a=n,t=e)})),null!==t){const e=t.getAttribute("id"),a=document.querySelector(`a[href="#${e}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((t=>{t.classList.remove("active")})),a.classList.add("active")}}else if("up"===c){let t=null;if(e.forEach((e=>{e.getBoundingClientRect().bottom<500&&(t=e)})),null!==t){const e=t.getAttribute("id"),a=document.querySelector(`a[href="#${e}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((t=>{t.classList.remove("active")})),a.classList.add("active")}}};window.addEventListener("scroll",i);const o=document.getElementById("copyLinkButton");o.addEventListener("click",(()=>{const t=document.createElement("textarea"),e=window.location.href;t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),o.querySelector("span").textContent="Link Copied!",setTimeout((()=>{o.querySelector("span").textContent="Copy link"}),1500)}))}}(),window.location.pathname.includes("/academy/")||window.location.pathname.includes("/blog/")){const i=document.getElementById("posts-container"),o=document.querySelectorAll(".tech-hero__category"),s=document.getElementById("pagination"),r=9;let l=1;function d(t){const e=new Date(t);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function u(t,e,a){let n="";t?n=`tag:${t}`:window.location.pathname.includes("/academy/")?n="tag:academy":window.location.pathname.includes("/blog/")&&(n="tag:hash-blog");fetch(`https://scout-systems-inc.ghost.io/ghost/api/v3/content/posts/?key=4c6802d178d7a0d297d9cc7e4b&limit=${a}&page=${e}&filter=${n}&include=authors,tags`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((t=>t.json())).then((t=>{const e=t.posts;if(0===e.length){i.innerHTML="";const t=document.createElement("h1");return t.className="page-academy__404",t.innerText="We don't have any of these articles yet...",void i.appendChild(t)}i.innerHTML="",e.forEach((t=>{const e=t.tags.filter((t=>!t.name.startsWith("#"))).map((t=>`<a href="${t.url}" class="post-card__tag">${t.name}</a>`)).join(""),a=document.createElement("div");a.className="post-footer__card post-card",a.innerHTML=`\n\t\t\t<a href='${t.url}' class="post-card__image">\n\t\t\t<img src="${t.feature_image||"/assets/images/placeholder.png"}" alt="feature image">\n\t\t\t</a>\n\t\t\t<div class="post-card__header">\n\t\t\t\t<div class="post-card__tags">${e}</div>\n\t\t\t</div>\n\t\t\t<div class="post-card__body">\n\t\t\t\t<h3 class="post-card__title"><a href="${t.url}">${t.title}</a></h3>\n\t\t\t\t<div class="post-card__description">${t.html||""}</div>\n\t\t\t</div>\n\t\t\t<div class="post-card__header-info">\n\t\t\t\t${t.reading_time?`<div class="post-card__read-time"> <img src="/assets/images/post/time.png" alt="reading time icon"> ${t.reading_time} minute read</div>`:""}\n\t\t\t\t${t.tags.some((t=>"#blog"===t.name))?`<div class="post-card__publication-date"> <img src="/assets/images/post/date.png" alt="date icon"> <time datetime="${d(t.published_at)}">${d(t.published_at)}</time></div>`:""}\n\t\t\t</div>\n\t\t\t<div class="post-card__footer">\n\t\t\t\t${t.authors.map((t=>`\n\t\t\t\t\t<div class="post-card__author">\n\t\t\t\t\t\t<div class="post-card__author-img">\n\t\t\t\t\t\t\t<img src="${t.profile_image}" alt="author image">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="post-card__author-info">\n\t\t\t\t\t\t\t<span class="post-card__author-name">${t.name}</span>\n\t\t\t\t\t\t\t${t.location?`<span class="post-card__author-location">${t.location}</span>`:""}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t`)).join("")}\n\t\t\t\t<a href="${t.url}" class="post-card__link">Read article <img style="margin-left:1rem" src="/assets/images/post/arrow-up.svg" alt="arrow top icon"></a>\n\t\t\t</div>\n\t\t\t`,i.appendChild(a)})),p(t.meta.pagination)})).catch((t=>{console.error("Error fetching data:",t)}))}function p(t){s.innerHTML="";const e=t.pages;if(t.prev){const t=document.createElement("a");t.href="#",t.className="pagination__prev",t.innerHTML='<img src="/assets/images/post/arrow-right.svg" alt="arrow right icon">',t.addEventListener("click",(t=>{t.preventDefault(),l-=1;const e=document.querySelector(".tech-hero__category.active").getAttribute("data-tag");u("all"===e?null:e,l,r)})),s.appendChild(t)}for(let t=1;t<=e;t++){const e=document.createElement("a");e.href="#",e.textContent=t,t===l&&e.classList.add("active"),e.addEventListener("click",(e=>{e.preventDefault(),l=t;const a=document.querySelector(".tech-hero__category.active").getAttribute("data-tag");u("all"===a?null:a,l,r)})),s.appendChild(e)}if(t.next){const t=document.createElement("a");t.href="#",t.className="pagination__next",t.innerHTML='<img src="/assets/images/post/arrow-right.svg" alt="arrow right icon">',t.addEventListener("click",(t=>{t.preventDefault(),l+=1;const e=document.querySelector(".tech-hero__category.active").getAttribute("data-tag");u("all"===e?null:e,l,r)})),s.appendChild(t)}}o.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-tag");o.forEach((t=>t.classList.remove("active"))),t.target.classList.add("active"),l=1,u("all"===e?null:e,l,r)}))})),u(null,l,r)}window.addEventListener("load",(function(){const t=document.querySelectorAll(".runScriptButton");if(t){const e=document.querySelector(".popup-form-container");let a;t.forEach((t=>{t.addEventListener("click",(function(){document.body.classList.add("not-scroll"),e.classList.add("active");const t=document.querySelector(".popup-close");a=function(n){n.target!==e&&n.target!==t||(e.classList.remove("active"),document.body.classList.remove("not-scroll"),window.removeEventListener("click",a))},window.addEventListener("click",a)}))}))}}))}();
//# sourceMappingURL=index.js.map
