window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	//Timer
	function countTimer(deadline) {
		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getRemainingTime() {
			let dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60);
			if (seconds < 10) {
				seconds = '0' + seconds;
			}
			let minutes = Math.floor((timeRemaining / 60) % 60);
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			let hours = Math.floor(timeRemaining / 60 / 60); // % 24;
			if (hours < 10) {
				hours = '0' + hours;
			}
			return {
				timeRemaining,
				hours,
				minutes,
				seconds
			};
		}

		function updateClock() {
			let timer = getRemainingTime();

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.textContent = timer.seconds;

			if (timer.timeRemaining > 0) {
				setInterval(updateClock, 1000);
			} else {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				return;
			}
		}
		updateClock();
	}

	countTimer('29, August 2019');




	// Меню

	const btnMenu = document.querySelector('.menu'); //родитель
	// console.log('btnMenu: ', btnMenu);
	let menu = document.querySelector('menu');

	let body = document.body;
	body.addEventListener('click', (event) => {
		let target = event.target;
		if (target.matches('.close-btn') || target.matches('a')) {
			menu.classList.remove('active-menu');
		}
		target = target.closest('menu');
		if (!target) {
			menu.classList.remove('active-menu');
		}
		target = event.target;
		target = target.closest('.menu');
		if (target) {
			menu.classList.add('active-menu');
		}
	});









	//popup
	let popup = document.querySelector('.popup'),
		popupBtn = document.querySelectorAll('.popup-btn');

	popupBtn.forEach((item) => {
		item.addEventListener('click', () => {
			let ourWidth = document.documentElement.clientWidth;

			if (ourWidth > 992) {
				popup.style.display = 'block'; // чтобы появилась модалка
				popup.animate({
					opacity: [0, 1], // [ from, to ]
					color: ["#fff", "#000"] // [ from, to ]
				}, 1000);
			} else {
				popup.style.display = 'block';
			}
		});
	});
	popup.addEventListener('click', (event) => {
		let target = event.target;
		if (target.classList.contains('popup-close')) {
			popup.style.display = 'none';
		} else {
			target = target.closest('.popup-content');
			if (!target) {
				popup.style.display = 'none';
			}
		}

	});

	//табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};
		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
			target = target.closest('.service-header-tab');
			if (target) {
				// console.log(target);
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	};

	tabs();
















});