"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;

	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}

const animatedLinks = document.querySelectorAll('.animated-link');

animatedLinks.forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();

		setTimeout(() => {
			window.location.href = this.href;
		}, 150);
	});
});

document.addEventListener('mousemove', function (event) {
	const mouseX = event.clientX;
	const mouseY = event.clientY;

	const animatedElements = document.querySelectorAll('.images__animated-element');

	animatedElements.forEach(function (animatedElement) {
		const rect = animatedElement.getBoundingClientRect();
		const deltaX = ((mouseX - rect.left) / rect.width - 0) * 2;
		const deltaY = ((mouseY - rect.top) / rect.height - 0) * 2;

		const scaleFactor = 1 + Math.abs(deltaX) * 0.002 + Math.abs(deltaY) * 0.002;
		animatedElement.style.transform = `scale(${scaleFactor})`;
	});
});

document.addEventListener('mouseout', function () {
	const animatedElements = document.querySelectorAll('.images__animated-element');
	animatedElements.forEach(function (animatedElement) {
		animatedElement.style.transform = 'none';
	});
});

const swiper = new Swiper('.slider-clients', {
	loop: true,
	allowTouchMove: false,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	speed: 5000,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 3,
		},
		820: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		},
	},
});