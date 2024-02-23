/**
 * Conditional Statements -- allows us to make decisions in our code based on certain condition
 */

//IF statement -- 
if(age >= 18) {
    vote();
}

//IF,ELSE
let age = 15;
if (age >= 18) {
    console.log("You can now vote");
} else {
    console.log("You can't vote");
}

//IF, ELSE, ELSE IF 
//let temp = 25;


/* SWITCH.CASE statement
3 keywords:
    case: keyword for starting a case block;
    break: keyword for stopping the switch statement from running the next block
    default: keyword for running a code when there's mp matching case found
*/

let day = 'Monday';

switch(day) {
    case 'Monday':
        console.log("It's Monday! Start of the week");
        break;
    case 'Friday':
        console.log("It's a Friday! End of week");
        break;
    default:
        console.log("It's a regular day");
        break;
}

