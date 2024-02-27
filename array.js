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

//unshift() --add an item from the front of the array
fruits.unshift('Corn');
console.log(fruits); // ['Corn', 'Grapes', 'Orange', 'Mango']

//splice() -- remove/add item at any index
    //array.splice(<target index>, <no of items to remove>, <insert item>)
fruits.splice(2,1, 'Watermelon'); //starting from index[2], remove 1 element, add 'Watermelon'
console.log(fruits); // ['Corn', 'Grapes', 'Watermelon', 'Mango']

let colors = ['Red', 'Green', 'Blue'];
//remove 2nd item
colors.splice(1,1);
console.log(colors); //['Red', 'Blue']

//insert 'Purple' at index[1]
colors.splice(1,0,'Purple');
console.log(colors); //['Red', 'Purple', 'Blue']

//slice() -- return shallow copy of a portion of an array into a new array object 
//new array containing elements from index[1](inclusive) to index[2](exclusive)
    //array.slice(<starting index-index of first item to include(inclusive)>, <ending index - index of the item after the last item to include(exclusive)>)
let slicedFruits = fruits.slice(1,3); //starting at index 1, ending before index 3
console.log(slicedFruits); //['Grapes', 'Watermelon']

//length -- used to get the size of an array
let numberOfFruits = fruits.length;
console.log(numberOfFruits); //4
console.log(slicedFruits.length); //2

//indexOf -- used to find and return index of an item in an array
let index = fruits.indexOf('Watermelon');
console.log(index); //2

