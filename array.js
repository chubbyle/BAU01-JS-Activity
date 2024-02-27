/**
 * Array == a special variable that can hold more than one value at a time
 * 
 * index - each item in an array is stored
 *      --always start at index[0]
 * 
 * in Terminal, type node filename.js
 */

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

//empty array
let emptyArray = [];

//array of mixed values
let mixedArray = ['Tiger', true, 12, 3.25];

console.log(fruits[0]); //Apple
console.log(fruits[2]); //Orange

// == Modifying Elements ==

//updating index
fruits[1] = 'Grapes';
console.log(fruits); // ['Apple', 'Grapes', 'Orange', 'Mango']

//push() -- add one or more elements at the end of an array
fruits.push('Lemon');
console.log(fruits); // ['Apple', 'Grapes', 'Orange', 'Mango', 'Lemon']

//pop() -- remove the last element from an array
fruits.pop();
console.log(fruits); // ['Apple', 'Grapes', 'Orange', 'Mango']

//shift() -- remove the first element of an array
fruits.shift();
console.log(fruits); // ['Grapes', 'Orange', 'Mango']

