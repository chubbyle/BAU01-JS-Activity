/**
 *  ARROW FUNCTION
 * 
 */

//old way of writing function
function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Princess');

//new way
const greeting = (name1) => console.log('Hello ' + name1);

greeting('Jared');

// arrow  function w 2 or more parameters
const sum = ()