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
const swiper = new Swiper('.swiper', {
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

  //Dropdown menu 

  let dropdownTarget = document.querySelector('.header-dropdown-target');
  let dropdown = document.querySelector('.h-dropdown')

  dropdownTarget.addEventListener('click', function() {
	if (!dropdown.classList.contains('active')) {
		dropdown.classList.add('active')
		dropdownTarget.classList.add('active')
	} else if (dropdown.classList.contains('active')) {
		dropdown.classList.remove('active')
		dropdownTarget.classList.remove('active')
	}
  })

  document.addEventListener('click', function(e) {
	if (e.target != dropdownTarget) {
		dropdown.classList.remove('active')
		dropdownTarget.classList.remove('active')

	}
  })


/* Unordered accordion */

window.addEventListener('load', function() {
	const uDropdownTargetList = document.querySelectorAll('.tech-u-accordion__item-header');
	const uAccordionImages = document.querySelectorAll('.tech-u-accordion__img');
  
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
  
	if (uAccordionImages) {
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
  });
  