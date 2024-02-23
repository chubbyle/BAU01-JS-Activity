//JS Expressions

//Arithmetic Expressions
let result = 5 + 3 * 2 ;
console.log(result); // 11

//String Expressions - concationation operator +
console.log("Hello " + "World!");

let message = "Hello" + " " + "World";
console.log(message);

//Logical Expressions - boolean 
let a = 7;
let b = 5;

console.log ((a > 5) && (b < 10));

//Assignment expression - use == to assign a value to a variable
let x = 10;
let y = 5;
x = x+y; //update value of x by adding y
console.log(x);

//Function Call Expression

//funtion definition
function greet(name){
    return "Hi! I am " + name + "!";
}

//function call
let intro = greet("Joseph");
console.log(intro);

