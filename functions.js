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

let sum = add(3,5); // calls the function with parameters 3 and 5
console.log(sum); //8

//multiple parameters and arguments
function fullName (firstName, lastName) {
    console.log("Full name:" + firstName + " " + lastName);
}
fullName('Siti', 'Safiah'); // Full name: Siti Safiah

//Function Expressions
let square = function(x) {
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
