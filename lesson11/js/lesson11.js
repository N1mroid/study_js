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
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'), // Сумма;
  depositPercent = document.querySelector('.deposit-percent'),

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
// console.log(targetMonthValue);





const AppData = function () {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.expensesMonth = 0;
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
};

AppData.prototype.start = function () {
  if (salaryAmount.value === '') {
    document.getElementById('start').disabled = true;
  } else {
    document.getElementById('start').disabled = false;
  }
  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getInfoDeposit();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
};

AppData.prototype.showResult = function () {
  budgetMonthValue.value = this.budgetMonth; // Доход за месяц = appData.budgetMonth;
  budgetDayValue.value = Math.round(this.budgetDay); // Дневной бюджет = appData.budgetDay;
  expensesMonthValue.value = this.expensesMonth; // Расход за месяц = appData.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', '); // Возможные расходы = appData.addExpenses;
  additionalIncomeValue.value = this.addIncome.join(', '); // Возможные доходы = appData.addIncome;
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  // Срок достижения цели в месяцах = appData.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod(); // Накопления за период = appData.calcPeriod();
  incomePeriodValue.value = periodSelect.value * this.budgetMonth;
  // Накопления за период = Период расчета * appData.budgetMonth;
};

AppData.prototype.getExpenses = function () {
  expensesItems.forEach((item) => {
    let itemExpenses = item.querySelector('.expenses-title').value; // Обязательные расходы => Наименование;
    let cashExpenses = item.querySelector('.expenses-amount').value; // Обязательные расходы => Сумма;
    if (itemExpenses !== '' && cashExpenses !== '') {
      this.expenses[itemExpenses] = cashExpenses;
    }
  });
};

AppData.prototype.getIncome = function () {
  incomeItems.forEach((item) => {
    let itemIncome = item.querySelector('.income-title').value; // Дополнительный доход => Наименование;
    let cashIncome = item.querySelector('.income-amount').value; // Дополнительный доход => Сумма;
    if (itemIncome !== '' && cashIncome !== '') {
      this.income[itemIncome] = cashIncome;
    }
  });
  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};

AppData.prototype.getAddExpenses = function () {
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach((item) => {
    item = item.trim();
    if (item !== '') {
      this.addExpenses.push(item);
    }
  });
};

AppData.prototype.getAddIncome = function () {
  additionalincomeItems.forEach((item) => {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      this.addIncome.push(itemValue);
    }
  });
};

AppData.prototype.getExpensesMonth = function () {
  for (let key in appData.expenses) {
    console.log(this);
    this.expensesMonth += +this.expenses[key];
  }
};

AppData.prototype.getBudget = function () {
  this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12);
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function () {
  return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    do {
      this.percentDeposit = depositPercent.value;
    } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);
    do {
      this.moneyDeposit = depositAmount.value;
    }
    while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);

  }
};

AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};




// appData.start();

// incomePlus.addEventListener('click', appData.addIncomeBlock);


let eventFunc = function (event) {
  console.log(event.type);
  console.log(event.target.value);
};



let cancel = document.querySelector('#cancel');
cancel.style.display = 'none';
cancel.addEventListener('click', function () {
  window.location.reload();
});
// start.addEventListener('click', appData.start);




function loc() {
  let fields = document.querySelectorAll('input[type=text]');
  fields.forEach(function (item) {
    item.setAttribute('disabled', 'disabled');
  });
}




AppData.prototype.AddExpensesBlock = function (items, classItems, btnPlus) {
  let cloneIncomeItem = items[0].cloneNode(true);
  items[0].parentNode.insertBefore(cloneIncomeItem, btnPlus);
  items = document.querySelectorAll(classItems);
  if (items.length === 3) {
    btnPlus.style.display = 'none';
  }
};

// Метод, куда закидываем все события из нашей программы
AppData.prototype.eventsListeners = function () {
  start.addEventListener('click', function () {
    appData.start.bind(appData);
    start.style.display = 'none';
    cancel.style.display = 'block';
    appData.start();
    loc();
  });

  salaryAmount.addEventListener('input', () => {
    this.start();
  });

  incomePlus.addEventListener('click', () => {
    this.AddExpensesBlock(incomeItems, '.income-items', incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
  });

  expensesPlus.addEventListener('click', () => {
    this.AddExpensesBlock(expensesItems, '.expenses-items', expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
  });

  depositCheck.addEventListener('change', () => {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = 'true';
      depositBank.addEventListener('change', function () {
        let selectIndex = this.options[this.selectedIndex].value;
        if (selectIndex === 'other') {
          depositPercent.style.display = 'inline-block';
          depositPercent.value = '';
        } else {
          depositPercent.style.display = 'none';
          depositPercent.value = selectIndex;
        }
      });
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositAmount.value = '';
      this.deposit = 'false';
    }
  });

  document.querySelector('.period-select').addEventListener('change', function () {
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.innerHTML = periodSelect.value;
  });
};

let appData = new AppData();
appData.eventsListeners(); //  Запускаем метод с нашими всеми событиями, тем самым даем себе возможность пользоваться программой

console.log(appData);