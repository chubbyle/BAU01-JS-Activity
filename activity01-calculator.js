/**
 *  Create a simple calculator in JS
 * Need 3 inputs: an operator (+,-,*,/) and 2 numbers
 * Display result in the console
 **/

//Solution using IF, ELSE IF, ELSE statement.

let firstNumber = prompt("What is your first number?");
firstNumber = Number(firstNumber);
let operator = prompt("Please choose an operator ( +, -, *, or /");
let secondNumber = prompt("What is your second number?");
secondNumber = Number(secondNumber);

function calculate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    console.log(firstNumber + secondNumber);
  } else if (operator == "-") {
    console.log(firstNumber - secondNumber);
  } else if (operator == "*") {
    console.log(firstNumber * secondNumber);
  } else {
    console.log(firstNumber / secondNumber);
  }
}

calculate(firstNumber, operator, secondNumber);
