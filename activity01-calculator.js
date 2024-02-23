/**
 *  Create a simple calculator in JS
 * Need 3 inputs: an operator (+,-,*,/) and 2 numbers
 * Display result in the console
 **/

//Solution using IF, ELSE IF, ELSE statement.

let firstNumber = prompt("What is your first number?");
firstNumber = Number(firstNumber);
let operator = prompt("Please choose an operator ( +, -, *, or /)");
let secondNumber = prompt("What is your second number?");
secondNumber = Number(secondNumber);

function calculate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    console.log(firstNumber + secondNumber);
  } else if (operator == "-") {
    console.log(firstNumber - secondNumber);
  } else if (operator == "*") {
    console.log(firstNumber * secondNumber);
  } else if (operator == "/" && secondNumber != 0) {
    console.log(firstNumber / secondNumber);
  } else {
    console.log("Not a valid calculation. Please refresh the page to retry.");
  }
}

calculate(firstNumber, operator, secondNumber);

//Solution using SWITCH.CASE

// let num1 = prompt("Please enter a number");
// num1 = Number(num1);
// let num2 = prompt("Please enter a second number");
// num2 = Number(num2);
// let operand = prompt(
//   "Please enter the operand to be used for calculation ( + . - , * , / )"
// );

// function calculator(num1, num2, operand) {
//   let result;
//   switch (operand) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 != 0) {
//         result = num1 / num2;
//       } else {
//         return "Error: Division by zero is not allowed.";
//       }
//       break;
//     default:
//       return "Error: Invalid operand.";
//   }
//   return result;
// }

// console.log(calculator(num1, num2, operand));
