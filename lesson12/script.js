'use strict';

let now = new Date();
let timezone;
let nowHours = now.getHours();
let nowMinutes = now.getMinutes();
let nowSeconds = now.getSeconds();
let nowDay = now.getDay();
// let newYear = now.getFullYear - now;
if (nowHours >= 6 && nowHours < 12) {
	console.log('Доброе утро');
} else if (nowHours >= 12 && nowHours <= 18) {
	console.log('Добрый день');
} else {
	console.log('Добрый вечер');
}

// console.log(`Сегодня: ${nowDay}`);

let dayList = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
console.log(`Сегодня: ${dayList[nowDay]}`);


if (nowHours > 12) {
	nowHours -= 12;
	timezone = 'PM';
} else {
	timezone = 'AM';
}
if (nowHours < 10) {
	nowHours = '0' + nowHours;
}
if(nowMinutes < 10) {
	nowMinutes = '0' + nowMinutes;
}
if (nowSeconds < 10) {
	nowSeconds = '0' + nowSeconds;
}

console.log(`Текущее время: ${nowHours}:${nowMinutes}:${nowSeconds} ${timezone}`);
// console.log(nowHours);
console.log(now.getFullYear());


function countTimer(deadline) {
	// let timerHours = document.querySelector('#timer-hours'),
	// 	timerMinutes = document.querySelector('#timer-minutes'),
	// 	timerSeconds = document.querySelector('#timer-seconds');
	let timerHours,
		timerMinutes,
		timerSeconds;

	function getRemainingTime() {
		let dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		let	minutes = Math.floor((timeRemaining / 60) % 60);
		if(minutes < 10 ) {
			minutes = '0' + minutes;
		}
		let hours = Math.floor(timeRemaining / 60 / 60); // % 24;
		if ( hours < 10) {
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
		console.log(updateClock);
		let timer = getRemainingTime();
		// timerHours.textContent = timer.hours;
		// timerMinutes.textContent = timer.minutes;
		// timerSeconds.textContent = timer.seconds;

		if (timer.timeRemaining > 0) {
			setInterval(updateClock, 1000);
		}
		// } else {
		// 	timerHours.textContent = '00';
		// 	timerMinutes.textContent = '00';
		// 	timerSeconds.textContent = '00';
		// }
	}
	updateClock();
}

countTimer('23, July 2019');



console.log(`Осталось до нового года ${} дней`);
