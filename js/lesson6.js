'use strict';

let money,
    accumulatedMonth,
    start = function () {
      do {
          money = prompt('Ваш месячный доход?', 88000);
      }
      while (isNaN(money) || money === '' || money === null);
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 75000,
    period: 3,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы?');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.expenses = appData.getTargetMonth(); {
            let sum = 0,
                expensesOne,
                expensesTwo;
            for (let i = 0; i < 2; i++) {

                if (i === 0) {
                    expensesOne = prompt('Введите обязательную статью расходов?', 'Покормить гуся');
                } else if (i === 1) {
                    expensesTwo = prompt('Введите обязательную статью расходов?', 'Сходить в Зоопарк');
                }

                sum += +prompt('Во сколько это обойдется?');
                if (sum > 0) {
                    console.log(sum);
                } else {
                    console.log('Введите положительное число');
                }
            }
            return sum;
        };
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {

    },

    getAccumulatedMonth: function () {
        return accumulatedMonth = money - appData.getExpensesMonth();
    },
    getTargetMonth: function () {

        let mission = 200000,
            period;
        period = Math.ceil(mission / accumulatedMonth);
        if (accumulatedMonth >= 0) {
            console.log(`Цель будет достигнута за ${period} месяца`);
        } else {
            console.log('Цель не будет достигнута');
        }

    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень доходов');
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            return ('Средний уровень доходов');
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            return ('Низкий уровень доходов');
        } else {
            return ('Что-то пошло не так');
        }
    },

};

console.log(appData.asking());
console.log(appData.expenses);

// console.log(appData.getExpensesMonth());
// console.log(appData.getAccumulatedMonth());
// console.log(appData.getTargetMonth());
// console.log(appData.getStatusIncome());

// Из метода  getExpensesMonth перенести цикл в метод asking, и переписать цикл таким образом
// чтобы результат записывался в объект  appData.expenses
//
// в формате
//
// expenses: {
//
// “ответ на первый вопрос” : “ответ на второй вопрос”,
//
// “ответ на первый вопрос” : “ответ на второй вопрос”










