'use strict';


let money,
    start = function () {
        do {
            money = prompt('Ваш месячный доход?', 88000);
        } while (isNaN(money) || money === '' || money === null);
    };

// start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 450000,
    period: 7,
    asking: function () {

        if (confirm('Есть ли у вас дополнительный источник дохода?')) {
            let itemIncome;
            do {
                itemIncome = prompt('Есть ли у вас дополнительный доход?');
            }
            while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 15600);
            } while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую?');
        // appData.addExpenses = console.log(addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', '));

        appData.addExpenses = console.log(addExpenses.toLowerCase().split(', '));
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {

            let itemExpenses;
            do {
                itemExpenses = prompt('Введите обязательную статью расходов?', 'Сходить в зоопарк');
            } while (!isNaN(itemExpenses) || itemExpenses === '' || itemExpenses === null);
            let cashExpenses;
            do {
                cashExpenses = prompt('Во сколько это обойдется?', 3600);
            } while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

            appData.expenses[itemExpenses] = cashExpenses;
        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function () {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '9');
            } while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 142000);
            }
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);

        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// console.log(typeof appData.income);

// let keys = Object.keys(appData.income);
// let rare = {
//     money: 'ho',
//     hohgh: 'dfdf'
// };
// console.log(rare.toString());
// console.log(rare.join(', '));

// for (let rares of rare) {
//     rares = rares.substr(0, 1).toUpperCase() + rares.substr(1);
//     // console.log(typeof(rares));
// }

let stringArray = [];

for (let key in appData.income) {
    key = key.charAt(0).toUpperCase(0) + key.substring(1).toLowerCase();
    stringArray.push(key);
}

for (let key in appData.expenses) {
    key = key.charAt(0).toUpperCase(0) + key.substring(1).toLowerCase();
    stringArray.push(key);
}

console.log('Возможные доходы и расходы ' + stringArray.join(', '));
console.log(stringArray);

// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// for (let day of days) {
//     day = day.substr(0, 1).toUpperCase() + day.substr(1);
//     console.log(day);
// }
// function uppercase(rare) {
//     var array1 = rare.split(' ');
//     var newarray1 = [];

//     for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarray1.join(', ');
// }
// console.log(uppercase());

// rare.toLowerCase.split(', ');

// console.log(typeof (rare));
// for (let key in appData.expenses) {
//     key = key.map(words => words[0].toUpperCase() + words.substring(1)).join(', ');
//     console.log(appData.expenses);
// }

// for (let key in rare) {
//     key = key.map(words => words[0].toUpperCase() + words.substring(1)).join(', ');
//     console.log(key);
// }

// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// let dayz = {
//     onl: {
//         money: 'none',
//         honey: 'yes'
//     }
// };



// for( let keey in dayz.onl) {
//     let myObk = [];

//     // console.log(JSON.parse(key));
//     // keey = JSON.parse(keey);   
//     myObk.push(dayz.onl);
// console.log(typeof (keey));
// console.log(typeof (days));
// console.log(myObk.map(a => a.charAt(0).toUpperCase() + a.substr(1)));
// console.log(myObk);

// }




// let a;
// let kyy = JSON.parse(JSON.stringify(a));
// console.log(a);

// console.log(days);

// console.log('Доходы за месяц: ' + appData.expenses.map(words => words[0].toUpperCase() + words.substring(1)).join(', '));
// console.log(keys.length);
// keys.push('lemon');
// console.log(keys.length);

// console.log('Расходы за месяц ' + appData.expensesMonth);

// if (appData.getTargetMonth() > 0) {
//     console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
// } else {
//     console.log('Цель не будет достигнута');
// }

// console.log(appData.getStatusIncome());

// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }

// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

// console.log('Доходы за месяц ' + appData.income.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', '));
