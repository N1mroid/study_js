let money = 25000,
    income = '10000',
    addExpenses = 'Car, Apple, imac, Turbogenerator',
    deposit = true,
    mission = 12000,
    period = 3;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(income.length);
console.log('Период ' + period + ' месяца');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log(parseInt(budgetDay));

