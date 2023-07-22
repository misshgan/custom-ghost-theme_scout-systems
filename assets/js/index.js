// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// // Import JS
// import menuOpen from "./menuOpen";
// import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
// menuOpen();
// infiniteScroll();

//Swiper.js

//Swiper instance 1
const swiper1 = new Swiper('.testimonials', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  dynamicBullets: true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// // And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
  });
  
//Swiper instance 2

const swiper2 = new Swiper('.tech-big-slider__content', {
	slidesPerView: "auto",
	spaceBetween: 40,
	// Optional parameters
	direction: 'horizontal',
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
	loop: true,

	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  dynamicBullets: true,
	},

  });
  //Dropdown menu 

//   let dropdownTarget = document.querySelector('.header-dropdown-target');
//   let dropdown = document.querySelector('.h-dropdown')

//   dropdownTarget.addEventListener('click', function() {
// 	if (!dropdown.classList.contains('active')) {
// 		dropdown.classList.add('active')
// 		dropdownTarget.classList.add('active')
// 	} else if (dropdown.classList.contains('active')) {
// 		dropdown.classList.remove('active')
// 		dropdownTarget.classList.remove('active')
// 	}
//   })

//   document.addEventListener('click', function(e) {
// 	if (e.target != dropdownTarget) {
// 		dropdown.classList.remove('active')
// 		dropdownTarget.classList.remove('active')

// 	}
//   })


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
			element.classList.add('active');
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
			  element.classList.add('active');
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
	const h2Titles = container.querySelectorAll('h2');
	let linksHTML = '';
  
	h2Titles.forEach((h2) => {
	  const sectionId = h2.getAttribute('id');
	  linksHTML += `<a class="side-panel__nav-item" href="#${sectionId}">${h2.textContent}</a>`;
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
		let activeH2 = null;
		let minDistance = 50;
  
		// Find the h2 element with the minimum distance to the top of the viewport
		h2Titles.forEach((h2) => {
		  const distance = Math.abs(h2.getBoundingClientRect().top);
		  if (distance < minDistance) {
			minDistance = distance;
			activeH2 = h2;
		  }
		});
  
		if (activeH2 !== null) {
		  const sectionId = activeH2.getAttribute('id');
		  const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
  
		  // Remove active class from any other links and add it to the relevant link
		  document.querySelectorAll('.side-panel__nav-item').forEach((link) => {
			link.classList.remove('active');
		  });
		  activeLink.classList.add('active');
		}
	  } else if (scrollDirection === 'up') {
		// Logic for scrolling from bottom to top
		let activeH2 = null;
  
		// Find the h2 element where boundingClientRect.bottom distance is less than 0
		h2Titles.forEach((h2) => {
		  const distance = h2.getBoundingClientRect().bottom;
		  if (distance < 500) {
			activeH2 = h2;
		  }
		});
  
		if (activeH2 !== null) {
		  const sectionId = activeH2.getAttribute('id');
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
  
  generateScrollToLinks();


/* COPY LINK */ 

// Get the reference to the "Copy Link" div element
const copyLinkButton = document.getElementById('copyLinkButton');

// Add a click event listener to the button
copyLinkButton.addEventListener('click', () => {
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
  copyLinkButton.querySelector('span').textContent = 'Link Copied!';
  setTimeout(() => {
    copyLinkButton.querySelector('span').textContent = 'Copy link';
  }, 1500); // Reset the button text after 1.5 seconds
});

