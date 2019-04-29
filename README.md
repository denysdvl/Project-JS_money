###This is my mini-project Calculation of daily budget<h2>
        
In this project I wrote logic on pure JavaScript 

To start the calculation, you have to press the start button.

In this callback function we set the date and budget for the month and 
check the correctness of the data. I have implemented the date check 
through regular expressions and until the expressions are true the 
call will be repeated, if the user is not a fool and everything is 
entered correctly then the data will be written into the appropriate fields 

```javascript
let reg = /\d\d\d\d\-\d\d\-\d\d/;
    while (reg.test(time) != true) {
        time = prompt("Enter the date in the format YYYY-MM-DD", "");
    }
```

Further the user can enter the data of obligatory expenses,
but if it has not executed the previous point we will block to it button Approve

```javascript
if (appData.budget != undefined) {
        ...
    }
```

There is also a check of the data entered by the user 

```javascript
if ((typeof (expQuestion1)) === 'string' && (typeof (expQuestion1)) != null && (typeof (expQuestion2)) !=
                null && expQuestion1 != '' && expQuestion2 != '' && expQuestion1.length < 50)
```

There are also fields for optional costs, the number of these fields can be different with JavaScript 
do not need to be changed, the data we write in the object and display in the line 

```javascript
 if (i === inputOptionalExpensesItem.length - 1) {
                valueOptionalExpenses.textContent += appData.optionalExpenses[i];
            } else {
                valueOptionalExpenses.textContent += appData.optionalExpenses[i] + ", ";
            }
```

The Day Budget Calculation Button is a simple calculator
that calculates our day budget with mandatory expenses if there are such 

```javascript
if (sumExpenses != undefined) {
            appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
        } else {
            appData.moneyPerDay = (appData.budget / 30).toFixed();

        }
```

If our user has savings, he can add them just by
clicking on the checkbox and entering the data, the 
work of this part of the script is very simple 

Evaluate the design you can watch the demo.
https://denysdvl.github.io/Project-JS_money/


