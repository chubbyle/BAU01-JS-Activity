//Exercise 1: Function Expression
//  create a function expression named add that takes 2 numbers as parameters and return their sum. call the function to add the 2 numbers, then log the result.

let resultAdd = function add(num1, num2){
    return num1 + num2;
}

console.log(resultAdd(7,5));      //12
console.log(resultAdd(0,98));      //98



//Exercise 2: Find Max
//  declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array. call the findMax function with your array of numbers and log the result in the console.

function findMax(arr) {
    return Math.max(...arr);
}

let numbers = [5 ,7, 23, 147, 68, 39, 55];
let max = findMax(numbers);

console.log("Maximum value in array: " + max);



//Exercise 3: Higher-Order Function
//  create a higher-order function called mathOperation that takes 2 numbers and a callback function as parameters. the callback function should perform a mathematical operation. use this higher-order function to add, substract, multiply and divide 2 numbers

function mathOperation(a, b, callback){
    return callback(a, b);
}

function add(a, b){
    return a + b;
}

function substract(a,b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (b != 0){
        return a/b;
    }  else {
        return 'Operation not valid';
    }
}

let result1 = mathOperation(25, 75, add);
let result2 = mathOperation(55, 11, substract);
let result3 = mathOperation(8, 7, multiply);
let result4 = mathOperation(100, 4, divide);
let result5 = mathOperation(500, 0, divide);

console.log("Result1: " + result1);
console.log("Result2: " + result2);
console.log("Result3: " + result3);
console.log("Result4: " + result4);
console.log("Result5: " + result5);



//Exercise 4: Function as a Parameter
//  write a function called applyfunction that takes a function and an array as parameters. it should apply the given function to each element of the array and return a new array with the results.

function applyFunction (isHappy, array){
    return 0;
}



//Exercise 5: Callback Functions
//   create a function getUserData that simulates fetching user data from a server. it should except a callback function as a parameter. call the callback function with a user object once the data is retrieved.
