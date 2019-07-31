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



	//слайдер


	const slider = () => {
		let slide = document.querySelectorAll('.portfolio-item'),
			dot = document.querySelectorAll('.dot'),
			btn = document.querySelectorAll('.portfolio-btn');

		let slider = document.querySelector('.portfolio-content');

		let currentSlide = 0,
			interval;


		const prevSlide = (element, index, stringClass) => {
			element[index].classList.remove(stringClass);
		};

		const nextSlide = (element, index, stringClass) => {
			element[index].classList.add(stringClass);
		};

		/* Индикаторы карусели: */
		let dots = document.querySelector('.portfolio-dots');
		for (let i = 0; i < slide.length; i++) {
			let newDot = document.createElement('li');
			newDot.className = 'dot';
			dots.appendChild(newDot);
			// console.log(newDot);
			dot = document.querySelectorAll('.dot');
		}


		const autoPlaySlide = () => {

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) => {
			event.preventDefault();

			let target = event.target;


			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');



			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((element, index) => {
					if (element === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});

		startSlide(150000);

	};

	slider();


	//наведение data

	const photoBlock = document.getElementById('command');

	let photoFunction = (target) => {
		let defaultSrc = target.src;
		target.src = target.dataset.img;
		target.dataset.img = defaultSrc;
	};

	photoBlock.addEventListener('mouseover', (event) => {
		let target = event.target;

		if (target.matches('.command__photo')) {
			photoFunction(target);
		}

	});

	photoBlock.addEventListener('mouseout', (event) => {
		let target = event.target;

		if (target.matches('.command__photo')) {
			photoFunction(target);
		}

	});



	//калькулятор валидация
	let calc = document.querySelector('.calc');
	let calcItem = calc.querySelectorAll('.my-calc-js');

	calcItem.forEach((item) => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[^0-9]/gi, '');
		});
	});


	//калькулятор расчет

	const calculator = (price = 100) => {

		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		const countTotalSum = () => {

			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}


			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}


			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			}

			totalValue.textContent = total;

		};

		calcBlock.addEventListener('change', (event) => {
			const target = event.target;

			if (target.matches('select') || target.matches('input')) {
				countTotalSum();
			}

		});

	};

	calculator(100);




	const sendForm = () => {

		const errorMessage = 'Что-то пошло не так...',
			loadMessage = 'Загрузка...',
			successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

		const form = document.getElementById('form1');



		const statusMessage = document.createElement('div');
		statusMessage.style.cssText = 'font-size: 2rem;';

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(statusMessage);
			statusMessage.textContent = loadMessage;
			const formData = new FormData(form);
			let body = {};
			formData.forEach((val, key) => {
				body[key] = val;
			});
			postData(body, () => {
				statusMessage.textContent = successMessage;
			}, (error) => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});

		});

		const form2 = document.getElementById('form2');

		form2.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(statusMessage);
			statusMessage.textContent = loadMessage;
			const formData = new FormData(form2);
			let body = {};
			formData.forEach((val, key) => {
				body[key] = val;
			});
			postData(body, () => {
				statusMessage.textContent = successMessage;
			}, (error) => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});

		});

		const form3 = document.getElementById('form3');

		form3.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(statusMessage);
			statusMessage.textContent = loadMessage;
			const formData = new FormData(form2);
			let body = {};
			formData.forEach((val, key) => {
				body[key] = val;
			});
			postData(body, () => {
				statusMessage.textContent = successMessage;
			}, (error) => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});

		});

		const postData = (body, outputData, errorData) => {
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {

				if (request.readyState !== 4) {
					return;
				}

				if (request.status === 200) {
					outputData();

				} else {
					errorMessage(request.status);

				}
			});
			request.open('POST', './server.php');
			request.setRequestHeader('Content-Type', 'application/json');


			request.send(JSON.stringify(body));



		};

	};

	sendForm();

});