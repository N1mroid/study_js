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

let finishDate = new Date('January 01 2020 00:00:00');
let startDay = Date.now();
let remaining = (finishDate - startDay)/1000; // парсим из миллисекунд в секунды
let day = Math.floor(remaining / 60 / 60 / 24); // переводим на минуты / часы / дни



console.log(`Осталось до нового года ${Math.ceil(day)} дней`);
