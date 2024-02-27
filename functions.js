/**
 * Functions == written to perfom a specific task
 *              -- can be reused whenever needed
 *  Syntax: function <function name> (parameters) {
 *              <code block>
 *          }
 * to call the function
 *      <function name>();
 */

// Function Declarations
function greet() {
  console.log("Hello, welcome to JS Functions!");
}

greet(); // Hello, welcom to JS Functions!

//parameters
function greeting(name) {
  console.log("Hello " + name + "!"); //Hello Chap!
}

greeting("Chap");

//return statement
function add(num1, num2) {
  return num1 + num2;
}

let sum = add(3, 5); // calls the function with parameters 3 and 5
console.log(sum); //8

//multiple parameters and arguments
function fullName(firstName, lastName) {
  console.log("Full name:" + firstName + " " + lastName);
}
fullName("Siti", "Safiah"); // Full name: Siti Safiah

//Function Expressions
let square = function (x) {
  return x * x;
};
console.log(square(4)); //16

//Function Hoisting -only works for function declaration, not expressions
meet();

function meet() {
  console.log("Hey!");
}

//example of function expression: -returns reference error
//  let meet = function() {
//   console.log("Hey!");
//  }

//Anonymous Function - function without a name
let anon = function () {
  console.log("This is an anonymous function");
};

anon(); //This is an anonymous function

// == VARIABLE SCOPES == //
//Global Scope - variables are accessible from anywhere in your code 
//Local Scope - variables are only accessible within a function or block

// let globalVar = 'I am a global variable.';
// function accessVar () {
//     console.log(globalVar);
// };
// accessVar();

function accessVar(){
    let localVar = 'I am a local variable,';
    console.log(localVar);
}

accessVar();
//console.log(localVar); //returns an error because localVar cannot be accessed 

// == Nested Functions == //
function outerFunction() {
    let outerVar = 'I am from the outer function.';

    function innerFunction() {
        console.log(outerVar); //this function can access variables from outer function

    };

    innerFunction();

};
outerFunction(); //I am from the outer function

// == Higher Order Functions (HDF) == // 
/**
 * 1. Take functions as arguments
 * 2. Return a function or perform operation on functions
 *  */ 

//Function as an argument
function fName(name) {
    console.log("Hi " + name);
}

function sayHi (greetingFunction) {
    greetingFunction("Alice");
}

sayHi(fName); //Hi Alice 

function applyOperation (x,y, operation){
    return operation(x,y);
}

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

let result1 = applyOperation(4, 3, add); 
let result2 = applyOperation(6, 3, substract); 

console.log(result1);  //7
console.log(result2);  //3

//Function as a Return Value
function multiply(factor) {
    return function(x) {
        return x * factor;
    }
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(5)); //10
console.log(triple(5)); //15

// == Callback functions == //
// function is passed as an argument to another function and executed after some operation is completed (invoked inside the function)

function greet2(myName, callback) {
    console.log("Hello " + myName);
    callback();
};

function sayGoodBye() {
    console.log("Goodbye");
}

greet2("Mat", sayGoodBye);  // Hello Mat
                            // Goodbye
