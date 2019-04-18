'use strict';

let btnStart = document.querySelector('#start'),
    valueBuget = document.querySelector(".budget-value"),
    valueDaybudget = document.querySelector(".daybudget-value"),
    valueLevel = document.querySelector(".level-value"),
    valueExpenses = document.querySelector(".expenses-value"),
    valueOptionalExpenses = document.querySelector(".optionalexpenses-value"),
    valueIncome = document.querySelector(".income-value"),
    valueMonthsavings = document.querySelector(".monthsavings-value"),
    valueYearsavings = document.querySelector(".yearsavings-value"),
    inputItemsExpenses = document.getElementsByClassName('expenses-item'),
    btnToAppeove1 = document.getElementsByTagName("button")[0],
    btnToAppeove2 = document.getElementsByTagName("button")[1],
    btnToCalc = document.getElementsByTagName("button")[2],
    chooseIncome = document.querySelector(".choose-income"),
    savingsChoose = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    inputOptionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    money, time, sumExpenses = 0;
//////////////////////
btnStart.addEventListener('click', function () {
    time = prompt("Enter the date in the format YYYY-MM-DD", "");
    let reg  = /\d\d\d\d\-\d\d\-\d\d/;
    while(reg.test(time) != true ){
        time = prompt("Enter the date in the format YYYY-MM-DD", "");
    }
    money = +prompt("Your budget for the month?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget for the month?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    valueBuget.textContent = appData.budget.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


btnToAppeove1.addEventListener('click', function () {
    if (appData.budget != undefined) {
        for (let i = 0; i < inputItemsExpenses.length; i++) {
            let expQuestion1 = inputItemsExpenses[i].value,
                expQuestion2 = inputItemsExpenses[++i].value;

            if ((typeof (expQuestion1)) === 'string' && (typeof (expQuestion1)) != null && (typeof (expQuestion2)) !=
                null && expQuestion1 != '' && expQuestion2 != '' && expQuestion1.length < 50) {
                appData.expenses[expQuestion1] = expQuestion2;
                sumExpenses += +expQuestion2;
            } else {
                i--;
            }
        }
        valueExpenses.textContent = sumExpenses;
    }
});

btnToAppeove2.addEventListener('click', function () {
    if (appData.budget != undefined) {
        for (let i = 0; i < inputOptionalExpensesItem.length; i++) {
            let a = inputOptionalExpensesItem[i].value;
            appData.optionalExpenses[i] = a;
            if (i === inputOptionalExpensesItem.length - 1) {
                valueOptionalExpenses.textContent += appData.optionalExpenses[i];
            } else {
                valueOptionalExpenses.textContent += appData.optionalExpenses[i] + ", ";
            }
        }
    }
});

btnToCalc.addEventListener('click', function () {
    if (appData.budget != undefined) {
        if (sumExpenses != undefined) {
            appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
        } else {
            appData.moneyPerDay = (appData.budget / 30).toFixed();

        }
        valueDaybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            valueLevel.textContent = "Minimum level of affluence!";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            valueLevel.textContent = "Midel level of affluence!";
        } else if (appData.moneyPerDay >= 2000) {
            valueLevel.textContent = "High level of affluence!";
        } else {
            valueLevel.textContent = "Error";
        }
    } else {
        valueDaybudget.textContent = "Error";
    }
});

chooseIncome.addEventListener("input", function () {
    let items = chooseIncome.value;
    appData.income = items.split(",");
    valueIncome.textContent = appData.income;
});

savingsChoose.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let save = chooseSum.value,
            precent = choosePercent.value;

        appData.monthIncome = save / 100 / 12 * precent;
        appData.yearIncome = save / 100 * precent;
        valueMonthsavings.textContent = appData.monthIncome.toFixed(1);
        valueYearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function () {

    if (appData.savings == true) {
        let save = chooseSum.value,
            precent = choosePercent.value;

        appData.monthIncome = save / 100 / 12 * precent;
        appData.yearIncome = save / 100 * precent;
        valueMonthsavings.textContent = appData.monthIncome.toFixed(1);
        valueYearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};