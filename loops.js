/**
 * JS Loops - allows us to repeat a set of instructions multiple times
 */

//FOR loop
// for([initialization] ; [condition]; [aritmetic expression]) {
//code that will be executed as long as the conditon is true.
//  }

for (let x = 0; x < 10; x++) {
  console.log(x);
  console.log("Current value of x: ", x);
}

//WHILE Loops
// while(condition) { code block}
let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

let myNum = 1;
while (myNum <= 5) {
  console.log("Count: ", myNum);
  myNum++;
}

//DO-WHILE
let j = 1;
do {
  console.log("Do-while count: ", j);
  j++;
} while (j <= 5);
