//JS Operator
/*
Arithmetic Operator
    [+], [-], [*], [/]
*/

let num1 = 21;
let num2 = 10;
//Addition
let sum = num1 + num2;
console.log("Sum is: ", sum);

//Substraction
let difference = num1 - num2;
console.log("Difference is: ", difference);

//Multiplication
let product = num1 * num2;
console.log("Product is: ", product);

// Division
let quotient = num1 + num2;
console.log("Quotient is: ", quotient);

//Modular
let mod = num1 % num2;
console.log("Remainder is: ", mod);

/**
 * Assignment Operator
 * (=), (+=), (-=), (*=), (/=)
 */

//Equals (=)
let equals = "this value";
console.log(equals);

// Addition Assignment (+=)
let a = 5;
a += 5; //a = a+5
console.log(a);

//Subtraction Assignment (-=)
let b = 5;
b -= 5; //a = a+5
console.log(b);

//Multiplication Assignment (*=)
let c = 5;
c *= 5; //a = a+5
console.log(c);

//Division Assignment (/=)
let d = 5;
d /= 5; //a = a+5
console.log(d);

/**
 * Comparison Operators  - returns Boolean values  (true or false)
 * Greater than [ > ]
 * Less than [ < ]
 * Less than or equal to [ <= ]
 * Greater than or equal to [ >= ]
 * Equal to  [ == ] --> loose equality, checks if it has the same value; disregard data types
 * Strict equal to [ === ]
 * Not equal to [ != ]
 *
 */

//Greater than
console.log(9 > 10); //false
console.log(10 < 20); //true
console.log(15 <= 30); //true
console.log(20 >= 50); //false
console.log("5" === 5); //false
console.log("5" == 5); //true
console.log (20 != 20); //false

/**
 * Logical Operatord -- combine boolean values and logical operators to evaluate conditions
 * AND [ && ], OR [ || ], NOT [ ! ]
 */

//AND [ && ] - returns TRUE if BOTH conditions are true
console.log("AND (&&): ", true && false); //false

//OR [ || ] - returns TRUE if at least one condition is true
console.log("OR (||) ", false || true); //true


//NOT [ ! ] - reverses the boolean value
console.log("NOT (!) ", !true); //false

/**
 * Unary Operators
 * increment (++) and decrement (--) 
 */

let x = 10;
x++; //x+1
console.log(x); //10+1

x--; //x-1 
console.log(x); //11-1

/**
 * Ternary Operator - simple conditional statement in a single line; takes 3 operands and returns a value based on a condition
 * 
 * condition ? expression if true : expression if false
 */
let age = 20;
let message = (age >= 18) ? "You are of legal age" : "You are a minor" ;
console.log(message); //You are of legal age

/**
 * typeOf  operator
 */
let randomString = "1 2 3 4 5";
let randomNumber = 34;

console.log(typeof randomString); //string
console.log(typeof randomNumber); //number

