!function(t,e){t&&!t.getElementById("livereloadscript")&&((e=t.createElement("script")).async=1,e.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e))}(self.document),function(){"use strict";var t,e={exports:{}};t=e,function(e,a){var i=function(t,e,a){var i,n;if(function(){var e,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},a)e in n||(n[e]=a[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var o,c,r,s,l,d,u,p,m,f,h,g,v,w,_,y,b,E,L,z,S,A,C,q,$,B,k,M,x,N,T,P,F,W,I,H,R,V,O,j,D,Y,Q,U,G,J=e.documentElement,K=t.HTMLPictureElement,X="addEventListener",Z="getAttribute",tt=t[X].bind(t),et=t.setTimeout,at=t.requestAnimationFrame||et,it=t.requestIdleCallback,nt=/^picture$/i,ot=["load","error","lazyincluded","_lazyloaded"],ct={},rt=Array.prototype.forEach,st=function(t,e){return ct[e]||(ct[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),ct[e].test(t[Z]("class")||"")&&ct[e]},lt=function(t,e){st(t,e)||t.setAttribute("class",(t[Z]("class")||"").trim()+" "+e)},dt=function(t,e){var a;(a=st(t,e))&&t.setAttribute("class",(t[Z]("class")||"").replace(a," "))},ut=function(t,e,a){var i=a?X:"removeEventListener";a&&ut(t,e),ot.forEach((function(a){t[i](a,e)}))},pt=function(t,a,n,o,c){var r=e.createEvent("Event");return n||(n={}),n.instance=i,r.initEvent(a,!o,!c),r.detail=n,t.dispatchEvent(r),r},mt=function(e,a){var i;!K&&(i=t.picturefill||n.pf)?(a&&a.src&&!e[Z]("srcset")&&e.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[e]})):a&&a.src&&(e.src=a.src)},ft=function(t,e){return(getComputedStyle(t,null)||{})[e]},ht=function(t,e,a){for(a=a||t.offsetWidth;a<n.minSize&&e&&!t._lazysizesWidth;)a=e.offsetWidth,e=e.parentNode;return a},gt=(Y=[],Q=D=[],U=function(){var t=Q;for(Q=D.length?Y:D,O=!0,j=!1;t.length;)t.shift()();O=!1},G=function(t,a){O&&!a?t.apply(this,arguments):(Q.push(t),j||(j=!0,(e.hidden?et:at)(U)))},G._lsFlush=U,G),vt=function(t,e){return e?function(){gt(t)}:function(){var e=this,a=arguments;gt((function(){t.apply(e,a)}))}},wt=function(t){var e,i=0,o=n.throttleDelay,c=n.ricTimeout,r=function(){e=!1,i=a.now(),t()},s=it&&c>49?function(){it(r,{timeout:c}),c!==n.ricTimeout&&(c=n.ricTimeout)}:vt((function(){et(r)}),!0);return function(t){var n;(t=!0===t)&&(c=33),e||(e=!0,(n=o-(a.now()-i))<0&&(n=0),t||n<9?s():et(s,n))}},_t=function(t){var e,i,n=99,o=function(){e=null,t()},c=function(){var t=a.now()-i;t<n?et(c,n-t):(it||o)(o)};return function(){i=a.now(),e||(e=et(c,n))}},yt=(b=/^img$/i,E=/^iframe$/i,L="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),z=0,S=0,A=0,C=-1,q=function(t){A--,(!t||A<0||!t.target)&&(A=0)},$=function(t){return null==y&&(y="hidden"==ft(e.body,"visibility")),y||!("hidden"==ft(t.parentNode,"visibility")&&"hidden"==ft(t,"visibility"))},B=function(t,a){var i,n=t,o=$(t);for(g-=a,_+=a,v-=a,w+=a;o&&(n=n.offsetParent)&&n!=e.body&&n!=J;)(o=(ft(n,"opacity")||1)>0)&&"visible"!=ft(n,"overflow")&&(i=n.getBoundingClientRect(),o=w>i.left&&v<i.right&&_>i.top-1&&g<i.bottom+1);return o},M=wt(k=function(){var t,a,o,c,r,s,u,m,b,E,q,k,M=i.elements;if((p=n.loadMode)&&A<8&&(t=M.length)){for(a=0,C++;a<t;a++)if(M[a]&&!M[a]._lazyRace)if(!L||i.prematureUnveil&&i.prematureUnveil(M[a]))I(M[a]);else if((m=M[a][Z]("data-expand"))&&(s=1*m)||(s=S),E||(E=!n.expand||n.expand<1?J.clientHeight>500&&J.clientWidth>500?500:370:n.expand,i._defEx=E,q=E*n.expFactor,k=n.hFac,y=null,S<q&&A<1&&C>2&&p>2&&!e.hidden?(S=q,C=0):S=p>1&&C>1&&A<6?E:z),b!==s&&(f=innerWidth+s*k,h=innerHeight+s,u=-1*s,b=s),o=M[a].getBoundingClientRect(),(_=o.bottom)>=u&&(g=o.top)<=h&&(w=o.right)>=u*k&&(v=o.left)<=f&&(_||w||v||g)&&(n.loadHidden||$(M[a]))&&(d&&A<3&&!m&&(p<3||C<4)||B(M[a],s))){if(I(M[a]),r=!0,A>9)break}else!r&&d&&!c&&A<4&&C<4&&p>2&&(l[0]||n.preloadAfterLoad)&&(l[0]||!m&&(_||w||v||g||"auto"!=M[a][Z](n.sizesAttr)))&&(c=l[0]||M[a]);c&&!r&&I(c)}}),N=vt(x=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(q(t),lt(e,n.loadedClass),dt(e,n.loadingClass),ut(e,T),pt(e,"lazyloaded"))}),T=function(t){N({target:t.target})},P=function(t,e){var a=t.getAttribute("data-load-mode")||n.iframeLoadMode;0==a?t.contentWindow.location.replace(e):1==a&&(t.src=e)},F=function(t){var e,a=t[Z](n.srcsetAttr);(e=n.customMedia[t[Z]("data-media")||t[Z]("media")])&&t.setAttribute("media",e),a&&t.setAttribute("srcset",a)},W=vt((function(t,e,a,i,o){var c,r,s,l,d,p;(d=pt(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(a?lt(t,n.autosizesClass):t.setAttribute("sizes",i)),r=t[Z](n.srcsetAttr),c=t[Z](n.srcAttr),o&&(l=(s=t.parentNode)&&nt.test(s.nodeName||"")),p=e.firesLoad||"src"in t&&(r||c||l),d={target:t},lt(t,n.loadingClass),p&&(clearTimeout(u),u=et(q,2500),ut(t,T,!0)),l&&rt.call(s.getElementsByTagName("source"),F),r?t.setAttribute("srcset",r):c&&!l&&(E.test(t.nodeName)?P(t,c):t.src=c),o&&(r||l)&&mt(t,{src:c})),t._lazyRace&&delete t._lazyRace,dt(t,n.lazyClass),gt((function(){var e=t.complete&&t.naturalWidth>1;p&&!e||(e&&lt(t,n.fastLoadedClass),x(d),t._lazyCache=!0,et((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&A--}),!0)})),I=function(t){if(!t._lazyRace){var e,a=b.test(t.nodeName),i=a&&(t[Z](n.sizesAttr)||t[Z]("sizes")),o="auto"==i;(!o&&d||!a||!t[Z]("src")&&!t.srcset||t.complete||st(t,n.errorClass)||!st(t,n.lazyClass))&&(e=pt(t,"lazyunveilread").detail,o&&bt.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,A++,W(t,e,o,i,a))}},H=_t((function(){n.loadMode=3,M()})),V=function(){d||(a.now()-m<999?et(V,999):(d=!0,n.loadMode=3,M(),tt("scroll",R,!0)))},{_:function(){m=a.now(),i.elements=e.getElementsByClassName(n.lazyClass),l=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),tt("scroll",M,!0),tt("resize",M,!0),tt("pageshow",(function(t){if(t.persisted){var a=e.querySelectorAll("."+n.loadingClass);a.length&&a.forEach&&at((function(){a.forEach((function(t){t.complete&&I(t)}))}))}})),t.MutationObserver?new MutationObserver(M).observe(J,{childList:!0,subtree:!0,attributes:!0}):(J[X]("DOMNodeInserted",M,!0),J[X]("DOMAttrModified",M,!0),setInterval(M,999)),tt("hashchange",M,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e[X](t,M,!0)})),/d$|^c/.test(e.readyState)?V():(tt("load",V),e[X]("DOMContentLoaded",M),et(V,2e4)),i.elements.length?(k(),gt._lsFlush()):M()},checkElems:M,unveil:I,_aLSL:R=function(){3==n.loadMode&&(n.loadMode=2),H()}}),bt=(c=vt((function(t,e,a,i){var n,o,c;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),nt.test(e.nodeName||""))for(o=0,c=(n=e.getElementsByTagName("source")).length;o<c;o++)n[o].setAttribute("sizes",i);a.detail.dataAttr||mt(t,a.detail)})),r=function(t,e,a){var i,n=t.parentNode;n&&(a=ht(t,n,a),(i=pt(t,"lazybeforesizes",{width:a,dataAttr:!!e})).defaultPrevented||(a=i.detail.width)&&a!==t._lazysizesWidth&&c(t,n,i,a))},{_:function(){o=e.getElementsByClassName(n.autosizesClass),tt("resize",s)},checkElems:s=_t((function(){var t,e=o.length;if(e)for(t=0;t<e;t++)r(o[t])})),updateElem:r}),Et=function(){!Et.i&&e.getElementsByClassName&&(Et.i=!0,bt._(),yt._())};return et((function(){n.init&&Et()})),i={cfg:n,autoSizer:bt,loader:yt,init:Et,uP:mt,aC:lt,rC:dt,hC:st,fire:pt,gW:ht,rAF:gt}}(e,e.document,Date);e.lazySizes=i,t.exports&&(t.exports=i)}("undefined"!=typeof window?window:{});var a=e.exports;!function(t){!function(e,i){if(e){var n=function(){i(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};i=i.bind(null,e,e.document),t.exports?i(a):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}}("undefined"!=typeof window?window:0,(function(t,e,a){if(t.addEventListener){var i=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,n=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,o=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,c=/^picture$/i,r=a.cfg,s={getParent:function(e,a){var i=e,n=e.parentNode;return a&&"prev"!=a||!n||!c.test(n.nodeName||"")||(n=n.parentNode),"self"!=a&&(i="prev"==a?e.previousElementSibling:a&&(n.closest||t.jQuery)&&(n.closest?n.closest(a):jQuery(n).closest(a)[0])||n),i},getFit:function(t){var e,a,i=getComputedStyle(t,null)||{},c=i.content||i.fontFamily,r={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!r.fit&&c&&(e=c.match(n))&&(r.fit=e[1]),r.fit?(!(a=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&c&&(e=c.match(o))&&(a=e[1]),r.parent=s.getParent(t,a)):r.fit=i.objectFit,r},getImageRatio:function(e){var a,n,o,s,l,d,u,p=e.parentNode,m=p&&c.test(p.nodeName||"")?p.querySelectorAll("source, img"):[e];for(a=0;a<m.length;a++)if(n=(e=m[a]).getAttribute(r.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",o=e._lsMedia||e.getAttribute("media"),o=r.customMedia[e.getAttribute("data-media")||o]||o,n&&(!o||(t.matchMedia&&matchMedia(o)||{}).matches)){(s=parseFloat(e.getAttribute("data-aspectratio")))||((l=n.match(i))?"w"==l[2]?(d=l[1],u=l[3]):(d=l[3],u=l[1]):(d=e.getAttribute("width"),u=e.getAttribute("height")),s=d/u);break}return s},calculateSize:function(t,e){var a,i,n,o=this.getFit(t),c=o.fit,r=o.parent;return"width"==c||("contain"==c||"cover"==c)&&(i=this.getImageRatio(t))?(r?e=r.clientWidth:r=t,n=e,"width"==c?n=e:(a=e/r.clientHeight)&&("cover"==c&&a<i||"contain"==c&&a>i)&&(n=e*(i/a)),n):e}};a.parentFit=s,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==a){var e=t.target;t.detail.width=s.calculateSize(e,t.detail.width)}}))}}))}({exports:{}});const i=window.innerWidth;[{condition:"/"===window.location.pathname||"/shop-floor-software/"===window.location.pathname,selector:".testimonials",wrapperSelector:".testimonials__body",slideSelector:".testimonials__card",config:{direction:"horizontal",autoplay:{delay:1e4,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},{condition:"/"===window.location.pathname,selector:".tech-customers__swiper",wrapperSelector:".tech-customers__cards",slideSelector:".tech-customers__card",config:{direction:"horizontal",slidesPerView:i>768?3:i<768&&i>500?2:1,spaceBetween:i>768?30:20,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0}},{condition:"/industrial-iot/"===window.location.pathname,selector:".tech-big-slider__content",wrapperSelector:".tech-big-slider__cards",slideSelector:".tech-big-slider__card",config:{slidesPerView:"auto",spaceBetween:i>768?30:20,direction:"horizontal",autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0}}},{condition:("/tech-overview/"===window.location.pathname||"/root-cause-analysis/"===window.location.pathname||"/"===window.location.pathname)&&i<601,selector:".tech-track-swiper",wrapperSelector:".tech-track__cards",slideSelector:".tech-track__card",config:{slidesPerView:i>500?2:1,spaceBetween:50,direction:"horizontal",pagination:{el:".swiper-pagination"}}},{condition:"/work-instructions/"===window.location.pathname&&i<651,selector:".tech-white-cards-2-swiper",wrapperSelector:".tech-white-cards-2__cards",slideSelector:".tech-white-cards-2__card",config:{slidesPerView:i>550?2:1,spaceBetween:30,direction:"horizontal",pagination:{el:".swiper-pagination"}}},{condition:"/data-collection/"===window.location.pathname&&i<900,selector:".tech-white-cards-3-swiper",wrapperSelector:".tech-white-cards-3__cards",slideSelector:".tech-white-cards-3__card",config:{slidesPerView:i>500?2:1,spaceBetween:20,direction:"horizontal",pagination:{el:".swiper-pagination"}}},{condition:"/tech-overview/"===window.location.pathname&&i<900,selector:".tech-white-cards-3-swiper_tech",wrapperSelector:".tech-white-cards-3__cards",slideSelector:".tech-white-cards-3__card",config:{slidesPerView:i>768?3:i>500&&i<769?2:1,spaceBetween:20,direction:"horizontal",pagination:{el:".swiper-pagination"}}},{condition:"/pricing/"===window.location.pathname&&i<1201,selector:".pricing-swiper",wrapperSelector:".page-pricing__cards",slideSelector:".page-pricing__card",config:{slidesPerView:i>950?2:i>768?1.5:1,spaceBetween:50,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}},{condition:("/academy/"===window.location.pathname||"/blog/"===window.location.pathname)&&i<769,selector:".academy-swiper",wrapperSelector:".tech-hero__categories",slideSelector:".tech-hero__category",config:{slidesPerView:"auto",spaceBetween:i<500?10:25,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}},{condition:i<1025&&i>768,selector:".post-swiper",wrapperSelector:".post-footer__cards",slideSelector:".post-footer__card",config:{slidesPerView:2,spaceBetween:25,direction:"horizontal",pagination:{el:".swiper-pagination"}}},{condition:i<769,selector:".post-swiper",wrapperSelector:".post-footer__cards",slideSelector:".post-footer__card",config:{slidesPerView:1,spaceBetween:25,direction:"horizontal",pagination:{el:".swiper-pagination"}}},{condition:"/free-hq/"===window.location.pathname,selector:".hq-landing-partners__swiper",wrapperSelector:".hq-landing-partners__cards",slideSelector:".hq-landing-partners__card",config:{slidesPerView:1,spaceBetween:150,direction:"horizontal",autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{450:{slidesPerView:2,spaceBetween:50},768:{slidesPerView:3,spaceBetween:75},1024:{spaceBetween:150}}}}].forEach((t=>{t.condition&&function(t,e,a,i){const n=document.querySelector(t);if(n){const o=n.querySelector(e),c=o.querySelectorAll(a);n.classList.add("swiper"),o.classList.add("swiper-wrapper"),c.forEach((t=>{t.classList.add("swiper-slide")})),new Swiper(t,i)}}(t.selector,t.wrapperSelector,t.slideSelector,t.config)}));const n=document.querySelectorAll(".header-dropdown-target"),o=document.querySelectorAll(".h-dropdown");n.forEach(((t,e)=>{t.addEventListener("click",(function(){!function(t){o[t].classList.toggle("active"),n[t].classList.toggle("active")}(e)}))})),document.addEventListener("click",(function(t){n.forEach(((e,a)=>{e.contains(t.target)||(o[a].classList.remove("active"),n[a].classList.remove("active"))}))})),window.addEventListener("load",(function(){const t=document.querySelectorAll(".tech-u-accordion__item-header"),e=document.querySelectorAll(".tech-u-accordion__img"),a=document.querySelectorAll(".tech-u-accordion-wide__item-header");t&&t.forEach(((e,a)=>{e.addEventListener("click",(function(){e.classList.contains("active")||(t.forEach((t=>t.classList.remove("active"))),setTimeout((()=>{e.classList.add("active")}),200))}))})),e&&document.querySelector(".tech-u-accordion__img-1")&&t.forEach(((t,a)=>{t.addEventListener("click",(function(){e.forEach((t=>t.classList.remove("active")));const t=document.querySelector(`.tech-u-accordion__img-${a+1}`);t&&t.classList.add("active")}))})),a&&a.forEach(((t,e)=>{t.addEventListener("click",(function(){t.classList.contains("active")?t.classList.contains("active")&&t.classList.remove("active"):(a.forEach((t=>t.classList.remove("active"))),setTimeout((()=>{t.classList.add("active")}),200))}))}));const i=document.querySelectorAll(".tech-o-accordion__item-header"),n=document.querySelectorAll(".tech-o-accordion__img");i&&i.forEach(((t,e)=>{t.addEventListener("click",(function(){t.classList.contains("active")||(i.forEach((t=>t.classList.remove("active"))),t.classList.add("active"))}))})),n&&document.querySelector(".tech-o-accordion__img-1")&&i.forEach(((t,e)=>{t.addEventListener("click",(function(){n.forEach((t=>t.classList.remove("active")));const t=document.querySelector(`.tech-o-accordion__img-${e+1}`);t&&t.classList.add("active")}))}))})),function(){const t=document.getElementById("post-nav-container");if(t){const e=t.querySelectorAll("h2, h3");if(0!=e.length){const t=document.querySelector(".post-body__left"),e=document.createElement("h2");e.className="side-panel__title",e.innerText="On this page",t.insertBefore(e,t.firstChild)}let a="";e.forEach((t=>{const e=t.getAttribute("id");a+=`<a class="side-panel__nav-item" href="#${e}">${t.textContent}</a>`}));document.getElementById("scrollToLinks").innerHTML=a;let i=window.pageYOffset,n=null;const o=()=>{const t=window.pageYOffset;if(t>i?n="down":t<i&&(n="up"),i=t,"down"===n){let t=null,a=50;if(e.forEach((e=>{const i=Math.abs(e.getBoundingClientRect().top);i<a&&(a=i,t=e)})),null!==t){const e=t.getAttribute("id"),a=document.querySelector(`a[href="#${e}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((t=>{t.classList.remove("active")})),a.classList.add("active")}}else if("up"===n){let t=null;if(e.forEach((e=>{e.getBoundingClientRect().bottom<500&&(t=e)})),null!==t){const e=t.getAttribute("id"),a=document.querySelector(`a[href="#${e}"]`);document.querySelectorAll(".side-panel__nav-item").forEach((t=>{t.classList.remove("active")})),a.classList.add("active")}}};window.addEventListener("scroll",o)}}();if(document.querySelectorAll(".copyLinkButton").forEach((t=>{t.addEventListener("click",(()=>{const e=document.createElement("textarea"),a=window.location.href;e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),t.querySelector("span").textContent="Link Copied!",setTimeout((()=>{t.querySelector("span").textContent="Copy link"}),1500)}))})),window.location.pathname.includes("/academy/")||window.location.pathname.includes("/blog/")||window.location.pathname.includes("/software-updates/")){const c=document.getElementById("posts-container"),r=document.querySelectorAll(".tech-hero__category"),s=document.getElementById("load-more-button"),l=9;let d=1,u="all";function p(t){const e=new Date(t);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function m(t,e,a){s.classList.add("loading");let i="";"all"!=t?i=`tag:${t}`:window.location.pathname.includes("/academy/")?i="tag:academy":window.location.pathname.includes("/blog/")?i="tag:hash-blog":window.location.pathname.includes("/software-updates/")&&(i="tag:software-updates");fetch(`https://scout-systems-inc.ghost.io/ghost/api/v3/content/posts/?key=4c6802d178d7a0d297d9cc7e4b&limit=${a}&page=${e}&filter=${i}&include=authors,tags`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((t=>t.json())).then((t=>{const e=t.posts;if(0===e.length){c.innerHTML="";const t=document.createElement("h1");return t.className="page-academy__404",t.innerText="We don't have any of these articles yet...",c.appendChild(t),void(s.style.display="none")}e.forEach((t=>{const e=t.tags.filter((t=>!t.name.startsWith("#"))).map((t=>`<a href="${t.url}" class="post-card__tag">${t.name}</a>`)).join(""),a=document.createElement("div");a.className="post-card",a.innerHTML=`\n\t\t\t\t\t<a href='${t.url}' class="post-card__image">\n\t\t\t\t\t<img class="lazyload" src="${t.feature_image||"/assets/images/placeholder.png"}" data-src="${t.feature_image||"/assets/images/placeholder.png"}" alt="feature image">\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class="post-card__header">\n\t\t\t\t\t\t<div class="post-card__tags">${e}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="post-card__body">\n\t\t\t\t\t\t<h3 class="post-card__title"><a href="${t.url}">${t.title}</a></h3>\n\t\t\t\t\t\t<div class="post-card__description">${t.html||""}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="post-card__header-info">\n\t\t\t\t\t\t${t.reading_time?`<div class="post-card__read-time"> <img src="/assets/images/post/time.png" alt="reading time icon"> ${t.reading_time} minute read</div>`:""}\n\t\t\t\t\t\t${t.tags.some((t=>"#blog"===t.name))?`<div class="post-card__publication-date"> <img src="/assets/images/post/date.png" alt="date icon"> <time datetime="${p(t.published_at)}">${p(t.published_at)}</time></div>`:""}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="post-card__footer">\n\t\t\t\t\t\t${t.authors.map((t=>`\n\t\t\t\t\t\t\t<div class="post-card__author">\n\t\t\t\t\t\t\t\t<div class="post-card__author-img">\n\t\t\t\t\t\t\t\t\t<img src="${t.profile_image}" alt="author image">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="post-card__author-info">\n\t\t\t\t\t\t\t\t\t<span class="post-card__author-name">${t.name}</span>\n\t\t\t\t\t\t\t\t\t${t.location?`<span class="post-card__author-location">${t.location}</span>`:""}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t\t<a href="${t.url}" class="post-card__link">Read article <img style="margin-left:1rem" src="/assets/images/post/arrow-up.svg" alt="arrow top icon"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t`,c.appendChild(a),s.classList.remove("loading")})),e.length<a?s.style.display="none":s.style.display="block"})).catch((t=>{console.error("Error fetching data:",t)}))}function f(){d++,m(u,d,l)}r.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-tag");r.forEach((t=>t.classList.remove("active"))),t.target.classList.add("active"),d=1,u=e,c.innerHTML="",s.style.display="none",m(u,d,l)}))})),s.addEventListener("click",f),m(u,d,l)}if(window.addEventListener("load",(function(){const t=document.querySelectorAll(".runScriptButton");if(t){const e=document.querySelector(".popup-form-container");let a;t.forEach((t=>{t.addEventListener("click",(function(){document.body.classList.add("not-scroll"),e.classList.add("active");const t=document.querySelector(".popup-close");a=function(i){i.target!==e&&i.target!==t||(e.classList.remove("active"),document.body.classList.remove("not-scroll"),window.removeEventListener("click",a))},window.addEventListener("click",a)}))}))}})),window.innerWidth<769){const h=document.querySelector(".mobile-menu-open"),g=document.querySelector(".mobile-nav"),v=document.querySelectorAll(".mobile-nav__title");if(h){h.addEventListener("click",(()=>{g.classList.add("active"),document.body.classList.add("not-scroll")}));document.querySelector(".mobile-nav__close").addEventListener("click",(()=>{g.classList.remove("active"),document.body.classList.remove("not-scroll")})),v.forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("active")?t.classList.contains("active")&&v.forEach((t=>{t.classList.remove("active")})):(v.forEach((t=>{t.classList.remove("active")})),t.classList.add("active"))}))}))}}!function(){if(window.location.pathname.includes("/accelerator/")){const t=document.querySelector(".gh-viewport"),e=document.createElement("div");document.querySelector(".header").remove(),e.className="page__header",e.innerHTML='\n\t\t\t<div class="w1340">\n\t\t\t\t{{> structure/header}}\n\t\t\t</div>',t.insertBefore(e,t.firstChild)}}(),function(){if("/academy/"===window.location.pathname){const t='<chat-bot platform_id="cfa51ac4-c913-4621-823c-588ea399ba0b" user_id="65e721a0-6df2-428e-b3f3-c9262477969f" chatbot_id="31adc5d1-bc97-4d80-b759-74297692d725"><a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">[chatbot]</a></chat-bot>';document.body.insertAdjacentHTML("beforeend",t)}else{const t='<chat-bot platform_id="8adf2d73-fbcd-44b0-8343-ef5e39c93a75" user_id="65e721a0-6df2-428e-b3f3-c9262477969f" chatbot_id="7dc4770b-4f36-4086-a451-f031a5e5547a" src="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral"></chat-bot>';document.body.insertAdjacentHTML("beforeend",t)}}()}();
//# sourceMappingURL=index.js.map
