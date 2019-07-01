'use strict';


/* 1) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
*/

let money = +prompt('Ваш месячный доход?');

console.log(money);

/*  2) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
сохранить в переменную addExpenses, вывести в консоль в виде массива
*/

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log(addExpenses.split(', '));

/* 3) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные
в переменной deposit (булевое значение true/false)
 */

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

/* 4) Вывести в консоль типы данных money, income, deposit
 */

let income = '10000';

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

/* 5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные

“Какие обязательные ежемесячные расходы у вас есть?”

“Во сколько это обойдется?”

в итоге 4 вопроса и 4 переменных
*/

let questionOne = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let questionTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let questionThree = prompt('Во сколько это обойдется?');
let questionFour = prompt('Во сколько это обойдется?');
console.log(questionOne);
console.log(questionTwo);
console.log(questionThree);
console.log(questionFour);

/*  6) Вычислить доход за месяц, учитывая обязательные расходы,
сохранить в переменную budgetMonth и вывести результат в консоль
 */

let expenditureOne = 1300,
    expenditureTwo = 627;

let netMonthIncome = money - expenditureOne - expenditureTwo;
console.log(netMonthIncome);

/* 7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
вывести в консоль, округляя в большую сторону
 */

let budgetMonth = 25000;
let mission = 120000;
let result = Math.ceil(mission/budgetMonth);
console.log(result);

/* 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход.
Вывести в консоль  округлив в меньшую сторону (методы объекта Math в помощь)
 */

let budgetDay = Math.ceil(budgetMonth/30);
console.log(budgetDay);

/*
9) Написать конструкцию условий

Если budgetDay больше 800, то “Высокий уровень дохода”

Если budgetDay больше 300 и меньше 800, то сообщение “Средний уровень дохода”

Если budgetDay больше 0 и меньше 300 то в консоль вывести сообщение “Низкий уровень дохода”

Если отрицательное значение то вывести “Что то пошло не так”

учесть варианты 0, 300 и 800
*/

if (budgetDay >= 800) {
    console.log('Высокий уровень доходов');
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log('Средний уровень доходов');
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень доходов');
} else {
    console.log('Что-то пошло не так');
}