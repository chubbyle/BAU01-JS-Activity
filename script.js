// VARIABLES

const myName = "Safiah";
let myAge = 39;

// OUTPUT using console.log
console.log(myName);
console.log(myAge);

/*
Multi-line
Comment
*/

//*** DATA TYPES ***//

/* Primitive Data Type - most basic data types in JS */

//Number
const myNum = 25;
let myNum2 = 98.8;

console.log("This is number: ", myNum, myNum2);

//String
let firstName = "Jane";
console.log("This is a string: ", firstName);

//Boolean = True or False
let isStudent = true;
console.log("This is a Booelan:", isStudent);

//Undefined - uninitialized or missing value
let myUndefinedVar = undefined;
console.log(myUndefinedVar);

//Null - Intentional absence or empty value
const myNull = null;
console.log(myNull);

/* Reference Data Types - holds more complex data types */

//Object - represents a collection of key-value pairs enclosed in { }
let person = {
    name: "Jon",
    age: 30,
    city: "New York"
}
console.log(person);

//Array - represents unordered list of values enclosed in []
let numbers = [1, 2, 3, 4,];

console.log(numbers);

//Functions - represents reusable blocks of code that can be invoked by name
function greet(name){
    console.log("Hello " + name );
}
greet("Alice");

//Date
const today= new Date();
console.log(today);


