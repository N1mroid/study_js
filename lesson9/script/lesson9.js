'use strict';





let salaryAmount = document.querySelector('.salary-amount'), // Месячный доход;

    incomeItems = document.querySelectorAll('.income-items'), // Дополнительный доход;
    incomeTitle = document.querySelector('.income-title'), // Дополнительный доход => Наименование;
    btnPlus = document.getElementsByTagName('button'), // выделяет [ 2 ] кнопки;
    incomePlus = btnPlus[0], // Дополнительный доход [ + ];

    incomeAmount = document.querySelector('.income-amount'),
    // Дополнительный доход => Сумма; - не используется;

    additionalincomeItems = document.querySelectorAll('.additional_income-item'), // Возможный доход => Наименование [ 2 ];

    expensesItems = document.querySelectorAll('.expenses-items'), // Обязательные расходы;
    expensesTitle = document.querySelector('.expenses-title'), // Обязательные расходы => Наименование;
    expensesAmount = document.querySelector('.expenses-amount'), // Обязательные расходы => Сумма;
    expensesPlus = btnPlus[1], // Обязательные расходы [ + ];

    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], // Возможные расходы;

    depositCheck = document.querySelector('#deposit-check'), // Депозит [ галочка ];

    targetAmount = document.querySelector('.target-amount'), // Цель => Сумма;

    periodSelect = document.querySelector('.period-select'), // Период расчета;

    // Вывод результатов;
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0], // Дневной бюджет;
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0], // Доход за месяц;
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0], // Расход за месяц;
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0], // Накопления за месяц;
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0], // Возможные доходы;
    additionalExpensesItem = document.querySelector('.additional_expenses-item'), // Возможные расходы;
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0], // Накопления за период;
    targetMonthValue = document.getElementsByClassName('target_month-value')[0], // Срок достижения цели в месяцах;

    start = document.getElementById('start'); // Кнопка => Рассчитать;
    console.log(targetMonthValue);



// fields.setAttribute('disabled', 'disabled');
// for (var i = 0; i < fields.length; i++) {
//     fields[i].disabled = true;
// }

// var inputTypeText = document.querySelectorAll('input[type=text]');
// function dis(event) {
//     event.preventDefault();
//     inputTypeText.setAttribute('disabled');
// }

// inputTypeText.setAttribute('disabled');
// var form = document.querySelector("input");
// var elements = form.elements;
// for (var i = 0, len = elements.length; i < len; ++i) {
//     elements[i].readOnly = true;
// }
// console.log(incomePlus = btnPlus[0]);
// console.log(expensesPlus = btnPlus[1]);
// incomePlus.setAttribute('disabled');
// expensesTitle.setAttribute('disabled');
// let disableAll = document.querySelectorAll('input');
// // console.log(disableAll);
// disableAll.forEach(function(item) {
//     item.setAttribute('disabled');
// });
// disableAll.setAttribute('disabled');
// disableAll.setAttribute('disabled');

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {

        if (salaryAmount.value === '') {
            document.getElementById('start').disabled = true;
        } else {
            document.getElementById('start').disabled = false;
            // alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
            // return false;
            // start.setAttribute('disabled', 'disabled');
            // start.disabled = true;
            // console.log(start);
            // return;
        }

        this.budget = +salaryAmount.value;
        // console.log(appData);
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();

    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth; // Доход за месяц = appData.budgetMonth;
        budgetDayValue.value = Math.round(appData.budgetDay); // Дневной бюджет = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth; // Расход за месяц = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', '); // Возможные расходы = appData.addExpenses;
        additionalIncomeValue.value = appData.addIncome.join(', '); // Возможные доходы = appData.addIncome;
        targetMonthValue.value = Math.ceil(appData.getTargetMonth()); 
        // Срок достижения цели в месяцах = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcPeriod(); // Накопления за период = appData.calcPeriod();
        incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
        // Накопления за период = Период расчета * appData.budgetMonth;

    },
    addExpensesBlock: function () {
      
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items'); // Обязательные расходы;
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items'); // Дополнительный доход;
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }

    },
    getExpenses: function () {
      let self = this;
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value; // Обязательные расходы => Наименование;
            let cashExpenses = item.querySelector('.expenses-amount').value; // Обязательные расходы => Сумма;
            if (itemExpenses !== '' && cashExpenses !== '') {
                self.expenses[itemExpenses] = cashExpenses;
                // console.log(this);
            }
        });
        // console.log(this);
    },
    getIncome: function () {
      let self = this;
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value; // Дополнительный доход => Наименование;
            let cashIncome = item.querySelector('.income-amount').value; // Дополнительный доход => Сумма;
            if (itemIncome !== '' && cashIncome !== '') {
                self.income[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.income) {
            self.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function () {
      let self = this;
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                self.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function () {
      let self = this;
        additionalincomeItems.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                self.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function () {
      let self = this;
        for (let key in appData.expenses) {
            self.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
      let self = this;
        self.budgetMonth = self.budget + self.incomeMonth - self.expensesMonth;
        self.budgetDay = self.budgetMonth / 30;
    },
    getTargetMonth: function () {
      let self = this;
        return targetAmount.value / self.budgetMonth;
    },
    getStatusIncome: function () {
      let self = this;
        if (self.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (self.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (self.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    getInfoDeposit: function () {
      let self = this;
        if (self.deposit) {
            do {
                self.percentDeposit = prompt('Какой годовой процент?', '9');
            } while (isNaN(self.percentDeposit) || self.percentDeposit === '' || self.percentDeposit === null);
            do {
                self.moneyDeposit = prompt('Какая сумма заложена?', 142000);
            }
            while (isNaN(self.moneyDeposit) || self.moneyDeposit === '' || self.moneyDeposit === null);

        }
    },
    calcPeriod: function () {
      let self = this;
        return self.budgetMonth * periodSelect.value;
    }
};


appData.start();
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


let eventFunc = function (event) {
    console.log(event.type);
    console.log(event.target.value);
};

document.querySelector('.period-select').addEventListener('change', function () {
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.innerHTML = periodSelect.value;
});

//  start.setAttribute('disabled', 'disabled');

//  var fields = document.querySelectorAll('input[type=text]');
//  fields.forEach(function (item) {

//      item.setAttribute('disabled', 'disabled');

//  });

//  let clickElem = null;

// function blackOut() {
//     if (clickElem) {
//         clickElem.classList.add('backGroundColor', 'green');
//     }
// }


let cancel = document.querySelector('#cancel');
cancel.style.display = 'none';
cancel.addEventListener('click', function () {
    window.location.reload();
});
// start.addEventListener('click', appData.start);


salaryAmount.addEventListener('input', function () {
    appData.start();
});

// appData.start(function () {
//     loc();
// });
// start.addEventListener('click', appData.start.bind(appData));
start.addEventListener('click', function () {
    appData.start.bind(appData);
    start.style.display = 'none';
    cancel.style.display = 'block';
    appData.start();
    loc();
});



function loc() {
    var fields = document.querySelectorAll('input[type=text]');
    fields.forEach(function (item) {
        item.setAttribute('disabled', 'disabled');
    });
}


// function success() {
//     if (salaryAmount.value === "") {
//         document.getElementById('start').disabled = true;
//     } else {
//         document.getElementById('start').disabled = false;
//     }
// }

// success();

// document.getElementById('start').addEventListener('click', blackOut);

//  periodSelect.value = periodAmount.value;


// periodSelect.innerHTML = periodAmount.value;


// 5) Добавить обработчик события внутри метода showResult, который будет отслеживать период и сразу менять значение в поле“ Накопления за период”

// let stringArray = [];

// 6) Блокировать все input[type = text] с левой стороны после нажатия кнопки рассчитать, после этого кнопка Рассчитать пропадает и появляется кнопка Сбросить(есть в верстке) на кнопку сбросить пока ничего не навешиваем


// for (let key in appData.income) {
//     key = key.charAt(0).toUpperCase(0) + key.substring(1).toLowerCase();
//     stringArray.push(key);
// }

// for (let key in appData.expenses) {
//     key = key.charAt(0).toUpperCase(0) + key.substring(1).toLowerCase();
//     stringArray.push(key);
// }

// console.log('Возможные доходы и расходы ' + stringArray.join(', '));
// console.log(stringArray);

// 1) Переписать метод getIncome аналогично getExpenses

// let foo = loc.bind(appData);

// foo();

// appData.start.bind(appData);