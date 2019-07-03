'use strict';

/* Создать следующие функции

функция  getExpensesMonth. Функция возвращает сумму всех расходов за месяц

функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
Результат сохранить в переменную accumulatedMonth

функция  getTargetMonth.

Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
*/

let expensesOne = prompt('Введите обязательную статью расходов', 'Заказ такси'),
    expensesOneAmount = +prompt('Во сколько это обойдется?', 4600),
    expensesTwo = prompt('Введите обязательную статью расходов?', 'Поездка на море'),
    expensesTwoAmount = +prompt('Во сколько это обойдется?', 28000);


let getExpensesMonth = function() {
    return expensesOneAmount + expensesTwoAmount;
};

console.log(getExpensesMonth()); // 32600

/* функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
Результат сохранить в переменную accumulatedMonth */

// let money = 88000,
let money = +prompt('Ваш месячный доход?'),
    accumulatedMonth;

let getAccumulatedMonth = function () {
    return accumulatedMonth = money - getExpensesMonth();
};

getAccumulatedMonth();

console.log(accumulatedMonth);


/* функция  getTargetMonth.
Подсчитывает за какой период будет достигнута цель,
зная результат месячного накопления и возвращает результат
 */

let period;

let getTargetMonth = function () {
    let mission = 120000;
    return period = Math.ceil(mission/money);
};

getTargetMonth();

console.log(`Цель будет достигнута за ${period} месяца`);





/* Все консоль логи которые были до этого почистить и вывести в консоль:

Оставить функции showTypeof И getStatusIncome которые написали в уроке

Накопления за период

Cрок достижения цели в месяцах (значение округлить в меньшую сторону) */

let income = 'Фриланс',
    deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeof = function (item) {
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);



let budgetDay = Math.ceil(accumulatedMonth/30);


function getStatusIncome() {
    if (budgetDay >= 800) {
        return ('Высокий уровень доходов');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return ('Средний уровень доходов');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return ('Низкий уровень доходов');
    } else {
        return ('Что-то пошло не так');
    }
}

console.log('getStatusIncome: ', getStatusIncome());

// Переменная addExpenses для дальнейшего проекта
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log(addExpenses.split(', '));