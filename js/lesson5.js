'use strict';

/*
1) Переписать функцию start циклом do while
*/

let money;
let accumulatedMonth;

let start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    } while (isNaN(money) || money === '' || money == null); {
        console.log(money);
    }
};

start();


/*
2) Добавить валидацию (проверку) на данные которые мы получаем на вопрос
'Во сколько это обойдется?’ в функции  getExpensesMonth
*/

let expensesOne,
    expensesTwo;


let getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expensesOne = prompt('Введите обязательную статью расходов?', 'Покормить гуся');
        } else if (i === 1) {
            expensesTwo = prompt('Введите обязательную статью расходов?', 'Сходить в Зоопарк');
        }

        sum += +prompt('Во сколько это обойдется?');
        if( sum > 0) {
            console.log(sum);
        } else {
            console.log('Введите положительное число');
        }
    }
    return sum = accumulatedMonth;
};

getExpensesMonth();



/*
3) Если getTargetMonth возвращает нам отрицательное значение то вместо “Цель будет достигнута”,
необходимо выводить “Цель не будет достигнута”
*/


let period;

let getTargetMonth = function () {
    let mission = 20000;
    period = Math.ceil(mission/3000);
    if (mission > 0) {
        console.log(`Цель будет достигнута за ${period} месяца`);
    } else {
        console.log('Цель не будет достигнута');
    }

};

// getTargetMonth();

// console.log(`Цель будет достигнута за ${period} месяца`);


/*
4) Если budgetDay отрицательное значение то вместо уровня дохода пусть выводится сообщение
“Что то пошло не так”
 */

    money = +prompt('Ваш месячный доход?');

let getAccumulatedMonth = function () {
    return accumulatedMonth = money - getExpensesMonth();
};

getAccumulatedMonth();

console.log(accumulatedMonth);



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