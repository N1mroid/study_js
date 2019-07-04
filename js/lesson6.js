'use strict';

let money,
    accumulatedMonth,
    start = function () {
      do {
          money = prompt('Ваш месячный доход?', 88000);
      }
      while (isNaN(money) || money === '' || money === null);
};

// start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 75000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function asking() {
        let addExpenses = prompt('Перечислите возможные расходы?');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        appData.expenses = function() {
            let sum,
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
            appData.expenses[expensesOne] = sum;
            return sum;
        };

    },
    getExpensesMonth: function getExpensesMonth() {
        for ( let key in appData.expenses) {
            console.log();
        }
    },

    getAccumulatedMonth: function getAccumulatedMonth() {
        return accumulatedMonth = money - appData.getExpensesMonth();
    },
    getTargetMonth: function getTargetMonth() {

        let mission = 200000,
            period;
        period = Math.ceil(mission / accumulatedMonth);
        if (accumulatedMonth >= 0) {
            console.log(`Цель будет достигнута за ${period} месяца`);
        } else {
            console.log('Цель не будет достигнута');
        }

    },
    getStatusIncome: function getStatusIncome() {
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


console.log(appData.getExpensesMonth());
console.log(appData.expenses);
appData.asking();
// console.log(appData.asking());
// console.log(appData.expenses(sum));

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


// console.log(appData.asking());








// let auto = {
//     expense: {},
//     expensesAll: function totalExpenditures() {
//         let totalSum = 0,
//             expenditureOne,
//             expenditureTwo;
//         for (let i = 0; i < 2; i++) {
//             if (i === 0) {
//                 expenditureOne = prompt('Обязательная статья расходов 1', 'Пойти на пляж');
//             } else if (i === 1) {
//                 expenditureTwo = prompt('Обязательная статья расходов 2', 'Сходить в кино');
//             }
//
//             totalSum += +prompt('Во сколько это обойдется?');
//             if (totalSum > 0) {
//                 console.log(totalSum);
//             } else {
//                 console.log('Введите положительное число');
//             }
//
//         }
//         return totalSum;
//
//     },
// };


// console.log(auto.expense = auto.expensesAll());
// console.log(auto.expense);


// let car = {
//     model: 'mazda',
//     year: 2006,
//     turbo: true,
//     specifications: [],
//     style: {
//         color: 'blue'
//     },
//     ride: function(speed) {
//         console.log('Машина едет на скорости ' + speed + ' км/ч');
//     }
// };
//



// car.ride(69);
// console.log(car);

let myobje = {
    wheels: 4,
    bumper: 1,
    stop() {

    },
    speed() {
        console.log('скорость');
    }
};


// for (let key in appData) {
//     console.log('Ключ: ' + key + ' Значение ' + appData[key]);
// }


