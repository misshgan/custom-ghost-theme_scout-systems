// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

const windowWidth = window.innerWidth;

const swiperConfigurations = [
  {
    condition: window.location.pathname === '/',
    selector: '.testimonials',
	wrapperSelector: '.testimonials__body',
	slideSelector: '.testimonials__card',
    config: {
      direction: 'horizontal',
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
  {
    condition: window.location.pathname === '/industrial-iot/',
    selector: '.tech-big-slider__content',
	wrapperSelector: '.tech-big-slider__cards',
	slideSelector: '.tech-big-slider__card',
    config: {
      slidesPerView: 'auto',
      spaceBetween: windowWidth > 768 ? 30 : 20,
      direction: 'horizontal',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    },
  },
  {
    condition: (window.location.pathname === '/tech-overview/' || window.location.pathname === '/root-cause-analysis/') && windowWidth < 601,
    selector: '.tech-track-swiper',
	wrapperSelector: '.tech-track__cards',
	slideSelector: '.tech-track__card',
    config: {
      slidesPerView: windowWidth > 500 ? 2 : 1,
      spaceBetween: 50,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  {
    condition: window.location.pathname === '/work-instructions/' && windowWidth < 651,
    selector: '.tech-white-cards-2-swiper',
	wrapperSelector: '.tech-white-cards-2__cards',
	slideSelector: '.tech-white-cards-2__card',
    config: {
      slidesPerView: windowWidth > 550 ? 2 : 1,
      spaceBetween: 30,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  {
    condition: window.location.pathname === '/data-collection/' && windowWidth < 769,
    selector: '.tech-white-cards-3-swiper',
	wrapperSelector: '.tech-white-cards-3__cards',
	slideSelector: '.tech-white-cards-3__card',
    config: {
      slidesPerView: windowWidth > 450 ? 2 : 1,
      spaceBetween: 20,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  {
    condition: window.location.pathname === '/pricing/' && windowWidth < 1201,
    selector: '.pricing-swiper',
	wrapperSelector: '.page-pricing__cards',
	slideSelector: '.page-pricing__card',
    config: {
      slidesPerView: windowWidth > 950 ? 2 : (windowWidth > 768 ? 1.5 : 1),
      spaceBetween: 50,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  {
    condition: (window.location.pathname === '/academy/' || window.location.pathname === '/blog/') && windowWidth < 769,
    selector: '.academy-swiper',
	wrapperSelector: '.tech-hero__categories',
	slideSelector: '.tech-hero__category',
    config: {
      slidesPerView: 'auto',
      spaceBetween: windowWidth < 500 ? 10 : 25,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  {
    condition: windowWidth < 1025 && windowWidth > 768,
    selector: '.post-swiper',
	wrapperSelector: '.post-footer__cards',
	slideSelector: '.post-footer__card',
    config: {
      slidesPerView: 2,
      spaceBetween: 25,
      direction: 'horizontal',
	  pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  {
    condition: windowWidth < 769,
    selector: '.post-swiper',
	wrapperSelector: '.post-footer__cards',
	slideSelector: '.post-footer__card',
    config: {
      slidesPerView: 1,
      spaceBetween: 25,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
    },
  },
  // Add more configurations as needed
];

swiperConfigurations.forEach(swiperConfig => {
  if (swiperConfig.condition) {
    createSwiper(swiperConfig.selector, swiperConfig.wrapperSelector, swiperConfig.slideSelector, swiperConfig.config);
  }
});

function createSwiper(selector, wrapperSelector, slideSelector, config) {
  const swiperContainer = document.querySelector(selector);
  if (swiperContainer) {
    const swiperWrapper = swiperContainer.querySelector(wrapperSelector);
    const swiperSlides = swiperWrapper.querySelectorAll(slideSelector);

    swiperContainer.classList.add('swiper');
    swiperWrapper.classList.add('swiper-wrapper');
    swiperSlides.forEach(slide => {
      slide.classList.add('swiper-slide');
    });

    new Swiper(selector, config);
  }
}

	
  //Dropdown menu 

 // Target all dropdown elements using their shared class name
const dropdownTargets = document.querySelectorAll('.header-dropdown-target');
const dropdowns = document.querySelectorAll('.h-dropdown');

// Function to toggle active class on a dropdown and its target
function toggleDropdown(index) {
    dropdowns[index].classList.toggle('active');
    dropdownTargets[index].classList.toggle('active');
}

// Add event listeners to all dropdowns
dropdownTargets.forEach((dropdownTarget, index) => {
    dropdownTarget.addEventListener('click', function () {
        toggleDropdown(index);
    });
});

// Add global click event listener to close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    dropdownTargets.forEach((dropdownTarget, index) => {
        if (!dropdownTarget.contains(e.target)) {
            dropdowns[index].classList.remove('active');
            dropdownTargets[index].classList.remove('active');
        }
    });
});

  
/* Unordered accordion */

window.addEventListener('load', function() {
	const uDropdownTargetList = document.querySelectorAll('.tech-u-accordion__item-header');
	const uAccordionImages = document.querySelectorAll('.tech-u-accordion__img');
	const uDropdownWideTargetList = document.querySelectorAll('.tech-u-accordion-wide__item-header');
  
	if (uDropdownTargetList) {
	  uDropdownTargetList.forEach((element, index) => {
		element.addEventListener('click', function() {
		  if (!element.classList.contains('active')) {
			uDropdownTargetList.forEach(el => el.classList.remove('active'));
			setTimeout(() => {
				element.classList.add('active');
			}, 200);
		  }
		});
	  });
	}
  
	if (uAccordionImages && document.querySelector(`.tech-u-accordion__img-1`)) {
	  uDropdownTargetList.forEach((element, index) => {
		element.addEventListener('click', function() {
		  uAccordionImages.forEach(el => el.classList.remove('active'));
		  const targetImage = document.querySelector(`.tech-u-accordion__img-${index + 1}`);
		  if (targetImage) {
			targetImage.classList.add('active');
		  }
		});
	  });
	}

	if (uDropdownWideTargetList) {
		uDropdownWideTargetList.forEach((element, index) => {
		  element.addEventListener('click', function() {
			if (!element.classList.contains('active')) {
			  uDropdownWideTargetList.forEach(el => el.classList.remove('active'));
			  setTimeout(() => {
				element.classList.add('active');
			}, 200);
			} else if (element.classList.contains('active')) {
				element.classList.remove('active')
			}
		  });
		});
	  }

	
	//Ordered accordion

	const oDropdownTargetList = document.querySelectorAll('.tech-o-accordion__item-header');
	const oAccordionImages = document.querySelectorAll('.tech-o-accordion__img')

	if (oDropdownTargetList) {
		oDropdownTargetList.forEach((element, index) => {
		  element.addEventListener('click', function() {
			if (!element.classList.contains('active')) {
			  oDropdownTargetList.forEach(el => el.classList.remove('active'));
			  element.classList.add('active');
			}
		  });
		});
	  }

	  if (oAccordionImages && document.querySelector(`.tech-o-accordion__img-1`)) {
		oDropdownTargetList.forEach((element, index) => {
		  element.addEventListener('click', function() {
			oAccordionImages.forEach(el => el.classList.remove('active'));
			const targetImage = document.querySelector(`.tech-o-accordion__img-${index + 1}`);
			if (targetImage) {
			  targetImage.classList.add('active');
			}
		  });
		});
	  }
  });


/* POST NAVIGATION */

function generateScrollToLinks() {
    const container = document.getElementById('post-nav-container');

    if (container) {
        const headings = container.querySelectorAll('h2, h3'); // Select both h2 and h3 headings

		if (headings.length != 0) {
			const sideNav = document.querySelector('.post-body__left')
			const sideNavTitle = document.createElement('h2');
			sideNavTitle.className = 'side-panel__title';
			sideNavTitle.innerText = 'On this page';

			sideNav.insertBefore(sideNavTitle, sideNav.firstChild)
		}

        let linksHTML = '';

        headings.forEach((heading) => {
            const sectionId = heading.getAttribute('id');
            linksHTML += `<a class="side-panel__nav-item" href="#${sectionId}">${heading.textContent}</a>`;
        });

        const scrollToLinksContainer = document.getElementById('scrollToLinks');
        scrollToLinksContainer.innerHTML = linksHTML;

        let prevScrollPos = window.pageYOffset;
        let scrollDirection = null;

        const scrollHandler = () => {
            const currentScrollPos = window.pageYOffset;

            // Determine the scroll direction
            if (currentScrollPos > prevScrollPos) {
                scrollDirection = 'down';
            } else if (currentScrollPos < prevScrollPos) {
                scrollDirection = 'up';
            }

            prevScrollPos = currentScrollPos;

            // Logic for scrolling from top to bottom
            if (scrollDirection === 'down') {
                let activeHeading = null;
                let minDistance = 50;

                // Find the heading element with the minimum distance to the top of the viewport
                headings.forEach((heading) => {
                    const distance = Math.abs(heading.getBoundingClientRect().top);
                    if (distance < minDistance) {
                        minDistance = distance;
                        activeHeading = heading;
                    }
                });

                if (activeHeading !== null) {
                    const sectionId = activeHeading.getAttribute('id');
                    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);

                    // Remove active class from any other links and add it to the relevant link
                    document.querySelectorAll('.side-panel__nav-item').forEach((link) => {
                        link.classList.remove('active');
                    });
                    activeLink.classList.add('active');
                }
            } else if (scrollDirection === 'up') {
                // Logic for scrolling from bottom to top
                let activeHeading = null;

                // Find the heading element where boundingClientRect.bottom distance is less than 0
                headings.forEach((heading) => {
                    const distance = heading.getBoundingClientRect().bottom;
                    if (distance < 500) {
                        activeHeading = heading;
                    }
                });

                if (activeHeading !== null) {
                    const sectionId = activeHeading.getAttribute('id');
                    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);

                    // Remove active class from any other links and add it to the relevant link
                    document.querySelectorAll('.side-panel__nav-item').forEach((link) => {
                        link.classList.remove('active');
                    });
                    activeLink.classList.add('active');
                }
            }
        };

        // Attach the scroll event listener to the window
        window.addEventListener('scroll', scrollHandler);
    }
}

generateScrollToLinks();

/* COPY LINK */

// Get the reference to the "Copy Link" div element
const copyLinkButtons = document.querySelectorAll('.copyLinkButton');

// Add a click event listener to the button
copyLinkButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Create a temporary textarea element to hold the link text
		const tempTextarea = document.createElement('textarea');
		const currentURL = window.location.href;

		// Set the current URL as the value of the temporary textarea
		tempTextarea.value = currentURL;

		// Append the textarea to the document (it needs to be in the DOM to execute 'copy' command)
		document.body.appendChild(tempTextarea);

		// Select the content of the textarea
		tempTextarea.select();

		// Execute the 'copy' command to copy the selected content to the clipboard
		document.execCommand('copy');

		// Remove the temporary textarea from the DOM
		document.body.removeChild(tempTextarea);

		// Optionally, you can give some visual feedback to the user
		button.querySelector('span').textContent = 'Link Copied!';
		setTimeout(() => {
			button.querySelector('span').textContent = 'Copy link';
		}, 1500); // Reset the button text after 1.5 seconds
	});
})

/* ACADEMY PAGE POSTS LOAD */

if (window.location.pathname.includes('/academy/') || window.location.pathname.includes('/blog/') || window.location.pathname.includes('/software-updates/')) {
	const postsContainer = document.getElementById('posts-container');
	const categoryButtons = document.querySelectorAll('.tech-hero__category');
	const loadMoreButton = document.getElementById('load-more-button'); // Load more button element

	const postsPerPage = 9; // Number of posts per page
	let currentPage = 1;
	let currentTag = 'all'; // Track the currently selected category/tag

	function formatDate(dateString) {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	function fetchPostsByTag(tag, page, limit) {
		loadMoreButton.classList.add('loading')
		let tagFilter = '';
		if (tag != 'all') {
			tagFilter = `tag:${tag}`;
		} else if (window.location.pathname.includes('/academy/')) {
			tagFilter = `tag:academy`;
		} else if (window.location.pathname.includes('/blog/')) {
			tagFilter = `tag:hash-blog`;
		} else if (window.location.pathname.includes('/software-updates/')) {
			tagFilter = `tag:software-updates`;
		}
		const apiKey = '4c6802d178d7a0d297d9cc7e4b'; // Replace with your actual API key
		const apiUrl = 'https://scout-systems-inc.ghost.io/ghost/api/v3/content/';
		const url = `${apiUrl}posts/?key=${apiKey}&limit=${limit}&page=${page}&filter=${tagFilter}&include=authors,tags`;

		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		};

		fetch(url, { headers })
			.then(response => response.json())
			.then(data => {
				const posts = data.posts;
				if (posts.length === 0) {
					postsContainer.innerHTML = ''; // Clear existing posts
					const notFound = document.createElement('h1');
					notFound.className = 'page-academy__404';
					notFound.innerText = "We don't have any of these articles yet...";
					postsContainer.appendChild(notFound);
					loadMoreButton.style.display = 'none'; // Hide the load more button
					return;
				}

				// Append new posts
				posts.forEach(post => {
					const tagsHtml = post.tags
					.filter(tag => !tag.name.startsWith('#'))
					.map(tag => `<a href="${tag.url}" class="post-card__tag">${tag.name}</a>`)
					.join('');
		
					const postElement = document.createElement('div');
					postElement.className = 'post-footer__card post-card'; // Apply your existing class
					postElement.innerHTML = `
					<a href='${post.url}' class="post-card__image">
					<img src="${post.feature_image || '/assets/images/placeholder.png'}" alt="feature image">
					</a>
					<div class="post-card__header">
						<div class="post-card__tags">${tagsHtml}</div>
					</div>
					<div class="post-card__body">
						<h3 class="post-card__title"><a href="${post.url}">${post.title}</a></h3>
						<div class="post-card__description">${post.html || ''}</div>
					</div>
					<div class="post-card__header-info">
						${post.reading_time ? `<div class="post-card__read-time"> <img src="/assets/images/post/time.png" alt="reading time icon"> ${post.reading_time} minute read</div>` : ''}
						${post.tags.some(tag => tag.name === '#blog') ? `<div class="post-card__publication-date"> <img src="/assets/images/post/date.png" alt="date icon"> <time datetime="${formatDate(post.published_at)}">${formatDate(post.published_at)}</time></div>` : ''}
					</div>
					<div class="post-card__footer">
						${post.authors.map(author => `
							<div class="post-card__author">
								<div class="post-card__author-img">
									<img src="${author.profile_image}" alt="author image">
								</div>
								<div class="post-card__author-info">
									<span class="post-card__author-name">${author.name}</span>
									${author.location ? `<span class="post-card__author-location">${author.location}</span>` : ''}
								</div>
							</div>
						`).join('')}
						<a href="${post.url}" class="post-card__link">Read article <img style="margin-left:1rem" src="/assets/images/post/arrow-up.svg" alt="arrow top icon"></a>
					</div>
					`;
					postsContainer.appendChild(postElement);
					loadMoreButton.classList.remove('loading')
				});

				// Check if there are more posts to load
				if (posts.length < limit) {
					loadMoreButton.style.display = 'none'; // Hide the load more button
				} else {
					loadMoreButton.style.display = 'block'; // Show the load more button
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}

	function loadMorePosts() {
		currentPage++;
		fetchPostsByTag(currentTag, currentPage, postsPerPage);
	}

	categoryButtons.forEach(button => {
		button.addEventListener('click', (event) => {
			const selectedTag = event.target.getAttribute('data-tag');
			categoryButtons.forEach(btn => btn.classList.remove('active'));
			event.target.classList.add('active');
			currentPage = 1;
			currentTag = selectedTag; // Update the current tag
			postsContainer.innerHTML = ''; // Clear existing posts
			loadMoreButton.style.display = 'none'; // Hide the load more button initially
			fetchPostsByTag(currentTag, currentPage, postsPerPage);
		});
	});

	loadMoreButton.addEventListener('click', loadMorePosts);

	// Initial fetch first page of posts
	fetchPostsByTag(currentTag, currentPage, postsPerPage);
}



/* TECH OVERVIEW FORM */ 

window.addEventListener('load', function(){
	const runFormBtns = document.querySelectorAll('.runScriptButton');

	if (runFormBtns) {
		const formContainer = document.querySelector('.popup-form-container')
		let outsideClickListener;

		runFormBtns.forEach(btn => {
			btn.addEventListener('click', function() {
				document.body.classList.add('not-scroll')
				formContainer.classList.add('active')
				const closeButton = document.querySelector('.popup-close')
	
				outsideClickListener = function(e){
					if (e.target === formContainer || e.target === closeButton) {
						formContainer.classList.remove('active')
						document.body.classList.remove('not-scroll')
						window.removeEventListener('click', outsideClickListener);
					}
				};
	
				window.addEventListener('click', outsideClickListener);
			})
		})
	}

})

/* MOBILE NAV */

if (window.innerWidth < 769) {
	const mobileNavOpen = document.querySelector('.mobile-menu-open')
	const mobileNav = document.querySelector('.mobile-nav');
	const mobileNavTitles = document.querySelectorAll('.mobile-nav__title')
	
	if (mobileNavOpen) {

		mobileNavOpen.addEventListener('click', () => {
			mobileNav.classList.add('active')
			document.body.classList.add('not-scroll');
		})

		const mobileNavClose = document.querySelector('.mobile-nav__close');
			mobileNavClose.addEventListener('click', () => {
				mobileNav.classList.remove('active')
				document.body.classList.remove('not-scroll');
			})

		mobileNavTitles.forEach(item => {
			item.addEventListener('click', () => {
				if (!item.classList.contains('active')) {
					mobileNavTitles.forEach(item => {item.classList.remove('active')})
					item.classList.add('active')
				} else if (item.classList.contains('active')) {
					mobileNavTitles.forEach(item => {item.classList.remove('active')})
				}
			}) 
		})
	}
}