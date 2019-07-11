'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalincomeItems = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('.period-select'), // период расчета;
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items');




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
        console.log(this);
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();

    },
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.round(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        incomePeriodValue.value = periodSelect.value * this.budgetMonth;

    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }

    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = cashIncome;
            }
        });

        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function () {
        additionalincomeItems.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function () {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    },
    getTargetMonth: function () {
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function () {
        if (this.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    getInfoDeposit: function () {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', '9');
            } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);
            do {
                this.moneyDeposit = prompt('Какая сумма заложена?', 142000);
            }
            while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);

        }
    },
    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value;
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
// start.addEventListener('click', this.start);


salaryAmount.addEventListener('input', function () {
    appData.start();
});

// this.start(function () {
//     loc();
// });

start.addEventListener('click', function () {

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


// for (let key in this.income) {
//     key = key.charAt(0).toUpperCase(0) + key.substring(1).toLowerCase();
//     stringArray.push(key);
// }

// for (let key in this.expenses) {
//     key = key.charAt(0).toUpperCase(0) + key.substring(1).toLowerCase();
//     stringArray.push(key);
// }

// console.log('Возможные доходы и расходы ' + stringArray.join(', '));
// console.log(stringArray);

// 1) Переписать метод getIncome аналогично getExpenses